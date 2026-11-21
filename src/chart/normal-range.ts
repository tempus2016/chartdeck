import { css, html, nothing, svg } from 'lit';
import type { SVGTemplateResult, TemplateResult } from 'lit';
import { baseColor } from '../bands';
import type { FieldBinding } from '../editor/schemas';
import { formatNumber, withUnit } from '../format';
import { costOf, costOn } from '../history/cost';
import { key } from '../history/fetch';
import type { StatisticsQuery } from '../history/fetch';
import { HistoryStore } from '../history/store';
import { addUnits, boundaries, startOf } from '../history/timezone';
import type { Zone } from '../history/timezone';
import type { Point, Range, SeriesRequest } from '../history/types';
import { localize } from '../localize';
import type { ChartContext } from '../styles/index';
import type { CardConfig, HomeAssistant } from '../types';
import { convertPoints } from '../units';
import { bandPath } from './anomaly';
import type { RollingStat } from './anomaly';
import { VIEW_H, VIEW_W } from './frame';
import type { ChartSeries, HistoryFrame } from './frame';
import type { PlotScales } from './grid';
import { runPath, runs } from './paths';

/*
 * The normal range: for each hour of the day, what the same entity read at that time over the
 * last few weeks (every day, or only the same weekday), as a band from a low to a high
 * percentile (10th to 90th by default) with the median through it, shaded behind the line.
 * Readings outside the band get an anomaly-style marker, one per stretch outside.
 *
 * The earlier weeks come from long-term statistics (hourly means), which the recorder keeps far
 * longer than history and which are small to load. An entity without statistics (no state_class,
 * or an attribute) falls back to its history, averaged per hour by time.
 */

export const NORMAL_RANGE_DAYS = ['every_day', 'same_weekday'] as const;
export type NormalRangeDays = (typeof NORMAL_RANGE_DAYS)[number];

export const DEFAULT_WEEKS = 4;
export const MAX_WEEKS = 12;
export const DEFAULT_LOW = 10;
export const DEFAULT_HIGH = 90;
export const DEFAULT_NORMAL_COLOR = 'amber';
/** A chart longer than this draws no band: hours of the day stop meaning much on it. */
export const MAX_SPAN_MS = 14 * 86_400_000;
/** At most this many markers per series. */
const MAX_MARKERS = 60;

const HOUR = 3_600_000;

export interface NormalRangeOptions {
  weeks: number;
  days: NormalRangeDays;
  low: number;
  high: number;
  median: boolean;
  marks: boolean;
  color: string;
}

type Raw = CardConfig & {
  normal_range?: unknown;
  normal_range_weeks?: unknown;
  normal_range_days?: unknown;
  normal_range_low?: unknown;
  normal_range_high?: unknown;
  normal_range_median?: unknown;
  normal_range_marks?: unknown;
  normal_range_color?: unknown;
};

const isPercent = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= 100;

/** Throw a readable error for bad normal-range options. */
export function validateNormalRange(config: CardConfig): void {
  const raw = config as Raw;
  for (const k of ['normal_range', 'normal_range_median', 'normal_range_marks'] as const) {
    if (raw[k] !== undefined && typeof raw[k] !== 'boolean') throw new Error(`"${k}" must be true or false`);
  }
  const weeks = raw.normal_range_weeks;
  if (weeks !== undefined && !(Number.isInteger(weeks) && (weeks as number) >= 1 && (weeks as number) <= MAX_WEEKS)) {
    throw new Error(`"normal_range_weeks" must be a whole number from 1 to ${MAX_WEEKS}`);
  }
  if (raw.normal_range_days !== undefined && !NORMAL_RANGE_DAYS.includes(raw.normal_range_days as NormalRangeDays)) {
    throw new Error(`"normal_range_days" must be one of: ${NORMAL_RANGE_DAYS.join(', ')}`);
  }
  for (const k of ['normal_range_low', 'normal_range_high'] as const) {
    if (raw[k] !== undefined && !isPercent(raw[k])) throw new Error(`"${k}" must be a number from 0 to 100`);
  }
  const low = (raw.normal_range_low as number | undefined) ?? DEFAULT_LOW;
  const high = (raw.normal_range_high as number | undefined) ?? DEFAULT_HIGH;
  if (!(low < high)) throw new Error('"normal_range_low" must be below "normal_range_high"');
  if (raw.normal_range_color !== undefined && typeof raw.normal_range_color !== 'string') {
    throw new Error('"normal_range_color" must be text');
  }
  if (raw.normal_range !== true) return;
  // The band is the entity's own readings by time of day: a series drawn as something else (a running
  // total, a rate, a rolling statistic, money) would sit against a band it can't be compared with.
  if (config.goal !== undefined) {
    throw new Error('"normal_range" can\'t be used with "goal": the goal draws a running total');
  }
  const entities = (config.entities ?? []).filter(
    (e): e is Exclude<typeof e, string> => typeof e === 'object' && e !== null,
  );
  const changed = entities.find((e) => (e as { transform?: unknown }).transform !== undefined);
  if (changed) {
    throw new Error(
      `"normal_range" can't be used with "transform: ${String((changed as { transform?: unknown }).transform)}": the usual range is worked out from the readings themselves`,
    );
  }
  if (
    costOn(config) &&
    (config.entities ?? []).some((e) => costOf(typeof e === 'string' ? { entity: e } : e, config))
  ) {
    throw new Error(
      '"normal_range" can\'t be used with "cost": the usual range is in the entity\'s own unit, not money',
    );
  }
}

/** The card's options, or undefined when it draws no normal range. Call after validating. */
export function normalRangeOptions(config: CardConfig): NormalRangeOptions | undefined {
  const raw = config as Raw;
  if (raw.normal_range !== true) return undefined;
  return {
    weeks: (raw.normal_range_weeks as number | undefined) ?? DEFAULT_WEEKS,
    days: (raw.normal_range_days as NormalRangeDays | undefined) ?? 'every_day',
    low: (raw.normal_range_low as number | undefined) ?? DEFAULT_LOW,
    high: (raw.normal_range_high as number | undefined) ?? DEFAULT_HIGH,
    median: raw.normal_range_median !== false,
    marks: raw.normal_range_marks !== false,
    color: (raw.normal_range_color as string | undefined) ?? DEFAULT_NORMAL_COLOR,
  };
}

/* ------------------------------------------------------------------ maths ------------------------------------------------------------------ */

/** The `p`th percentile (0–100) of sorted values, interpolating between neighbours. */
export function percentile(sorted: readonly number[], p: number): number {
  if (sorted.length === 0) return NaN;
  const at = (Math.min(100, Math.max(0, p)) / 100) * (sorted.length - 1);
  const lo = Math.floor(at);
  const hi = Math.ceil(at);
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (at - lo);
}

/** How many days back each earlier reading is taken: 1…7w days, or 7, 14…7w for the same weekday. */
export function referenceDays(days: NormalRangeDays, weeks: number): number[] {
  const out: number[] = [];
  if (days === 'same_weekday') for (let w = 1; w <= weeks; w++) out.push(7 * w);
  else for (let d = 1; d <= 7 * weeks; d++) out.push(d);
  return out;
}

/** The span to load for a chart's range: from the earliest reference day to the latest one's end. */
export function referenceRange(range: Range, back: readonly number[], zone: Zone): Range {
  const most = Math.max(...back);
  const least = Math.min(...back);
  return { start: addUnits('day', range.start, -most, zone), end: addUnits('day', range.end, -least, zone) };
}

/** Statistics rows (hour starts) as hourly values keyed by their start. */
export function hourValues(points: readonly Point[]): Map<number, number> {
  const out = new Map<number, number>();
  for (const p of points) if (p.v !== null && Number.isFinite(p.v)) out.set(Math.floor(p.t / HOUR) * HOUR, p.v);
  return out;
}

/**
 * History readings averaged per (UTC) hour, each weighted by how long it held: a reading keeps its
 * value until the next one. A gap (null) counts for nothing; an hour with no time covered has no
 * value. Readings stop at `until`.
 */
export function hourlyMeans(points: readonly Point[], until: number): Map<number, number> {
  const sums = new Map<number, { sum: number; ms: number }>();
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    if (p.v === null) continue;
    const end = Math.min(i + 1 < points.length ? points[i + 1].t : until, until);
    let t = p.t;
    while (t < end) {
      const h = Math.floor(t / HOUR) * HOUR;
      const stop = Math.min(end, h + HOUR);
      const acc = sums.get(h) ?? { sum: 0, ms: 0 };
      acc.sum += p.v * (stop - t);
      acc.ms += stop - t;
      sums.set(h, acc);
      t = stop;
    }
  }
  const out = new Map<number, number>();
  for (const [h, { sum, ms }] of sums) if (ms > 0) out.set(h, sum / ms);
  return out;
}

/** One hour of the band: placed at the middle of the hour, with its low, median and high. */
export interface NormalSlot {
  t: number;
  lo: number;
  mid: number;
  hi: number;
}

/**
 * The band over a range: for each hour of the day in the zone, the values at the same wall-clock
 * hour on each reference day, and their low, middle and high percentiles. An hour with fewer than
 * `min(3, days)` values is a gap (null). The reference day for each chart day is found by the
 * calendar, so a clock change in between keeps the same time of day.
 */
export function normalSlots(
  range: Range,
  values: ReadonlyMap<number, number>,
  back: readonly number[],
  zone: Zone,
  low: number,
  high: number,
): (NormalSlot | null)[] {
  const hours = boundaries('hour', range.start, range.end, zone, 24 * 15).slice(0, -1);
  const need = Math.min(3, back.length);
  const dayStarts = new Map<number, number[]>();
  return hours.map((h) => {
    const day = startOf('day', h, zone);
    let refs = dayStarts.get(day);
    if (!refs) {
      refs = back.map((k) => addUnits('day', day, -k, zone));
      dayStarts.set(day, refs);
    }
    const found: number[] = [];
    for (const ref of refs) {
      const v = values.get(Math.floor((ref + (h - day)) / HOUR) * HOUR);
      if (v !== undefined) found.push(v);
    }
    if (found.length < need || found.length === 0) return null;
    found.sort((a, b) => a - b);
    return { t: h + HOUR / 2, lo: percentile(found, low), mid: percentile(found, 50), hi: percentile(found, high) };
  });
}

/** The band's low and high at `t`, between the hours either side; undefined outside it or in a gap. */
export function bandAt(slots: readonly (NormalSlot | null)[], t: number): { lo: number; hi: number } | undefined {
  let prev: NormalSlot | null = null;
  for (const s of slots) {
    if (s === null) {
      prev = null;
      continue;
    }
    if (s.t === t) return { lo: s.lo, hi: s.hi };
    if (s.t > t) {
      // Before the first hour's middle, its own values hold (half an hour at most).
      if (!prev) return t >= s.t - HOUR / 2 ? { lo: s.lo, hi: s.hi } : undefined;
      const f = (t - prev.t) / (s.t - prev.t);
      return { lo: prev.lo + (s.lo - prev.lo) * f, hi: prev.hi + (s.hi - prev.hi) * f };
    }
    prev = s;
  }
  return prev && t <= prev.t + HOUR / 2 ? { lo: prev.lo, hi: prev.hi } : undefined;
}

/** A reading outside the band: the furthest one of each stretch outside it. */
export interface Outside {
  t: number;
  v: number;
  lo: number;
  hi: number;
  side: 'above' | 'below';
}

/**
 * The readings outside the band, one per unbroken stretch on one side (the furthest out of it),
 * so a long warm afternoon is one marker, not fifty. Gaps in the readings or the band end a stretch.
 */
export function outsideBand(points: readonly Point[], slots: readonly (NormalSlot | null)[]): Outside[] {
  const out: Outside[] = [];
  let best: (Outside & { by: number }) | undefined;
  const flush = () => {
    if (best) out.push({ t: best.t, v: best.v, lo: best.lo, hi: best.hi, side: best.side });
    best = undefined;
  };
  for (const p of points) {
    if (p.v === null || p.carried) {
      if (p.v === null) flush();
      continue;
    }
    const band = bandAt(slots, p.t);
    if (!band) {
      flush();
      continue;
    }
    const side = p.v > band.hi ? 'above' : p.v < band.lo ? 'below' : undefined;
    if (!side) {
      flush();
      continue;
    }
    if (best && best.side !== side) flush();
    const by = side === 'above' ? p.v - band.hi : band.lo - p.v;
    if (!best || by > best.by) best = { t: p.t, v: p.v, lo: band.lo, hi: band.hi, side, by };
  }
  flush();
  return out;
}

/* ------------------------------------------------------------------ loading ------------------------------------------------------------------ */

interface HostState {
  statistics: HistoryStore;
  history: HistoryStore;
  bands: Map<string, (NormalSlot | null)[]>;
}

const hosts = new WeakMap<HTMLElement, HostState>();

function stateFor(ctx: ChartContext): HostState {
  let s = hosts.get(ctx.host);
  if (!s) {
    s = {
      statistics: new HistoryStore(ctx.requestUpdate),
      history: new HistoryStore(ctx.requestUpdate),
      bands: new Map(),
    };
    hosts.set(ctx.host, s);
  }
  return s;
}

/** Pause a card's earlier weeks when it leaves the page; they are kept for when it comes back. */
export function stopNormalRange(host: HTMLElement): void {
  const s = hosts.get(host);
  s?.statistics.pause();
  s?.history.pause();
}

const HOURLY: StatisticsQuery = { period: 'hour', types: ['mean', 'state'], value: 'mean' };

/** One series' band. */
export interface NormalBand {
  s: ChartSeries;
  slots: (NormalSlot | null)[];
}

/**
 * The band for each series the card draws, when `normal_range` is on: the earlier weeks loaded
 * once (statistics, or history for entities without them), then each band worked out and kept
 * until the hour or the loaded data changes. Series with a transform (running total, rate) and
 * charts grouped by day or longer, or longer than two weeks, get none. Empty while loading or
 * after a failure: the chart draws without the band.
 */
export function normalBands(ctx: ChartContext, frame: HistoryFrame, now = Date.now()): NormalBand[] {
  const options = normalRangeOptions(ctx.raw);
  if (!options) return [];
  const { range, zone } = frame;
  if (range.end - range.start > MAX_SPAN_MS) return [];
  if (frame.group && frame.group.unit !== 'hour') return [];
  const series = frame.series.filter((s) => {
    const item = ctx.items[s.index];
    return item && !(item.config as { transform?: unknown }).transform;
  });
  if (series.length === 0) return [];
  const back = referenceDays(options.days, options.weeks);
  const span = referenceRange(range, back, zone);
  const load = { start: span.start, end: Math.min(span.end, now) };
  if (load.end <= load.start) return [];
  const state = stateFor(ctx);
  const requests: SeriesRequest[] = series.map((s) => ({
    entity: ctx.items[s.index].entityId,
    attribute: ctx.items[s.index].config.attribute,
  }));
  // Attributes have no statistics: those go straight to history.
  const plain = requests.filter((r) => !r.attribute);
  const stats = plain.length
    ? state.statistics.get(ctx.hass, plain, load, 'statistics', { live: false, statistics: HOURLY })
    : undefined;
  if (stats && stats.status === 'loading') return [];
  const missing = requests.filter((r) => r.attribute || !stats?.data.get(key(r))?.some((p) => p.v !== null));
  const history = missing.length ? state.history.get(ctx.hass, missing, load, 'history', { live: false }) : undefined;
  const out: NormalBand[] = [];
  series.forEach((s, i) => {
    const r = requests[i];
    const fromHistory = missing.includes(r);
    if (fromHistory && history?.status !== 'ready') return;
    const raw = (fromHistory ? history!.data : stats!.data).get(key(r)) ?? [];
    if (raw.length === 0) return;
    const last = raw[raw.length - 1];
    const stamp = [
      key(r),
      fromHistory ? 'h' : 's',
      raw.length,
      raw[0].t,
      last.t,
      last.v,
      Math.floor(range.start / HOUR),
      Math.floor(range.end / HOUR),
      back.length,
      options.low,
      options.high,
      zone.timeZone,
    ].join('|');
    let slots = state.bands.get(stamp);
    if (!slots) {
      const points = convertPoints(raw, ctx.items[s.index].conversion);
      const values = fromHistory ? hourlyMeans(points, load.end) : hourValues(points);
      slots = normalSlots(range, values, back, zone, options.low, options.high);
      if (state.bands.size > 16) state.bands.clear();
      state.bands.set(stamp, slots);
    }
    if (slots.some((x) => x !== null)) out.push({ s, slots });
  });
  return out;
}

/** The band's values, for fitting the value axis around it as well as the readings. */
export function bandExtent(bands: readonly NormalBand[], start: number): Point[] {
  return bands.flatMap((b) =>
    b.slots.flatMap((x) => (x ? [{ t: start, v: x.lo } as Point, { t: start, v: x.hi } as Point] : [])),
  );
}

/* ---------------------------------------------------------------- drawing ---------------------------------------------------------------- */

const pct = (n: number) => `${Math.round(n * 10000) / 100}%`;

/** The slots as the anomaly band's stats (middle ± half the width), so its path drawing serves both. */
function asStats(slots: readonly (NormalSlot | null)[], range: Range): (RollingStat | null)[] {
  const out: (RollingStat | null)[] = [];
  const firstIndex = slots.findIndex((x) => x !== null);
  slots.forEach((x, i) => {
    if (!x) {
      out.push(null);
      return;
    }
    const stat = (t: number) => ({ t, v: x.mid, mid: (x.lo + x.hi) / 2, sd: (x.hi - x.lo) / 2, z: 0 });
    // The first and last hours reach the chart's edges rather than stopping at their middles.
    if (i === firstIndex && x.t > range.start) out.push(stat(Math.max(range.start, x.t - HOUR / 2)));
    out.push(stat(x.t));
    if (i === slots.length - 1 && x.t < range.end) out.push(stat(Math.min(range.end, x.t + HOUR / 2)));
  });
  return out;
}

export interface NormalRangeLayer {
  behind: SVGTemplateResult | typeof nothing;
  overlay: TemplateResult | typeof nothing;
}

/** The shaded bands and medians behind the lines, and the markers on readings outside them. */
export function normalRangeLayer(
  ctx: ChartContext,
  bands: readonly NormalBand[],
  scales: PlotScales,
  range: Range,
): NormalRangeLayer {
  const options = normalRangeOptions(ctx.raw);
  if (!options || bands.length === 0) return { behind: nothing, overlay: nothing };
  const shapes: SVGTemplateResult[] = [];
  const marks: { s: ChartSeries; o: Outside; x: number; y: number }[] = [];
  for (const { s, slots } of bands) {
    const stats = asStats(slots, range);
    const d = bandPath(stats, 1, scales.x, scales.y);
    if (d) shapes.push(svg`<path class="normal-band" data-series=${s.index} d=${d} fill=${s.color}></path>`);
    if (options.median) {
      const points: Point[] = stats.map((x, i) => (x ? { t: x.t, v: x.v } : { t: i, v: null }));
      const m = runs(points)
        .map((run) =>
          runPath(
            run.map((p) => [scales.x(p.t), scales.y(p.v as number)]),
            'straight',
          ),
        )
        .join('');
      if (m) shapes.push(svg`<path class="normal-median" d=${m} fill="none" stroke=${s.color}></path>`);
    }
    if (options.marks) {
      for (const o of outsideBand(s.points, slots).slice(0, MAX_MARKERS)) {
        const x = scales.x(o.t) / VIEW_W;
        const y = scales.y(o.v) / VIEW_H;
        if (x >= 0 && x <= 1 && y >= 0 && y <= 1) marks.push({ s, o, x, y });
      }
    }
  }
  const describe = (m: (typeof marks)[number]) => {
    const f = (v: number) => formatNumber(v, m.s.entity.decimals, ctx.hass);
    return localize(ctx.hass, m.o.side === 'above' ? 'normal_range_above' : 'normal_range_below', {
      name: m.s.entity.name,
      value: withUnit(f(m.o.v), m.s.entity.unit),
      low: f(m.o.lo),
      high: withUnit(f(m.o.hi), m.s.entity.unit),
    });
  };
  return {
    behind: shapes.length ? svg`<g class="normal-range">${shapes}</g>` : nothing,
    overlay: marks.length
      ? html`<div class="anomaly-layer normal-range-marks" style="--cd-anomaly:${baseColor(options.color)}">
          ${marks.map(
            (m) =>
              html`<span
                class="anomaly-dot normal-range-dot"
                style="left:${pct(m.x)};top:${pct(m.y)}"
                role="img"
                aria-label=${describe(m)}
                title=${describe(m)}
              ></span>`,
          )}
        </div>`
      : nothing,
  };
}

/** What the band shows, for the key's tooltip: "10–90 percentile · past days: 28". */
export function normalRangeDetail(options: NormalRangeOptions, hass?: HomeAssistant): string {
  const span =
    options.days === 'same_weekday'
      ? localize(hass, 'normal_range_weekdays', { n: options.weeks })
      : localize(hass, 'normal_range_days', { n: options.weeks * 7 });
  return `${localize(hass, 'normal_range_percentiles', { low: options.low, high: options.high })} · ${span}`;
}

/** A key under the header naming the band, with its details on hover. */
export function normalRangeKey(ctx: ChartContext, bands: readonly NormalBand[]): TemplateResult | typeof nothing {
  const options = normalRangeOptions(ctx.raw);
  if (!options || bands.length === 0) return nothing;
  const detail = normalRangeDetail(options, ctx.hass);
  const color = bands.length === 1 ? bands[0].s.color : 'var(--secondary-text-color)';
  return html`<div class="normal-range-key" title=${detail}>
    <span class="normal-range-swatch" style="--cd-normal:${color}"></span>
    <span>${localize(ctx.hass, 'normal_range_key')}</span>
    <span class="normal-range-detail">${detail}</span>
  </div>`;
}

export const normalRangeStyles = css`
  .plot .normal-band {
    opacity: 0.14;
    stroke: none;
  }
  .plot .normal-median {
    stroke-width: 1;
    stroke-dasharray: 2 3;
    opacity: 0.55;
  }
  .normal-range-key {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2px 6px;
    padding: 0 0 6px;
    font-size: 0.75em;
    color: var(--secondary-text-color);
  }
  .normal-range-swatch {
    width: 14px;
    height: 8px;
    border-radius: 2px;
    background: color-mix(in srgb, var(--cd-normal) 30%, transparent);
    border-top: 1px dashed var(--cd-normal);
  }
  .normal-range-detail {
    opacity: 0.8;
  }
  .normal-range-dot {
    width: 8px;
    height: 8px;
  }
`;

/* ---------------------------------------------------------------- editor ---------------------------------------------------------------- */

export const NORMAL_RANGE_FIELDS: FieldBinding[] = [
  { name: 'normal_range', path: ['normal_range'], default: false },
  { name: 'normal_range_days', path: ['normal_range_days'], default: 'every_day' },
  { name: 'normal_range_weeks', path: ['normal_range_weeks'], default: DEFAULT_WEEKS },
  { name: 'normal_range_low', path: ['normal_range_low'], default: DEFAULT_LOW },
  { name: 'normal_range_high', path: ['normal_range_high'], default: DEFAULT_HIGH },
  { name: 'normal_range_median', path: ['normal_range_median'], default: true },
  { name: 'normal_range_marks', path: ['normal_range_marks'], default: true },
  { name: 'normal_range_color', path: ['normal_range_color'], default: DEFAULT_NORMAL_COLOR },
];

/** Part of the Chart section's cache key: whether the normal range is on. */
export const normalRangeVariant = (config: CardConfig | undefined) =>
  (config as Raw | undefined)?.normal_range === true ? 'normal' : '';

/** The switch, then its options once it is on (cache under `normalRangeVariant`). */
export function normalRangeSchema(hass: HomeAssistant | undefined, config: CardConfig | undefined) {
  const percent = { number: { min: 0, max: 100, step: 1, mode: 'box' } };
  return [
    { name: 'normal_range', selector: { boolean: {} } },
    ...(normalRangeVariant(config)
      ? [
          {
            type: 'grid',
            name: '',
            schema: [
              {
                name: 'normal_range_days',
                selector: {
                  select: {
                    mode: 'dropdown',
                    options: NORMAL_RANGE_DAYS.map((value) => ({
                      value,
                      label: localize(hass, `editor_normal_range_days_${value}`),
                    })),
                  },
                },
              },
              { name: 'normal_range_weeks', selector: { number: { min: 1, max: MAX_WEEKS, step: 1, mode: 'box' } } },
              { name: 'normal_range_low', selector: percent },
              { name: 'normal_range_high', selector: percent },
              { name: 'normal_range_median', selector: { boolean: {} } },
              { name: 'normal_range_marks', selector: { boolean: {} } },
              { name: 'normal_range_color', selector: { text: {} } },
            ],
          },
        ]
      : []),
  ];
}
