import type { HomeAssistant } from '../types';
import { key, loadHistory, loadStatistics, statisticsPeriod, toReading } from './fetch';
import type { Point, Range, SeriesRequest, Source } from './types';

export type LoadStatus = 'loading' | 'ready' | 'error';

export interface Loaded {
  status: LoadStatus;
  /** Points per series key (see `key()`), oldest first, trimmed to the range. */
  data: Map<string, Point[]>;
  error?: string;
}

const STATISTICS_REFRESH_MS: Record<string, number> = {
  '5minute': 5 * 60_000,
  hour: 3_600_000,
  day: 86_400_000,
  month: 86_400_000,
};

/**
 * One card's loaded history. It loads when what is asked for changes shape (entities, source,
 * or a start earlier than what it has), then keeps up by itself: new states from `hass` are
 * appended and points older than the range are dropped, so a rolling chart never refetches.
 * Statistics have no live feed, so they reload once a period, on a timer.
 */
export class HistoryStore {
  private shape = '';
  private loadedFrom = Infinity;
  private status: LoadStatus = 'loading';
  private error?: string;
  private data = new Map<string, Point[]>();
  /** The state object each series last took a point from, so one change is one point. */
  private seen = new Map<string, unknown>();
  private timer?: ReturnType<typeof setTimeout>;
  private generation = 0;
  /** When the card left the page; a long absence means missed states, so reload. */
  private pausedAt?: number;

  constructor(private readonly onChange: () => void) {}

  get(hass: HomeAssistant, series: SeriesRequest[], range: Range, source: Source): Loaded {
    const shape = `${source}|${series.map(key).join(',')}`;
    const away = this.pausedAt !== undefined && Date.now() - this.pausedAt > PAUSE_RELOAD_MS;
    const resumedStatistics = this.pausedAt !== undefined && source === 'statistics';
    this.pausedAt = undefined;
    if (shape !== this.shape || range.start < this.loadedFrom || away || resumedStatistics) {
      this.shape = shape;
      this.load(hass, series, range, source);
    }
    if (this.status === 'ready' && source === 'history') this.appendLive(hass, series);
    const data = new Map<string, Point[]>();
    for (const [k, points] of this.data) data.set(k, trim(points, range));
    return { status: this.status, data, error: this.error };
  }

  /**
   * The card left the page (masonry moves cards about, views switch): stop the refresh timer and
   * any pending redraw, but keep the readings for when it comes back.
   */
  pause(): void {
    clearTimeout(this.timer);
    this.timer = undefined;
    this.pausedAt = Date.now();
  }

  /** Forget everything and stop the refresh timer. */
  dispose(): void {
    clearTimeout(this.timer);
    this.timer = undefined;
    this.shape = '';
    this.loadedFrom = Infinity;
    this.generation++;
  }

  private load(hass: HomeAssistant, series: SeriesRequest[], range: Range, source: Source): void {
    const generation = ++this.generation;
    this.status = 'loading';
    // Count the span as covered from the moment it is asked for, so redraws while it loads (or
    // after it fails) don't ask again.
    this.loadedFrom = range.start;
    clearTimeout(this.timer);
    const period = statisticsPeriod(range);
    const request =
      source === 'statistics' ? loadStatistics(hass, series, range, period) : loadHistory(hass, series, range);
    request.then(
      (data) => {
        if (generation !== this.generation) return;
        this.data = data;
        this.status = 'ready';
        this.error = undefined;
        this.seen.clear();
        for (const s of series) this.seen.set(key(s), hass.states[s.entity]);
        if (source === 'statistics') {
          // Reload when the next statistics period has been written.
          this.timer = setTimeout(() => {
            this.shape = '';
            this.onChange();
          }, STATISTICS_REFRESH_MS[period]);
        }
        this.onChange();
      },
      (err: unknown) => {
        if (generation !== this.generation) return;
        this.status = 'error';
        this.error = err instanceof Error ? err.message : String((err as { message?: string })?.message ?? err);
        this.onChange();
      },
    );
  }

  private appendLive(hass: HomeAssistant, series: SeriesRequest[]): void {
    for (const s of series) {
      const k = key(s);
      const state = hass.states[s.entity];
      if (!state || this.seen.get(k) === state) continue;
      this.seen.set(k, state);
      const t = Date.parse(state.last_updated ?? state.last_changed ?? '') || Date.now();
      const points = this.data.get(k) ?? [];
      const last = points[points.length - 1];
      if (last && t <= last.t) continue;
      points.push({ t, v: toReading(s.attribute ? state.attributes?.[s.attribute] : state.state) });
      this.data.set(k, points);
    }
  }
}

/**
 * Points within the range. The last point before the start is kept, moved to the start, so a
 * line begins at the left edge with the value it had then rather than at the first change.
 */
export function trim(points: Point[], range: Range): Point[] {
  let first = 0;
  while (first < points.length && points[first].t < range.start) first++;
  const inside = points.slice(first).filter((p) => p.t <= range.end);
  const before = points[first - 1];
  return before ? [{ ...before, t: range.start }, ...inside] : inside;
}

/** Away longer than this, a card reloads its history instead of carrying on. */
const PAUSE_RELOAD_MS = 60_000;

const stores = new WeakMap<HTMLElement, HistoryStore>();

/** The store for a card, made on first use; `onChange` redraws the card. */
export function storeFor(host: HTMLElement, onChange: () => void): HistoryStore {
  let store = stores.get(host);
  if (!store) {
    store = new HistoryStore(onChange);
    stores.set(host, store);
  }
  return store;
}

/** Pause a card's store when the card leaves the page. */
export function pauseStore(host: HTMLElement): void {
  stores.get(host)?.pause();
}
