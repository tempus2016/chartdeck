import type { HomeAssistant } from '../types';
import type { Point, Range, SeriesRequest } from './types';

/** A state string or attribute value as a number, or null for a gap. */
export function toReading(raw: unknown): number | null {
  if (typeof raw === 'number') return Number.isFinite(raw) ? raw : null;
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

/** One entity's history (Home Assistant's compressed format) as points, oldest first. */
export function parseHistory(rows: CompressedState[] | undefined, attribute?: string): Point[] {
  const points: Point[] = [];
  for (const row of rows ?? []) {
    const time = row.lu ?? row.lc;
    if (time === undefined) continue;
    const raw = attribute ? row.a?.[attribute] : row.s;
    points.push({ t: Math.round(time * 1000), v: toReading(raw) });
  }
  return points;
}

interface StatisticRow {
  start: number | string;
  mean?: number | null;
  min?: number | null;
  max?: number | null;
  state?: number | null;
}

/** One statistic's rows as points: the mean (or the state, for meters) with min and max kept. */
export function parseStatistics(rows: StatisticRow[] | undefined): Point[] {
  return (rows ?? []).map((row) => {
    const t = typeof row.start === 'number' ? row.start : Date.parse(row.start);
    const v = row.mean ?? row.state ?? null;
    return { t, v: typeof v === 'number' && Number.isFinite(v) ? v : null, min: row.min ?? null, max: row.max ?? null };
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

/** Load history for every series in one or two calls (attributes need the full format). */
export async function loadHistory(
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
          for (const id of plain) out.set(key({ entity: id }), parseHistory(result?.[id]));
        }),
    );
  }
  if (withAttributes.length) {
    calls.push(
      hass
        .callWS<Record<string, CompressedState[]>>({ ...base, entity_ids: withAttributes, no_attributes: false })
        .then((result) => {
          for (const s of series.filter((x) => x.attribute)) {
            out.set(key(s), parseHistory(result?.[s.entity], s.attribute));
          }
        }),
    );
  }
  await Promise.all(calls);
  return out;
}

/** Load long-term statistics (mean, min and max) for every series in one call. */
export async function loadStatistics(
  hass: HomeAssistant,
  series: SeriesRequest[],
  range: Range,
  period = statisticsPeriod(range),
): Promise<Map<string, Point[]>> {
  const out = new Map<string, Point[]>();
  if (!hass.callWS || series.length === 0) return out;
  const ids = [...new Set(series.map((s) => s.entity))];
  const result = await hass.callWS<Record<string, StatisticRow[]>>({
    type: 'recorder/statistics_during_period',
    start_time: new Date(range.start).toISOString(),
    end_time: new Date(range.end).toISOString(),
    statistic_ids: ids,
    period,
    types: ['mean', 'min', 'max', 'state'],
  });
  for (const s of series) out.set(key(s), parseStatistics(result?.[s.entity]));
  return out;
}

/** The map key for a series: its entity, plus the attribute when there is one. */
export function key(s: SeriesRequest): string {
  return s.attribute ? `${s.entity}|${s.attribute}` : s.entity;
}
