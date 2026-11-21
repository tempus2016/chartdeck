import { css, html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { localize } from '../localize';
import type { Point, Range } from '../history/types';
import type { ChartContext } from '../styles/index';
import type { CardConfig } from '../types';
import type { ChartSeries } from './frame';
import { nearestIndex, snapTime, tooltipEnabled } from './tooltip';

/*
 * Opening Home Assistant's History panel at a point on the chart:
 *
 *   point_action:
 *     action: history   # none (default) | history
 *     window: 2h        # how much history round the point (default 2h; s, min, h, d)
 *
 * Clicking the plot with a mouse opens /history for every series' entity, from an hour before
 * the point to an hour after (or the whole group, for a grouped point: a day's column opens that
 * day). On touch the first tap shows the tooltip as before, and the tooltip carries an "Open in
 * History" link; with the tooltip off, a tap opens History straight away. A plot with zoom waits
 * a moment after a click, so a double-click still resets the zoom instead.
 */

export const POINT_ACTIONS = ['none', 'history'] as const;
export type PointAction = (typeof POINT_ACTIONS)[number];

export const DEFAULT_HISTORY_WINDOW = '2h';
const UNIT_MS: Record<string, number> = { s: 1000, min: 60_000, h: 3_600_000, d: 86_400_000 };
const DURATION = /^\s*(\d+(?:\.\d+)?)\s*(s|min|h|d)\s*$/;
/** At most a month round the point: the History panel gets slow beyond that. */
const MAX_WINDOW_MS = 31 * 86_400_000;
/** A click this long after another is a double-click's first half: zoom resets on the second. */
export const CLICK_WAIT_MS = 250;
/** A press that moved further than this (px) before release was a drag, not a click. */
const DRAG_PX = 6;

interface PointActionConfig {
  action?: PointAction;
  window?: string;
}

/** A window as written ("30min", "2h", "1d") in ms; undefined when it isn't one. */
export function parseHistoryWindow(v: unknown): number | undefined {
  if (typeof v !== 'string') return undefined;
  const m = DURATION.exec(v);
  if (!m) return undefined;
  const ms = Number(m[1]) * UNIT_MS[m[2]];
  return ms > 0 && ms <= MAX_WINDOW_MS ? ms : undefined;
}

/** Checks for `point_action`. Throws a readable error. */
export function validatePointAction(raw: CardConfig): void {
  const pa = raw.point_action as unknown;
  if (pa === undefined) return;
  if (typeof pa !== 'object' || pa === null || Array.isArray(pa)) {
    throw new Error('"point_action" must be an object like { action: history, window: 2h }');
  }
  const { action, window } = pa as PointActionConfig;
  if (action !== undefined && !POINT_ACTIONS.includes(action)) {
    throw new Error(`"point_action.action" must be one of: ${POINT_ACTIONS.join(', ')}`);
  }
  if (window !== undefined && parseHistoryWindow(window) === undefined) {
    throw new Error('"point_action.window" must be a duration like 30min, 2h or 1d (at most 31d)');
  }
}

/** The window round a point when the card opens History there; undefined when it doesn't. */
export function historyWindow(raw: CardConfig): number | undefined {
  const pa = raw.point_action as PointActionConfig | undefined;
  if (pa?.action !== 'history') return undefined;
  return parseHistoryWindow(pa.window ?? DEFAULT_HISTORY_WINDOW) ?? parseHistoryWindow(DEFAULT_HISTORY_WINDOW);
}

/**
 * The span to show for a point at `t`: a grouped point's own group (`end` set), else `window`
 * centred on it. Kept out of the future: a span past `now` slides back to end at it.
 */
export function historySpan(t: number, window: number, point: Point | undefined, now: number): Range {
  if (point?.end !== undefined && point.end > point.t) return { start: point.t, end: Math.min(point.end, now) };
  let start = t - window / 2;
  let end = t + window / 2;
  if (end > now) {
    start -= end - now;
    end = now;
  }
  return { start, end };
}

/** The entities of the series drawn, each once; long-term statistics with no entity (`a:b`) left out. */
export function historyEntities(series: readonly ChartSeries[]): string[] {
  const ids = series.map((s) => s.entity.entityId).filter((id) => /^[a-z0-9_]+\.[a-z0-9_]+$/i.test(id));
  return [...new Set(ids)];
}

/** The History panel's address for these entities over this span. */
export function historyUrl(ids: readonly string[], span: Range): string {
  const iso = (ms: number) => encodeURIComponent(new Date(ms).toISOString());
  return `/history?entity_id=${ids.map(encodeURIComponent).join(',')}&start_date=${iso(span.start)}&end_date=${iso(span.end)}`;
}

/** A chart whose points stand for whole slots (a column's group, read at its middle): the slot at `t`. */
export type SlotAt = (t: number) => Range | undefined;

/** The address for the series' point nearest `t`, or undefined with no entity to show. */
export function historyTarget(
  series: readonly ChartSeries[],
  t: number,
  window: number,
  now = Date.now(),
  slotAt?: SlotAt,
): string | undefined {
  const ids = historyEntities(series);
  if (ids.length === 0) return undefined;
  const slot = slotAt?.(t);
  if (slot) return historyUrl(ids, historySpan(slot.start, window, { t: slot.start, v: null, end: slot.end }, now));
  let point: Point | undefined;
  for (const s of series) {
    const i = nearestIndex(s.points, t);
    if (i >= 0 && s.points[i].t === t) {
      point = s.points[i];
      break;
    }
  }
  return historyUrl(ids, historySpan(t, window, point, now));
}

/** Go there the way Home Assistant does for a navigate action (its own router, no reload). */
export function openHistory(from: HTMLElement, url: string): void {
  from.dispatchEvent(
    new CustomEvent('hass-action', {
      bubbles: true,
      composed: true,
      detail: { config: { tap_action: { action: 'navigate', navigation_path: url } }, action: 'tap' },
    }),
  );
}

/** An "Open in History" link for the tooltip at `t`, when the card opens History. */
export function historyLink(
  ctx: ChartContext,
  series: readonly ChartSeries[],
  t: number | undefined,
  slotAt?: SlotAt,
): TemplateResult | typeof nothing {
  const window = historyWindow(ctx.raw);
  if (window === undefined || t === undefined) return nothing;
  const url = historyTarget(series, t, window, Date.now(), slotAt);
  if (!url) return nothing;
  return html`<a
    class="tooltip-history"
    href=${url}
    @pointerdown=${(ev: Event) => ev.stopPropagation()}
    @click=${(ev: MouseEvent) => {
      ev.preventDefault();
      ev.stopPropagation();
      openHistory(ctx.host, url);
    }}
    >${localize(ctx.hass, 'history_open')}</a
  >`;
}

/** Elements inside the plot that have a tap of their own: a click on them is theirs. */
const OWN_TAP = '.entity, a, button, [role="button"], .header-over';

interface TapState {
  x: number;
  y: number;
  type: string;
  timer?: ReturnType<typeof setTimeout>;
}
const taps = new WeakMap<HTMLElement, TapState>();

/**
 * The plot's tap handlers when the card opens History: remember where a press started, and on the
 * click that follows open History at the reading nearest the pointer (snapped as the tooltip is).
 * Touch opens straight away only when there is no tooltip to tap through. `zoom` delays a click
 * so a double-click can cancel it.
 */
export function historyTap(
  ctx: ChartContext,
  range: Range,
  series: readonly ChartSeries[],
  zoom = false,
  slotAt?: SlotAt,
): { down(ev: PointerEvent): void; click(ev: MouseEvent): void } | undefined {
  const window = historyWindow(ctx.raw);
  if (window === undefined) return undefined;
  const withTooltip = tooltipEnabled(ctx.raw);
  return {
    down(ev) {
      const prev = taps.get(ctx.host);
      if (prev?.timer !== undefined) clearTimeout(prev.timer);
      taps.set(ctx.host, { x: ev.clientX, y: ev.clientY, type: ev.pointerType || 'mouse' });
    },
    click(ev) {
      const press = taps.get(ctx.host);
      if (!press) return;
      if ((ev.target as Element | null)?.closest?.(OWN_TAP)) return;
      if (Math.hypot(ev.clientX - press.x, ev.clientY - press.y) > DRAG_PX) return;
      if (press.type !== 'mouse' && withTooltip) return;
      const rect = (ev.currentTarget as HTMLElement).getBoundingClientRect();
      const frac = rect.width > 0 ? Math.min(1, Math.max(0, (ev.clientX - rect.left) / rect.width)) : 0;
      const t = snapTime(
        series.map((s) => s.points),
        range.start + frac * (range.end - range.start),
      );
      if (t === undefined) return;
      const url = historyTarget(series, t, window, Date.now(), slotAt);
      if (!url) return;
      const target = ev.currentTarget as HTMLElement;
      if (!zoom) {
        openHistory(target, url);
        return;
      }
      if (ev.detail > 1) return;
      press.timer = setTimeout(() => {
        press.timer = undefined;
        openHistory(target, url);
      }, CLICK_WAIT_MS);
    },
  };
}

export const historyLinkStyles = css`
  .tooltip-history {
    display: block;
    margin-top: 4px;
    padding-top: 4px;
    border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
    color: var(--primary-color);
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    pointer-events: auto;
    cursor: pointer;
  }
  .tooltip-history:hover,
  .tooltip-history:focus-visible {
    text-decoration: underline;
  }
  .plot-area.opens-history,
  .plot-area.hoverable.opens-history {
    cursor: pointer;
  }
`;
