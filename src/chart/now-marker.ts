import { css, html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { Range } from '../history/types';
import { localize } from '../localize';
import type { ChartContext } from '../styles/index';
import type { CardConfig, HomeAssistant } from '../types';
import { annotationsOf, markTimes, timeList } from './annotations';
import { formatTime } from './axes';
import { formatClockDuration } from './day-clock';
import { VIEW_W } from './frame';
import type { HistoryFrame } from './frame';
import type { PlotScales } from './grid';

/**
 * A "now" line on a history chart whose span runs past the present (today, this week, a span
 * that ends later): a vertical line at the current time that moves once a minute, with an
 * optional label giving the time, or counting down to the next set time an annotation marks
 * ("Peak rate in 1 h 12 m").
 *
 *   now_marker: countdown   # off (default) | line | time | countdown
 */
export const NOW_MARKER = ['off', 'line', 'time', 'countdown'] as const;
export type NowMarker = (typeof NOW_MARKER)[number];

const MINUTE = 60_000;
/** How far ahead a countdown looks for the next mark. */
const LOOK_AHEAD = 2 * 86_400_000;

export function validateNowMarker(raw: CardConfig): void {
  const v = raw.now_marker;
  if (v !== undefined && !NOW_MARKER.includes(v as NowMarker)) {
    throw new Error(`"now_marker" must be one of: ${NOW_MARKER.join(', ')}`);
  }
}

export function nowMarkerOf(raw: CardConfig): NowMarker {
  return NOW_MARKER.includes(raw.now_marker as NowMarker) ? (raw.now_marker as NowMarker) : 'off';
}

/**
 * Whether the present falls inside `view` with room to show: a rolling span ends at the present,
 * so its line would sit on the right edge and is left out.
 */
export function nowInView(view: Range, now: number): boolean {
  const margin = (view.end - view.start) / 200;
  return now > view.start && now < view.end - margin;
}

/** The next moment, after `now`, that one of the card's time annotations marks, and its label. */
export function nextMark(
  raw: CardConfig,
  now: number,
  zone: HistoryFrame['zone'],
): { t: number; label?: string } | undefined {
  let best: { t: number; label?: string } | undefined;
  for (const a of annotationsOf(raw)) {
    if (a.type !== 'time') continue;
    const t = markTimes(timeList(a.times), { start: now + 1, end: now + LOOK_AHEAD }, zone)[0];
    if (t !== undefined && (!best || t < best.t)) best = { t, label: a.label };
  }
  return best;
}

/** The label's text for the chosen mode; empty for a bare line. */
export function nowLabel(
  mode: NowMarker,
  raw: CardConfig,
  now: number,
  zone: HistoryFrame['zone'],
  hass: HomeAssistant | undefined,
): string {
  if (mode === 'countdown') {
    const next = nextMark(raw, now, zone);
    if (next) {
      // Rounded up to the minute, so the count never reads "0 m" before the moment comes.
      const left = formatClockDuration(Math.ceil((next.t - now) / MINUTE) * MINUTE);
      return next.label
        ? localize(hass, 'now_marker_countdown', { label: next.label, duration: left })
        : localize(hass, 'now_marker_next', { duration: left });
    }
  }
  if (mode === 'time' || mode === 'countdown') return formatTime(now, hass);
  return '';
}

const ticks = new WeakMap<HTMLElement, ReturnType<typeof setTimeout>>();

/**
 * Redraw the card at the start of the next minute: one timer per card, set again by that redraw
 * while the marker is still on show. A hidden tab skips the redraw and waits for the next minute.
 */
export function tickNowMarker(ctx: ChartContext, now: number): void {
  if (ticks.has(ctx.host)) return;
  const wait = MINUTE - (now % MINUTE) + 50;
  ticks.set(
    ctx.host,
    setTimeout(() => {
      ticks.delete(ctx.host);
      if (typeof document !== 'undefined' && document.visibilityState === 'hidden') tickNowMarker(ctx, Date.now());
      else ctx.requestUpdate();
    }, wait),
  );
}

/** Stop a card's minute timer (it leaves the page). */
export function stopNowMarker(host: HTMLElement): void {
  const t = ticks.get(host);
  if (t !== undefined) clearTimeout(t);
  ticks.delete(host);
}

/** Rough width of the label in px (11 px text with its padding). */
const labelPx = (text: string) => Math.ceil(text.length * 6.2) + 18;

/**
 * The marker over a history chart's plot, in HTML so its label keeps its size: nothing unless
 * the card asks for it and the present is in view. Starts the minute timer while it is shown.
 */
export function nowMarkerLayer(
  ctx: ChartContext,
  frame: HistoryFrame,
  view: Range,
  scales: PlotScales,
  width: number,
  now = Date.now(),
): TemplateResult | typeof nothing {
  const mode = nowMarkerOf(ctx.raw);
  if (mode === 'off' || !frame.live || !nowInView(view, now)) return nothing;
  tickNowMarker(ctx, now);
  const left = scales.x(now) / VIEW_W;
  if (!(left >= 0 && left <= 1)) return nothing;
  const text = nowLabel(mode, ctx.raw, now, frame.zone, ctx.hass);
  const flip = left * width + labelPx(text) > width;
  const at = `${Math.round(left * 10000) / 100}%`;
  return html`<div class="now-marker" style="left:${at}" title=${formatTime(now, ctx.hass)}>
    <span class="now-line"></span>
    <span class="now-dot"></span>
    ${text ? html`<span class="now-label ${flip ? 'end' : ''}" aria-live="off">${text}</span>` : nothing}
  </div>`;
}

export const nowMarkerStyles = css`
  .now-marker {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0;
    pointer-events: none;
    transition: left 0.6s ease-out;
    z-index: 1;
  }
  :host([static]) .now-marker {
    transition: none;
  }
  .now-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    width: 2px;
    background: var(--primary-text-color);
    opacity: 0.85;
  }
  .now-dot {
    position: absolute;
    top: -3px;
    left: -4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-text-color);
  }
  .now-label {
    position: absolute;
    top: -2px;
    left: 8px;
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    padding: 0 8px;
    border-radius: 8px;
    white-space: nowrap;
    color: var(--card-background-color, #fff);
    background: var(--primary-text-color);
  }
  .now-label.end {
    left: auto;
    right: 8px;
  }
`;
