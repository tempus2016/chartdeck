import { css, html, nothing, svg } from 'lit';
import type { SVGTemplateResult, TemplateResult } from 'lit';
import { baseColor } from '../bands';
import { parsePeriod, rollingRange } from '../history/period';
import type { Period } from '../history/period';
import { key } from '../history/fetch';
import { pauseStore, storeFor } from '../history/store';
import type { Point, Range, Source } from '../history/types';
import { localize } from '../localize';
import type { ResolvedEntity } from '../resolve';
import type { ChartContext } from '../styles/index';
import type { CardConfig } from '../types';
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
}

/** Checks for the options every history chart shares. */
export function validateHistoryOptions(raw: CardConfig): void {
  parsePeriod(raw.period as CardConfig['period']);
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

/** Load (or reuse) the card's history and pair it with its entities. */
export function historyFrame(ctx: ChartContext, now = Date.now()): HistoryFrame {
  const period = parsePeriod(ctx.raw.period as CardConfig['period']);
  const source: Source = (ctx.raw.source as Source | undefined) ?? 'history';
  const range = rollingRange(period, now);
  const requests = ctx.items.map((e) => ({ entity: e.entityId, attribute: e.config.attribute }));
  const store = storeFor(ctx.host, ctx.requestUpdate);
  const loaded = store.get(ctx.hass, requests, range, source);
  const cardCurve = (ctx.raw.curve as Curve | undefined) ?? 'smooth';
  const series = ctx.items.map((entity, index): ChartSeries => {
    const own = entity.config as typeof entity.config & { color?: string; curve?: Curve; dash?: boolean };
    let points = loaded.data.get(key(requests[index])) ?? [];
    // A sensor holds its last reading until it changes, so carry it on to the right edge.
    const last = points[points.length - 1];
    if (source === 'history' && last && last.v !== null && last.t < range.end) {
      points = [...points, { t: range.end, v: last.v }];
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
  return { status: loaded.status, error: loaded.error, range, period, source, series };
}

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

/** The stretched SVG plot area, with a clip that draws the contents in from the left. */
export function plot(content: SVGTemplateResult, label: string, defs: SVGTemplateResult | typeof nothing = nothing) {
  return html`<svg
    class="plot"
    viewBox="0 0 ${VIEW_W} ${VIEW_H}"
    preserveAspectRatio="none"
    role="img"
    aria-label=${label}
  >
    <defs>
      <clipPath id="cd-draw-in">
        <rect class="draw-in" x="0" y="-10" width=${VIEW_W} height=${VIEW_H + 20}></rect>
      </clipPath>
      ${defs}
    </defs>
    <g clip-path="url(#cd-draw-in)">${content}</g>
  </svg>`;
}

/** Shared look for every history chart. */
export const frameStyles = css`
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
