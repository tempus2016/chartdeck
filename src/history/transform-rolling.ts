import { formatNumber, withUnit } from '../format';
import { languageOf, localize } from '../localize';
import type { ResolvedEntity } from '../resolve';
import type { EntityFields } from '../styles/index';
import type { CardConfig, HomeAssistant } from '../types';
import { parseWindow } from './transform-derivative';
import { trim } from './store';
import type { Point, Range } from './types';

/*
 * Rolling series (`transform: rolling` on an entity): a history chart draws, at each moment, the
 * mean, median, lowest or highest of the entity over the window before it (`transform_window`,
 * like 2h), instead of its readings. CO₂ that jumps about reads as a calm trend; a 24 h rolling
 * maximum shows the day's peak carried along.
 *
 * - Readings hold until the next one (a sensor reports on change), so every statistic is weighted
 *   by time: a value that held for an hour counts sixty times one that held for a minute. The mean
 *   is the area under the readings over the window, divided by the time covered; the median is the
 *   value the readings sat below half the time; the lowest and highest take every value that held
 *   at any moment of the window, the one carried in from before it included.
 * - The window trails: the value at 14:00 covers 12:00 to 14:00. History is loaded a window early
 *   (see `rollingLead`), so the chart's left edge already has a full window behind it.
 * - The statistic changes where a reading arrives and where one leaves the window, so it is worked
 *   out at exactly those moments (and at now). Between them the mean changes in a straight line,
 *   so a straight-line chart of it is exact. The others hold still between changes; they keep a
 *   point where each value starts (and where a long one ends), so a line through them is smooth.
 * - A gap (unavailable) is left out of the window. Only when the whole window is a gap is the
 *   rolling series a gap too.
 * - `transform_raw: true` keeps the readings as a faint line behind the rolling one on the line
 *   chart.
 *
 * Charts that load history themselves get the same transform through `seriesTransform` in
 * chart/frame.ts (box plot, candlestick, the 24-hour clock's number rings), without the early load:
 * their first window is as long as the history before it.
 */

export const ROLLING_STATS = ['mean', 'median', 'min', 'max'] as const;
export type RollingStatName = (typeof ROLLING_STATS)[number];
/** A window with more readings than this is sampled evenly for the median, to keep sorting cheap. */
const MAX_MEDIAN_READINGS = 401;

interface RollingConfig {
  transform?: string;
  transform_window?: unknown;
  transform_stat?: unknown;
  transform_raw?: unknown;
}

/** Check each entity's rolling options. Throws a readable error. */
export function validateRolling(raw: CardConfig): void {
  for (const e of raw.entities ?? []) {
    if (typeof e !== 'object' || e === null) continue;
    const own = e as RollingConfig;
    const w = own.transform_window;
    if (w !== undefined && w !== '' && parseWindow(w) === undefined) {
      throw new Error('"transform_window" must be a time up to 7 days, like 30min, 2h or 1d');
    }
    if (own.transform === 'rolling' && (w === undefined || w === '')) {
      throw new Error('"transform: rolling" needs a "transform_window", like 2h');
    }
    if (own.transform_stat !== undefined && !(ROLLING_STATS as readonly unknown[]).includes(own.transform_stat)) {
      throw new Error(`"transform_stat" must be one of: ${ROLLING_STATS.join(', ')}`);
    }
    if (own.transform_raw !== undefined && typeof own.transform_raw !== 'boolean') {
      throw new Error('"transform_raw" must be true or false');
    }
  }
}

/** The window of an entity that asks for a rolling series, in ms; undefined for any other. */
export function rollingWindow(config: object): number | undefined {
  const own = config as RollingConfig;
  return own.transform === 'rolling' ? parseWindow(own.transform_window) : undefined;
}

/** How much earlier than the chart's span history should load: the longest rolling window, or 0. */
export function rollingLead(configs: readonly object[]): number {
  return Math.max(0, ...configs.map((c) => rollingWindow(c) ?? 0));
}

/** The entity wants its readings kept as a faint line behind its rolling series. */
export function wantsRaw(config: object): boolean {
  return rollingWindow(config) !== undefined && (config as RollingConfig).transform_raw === true;
}

/** One stretch a value held for: from `a` to `b` (`v` null for a gap). */
interface Held {
  a: number;
  b: number;
  v: number | null;
}

function weightedMedian(items: { v: number; d: number }[]): number {
  const step = Math.max(1, Math.ceil(items.length / MAX_MEDIAN_READINGS));
  const kept = step === 1 ? [...items] : items.filter((_, i) => i % step === 0);
  kept.sort((x, y) => x.v - y.v);
  const total = kept.reduce((s, x) => s + x.d, 0);
  if (total <= 0) return kept[kept.length >> 1].v;
  let run = 0;
  for (const x of kept) {
    run += x.d;
    if (run >= total / 2) return x.v;
  }
  return kept[kept.length - 1].v;
}

/**
 * The statistic over the `windowMs` before each moment the statistic can change (each reading,
 * each reading leaving the window, `until`, and any of `also`), from the first reading on. A moment whose whole
 * window is a gap is a gap (two in a row are one). Readings at or after `until` are ignored.
 */
export function rolling(
  points: readonly Point[],
  windowMs: number,
  stat: RollingStatName = 'mean',
  until = Infinity,
  also: readonly number[] = [],
): Point[] {
  const held: Held[] = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    if (p.t > until) break;
    const next = i + 1 < points.length ? Math.min(points[i + 1].t, until) : until;
    if (held.length && held[held.length - 1].a === p.t) held.pop();
    held.push({ a: p.t, b: Math.max(p.t, next), v: p.v });
  }
  if (!held.length) return [];
  const times = new Set<number>();
  for (const h of held) {
    times.add(h.a);
    if (h.a + windowMs < held[held.length - 1].b) times.add(h.a + windowMs);
  }
  if (Number.isFinite(until)) times.add(held[held.length - 1].b);
  for (const t of also) if (t > held[0].a && t < held[held.length - 1].b) times.add(t);
  const out: Point[] = [];
  let lo = 0;
  let hi = 0;
  for (const t of [...times].sort((x, y) => x - y)) {
    const from = t - windowMs;
    while (lo < held.length && held[lo].b <= from && held[lo].b < t) lo++;
    while (hi < held.length && held[hi].a <= t) hi++;
    const items: { v: number; d: number }[] = [];
    for (let k = lo; k < hi; k++) {
      const h = held[k];
      if (h.v === null) continue;
      items.push({ v: h.v, d: Math.max(0, Math.min(h.b, t) - Math.max(h.a, from)) });
    }
    let v: number | null = null;
    if (items.length) {
      if (stat === 'min') v = Math.min(...items.map((x) => x.v));
      else if (stat === 'max') v = Math.max(...items.map((x) => x.v));
      else if (stat === 'median') v = weightedMedian(items);
      else {
        const d = items.reduce((s, x) => s + x.d, 0);
        // Only the reading just arrived (nothing held for any time yet): its value.
        v = d > 0 ? items.reduce((s, x) => s + x.v * x.d, 0) / d : items[items.length - 1].v;
      }
    }
    const last = out[out.length - 1];
    if (v === null && (!last || last.v === null)) continue;
    out.push({ t, v });
  }
  return stat === 'mean' ? out : steps(out, windowMs);
}

/**
 * A median, lowest or highest holds still between changes. Drawn through every moment it was
 * worked out, a line climbing in small steps wobbles; drawn through where each value starts, it
 * climbs smoothly. A value that holds for a quarter of the window or more keeps its end too, so
 * a long flat stretch stays flat. The first and last points always stay.
 */
function steps(points: Point[], windowMs: number): Point[] {
  const out: Point[] = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const prev = points[i - 1];
    const next = points[i + 1];
    if (!prev || !next || p.v !== prev.v) {
      out.push(p);
      continue;
    }
    // The end of a run: keep it when the run was long.
    if (next.v !== p.v) {
      let start = i;
      while (start > 0 && points[start - 1].v === p.v) start--;
      if (p.t - points[start].t >= windowMs / 4) out.push(p);
    }
  }
  return out;
}

/** The entity with its value and text read from the last number of its rolling series. */
function withLatest(entity: ResolvedEntity, points: Point[], hass: HomeAssistant): ResolvedEntity {
  let latest: number | null = null;
  for (let i = points.length - 1; i >= 0 && latest === null; i--) latest = points[i].v;
  if (latest === null) return entity;
  const valueText = formatNumber(latest, entity.decimals, hass);
  const display = withUnit(valueText, entity.unit);
  return { ...entity, value: latest, valueText, display, label: `${entity.name}, ${display}` };
}

/**
 * A history series as its rolling statistic, when its entity asks for one (`transform: rolling`),
 * trimmed to `range` (the readings may start a window early); any other series comes back as it was.
 */
export function rollingSeries(
  entity: ResolvedEntity,
  points: Point[],
  range: Range,
  hass: HomeAssistant,
  until = Date.now(),
): { entity: ResolvedEntity; points: Point[] } {
  const windowMs = rollingWindow(entity.config);
  if (windowMs === undefined) return { entity, points };
  const stat = ((entity.config as RollingConfig).transform_stat as RollingStatName | undefined) ?? 'mean';
  const out = trim(rolling(points, windowMs, stat, Math.min(until, range.end), [range.start]), range);
  return { entity: withLatest(entity, out, hass), points: out };
}

/** Any entity in the card asks for a rolling series, so its own fields are worth showing. */
function anyRolling(config: CardConfig): boolean {
  return (config.entities ?? []).some((e) => typeof e === 'object' && (e as RollingConfig).transform === 'rolling');
}

const isTransform = (f: { path: string[] }) => f.path.length === 1 && f.path[0] === 'transform';

interface SelectField {
  name: string;
  selector: { select: { mode: string; options: { value: string; label: string }[] } };
}

const fieldCache = new WeakMap<object, WeakMap<object, Map<string, EntityFields>>>();

/**
 * A history chart's per-entity transform fields with the rolling ones added: "Rolling window" in
 * the transform dropdown (another transform makes the dropdown on every style that has one), and
 * the window, statistic and raw-line switch while any entity uses it. Styles without a transform
 * dropdown come back as they were.
 */
export function withRollingFields(
  hass: HomeAssistant | undefined,
  config: CardConfig,
  base: EntityFields | undefined,
): EntityFields | undefined {
  const existing = base?.fields.find(isTransform);
  if (!base || !existing) return base;
  const shown = anyRolling(config);
  const key = `${languageOf(hass)}|${shown}`;
  let bySchema = fieldCache.get(base.schema);
  if (!bySchema) {
    bySchema = new WeakMap();
    fieldCache.set(base.schema, bySchema);
  }
  let byKey = bySchema.get(base.fields);
  if (!byKey) {
    byKey = new Map();
    bySchema.set(base.fields, byKey);
  }
  const cached = byKey.get(key);
  if (cached) return cached;
  const t = (k: string) => localize(hass, k);
  const option = { value: 'rolling', label: t('editor_rolling_transform_rolling') };
  let schema: unknown[] = base.schema.map((s) => {
    const field = s as SelectField;
    if (field.name !== existing.name) return s;
    return {
      ...field,
      selector: { select: { ...field.selector.select, options: [...field.selector.select.options, option] } },
    };
  });
  let fields = base.fields;
  if (shown) {
    schema = [
      ...schema,
      {
        type: 'grid',
        name: '',
        schema: [
          { name: 'rolling_window', selector: { text: {} } },
          {
            name: 'rolling_stat',
            selector: {
              select: {
                mode: 'dropdown',
                options: ROLLING_STATS.map((value) => ({ value, label: t(`editor_rolling_stat_${value}`) })),
              },
            },
          },
        ],
      },
      { name: 'rolling_raw', selector: { boolean: {} } },
    ];
    fields = [
      ...fields,
      { name: 'rolling_window', path: ['transform_window'] },
      { name: 'rolling_stat', path: ['transform_stat'], default: 'mean' },
      { name: 'rolling_raw', path: ['transform_raw'], default: false },
    ];
  }
  const out = { schema, fields };
  byKey.set(key, out);
  return out;
}
