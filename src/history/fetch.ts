import { combineSeries, evaluate, formulaOf } from '../formula';
import type { Formula } from '../formula';
import type { HomeAssistant } from '../types';
import { parseBearing } from './bearing';
import type { Point, Range, SeriesRequest } from './types';

/**
 * A state string or attribute value as a number, or null for a gap. On and off (binary sensors,
 * switches, lights) read as 1 and 0, so their changes are readings too.
 */
export function toReading(raw: unknown): number | null {
  if (typeof raw === 'number') return Number.isFinite(raw) ? raw : null;
  if (raw === 'on') return 1;
  if (raw === 'off') return 0;
  if (typeof raw !== 'string' || raw.trim() === '') return null;
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

interface CompressedState {
  s?: string;
  a?: Record<string, unknown>;
  /** last_updated, seconds since the epoch. */
  lu?: number;
  /** last_changed, seconds; left out when it equals last_updated. */
  lc?: number;
}

/** How a series' states become numbers: plain readings, or wind bearings that may be compass points. */
export function readerFor(s: SeriesRequest): (raw: unknown) => number | null {
  return s.bearing ? parseBearing : toReading;
}

/** A state or attribute as a text point's words: numbers as written, anything else (absent, null) as none. */
export function toText(raw: unknown): string | undefined {
  if (typeof raw === 'string') return raw;
  return typeof raw === 'number' || typeof raw === 'boolean' ? String(raw) : undefined;
}

/** One reading as a point: a number (read with `read`), or for a text series its words (with `v` null). */
export function toPoint(
  t: number,
  raw: unknown,
  text = false,
  read: (raw: unknown) => number | null = toReading,
): Point {
  return text ? { t, v: null, s: toText(raw) } : { t, v: read(raw) };
}

/**
 * One entity's history (Home Assistant's compressed format) as points, oldest first. `text` keeps
 * the words instead of a number, for states like "heating" or "idle"; `read` turns a state into a
 * number otherwise.
 */
export function parseHistory(
  rows: CompressedState[] | undefined,
  attribute?: string,
  text = false,
  read: (raw: unknown) => number | null = toReading,
): Point[] {
  const points: Point[] = [];
  for (const row of rows ?? []) {
    const time = row.lu ?? row.lc;
    if (time === undefined) continue;
    const raw = attribute ? row.a?.[attribute] : row.s;
    points.push(toPoint(Math.round(time * 1000), raw, text, read));
  }
  return points;
}

interface StatisticRow {
  start: number | string;
  mean?: number | null;
  min?: number | null;
  max?: number | null;
  state?: number | null;
  change?: number | null;
  sum?: number | null;
}

/** Periods Home Assistant keeps long-term statistics for. */
export type StatisticsPeriod = '5minute' | 'hour' | 'day' | 'week' | 'month';
/** Columns of a statistics row. */
export type StatisticField = 'mean' | 'min' | 'max' | 'state' | 'change';

/** What to ask the recorder for: the row length, the columns, and which column is the value. */
export interface StatisticsQuery {
  period: StatisticsPeriod;
  types: StatisticField[];
  value: StatisticField;
}

const finite = (v: unknown): number | null => (typeof v === 'number' && Number.isFinite(v) ? v : null);

/**
 * One statistic's rows as points. The value is the `value` column (falling back to the mean or
 * the state, so a meter and a measurement both draw), with min and max kept.
 */
export function parseStatistics(rows: StatisticRow[] | undefined, value?: StatisticField): Point[] {
  return (rows ?? []).map((row) => {
    const t = typeof row.start === 'number' ? row.start : Date.parse(row.start);
    let v: number | null;
    if (value === 'change') v = finite(row.change);
    else if (value === 'state') v = finite(row.state) ?? finite(row.mean);
    else if (value === 'min' || value === 'max') v = finite(row[value]) ?? finite(row.mean) ?? finite(row.state);
    else v = finite(row.mean) ?? finite(row.state);
    return { t, v, min: row.min ?? null, max: row.max ?? null };
  });
}

/** Statistics period to ask for: fine enough for the span, coarse enough to stay small. */
export function statisticsPeriod(range: Range): '5minute' | 'hour' | 'day' | 'month' {
  const days = (range.end - range.start) / 86_400_000;
  if (days <= 2) return '5minute';
  if (days <= 35) return 'hour';
  if (days <= 400) return 'day';
  return 'month';
}

/** The plain query: mean, min, max and state, at a period that fits the span. */
export function defaultStatisticsQuery(range: Range): StatisticsQuery {
  return { period: statisticsPeriod(range), types: ['mean', 'min', 'max', 'state'], value: 'mean' };
}

/** Load history for every series in one or two calls (attributes need the full format). */
export function loadHistory(hass: HomeAssistant, series: SeriesRequest[], range: Range): Promise<Map<string, Point[]>> {
  return withFormulas(series, (plain) => loadPlainHistory(hass, plain, range));
}

async function loadPlainHistory(
  hass: HomeAssistant,
  series: SeriesRequest[],
  range: Range,
): Promise<Map<string, Point[]>> {
  const out = new Map<string, Point[]>();
  if (!hass.callWS || series.length === 0) return out;
  const base = {
    type: 'history/history_during_period',
    start_time: new Date(range.start).toISOString(),
    end_time: new Date(range.end).toISOString(),
    significant_changes_only: false,
  };
  const plain = [...new Set(series.filter((s) => !s.attribute).map((s) => s.entity))];
  const withAttributes = [...new Set(series.filter((s) => s.attribute).map((s) => s.entity))];
  const calls: Promise<void>[] = [];
  if (plain.length) {
    calls.push(
      hass
        .callWS<Record<string, CompressedState[]>>({
          ...base,
          entity_ids: plain,
          minimal_response: true,
          no_attributes: true,
        })
        .then((result) => {
          for (const s of series.filter((x) => !x.attribute)) {
            out.set(key(s), parseHistory(result?.[s.entity], undefined, s.text, readerFor(s)));
          }
        }),
    );
  }
  if (withAttributes.length) {
    calls.push(
      hass
        .callWS<Record<string, CompressedState[]>>({ ...base, entity_ids: withAttributes, no_attributes: false })
        .then((result) => {
          for (const s of series.filter((x) => x.attribute)) {
            out.set(key(s), parseHistory(result?.[s.entity], s.attribute, s.text, readerFor(s)));
          }
        }),
    );
  }
  await Promise.all(calls);
  return out;
}

/** Load long-term statistics for every series in one call. */
export function loadStatistics(
  hass: HomeAssistant,
  series: SeriesRequest[],
  range: Range,
  query: StatisticsQuery = defaultStatisticsQuery(range),
): Promise<Map<string, Point[]>> {
  return withFormulas(series, (plain) => loadPlainStatistics(hass, plain, range, query));
}

async function loadPlainStatistics(
  hass: HomeAssistant,
  series: SeriesRequest[],
  range: Range,
  query: StatisticsQuery,
): Promise<Map<string, Point[]>> {
  const out = new Map<string, Point[]>();
  if (!hass.callWS || series.length === 0) return out;
  const ids = [...new Set(series.map((s) => s.entity))];
  const result = await hass.callWS<Record<string, StatisticRow[]>>({
    type: 'recorder/statistics_during_period',
    start_time: new Date(range.start).toISOString(),
    end_time: new Date(range.end).toISOString(),
    statistic_ids: ids,
    period: query.period,
    types: query.types,
  });
  for (const s of series) out.set(key(s), parseStatistics(result?.[s.entity], query.value));
  return out;
}

/** A formula's value now, from its variables' current states (null when any has no number). */
export function formulaNow(f: Formula, hass: HomeAssistant): number | null {
  const vars: Record<string, number | null> = {};
  for (const [name, id] of Object.entries(f.vars)) vars[name] = toReading(hass.states[id]?.state);
  return evaluate(f.expr, vars);
}

/** A request's formula, when it has one that reads (a text series reads words, so never has one). */
export function requestFormula(s: SeriesRequest): Formula | undefined {
  return s.formula && !s.text ? formulaOf(s) : undefined;
}

/**
 * Load the series, a formula series as its variables' readings joined on time: each variable is
 * loaded as a plain series (once, however many formulas read it), then each formula is worked
 * out from them under its own key.
 */
async function withFormulas(
  series: SeriesRequest[],
  load: (plain: SeriesRequest[]) => Promise<Map<string, Point[]>>,
): Promise<Map<string, Point[]>> {
  const formulas = series.map((s) => [s, requestFormula(s)] as const);
  if (formulas.every(([, f]) => !f)) return load(series);
  const plain: SeriesRequest[] = [];
  const seen = new Set<string>();
  const add = (s: SeriesRequest) => {
    if (seen.has(key(s))) return;
    seen.add(key(s));
    plain.push(s);
  };
  for (const [s, f] of formulas) {
    if (f) for (const id of Object.values(f.vars)) add({ entity: id });
    else add(s);
  }
  const loaded = await load(plain);
  const out = new Map(loaded);
  for (const [s, f] of formulas) {
    if (!f) continue;
    const vars = Object.fromEntries(Object.entries(f.vars).map(([n, id]) => [n, loaded.get(id) ?? []]));
    out.set(key(s), combineSeries(f.expr, vars));
  }
  return out;
}

/** The map key for a series: its entity, plus the attribute when there is one. */
export function key(s: SeriesRequest): string {
  const f = requestFormula(s);
  if (f) return `=${f.text}|${JSON.stringify(f.vars)}`;
  const base = s.attribute ? `${s.entity}|${s.attribute}` : s.entity;
  if (s.text) return `${base}|text`;
  return s.bearing ? `${base}#bearing` : base;
}
