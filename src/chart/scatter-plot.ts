import { css, html, nothing, svg } from 'lit';
import type { TemplateResult } from 'lit';
import { baseColor } from '../bands';
import {
  AXES_FIELDS,
  HISTORY_FIELDS,
  LAYOUT_FIELDS,
  cachedSchema,
  chartForm,
  choice,
  historySchema,
  historyVariant,
  layoutSchema,
} from '../editor/chart-editors';
import type { FieldBinding } from '../editor/schemas';
import { formatNumber, withUnit } from '../format';
import type { Point } from '../history/types';
import { localize } from '../localize';
import type { ChartContext, ChartEditorContext, EntityFields } from '../styles/index';
import type { CardConfig, HomeAssistant } from '../types';
import { AXIS_LABELS, formatDateTime, validateAxisOptions } from './axes';
import {
  SERIES_COLORS,
  VIEW_H,
  VIEW_W,
  disconnectHistory,
  frameMessage,
  frameStyles,
  historyFrame,
  periodNav,
  validateHistoryOptions,
} from './frame';
import type { ChartSeries, HistoryFrame } from './frame';
import { chartArea, gridStyles, plotAxes, plotWidth, stopChartWidth } from './grid';
import { chartFrame, chartLayout, headerOver, layoutStyles, validateLayout } from './layout';
import { FIT, clipFit, linearFit, significantDecimals } from './fit';
import type { Fit, LinearFit } from './fit';
import { extent } from './scale';
import { dotsPath } from './series-style';
import { stopHover, tooltipEnabled, tooltipStyles, validateTooltipOptions } from './tooltip';
import {
  X_RANGE_FIELDS,
  X_RANGE_SCHEMA,
  nearestPoint,
  pickHandlers,
  pickStyles,
  pickTooltip,
  pickedIndex,
  stopPick,
  validateXRange,
  valueAxes,
  xDecimals,
  xRange,
} from './xy';

/**
 * Scatter and bubble charts: one entity's readings against another's, paired in time (or against
 * time itself), drawn as dots. A bubble chart adds a third entity that sets each dot's size.
 */

export type XYKind = 'scatter' | 'bubble';

/** What goes along the bottom of a scatter chart: the first entity's readings, or time. */
export const AGAINST = ['entity', 'time'] as const;
export type Against = (typeof AGAINST)[number];

/** Dots drawn per series at most; more are thinned evenly. */
export const MAX_MARKS = 800;
/** Bubbles drawn at most: each is its own element. */
export const MAX_BUBBLES = 400;

export const DEFAULT_DOT_SIZE = 6;
export const DEFAULT_MIN_SIZE = 6;
export const DEFAULT_MAX_SIZE = 32;
const SIZE_LIMITS = [2, 80] as const;
const DOT_LIMITS = [2, 30] as const;
const JITTER_LIMITS = [0, 20] as const;

/* -------------------------------------------------------------- maths -------------------------------------------------------------- */

/** One moment where every series had a value: the time, and each series' value then. */
export interface Sample {
  t: number;
  v: number[];
}

/**
 * Pair several series in time. A sensor holds its reading until the next one, so at every time
 * any series has a reading, each series' value is the last one at or before it. A time where a
 * series has no value yet, or is unavailable, is left out. `edge` is a time to skip: the reading
 * the chart carried on to its right edge, which is not a new one.
 */
export function pairReadings(series: readonly Point[][], edge?: number): Sample[] {
  const times = new Set<number>();
  for (const points of series) for (const p of points) if (p.t !== edge) times.add(p.t);
  const sorted = [...times].sort((a, b) => a - b);
  const at = series.map(() => -1);
  const out: Sample[] = [];
  for (const t of sorted) {
    const v: number[] = [];
    let ok = true;
    series.forEach((points, i) => {
      while (at[i] + 1 < points.length && points[at[i] + 1].t <= t) at[i]++;
      const p = points[at[i]];
      if (!p || p.v === null) ok = false;
      else v.push(p.v);
    });
    if (ok) out.push({ t, v });
  }
  return out;
}

/** Keep at most `max` items, evenly spaced, always including the last. */
export function thin<T>(items: T[], max: number): T[] {
  if (items.length <= max) return items;
  const step = items.length / max;
  const out: T[] = [];
  for (let i = 0; i < max - 1; i++) out.push(items[Math.floor(i * step)]);
  out.push(items[items.length - 1]);
  return out;
}

/**
 * A steady random number from -1 to 1 for a reading at time `t` in series `seed`. Jitter comes
 * from the reading itself, not its position in the list, so a dot stays put as new readings
 * arrive and the oldest drop off.
 */
export function jitter(t: number, seed: number): number {
  let h = (Math.floor(t / 1000) ^ Math.imul(seed + 1, 0x9e3779b9)) | 0;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
  h ^= h >>> 16;
  return ((h >>> 0) / 0xffffffff) * 2 - 1;
}

/**
 * A bubble's diameter in px. Its area, not its width, grows with the value, from `minPx` at the
 * lowest reading to `maxPx` at the highest, so a value twice as far up the range covers twice as
 * much of the chart. All readings equal: halfway.
 */
export function bubbleDiameter(v: number, [lo, hi]: [number, number], minPx: number, maxPx: number): number {
  const f = hi > lo ? Math.min(1, Math.max(0, (v - lo) / (hi - lo))) : 0.5;
  const a = minPx * minPx + (maxPx * maxPx - minPx * minPx) * f;
  return Math.round(Math.sqrt(a) * 10) / 10;
}

/* ------------------------------------------------------------- options ------------------------------------------------------------- */

const num = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);

function checkRange(raw: CardConfig, key: string, [lo, hi]: readonly [number, number]) {
  const v = raw[key];
  if (v !== undefined && (!num(v) || v < lo || v > hi))
    throw new Error(`"${key}" must be a number from ${lo} to ${hi}`);
}

export interface XYOptions {
  against: Against;
  /** Scatter against an entity only: a least-squares line through each series' dots. */
  fit: Fit;
  /** Scatter against an entity only: a ring at where the entities are now. */
  nowPoint: boolean;
  dotSize: number;
  jitter: number;
  minSize: number;
  maxSize: number;
}

export function xyOptions(raw: CardConfig, kind: XYKind): XYOptions {
  return {
    against: kind === 'bubble' ? 'entity' : ((raw.against as Against | undefined) ?? 'entity'),
    fit: kind === 'scatter' && FIT.includes(raw.fit as Fit) ? (raw.fit as Fit) : 'none',
    nowPoint: kind === 'scatter' && raw.now_point === true,
    dotSize: num(raw.dot_size) ? raw.dot_size : DEFAULT_DOT_SIZE,
    jitter: num(raw.jitter) ? raw.jitter : 0,
    minSize: num(raw.min_size) ? raw.min_size : DEFAULT_MIN_SIZE,
    maxSize: num(raw.max_size) ? raw.max_size : DEFAULT_MAX_SIZE,
  };
}

/** Readable errors for every option a scatter or bubble chart reads. */
export function validateXY(raw: CardConfig, kind: XYKind): void {
  validateHistoryOptions(raw);
  validateAxisOptions(raw);
  validateTooltipOptions(raw);
  validateLayout(raw);
  validateXRange(raw);
  checkRange(raw, 'jitter', JITTER_LIMITS);
  if (kind === 'scatter') {
    if (raw.against !== undefined && !AGAINST.includes(raw.against as Against)) {
      throw new Error(`"against" must be one of: ${AGAINST.join(', ')}`);
    }
    checkRange(raw, 'dot_size', DOT_LIMITS);
    if (raw.fit !== undefined && !FIT.includes(raw.fit as Fit)) {
      throw new Error(`"fit" must be one of: ${FIT.join(', ')}`);
    }
    if (raw.now_point !== undefined && typeof raw.now_point !== 'boolean') {
      throw new Error('"now_point" must be true or false');
    }
  } else {
    checkRange(raw, 'min_size', SIZE_LIMITS);
    checkRange(raw, 'max_size', SIZE_LIMITS);
    const o = xyOptions(raw, kind);
    if (o.minSize > o.maxSize) throw new Error('"min_size" must not be above "max_size"');
  }
}

/* ------------------------------------------------------------- drawing ------------------------------------------------------------- */

/** One dot: which series it belongs to, when, where (view box), and its readings. */
export interface Mark {
  series: ChartSeries;
  t: number;
  x: number;
  y: number;
  /** The readings behind it: [x, y] or [x, y, size]; [y] against time. */
  v: number[];
  color: string;
  /** Bubbles: diameter in px. */
  d?: number;
}

/** A y series' colour: its own, else the palette from the start, as the x entity takes none. */
function seriesColor(s: ChartSeries, offset: number): string {
  const own = (s.entity.config as { color?: string }).color;
  return baseColor(own ?? SERIES_COLORS[(s.index - offset) % SERIES_COLORS.length]);
}

/** Entities a chart needs before it can draw anything. */
function needed(kind: XYKind, against: Against): number {
  return kind === 'bubble' ? 3 : against === 'entity' ? 2 : 1;
}

/**
 * The names row: the entity along the bottom and (bubbles) the one setting size get a small tag
 * saying so; the others a swatch of their dot colour. Tapping one opens it.
 */
function roleHeader(series: ChartSeries[], colors: (string | undefined)[], ctx: ChartContext, kind: XYKind) {
  const { show } = ctx.config;
  if (!show.name && !show.value) return nothing;
  return html`<div class="series-header">
    ${series.map((s, i) => {
      const color = colors[i];
      const role =
        color !== undefined
          ? html`<span class="swatch" style="background:${color}"></span>`
          : html`<span class="role"
              >${localize(ctx.hass, kind === 'bubble' && i === 2 ? 'bubble_role_size' : 'scatter_role_x')}</span
            >`;
      return html`<div class="entity series-item" data-index=${s.index} tabindex="0" aria-label=${s.entity.label}>
        ${role} ${show.name ? html`<span class="series-name">${s.entity.name}</span>` : nothing}
        ${show.value ? html`<span class="series-value">${s.entity.display}</span>` : nothing}
      </div>`;
    })}
  </div>`;
}

/** A reading formatted as its entity is, with its unit. */
const valueText = (v: number, s: ChartSeries, hass: HomeAssistant) =>
  withUnit(formatNumber(v, s.entity.decimals, hass), s.entity.unit);

/** The plot's rough height in px, for turning jitter in px into view-box units. */
const plotHeight = (compact: boolean) => (compact ? 96 : 162);

/** Build the marks (before scaling): which readings to plot, paired as the chart needs. */
function collect(
  frame: HistoryFrame,
  kind: XYKind,
  against: Against,
  edge: number | undefined,
): { s: ChartSeries; samples: Sample[]; pairs?: Sample[] }[] {
  const { series } = frame;
  if (against === 'time') {
    return series.map((s) => ({
      s,
      samples: thin(
        s.points
          .filter((p) => p.v !== null && p.t !== edge && !p.carried)
          .map((p) => ({ t: p.t, v: [p.t, p.v as number] })),
        MAX_MARKS,
      ),
    }));
  }
  if (kind === 'bubble') {
    const [x, y, size] = series;
    return [{ s: y, samples: thin(pairReadings([x.points, y.points, size.points], edge), MAX_BUBBLES) }];
  }
  const [x, ...ys] = series;
  return ys.map((s) => {
    const pairs = pairReadings([x.points, s.points], edge);
    return { s, samples: thin(pairs, MAX_MARKS), pairs };
  });
}

/** One y series' fitted line, with the series and its colour. */
interface SeriesFit {
  s: ChartSeries;
  color: string;
  fit: LinearFit;
  /** The lowest and highest reading along the bottom it was fitted to. */
  span: readonly [number, number];
}

/** "−0.21 kW per °C · R² 0.81": a fit's slope in the entities' units, and how well it fits. */
export function fitText(f: LinearFit, x: ChartSeries, y: ChartSeries, hass: HomeAssistant): string {
  const slope = withUnit(formatNumber(f.slope, significantDecimals(f.slope), hass), y.entity.unit);
  const r2 = localize(hass, 'scatter_fit_r2', { value: formatNumber(f.r2, 2, hass) });
  const per = x.entity.unit
    ? localize(hass, 'scatter_fit_slope', { value: slope, unit: x.entity.unit })
    : localize(hass, 'scatter_fit_slope_plain', { value: slope });
  return `${per} · ${r2}`;
}

/** Under a scatter chart with a fit: each series' slope and R², with a line in its colour. */
function fitLegend(fits: SeriesFit[], x: ChartSeries, hass: HomeAssistant) {
  return html`<div class="fit-legend">
    ${fits.map(
      ({ s, color, fit }) =>
        html`<span class="fit-item"
          ><span class="fit-swatch" style="background:${color}"></span>${
            fits.length > 1 ? html`<span class="fit-name">${s.entity.name}</span>` : nothing
          }<span class="fit-text">${fitText(fit, x, s, hass)}</span></span
        >`,
    )}
  </div>`;
}

/** Where a y series is now against the bottom entity, when both have a number. */
function nowValue(x: ChartSeries, y: ChartSeries): [number, number] | undefined {
  const a = x.entity.value;
  const b = y.entity.value;
  return a !== null && b !== null && Number.isFinite(a) && Number.isFinite(b) ? [a, b] : undefined;
}

/** Draw a scatter or bubble chart for the card. */
export function renderXY(ctx: ChartContext, kind: XYKind, now = Date.now()): TemplateResult {
  const opts = xyOptions(ctx.raw, kind);
  const { against } = opts;
  const layout = chartLayout(ctx.raw);
  const frame = historyFrame(ctx, now);
  const nav = periodNav(frame, ctx);
  const byTime = against === 'time';
  const offset = byTime ? 0 : 1;
  const colors = frame.series.map((s, i) =>
    byTime
      ? s.color
      : kind === 'bubble'
        ? i === 1
          ? seriesColor(s, 1)
          : undefined
        : i === 0
          ? undefined
          : seriesColor(s, offset),
  );
  const names = roleHeader(frame.series, colors, ctx, kind);
  const header = nav === nothing && names === nothing ? nothing : html`${nav}${names}`;
  const above = layout.header === 'over' ? { ...layout, header: 'above' as const } : layout;
  if (frame.series.length < needed(kind, against)) {
    return chartFrame(
      above,
      header,
      html`<div class="chart-message">
        ${localize(ctx.hass, kind === 'bubble' ? 'bubble_needs_three' : 'scatter_needs_two')}
      </div>`,
    );
  }
  const message = frameMessage(frame, ctx);
  if (message) return chartFrame(above, header, message);
  // History without groups carries each series' last reading on to the right edge: not a reading.
  const edge = frame.source === 'history' && !frame.group ? Math.min(frame.range.end, now) : undefined;
  const groups = collect(frame, kind, against, edge);
  const all = groups.flatMap((g) => g.samples);
  if (all.length === 0)
    return chartFrame(above, header, html`<div class="chart-message">${localize(ctx.hass, 'chart_no_data')}</div>`);
  // A fit and a "now" ring need values along the bottom: scatter against an entity.
  const fitting = kind === 'scatter' && !byTime;
  const xSeries = frame.series[0];
  const nows =
    fitting && opts.nowPoint && frame.range.end >= now
      ? groups.flatMap(({ s }) => {
          const v = nowValue(xSeries, s);
          return v ? [{ s, v }] : [];
        })
      : [];
  const ys = [...all.map((m) => m.v[1]), ...nows.map((n) => n.v[1])];
  const yData: [number, number] = [Math.min(...ys), Math.max(...ys)];
  let axes;
  let xLabel: ((v: number) => string) | undefined;
  if (byTime) {
    axes = plotAxes(ctx, frame.range, extent(frame.series.map((s) => s.points)));
  } else {
    const xs = [...all.map((m) => m.v[0]), ...nows.map((n) => n.v[0])];
    axes = valueAxes(ctx, [Math.min(...xs), Math.max(...xs)], yData, { x: xRange(ctx.raw) });
    const decimals = xDecimals(axes);
    xLabel = (v) => formatNumber(v, decimals, ctx.hass);
  }
  const { scales } = axes;
  const width = plotWidth(ctx) || 1;
  const jx = (opts.jitter * VIEW_W) / width;
  const jy = (opts.jitter * VIEW_H) / plotHeight(layout.compact);
  const sizes = kind === 'bubble' ? all.map((m) => m.v[2]) : [];
  const sizeRange: [number, number] = sizes.length ? [Math.min(...sizes), Math.max(...sizes)] : [0, 0];
  const marks: Mark[] = groups.flatMap(({ s, samples }) => {
    const color = byTime ? s.color : seriesColor(s, offset);
    return samples.map((m) => ({
      series: s,
      t: m.t,
      x: scales.x(m.v[0]) + (jx ? jitter(m.t, s.index * 2) * jx : 0),
      y: scales.y(m.v[1]) + (jy ? jitter(m.t, s.index * 2 + 1) * jy : 0),
      v: byTime ? [m.v[1]] : m.v,
      color,
      d: kind === 'bubble' ? bubbleDiameter(m.v[2], sizeRange, opts.minSize, opts.maxSize) : undefined,
    }));
  });
  const fits: SeriesFit[] =
    fitting && opts.fit === 'linear'
      ? groups.flatMap(({ s, pairs }) => {
          const xy = (pairs ?? []).map((p) => [p.v[0], p.v[1]] as const);
          const fit = linearFit(xy);
          const xs = xy.map((p) => p[0]);
          return fit
            ? [{ s, color: seriesColor(s, offset), fit, span: [Math.min(...xs), Math.max(...xs)] as const }]
            : [];
        })
      : [];
  // Only across the readings it was fitted to: past them the line would be a guess.
  const fitLines = fits.map(({ s, color, fit, span }) => {
    const seg = clipFit(fit, [Math.max(span[0], axes.range.start), Math.min(span[1], axes.range.end)], scales.domain);
    if (!seg) return nothing;
    const [x1, y1, x2, y2] = [scales.x(seg[0][0]), scales.y(seg[0][1]), scales.x(seg[1][0]), scales.y(seg[1][1])];
    // A halo in the card colour keeps the line readable over dots of the same colour.
    return svg`<line class="fit-halo" x1=${x1} y1=${y1} x2=${x2} y2=${y2}></line>
      <line class="fit-line" data-series=${s.index} x1=${x1} y1=${y1} x2=${x2} y2=${y2} stroke=${color}></line>`;
  });
  const rings = nows.map(({ s, v }) => {
    const fx = scales.x(v[0]) / VIEW_W;
    return html`<span
      class="fit-now"
      style="left:${pctOf(fx)};top:${pctOf(scales.y(v[1]) / VIEW_H)};border-color:${seriesColor(s, offset)}"
      ><span class="fit-now-label ${fx > 0.85 ? 'end' : ''}">${localize(ctx.hass, 'scatter_now')}</span></span
    >`;
  });
  const content =
    kind === 'bubble'
      ? svg`${[...marks]
          .sort((a, b) => (b.d ?? 0) - (a.d ?? 0))
          .map(
            (m) =>
              svg`<path class="bubble" d=${dotsPath([[m.x, m.y]])} stroke=${m.color} style="stroke-width:${m.d}px"></path>`,
          )}`
      : svg`${groups.map(({ s }) => {
          const own = marks.filter((m) => m.series === s);
          return own.length
            ? svg`<path class="dots" data-series=${s.index} d=${dotsPath(own.map((m) => [m.x, m.y]))}
                stroke=${own[0].color} style="stroke-width:${opts.dotSize}px"></path>`
            : nothing;
        })}${fitLines}`;
  const tooltip = tooltipEnabled(ctx.raw);
  const picked = tooltip ? pickedIndex(ctx.host) : undefined;
  const mark = picked !== undefined ? marks[picked] : undefined;
  const label = [
    localize(ctx.hass, 'chart_aria', {
      style: localize(ctx.hass, `editor_style_${kind}`),
      names: frame.series.map((s) => s.entity.name).join(', '),
    }),
    ...fits.map(({ s, fit }) => `${s.entity.name}: ${fitText(fit, xSeries, s, ctx.hass)}`),
  ].join('. ');
  const reach = Math.max(16, kind === 'bubble' ? opts.maxSize / 2 : opts.dotSize);
  return chartFrame(
    layout,
    header,
    html`${chartArea({
      axes,
      ctx,
      content,
      label,
      xLabel,
      overlay: html`${layout.header === 'over' ? headerOver(header) : nothing}
      ${rings.length ? html`<div class="fit-now-layer" aria-hidden="true">${rings}</div>` : nothing}
      ${mark ? markTooltip(mark, frame, kind, against, ctx, width) : nothing}`,
      hover: tooltip
        ? pickHandlers(ctx, (fx, fy, w, h) =>
            nearestPoint(
              marks.map((m) => [m.x, m.y] as const),
              fx,
              fy,
              w,
              h,
              reach,
            ),
          )
        : undefined,
    })}
    ${kind === 'bubble' ? sizeLegend(frame.series[2], sizeRange, opts, ctx.hass) : nothing}
    ${fits.length ? fitLegend(fits, xSeries, ctx.hass) : nothing}`,
  );
}

function markTooltip(m: Mark, frame: HistoryFrame, kind: XYKind, against: Against, ctx: ChartContext, width: number) {
  const shown =
    against === 'time' ? [m.series] : kind === 'bubble' ? frame.series.slice(0, 3) : [frame.series[0], m.series];
  return pickTooltip({
    x: m.x / VIEW_W,
    y: m.y / VIEW_H,
    plotWidth: width,
    title: formatDateTime(m.t, ctx.hass),
    dot: m.color,
    rows: shown.map((s, i) => ({
      color: s === m.series ? m.color : undefined,
      name: s.entity.name,
      value: valueText(m.v[i], s, ctx.hass),
    })),
  });
}

const pctOf = (n: number) => `${Math.round(n * 10000) / 100}%`;

/** Under a bubble chart: the smallest and largest bubble, with the readings they stand for. */
function sizeLegend(s: ChartSeries, [lo, hi]: [number, number], opts: XYOptions, hass: HomeAssistant) {
  const item = (v: number, d: number) =>
    html`<span class="size-item"
      ><span class="size-dot" style="width:${d}px;height:${d}px"></span>${valueText(v, s, hass)}</span
    >`;
  return html`<div class="size-legend" aria-hidden="true">
    <span class="size-name">${s.entity.name}</span>
    ${item(lo, bubbleDiameter(lo, [lo, hi], opts.minSize, opts.maxSize))}
    ${hi > lo ? item(hi, bubbleDiameter(hi, [lo, hi], opts.minSize, opts.maxSize)) : nothing}
  </div>`;
}

export const xyStyles = css`
  ${frameStyles}
  ${gridStyles}
  ${tooltipStyles}
  ${layoutStyles}
  ${pickStyles}
  .plot .dots,
  .plot .bubble {
    fill: none;
    stroke-linecap: round;
  }
  .plot .dots {
    stroke-opacity: 0.8;
  }
  .plot .bubble {
    stroke-opacity: 0.55;
  }
  .role {
    flex: none;
    align-self: center;
    font-size: 0.6875em;
    line-height: 1;
    padding: 2px 5px;
    border-radius: 8px;
    color: var(--secondary-text-color);
    border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
  }
  .size-legend {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 12px;
    padding-top: 6px;
    font-size: 0.8125em;
    color: var(--secondary-text-color);
  }
  .size-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .size-dot {
    flex: none;
    border-radius: 50%;
    border: 1px solid var(--secondary-text-color);
    background: color-mix(in srgb, var(--secondary-text-color) 25%, transparent);
    box-sizing: border-box;
  }
  .frame.compact .size-legend {
    padding-top: 2px;
  }
  .plot .fit-line {
    stroke-width: 2;
    stroke-linecap: round;
  }
  .plot .fit-halo {
    stroke: var(--card-background-color, #fff);
    stroke-width: 5;
    stroke-linecap: round;
    stroke-opacity: 0.85;
  }
  .fit-now-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .fit-now {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid;
    box-shadow: 0 0 0 2px var(--card-background-color, #fff);
    transform: translate(-50%, -50%);
  }
  .fit-now-label {
    position: absolute;
    left: 100%;
    bottom: 100%;
    margin-left: 2px;
    font-size: 11px;
    line-height: 1;
    white-space: nowrap;
    color: var(--primary-text-color);
    text-shadow: 0 0 3px var(--card-background-color, #fff);
  }
  .fit-now-label.end {
    left: auto;
    right: 100%;
    margin-left: 0;
    margin-right: 2px;
  }
  .fit-legend {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px 12px;
    padding-top: 6px;
    font-size: 0.8125em;
    color: var(--secondary-text-color);
  }
  .fit-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }
  .fit-swatch {
    flex: none;
    width: 14px;
    height: 2px;
    border-radius: 1px;
  }
  .fit-name {
    color: var(--primary-text-color);
  }
  .frame.compact .fit-legend {
    padding-top: 2px;
  }
`;

export function disconnectXY(host: HTMLElement): void {
  disconnectHistory(host);
  stopChartWidth(host);
  stopHover(host);
  stopPick(host);
}

/* ------------------------------------------------------------- editor ------------------------------------------------------------- */

/** The shared axes fields, with the bottom labels named for values, not times. */
const XY_AXES_FIELDS: FieldBinding[] = AXES_FIELDS.map((f) => (f.name === 'x_axis' ? { ...f, name: 'xy_x_axis' } : f));

function xyAxesSchema(hass?: HomeAssistant) {
  return [
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'xy_x_axis', selector: { boolean: {} } },
        { name: 'y_axis', selector: { boolean: {} } },
        { name: 'grid_horizontal', selector: { boolean: {} } },
        { name: 'grid_vertical', selector: { boolean: {} } },
      ],
    },
    { name: 'axis_labels', selector: choice(hass, 'axis_labels', AXIS_LABELS) },
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'y_min', selector: { number: { mode: 'box', step: 'any' } } },
        { name: 'y_max', selector: { number: { mode: 'box', step: 'any' } } },
      ],
    },
    { name: 'tooltip', selector: { boolean: {} } },
  ];
}

const px = (min: number, max: number, step = 1) => ({
  number: { min, max, step, mode: 'box', unit_of_measurement: 'px' },
});

const FIELDS: Record<XYKind, FieldBinding[]> = {
  scatter: [
    ...HISTORY_FIELDS,
    { name: 'against', path: ['against'], default: 'entity' },
    { name: 'dot_size', path: ['dot_size'], default: DEFAULT_DOT_SIZE },
    { name: 'jitter', path: ['jitter'], default: 0 },
    { name: 'scatter_fit', path: ['fit'], default: 'none' },
    { name: 'scatter_now_point', path: ['now_point'], default: false },
    ...X_RANGE_FIELDS,
    ...XY_AXES_FIELDS,
    ...LAYOUT_FIELDS,
  ],
  bubble: [
    ...HISTORY_FIELDS,
    { name: 'min_size', path: ['min_size'], default: DEFAULT_MIN_SIZE },
    { name: 'max_size', path: ['max_size'], default: DEFAULT_MAX_SIZE },
    { name: 'jitter', path: ['jitter'], default: 0 },
    ...X_RANGE_FIELDS,
    ...XY_AXES_FIELDS,
    ...LAYOUT_FIELDS,
  ],
};

/** The Chart section of a scatter or bubble card's editor. */
export function xyEditor(kind: XYKind) {
  return (ctx: ChartEditorContext): TemplateResult => {
    const byTime = kind === 'scatter' && ctx.config.against === 'time';
    const schema = cachedSchema(`${kind}|${historyVariant(ctx.config)}|${byTime}`, ctx.hass, () => [
      ...historySchema(ctx.hass, ctx.config),
      ...(kind === 'scatter'
        ? [
            { name: 'against', selector: choice(ctx.hass, 'against', AGAINST) },
            {
              type: 'grid',
              name: '',
              schema: [
                { name: 'dot_size', selector: px(DOT_LIMITS[0], DOT_LIMITS[1]) },
                { name: 'jitter', selector: px(JITTER_LIMITS[0], JITTER_LIMITS[1]) },
              ],
            },
            ...(byTime
              ? []
              : [
                  { name: 'scatter_fit', selector: choice(ctx.hass, 'scatter_fit', FIT) },
                  { name: 'scatter_now_point', selector: { boolean: {} } },
                ]),
          ]
        : [
            {
              type: 'grid',
              name: '',
              schema: [
                { name: 'min_size', selector: px(SIZE_LIMITS[0], SIZE_LIMITS[1]) },
                { name: 'max_size', selector: px(SIZE_LIMITS[0], SIZE_LIMITS[1]) },
              ],
            },
            { name: 'jitter', selector: px(JITTER_LIMITS[0], JITTER_LIMITS[1]) },
          ]),
      ...(byTime ? [] : X_RANGE_SCHEMA),
      ...xyAxesSchema(ctx.hass),
      ...layoutSchema(ctx.hass, false),
    ]);
    return chartForm(ctx, 'chart', schema, FIELDS[kind]);
  };
}

const COLOR_FIELDS: FieldBinding[] = [{ name: 'dot_color', path: ['color'] }];
const COLOR_SCHEMA = [{ name: 'dot_color', selector: { text: {} } }];

/** Each entity's own dot colour (the bottom and size entities ignore it). */
export function xyEntityFields(): EntityFields {
  return { schema: COLOR_SCHEMA, fields: COLOR_FIELDS };
}
