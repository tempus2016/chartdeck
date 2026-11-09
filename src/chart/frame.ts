import { css, html, nothing, svg } from 'lit';
import type { SVGTemplateResult, TemplateResult } from 'lit';
import { baseColor } from '../bands';
import { parsePeriod, periodRange, setSteps, stepsFor } from '../history/period';
import type { Period } from '../history/period';
import { key } from '../history/fetch';
import { PERIOD_MS, groupHistory, groupStatistics, parseGrouping, statisticsQueryFor } from '../history/group';
import type { Aggregate, Grouping } from '../history/group';
import { pauseStore, storeFor } from '../history/store';
import { boundaries, startOf, wallTime, zoneFor } from '../history/timezone';
import type { Zone } from '../history/timezone';
import type { Point, Range, Source } from '../history/types';
import { localize } from '../localize';
import type { ResolvedEntity } from '../resolve';
import type { ChartContext } from '../styles/index';
import type { CardConfig } from '../types';
import { convertPoints } from '../units';
import { CURVES } from './paths';
import type { Curve } from './paths';

/** The drawing's coordinate box. The SVG stretches to the card's width; strokes don't scale. */
export const VIEW_W = 1000;
export const VIEW_H = 200;

/** Series colours in order, for entities without their own `color`. */
export const SERIES_COLORS = ['primary', 'amber', 'green', 'purple', 'red', '#14b8a6', '#ec4899', 'grey'];

export const SOURCES: Source[] = ['history', 'statistics'];

/** One entity ready to draw: its points, colour and per-series options. */
export interface ChartSeries {
  index: number;
  entity: ResolvedEntity;
  points: Point[];
  color: string;
  curve: Curve;
  dash: boolean;
}

export interface HistoryFrame {
  status: 'loading' | 'ready' | 'error';
  error?: string;
  range: Range;
  period: Period;
  source: Source;
  series: ChartSeries[];
  /** The range reaches the present (false for an offset or a span stepped back to). */
  live: boolean;
  /** Spans back from the present: the card's offset plus steps taken with the buttons. */
  back: number;
  /** The time zone and first weekday calendar spans follow. */
  zone: Zone;
  /** Set when readings are grouped: each point is then one group, from `t` to `end`. */
  group?: Grouping;
}

/** Checks for the options every history chart shares. */
export function validateHistoryOptions(raw: CardConfig): void {
  parsePeriod(raw.period as CardConfig['period']);
  parseGrouping(raw);
  if (raw.source !== undefined && !SOURCES.includes(raw.source as Source)) {
    throw new Error(`"source" must be one of: ${SOURCES.join(', ')}`);
  }
  const curves = [raw.curve, ...(raw.entities ?? []).map((e) => (typeof e === 'object' ? e.curve : undefined))];
  for (const curve of curves) {
    if (curve !== undefined && !CURVES.includes(curve as Curve)) {
      throw new Error(`"curve" must be one of: ${CURVES.join(', ')}`);
    }
  }
}

/** What a chart asks of its history beyond the readings. */
export interface FrameOptions {
  /** Keep each group's lowest and highest (`min`, `max` on its point), for range charts. */
  range?: boolean;
  /**
   * How to combine one series' grouped history, when it differs from the card's (a meter's change
   * beside a temperature's average). Statistics load one column for every series, so they use
   * the card's.
   */
  aggregate?: (entity: ResolvedEntity) => Aggregate | undefined;
  /** Keep each state's words (`Point.s`) instead of reading numbers, for charts of states like "on" or "heat". */
  text?: boolean;
}

/** Load (or reuse) the card's history and pair it with its entities. */
export function historyFrame(ctx: ChartContext, now = Date.now(), options: FrameOptions = {}): HistoryFrame {
  const period = parsePeriod(ctx.raw.period as CardConfig['period']);
  const source: Source = (ctx.raw.source as Source | undefined) ?? 'history';
  const zone = zoneFor(ctx.hass);
  const span = periodRange(period, now, zone, period.navigate ? stepsFor(ctx.host, period) : 0);
  const group = parseGrouping(ctx.raw);
  // Grouped, the chart starts where its first group does: the last 7 days by day from midnight.
  const range: Range = { start: group ? startOf(group.unit, span.start, zone) : span.start, end: span.end };
  const requests = ctx.items.map((e) => ({
    entity: e.entityId,
    attribute: e.config.attribute,
    ...(options.text ? { text: true } : {}),
  }));
  const store = storeFor(ctx.host, ctx.requestUpdate);
  const statistics =
    group && source === 'statistics'
      ? statisticsQueryFor(group, zone, ctx.hass.config?.time_zone, options.range === true)
      : undefined;
  // Statistics groups load from one row early: the row before a group gives its `first`.
  const load = statistics ? { start: range.start - PERIOD_MS[statistics.period], end: range.end } : range;
  const loaded = store.get(ctx.hass, requests, load, source, { live: span.live, statistics });
  const bounds = group ? boundaries(group.unit, range.start, range.end, zone) : [];
  const cardCurve = (ctx.raw.curve as Curve | undefined) ?? 'smooth';
  // Readings stop at the present, even when the span runs on to the end of today.
  const until = Math.min(range.end, now);
  const series = ctx.items.map((entity, index): ChartSeries => {
    const own = entity.config as typeof entity.config & { color?: string; curve?: Curve; dash?: boolean };
    let points = loaded.data.get(key(requests[index])) ?? [];
    points = convertPoints(points, entity.conversion);
    const last = points[points.length - 1];
    if (group) {
      points =
        source === 'statistics'
          ? groupStatistics(points, bounds, group.aggregate, until, options.range === true)
          : groupHistory(points, bounds, options.aggregate?.(entity) ?? group.aggregate, until, options.range === true);
    } else if (source === 'history' && last && last.v !== null && last.t < until) {
      // A sensor holds its last reading until it changes, so carry it on to the right edge.
      points = [...points, { t: until, v: last.v }];
    }
    return {
      index,
      entity,
      points,
      color: baseColor(own.color ?? SERIES_COLORS[index % SERIES_COLORS.length]),
      curve: own.curve ?? cardCurve,
      dash: own.dash === true,
    };
  });
  return {
    status: loaded.status,
    error: loaded.error,
    range,
    period,
    source,
    series,
    live: span.live,
    back: span.back,
    zone,
    group,
  };
}

const plural = (n: number, one: string, many: string) => (n === 1 ? one : many);

/**
 * What a span is called: "Today", "Last week", "Last 24 hours", or its dates once it is further
 * back than the words reach ("Tue 20 Oct", "September 2025", "20 – 26 Oct").
 */
export function periodLabel(
  period: Period,
  range: Range,
  back: number,
  zone: Zone,
  hass: ChartContext['hass'],
): string {
  const t = (k: string, vars?: Record<string, number>) => localize(hass, k, vars);
  const named: Record<string, [string, string]> = {
    day: ['period_today', 'period_yesterday'],
    week: ['period_this_week', 'period_last_week'],
    month: ['period_this_month', 'period_last_month'],
    year: ['period_this_year', 'period_last_year'],
  };
  if (period.calendar && back < 2) return t(named[period.calendar][back]);
  if (!period.calendar && back === 0) {
    const n = period.last;
    const k = {
      hour: plural(n, 'period_last_hour', 'period_last_hours'),
      day: plural(n, 'period_last_day', 'period_last_days'),
      week: plural(n, 'period_last_week_rolling', 'period_last_weeks'),
      month: plural(n, 'period_last_month_rolling', 'period_last_months'),
    }[period.unit];
    return t(k, { n });
  }
  const options: Intl.DateTimeFormatOptions = { timeZone: zone.timeZone };
  const sameYear = wallTime(range.start, zone.timeZone).year === wallTime(Date.now(), zone.timeZone).year;
  if (period.calendar === 'year') options.year = 'numeric';
  else if (period.calendar === 'month') Object.assign(options, { month: 'long', year: 'numeric' });
  else {
    Object.assign(options, { day: 'numeric', month: 'short' });
    if (!sameYear) options.year = 'numeric';
    if (period.calendar === 'day') options.weekday = 'short';
    if (!period.calendar && (period.unit === 'hour' || period.unit === 'day')) {
      Object.assign(options, { hour: 'numeric', minute: '2-digit' });
    }
  }
  let format: Intl.DateTimeFormat;
  try {
    format = new Intl.DateTimeFormat(hass?.locale?.language ?? hass?.language ?? 'en', options);
  } catch {
    format = new Intl.DateTimeFormat('en', options);
  }
  // A calendar span ends where the next begins: name its last moment, not the next day.
  const end = period.calendar ? range.end - 1 : range.end;
  if (period.calendar === 'day' || period.calendar === 'month' || period.calendar === 'year') {
    return format.format(range.start);
  }
  return format.formatRange(range.start, end);
}

const CHEVRON_LEFT = 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z';
const CHEVRON_RIGHT = 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z';

/**
 * Previous / next buttons and the span's name, when the card asks for them (`period.navigate`).
 * Steps are kept on the card, not in its config; a third button returns to the card's own span.
 */
export function periodNav(frame: HistoryFrame, ctx: ChartContext, now = Date.now()): TemplateResult | typeof nothing {
  const { period } = frame;
  if (!period.navigate) return nothing;
  const steps = stepsFor(ctx.host, period);
  const go = (n: number) => (ev: Event) => {
    ev.stopPropagation();
    setSteps(ctx.host, period, n);
    ctx.requestUpdate();
  };
  const label = periodLabel(period, frame.range, frame.back, frame.zone, ctx.hass);
  let home = '';
  if (steps !== 0) {
    const own = periodRange(period, now, frame.zone);
    home = periodLabel(period, own, own.back, frame.zone, ctx.hass);
  }
  const icon = (d: string) => html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d=${d}></path></svg>`;
  return html`<div class="period-nav">
    <button class="period-step period-prev" aria-label=${localize(ctx.hass, 'period_previous')} @click=${go(steps + 1)}>
      ${icon(CHEVRON_LEFT)}
    </button>
    <span class="period-label" aria-live="polite">${label}</span>
    <button
      class="period-step period-next"
      aria-label=${localize(ctx.hass, 'period_next')}
      ?disabled=${frame.back === 0}
      @click=${go(steps - 1)}
    >
      ${icon(CHEVRON_RIGHT)}
    </button>
    ${
      steps !== 0
        ? html`<button
            class="period-return"
            aria-label=${localize(ctx.hass, 'period_return', { label: home })}
            @click=${go(0)}
          >
            ${home}
          </button>`
        : nothing
    }
  </div>`;
}

const periodNavStyles = css`
  .period-nav {
    display: flex;
    align-items: center;
    gap: 4px;
    padding-bottom: 4px;
    min-width: 0;
  }
  .period-label {
    font-weight: 500;
    font-size: 0.875em;
    padding: 0 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }
  .period-nav button {
    font: inherit;
    color: var(--primary-text-color);
    background: none;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    flex: none;
  }
  .period-step {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
  }
  .period-step svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  .period-step:disabled {
    opacity: 0.35;
    cursor: default;
  }
  .period-nav button:not(:disabled):hover {
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
  .period-nav button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }
  .period-nav .period-return {
    margin-left: auto;
    padding: 4px 12px;
    font-size: 0.8125em;
    color: var(--primary-color);
    border: 1px solid color-mix(in srgb, var(--primary-color) 40%, transparent);
    white-space: nowrap;
  }
`;

/** Pause a card's history when it leaves the page; it carries on (or reloads) when it returns. */
export function disconnectHistory(host: HTMLElement): void {
  pauseStore(host);
}

/** The row above the chart: each series' colour, name and current value; tapping one opens it. */
export function seriesHeader(frame: HistoryFrame, ctx: ChartContext): TemplateResult | typeof nothing {
  const { show } = ctx.config;
  if (!show.name && !show.value) return nothing;
  return html`<div class="series-header">
    ${frame.series.map(
      (s) =>
        html`<div class="entity series-item" data-index=${s.index} tabindex="0" aria-label=${s.entity.label}>
          <span class="swatch" style="background:${s.color}"></span>
          ${show.name ? html`<span class="series-name">${s.entity.name}</span>` : nothing}
          ${show.value ? html`<span class="series-value">${s.entity.display}</span>` : nothing}
        </div>`,
    )}
  </div>`;
}

/** Loading, error and empty messages, drawn where the chart would be. */
export function frameMessage(frame: HistoryFrame, ctx: ChartContext): TemplateResult | undefined {
  if (frame.status === 'loading') return html`<div class="chart-message">${localize(ctx.hass, 'chart_loading')}</div>`;
  if (frame.status === 'error') {
    return html`<div class="chart-message error">
      ${localize(ctx.hass, 'chart_error', { error: frame.error ?? '' })}
    </div>`;
  }
  if (frame.series.every((s) => s.points.every((p) => p.v === null))) {
    return html`<div class="chart-message">${localize(ctx.hass, 'chart_no_data')}</div>`;
  }
  return undefined;
}

/**
 * The stretched SVG plot area, with a clip that draws the contents in from the left and keeps
 * them inside the plot (a reading past a fixed axis end is cut off at the edge). `background`
 * (gridlines) sits behind, outside the clip, so it doesn't draw in.
 */
export function plot(
  content: SVGTemplateResult,
  label: string,
  defs: SVGTemplateResult | typeof nothing = nothing,
  background: SVGTemplateResult | typeof nothing = nothing,
) {
  return html`<svg
    class="plot"
    viewBox="0 0 ${VIEW_W} ${VIEW_H}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${label}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-2" width=${VIEW_W} height=${VIEW_H + 4}></rect>
      </clipPath>
      ${defs}
    </defs>
    ${background}
    <g clip-path="url(#cd-draw-in)">${content}</g>
  </svg>`;
}

/** Shared look for every history chart. */
export const frameStyles = css`
  ${periodNavStyles}
  .series-header {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 16px;
    padding: 4px 0 8px;
  }
  .series-item {
    display: flex;
    align-items: baseline;
    gap: 6px;
    min-width: 0;
    cursor: pointer;
    border-radius: 4px;
  }
  .series-item:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  .swatch {
    flex: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    align-self: center;
  }
  .series-name {
    color: var(--secondary-text-color);
    font-size: 0.875em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .series-value {
    font-weight: 500;
    white-space: nowrap;
  }
  .plot-wrap {
    position: relative;
    height: 180px;
  }
  .plot {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .plot path,
  .plot line {
    vector-effect: non-scaling-stroke;
  }
  .draw-in {
    transform-origin: 0 0;
    transform: scaleX(0);
    transition: transform var(--cd-duration) var(--cd-easing);
  }
  :host([ready]) .draw-in {
    transform: scaleX(1);
  }
  .chart-message {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    color: var(--secondary-text-color);
    font-size: 0.875em;
    text-align: center;
  }
  .chart-message.error {
    color: var(--error-color, #db4437);
  }
  .point-labels {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .point-label {
    position: absolute;
    transform: translate(-50%, calc(-100% - 6px));
    font-size: 10px;
    line-height: 1;
    padding: 2px 3px;
    border-radius: 3px;
    color: var(--primary-text-color);
    background: color-mix(in srgb, var(--card-background-color, #fff) 80%, transparent);
    white-space: nowrap;
  }
`;

/** A palette-name-or-CSS colour for an SVG attribute. */
export function svgColor(color: string): string {
  return baseColor(color);
}

export { svg };
