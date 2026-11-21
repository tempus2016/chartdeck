import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { zonedTime } from '../history/timezone';
import type { Zone } from '../history/timezone';
import type { Range } from '../history/types';
import { localize } from '../localize';
import type { ChartContext } from '../styles/index';
import type { HomeAssistant } from '../types';
import { formatDateTime, formatTime } from './axes';

/**
 * Calendar annotations: events from a `calendar.*` entity, fetched from Home Assistant's calendar
 * API (`GET /api/calendars/<entity_id>?start=&end=`, the call the Calendar panel makes), drawn
 * as marks on a history chart. Timed events get a line at their start; all-day events and
 * events lasting a day or more get a shaded span. Recurring events come back already expanded.
 */

/** One event as the calendar API returns it. */
export interface CalendarEventData {
  summary?: string;
  start?: { dateTime?: string; date?: string } | string;
  end?: { dateTime?: string; date?: string } | string;
  description?: string;
  location?: string;
}

/** One event, placed in time. `end` is exclusive (an all-day event ends at the next midnight). */
export interface CalendarEvent {
  start: number;
  end: number;
  summary: string;
  allDay: boolean;
  location?: string;
}

/** Events lasting at least this long are drawn as spans, like all-day events. */
export const SPAN_FROM_MS = 24 * 3_600_000;
/** At most this many events are kept per calendar. */
const MAX_EVENTS = 500;
/** A live chart loads its events again after this long, to pick up new or moved events. */
const REFRESH_MS = 10 * 60_000;
/** A live chart loads this far past the present, so the end moving on does not reload at once. */
const AHEAD_MS = 3_600_000;
/** At most this many events are listed in the tooltip. */
const TOOLTIP_EVENTS = 3;

const DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** An event time: a date (midnight in the zone, all day) or a date and time; undefined if neither. */
export function eventTime(v: CalendarEventData['start'], zone: Zone): { t: number; allDay: boolean } | undefined {
  const text = typeof v === 'string' ? v : (v?.dateTime ?? v?.date);
  if (typeof text !== 'string') return undefined;
  const date = DATE.exec(text.trim());
  if (date) return { t: zonedTime(zone.timeZone, +date[1], +date[2], +date[3]), allDay: true };
  const t = Date.parse(text);
  return Number.isFinite(t) ? { t, allDay: false } : undefined;
}

/** The API's events, placed in time and sorted by start; ones without a start are dropped. */
export function parseEvents(rows: unknown, zone: Zone): CalendarEvent[] {
  if (!Array.isArray(rows)) return [];
  const out: CalendarEvent[] = [];
  for (const row of rows as CalendarEventData[]) {
    if (typeof row !== 'object' || row === null) continue;
    const start = eventTime(row.start, zone);
    if (!start) continue;
    const end = eventTime(row.end, zone);
    out.push({
      start: start.t,
      end: end && end.t >= start.t ? end.t : start.t,
      summary: typeof row.summary === 'string' ? row.summary.trim() : '',
      allDay: start.allDay,
      ...(typeof row.location === 'string' && row.location.trim() ? { location: row.location.trim() } : {}),
    });
  }
  return out.sort((a, b) => a.start - b.start).slice(0, MAX_EVENTS);
}

/**
 * Whether an event's summary passes a filter: any of the comma-separated words in `match`,
 * ignoring case. No filter passes everything.
 */
export function matchesEvent(summary: string, match: string | undefined): boolean {
  const words = (match ?? '')
    .split(',')
    .map((w) => w.trim().toLowerCase())
    .filter((w) => w !== '');
  if (words.length === 0) return true;
  const s = summary.toLowerCase();
  return words.some((w) => s.includes(w));
}

/** Whether an event is drawn as a shaded span (all day, or a day or longer) rather than a line. */
export function isSpanEvent(e: CalendarEvent): boolean {
  return e.allDay || e.end - e.start >= SPAN_FROM_MS;
}

/** The events that touch `range` and pass the filter. */
export function eventsIn(events: readonly CalendarEvent[], range: Range, match?: string): CalendarEvent[] {
  return events.filter(
    (e) => Math.max(e.end, e.start) >= range.start && e.start <= range.end && matchesEvent(e.summary, match),
  );
}

/**
 * The events going on at `t`: started and not yet ended. An event with no length counts for
 * `slack` ms either side, so a hover near its line finds it.
 */
export function eventsAt(events: readonly CalendarEvent[], t: number, slack: number): CalendarEvent[] {
  return events.filter((e) => (e.end > e.start ? t >= e.start && t < e.end : Math.abs(t - e.start) <= slack));
}

// ---------------------------------------------------------------- loading

interface CalendarCache {
  shape: string;
  from: number;
  to: number;
  loaded: number;
  status: 'loading' | 'ready' | 'error';
  data: Map<string, CalendarEvent[]>;
  generation: number;
}

const caches = new WeakMap<HTMLElement, CalendarCache>();

/** Forget a card's calendar events (it leaves the page). */
export function stopCalendars(host: HTMLElement): void {
  const c = caches.get(host);
  if (c) c.generation++;
  caches.delete(host);
}

/** The calendar API path for one calendar over a span. */
export function calendarPath(entityId: string, from: number, to: number): string {
  const q = (t: number) => encodeURIComponent(new Date(t).toISOString());
  return `calendars/${entityId}?start=${q(from)}&end=${q(to)}`;
}

/**
 * The events of `ids` over `range`. Loaded once, and again when the span moves outside what was
 * loaded or (while the chart reaches the present) every ten minutes. Until they arrive, or if
 * they cannot be loaded, the chart draws without them; a reload keeps the old events on show.
 */
export function calendarEvents(
  ctx: ChartContext,
  ids: string[],
  range: Range,
  live: boolean,
  zone: Zone,
  now = Date.now(),
): Map<string, CalendarEvent[]> {
  if (ids.length === 0) return new Map();
  const shape = [...new Set(ids)].sort().join(',');
  let cache = caches.get(ctx.host);
  const stale =
    !cache ||
    cache.shape !== shape ||
    range.start < cache.from ||
    range.end > cache.to ||
    (live && cache.status !== 'loading' && now - cache.loaded > REFRESH_MS);
  if (stale && ctx.hass.callApi) {
    const generation = (cache?.generation ?? 0) + 1;
    const keep = cache && cache.shape === shape ? cache.data : new Map<string, CalendarEvent[]>();
    const next: CalendarCache = {
      shape,
      from: range.start,
      to: live ? range.end + AHEAD_MS : range.end,
      loaded: now,
      status: 'loading',
      data: keep,
      generation,
    };
    cache = next;
    caches.set(ctx.host, next);
    const hass = ctx.hass as Required<Pick<HomeAssistant, 'callApi'>>;
    const unique = shape.split(',');
    Promise.all(
      unique.map((id) =>
        hass.callApi<unknown>('GET', calendarPath(id, next.from, next.to)).then(
          (rows) => parseEvents(rows, zone),
          () => undefined,
        ),
      ),
    ).then((lists) => {
      if (caches.get(ctx.host) !== next || next.generation !== generation) return;
      const data = new Map<string, CalendarEvent[]>();
      unique.forEach((id, i) => {
        const list = lists[i];
        // A calendar that failed keeps what it had (none, the first time).
        data.set(id, list ?? keep.get(id) ?? []);
      });
      next.data = data;
      next.status = lists.every((l) => l === undefined) ? 'error' : 'ready';
      ctx.requestUpdate();
    });
  }
  return cache?.data ?? new Map();
}

// ---------------------------------------------------------------- tooltip

/** When an event happens, for the tooltip: "All day", "09:00 – 10:30", or dates for a long one. */
export function eventWhen(e: CalendarEvent, hass: HomeAssistant | undefined): string {
  if (e.allDay && e.end - e.start <= SPAN_FROM_MS + 3_600_000) return localize(hass, 'chart_calendar_all_day');
  if (e.end <= e.start) return formatTime(e.start, hass);
  if (isSpanEvent(e)) return `${formatDateTime(e.start, hass)} – ${formatDateTime(e.end, hass)}`;
  return `${formatTime(e.start, hass)} – ${formatTime(e.end, hass)}`;
}

/** One event the tooltip lists, with the annotation's colour. */
export interface TooltipEvent {
  event: CalendarEvent;
  color: string;
}

/** Tooltip rows for the events going on at the hovered time, under the series' values. */
export function calendarTooltipRows(
  hass: HomeAssistant | undefined,
  events: readonly TooltipEvent[],
): TemplateResult | typeof nothing {
  if (events.length === 0) return nothing;
  const shown = events.slice(0, TOOLTIP_EVENTS);
  const more = events.length - shown.length;
  return html`<div class="tooltip-events">
    ${shown.map(
      ({ event, color }) =>
        html`<div class="tooltip-row tooltip-event">
          <span class="swatch event-swatch" style="background:${color}"></span>
          <span class="tooltip-name">${event.summary || localize(hass, 'chart_calendar_event')}</span>
          <span class="tooltip-value">${eventWhen(event, hass)}</span>
        </div>`,
    )}
    ${
      more > 0
        ? html`<div class="tooltip-row tooltip-event-more">
            ${localize(hass, 'chart_calendar_more', { count: String(more) })}
          </div>`
        : nothing
    }
  </div>`;
}
