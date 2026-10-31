/** One reading. `v: null` marks a gap (unavailable, unknown, not a number). */
export interface Point {
  /** Time, ms since the epoch. */
  t: number;
  v: number | null;
  /** Long-term statistics only: the period's lowest and highest. */
  min?: number | null;
  max?: number | null;
}

/** Where a chart's readings come from. */
export type Source = 'history' | 'statistics';

/** The span a chart covers, ms since the epoch. */
export interface Range {
  start: number;
  end: number;
}

/** What to load for one series. */
export interface SeriesRequest {
  entity: string;
  /** Read this attribute instead of the state (history only). */
  attribute?: string;
}
