import { css, html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { FieldBinding } from '../editor/schemas';
import { formatNumber, withUnit } from '../format';
import { shownValue } from '../history/energy';
import type { EnergyMarks } from '../history/energy';
import type { Point, Range } from '../history/types';
import { localize } from '../localize';
import type { ChartContext } from '../styles/index';
import type { CardConfig } from '../types';
import { formatDateTime } from './axes';
import { VIEW_H, VIEW_W } from './frame';
import type { ChartSeries } from './frame';
import type { PlotScales } from './grid';
import { hoverTime, nearestIndex, setHoverTime } from './tooltip';
import type { TooltipOptions } from './tooltip';

/*
 * Reading a history chart from the keyboard (`keyboard_nav`, on unless set to false). The plot is
 * one Tab stop. Left and right move between one series' readings, up and down between series,
 * Page Up and Page Down jump a tenth of the readings, Home and End go to the first and last, Enter opens the focused series' more-info and
 * Escape lets go. The focused reading becomes the chart's hover time, so the tooltip, the column
 * highlight and charts synced with this one all follow it as they follow the pointer; a ring marks
 * the reading itself and a polite live region reads it out.
 *
 * Arrows follow the time axis as drawn: right is later wherever later is drawn to the right. Charts
 * are not mirrored for right-to-left languages (time still runs left to right), so in those the
 * arrows keep their on-screen meaning; were the axis ever drawn the other way they would follow it.
 */

export const KEYBOARD_NAV_FIELDS: FieldBinding[] = [{ name: 'keyboard_nav', path: ['keyboard_nav'], default: true }];
export const KEYBOARD_NAV_SCHEMA = [{ name: 'keyboard_nav', selector: { boolean: {} } }];

export function validateKeyboardNav(raw: CardConfig): void {
  if (raw.keyboard_nav !== undefined && typeof raw.keyboard_nav !== 'boolean') {
    throw new Error('"keyboard_nav" must be true or false');
  }
}

export function keyboardNavEnabled(raw: CardConfig): boolean {
  return raw.keyboard_nav !== false;
}

// ---------------------------------------------------------------------------------------------
// Pure moves.

/** Where the keyboard is: which series (its `ChartSeries.index`) and which reading time. */
export interface KeyPoint {
  series: number;
  t: number;
}

/** A series' readings that hold a value: the ones a key can land on. */
export function readings(points: readonly Point[]): Point[] {
  return points.filter((p) => p.v !== null);
}

/** The reading of `points` (values only) nearest in time to `t`, or undefined when it has none. */
export function nearestReading(points: readonly Point[], t: number): Point | undefined {
  const valid = readings(points);
  const i = nearestIndex(valid, t);
  return i < 0 ? undefined : valid[i];
}

export type KeyMove = 'prev' | 'next' | 'back' | 'on' | 'up' | 'down' | 'first' | 'last';

/** How many readings Page Up and Page Down jump: a tenth of the series, at least one. */
export function pageStep(count: number): number {
  return Math.max(1, Math.round(count / 10));
}

/**
 * The point a move lands on, among `series` (each with its readings). With nowhere yet, any move
 * starts on the first series: at its first reading for `first`, else at its latest. A move off
 * either end stays put; a move to another series lands on its reading nearest in time.
 */
export function moveKey(
  series: readonly { index: number; points: readonly Point[] }[],
  from: KeyPoint | undefined,
  move: KeyMove,
): KeyPoint | undefined {
  const list = series.filter((s) => s.points.some((p) => p.v !== null));
  if (list.length === 0) return undefined;
  let k = from ? list.findIndex((s) => s.index === from.series) : -1;
  if (k < 0 || !from) {
    const first = readings(list[0].points);
    const p = move === 'first' ? first[0] : first[first.length - 1];
    return { series: list[0].index, t: p.t };
  }
  if (move === 'up' || move === 'down') {
    k = Math.min(list.length - 1, Math.max(0, k + (move === 'down' ? 1 : -1)));
    const p = nearestReading(list[k].points, from.t)!;
    return { series: list[k].index, t: p.t };
  }
  const valid = readings(list[k].points);
  if (move === 'first') return { series: list[k].index, t: valid[0].t };
  if (move === 'last') return { series: list[k].index, t: valid[valid.length - 1].t };
  const i = nearestIndex(valid, from.t);
  const step = move === 'back' || move === 'on' ? pageStep(valid.length) : 1;
  const next = Math.min(valid.length - 1, Math.max(0, i + (move === 'next' || move === 'on' ? step : -step)));
  return { series: list[k].index, t: valid[next].t };
}

/**
 * What a key does: left and right step back or on in time (`later` is +1 when later is drawn to
 * the right, -1 when the axis runs the other way), Page Up and Page Down jump a tenth of the
 * readings back or on, up and down change series.
 */
export function keyMove(key: string, later: 1 | -1 = 1): KeyMove | undefined {
  switch (key) {
    case 'ArrowRight':
      return later === 1 ? 'next' : 'prev';
    case 'ArrowLeft':
      return later === 1 ? 'prev' : 'next';
    case 'ArrowUp':
      return 'up';
    case 'ArrowDown':
      return 'down';
    case 'PageUp':
      return 'back';
    case 'PageDown':
      return 'on';
    case 'Home':
      return 'first';
    case 'End':
      return 'last';
    default:
      return undefined;
  }
}

// ---------------------------------------------------------------------------------------------
// Per card.

const states = new WeakMap<HTMLElement, KeyPoint>();

/** Where this card's keyboard is, if it is reading the chart. */
export function keyPoint(host: HTMLElement): KeyPoint | undefined {
  return states.get(host);
}

/** Let go of the chart (the card leaves the page). */
export function stopKeyboard(host: HTMLElement): void {
  states.delete(host);
}

/** What the plot area takes for keyboard reading: its name, and its key and blur handlers. */
export interface KeyHandlers {
  label: string;
  keydown(ev: KeyboardEvent): void;
  blur(ev: FocusEvent): void;
}

export interface KeyboardNav {
  keys?: KeyHandlers;
  /** The ring on the focused reading and the live region that reads it; goes in the plot's overlay. */
  layer: TemplateResult | typeof nothing;
}

export interface KeyboardNavOptions extends TooltipOptions {
  /** Where a reading is drawn, in plot units (a column's top, a stacked layer's top); null hides the ring. */
  position?: (s: ChartSeries, p: Point) => [number, number] | null;
}

const pct = (n: number) => `${Math.round(n * 10000) / 100}%`;

function readOut(ctx: ChartContext, s: ChartSeries, p: Point, options: KeyboardNavOptions): string {
  const value = options.text
    ? options.text(s, p)
    : p.v === null
      ? '—'
      : withUnit(formatNumber(shownValue(s.entity, p.v), s.entity.decimals, ctx.hass), s.entity.unit);
  return localize(ctx.hass, 'keyboard_nav_point', {
    name: s.entity.name,
    time: options.heading ? options.heading(p.t) : formatDateTime(p.t, ctx.hass),
    value,
  });
}

/**
 * Keyboard reading for one plot of `series` (the readings as drawn, `range` the span on show).
 * `label` names the chart; the plot area's own name adds how to use the keys.
 */
export function keyboardNav(
  ctx: ChartContext,
  series: readonly ChartSeries[],
  scales: PlotScales,
  range: Range,
  label: string,
  options: KeyboardNavOptions = {},
): KeyboardNav {
  if (!keyboardNavEnabled(ctx.raw)) return { layer: nothing };
  const host = ctx.host;
  const later: 1 | -1 = scales.x(range.end) >= scales.x(range.start) ? 1 : -1;
  const keydown = (ev: KeyboardEvent) => {
    // Keys pressed on something inside the plot (the zoom's reset button) are its own.
    if (ev.target !== ev.currentTarget || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    const at = states.get(host);
    if (ev.key === 'Escape') {
      if (!at) return;
      ev.preventDefault();
      ev.stopPropagation();
      states.delete(host);
      if (hoverTime(host) === at.t) setHoverTime(ctx, undefined);
      else ctx.requestUpdate();
      return;
    }
    if (ev.key === 'Enter') {
      const s = at && series.find((x) => x.index === at.series);
      if (!s || (s.entity.config as EnergyMarks).statistic) return;
      ev.preventDefault();
      host.dispatchEvent(
        new CustomEvent('hass-more-info', { bubbles: true, composed: true, detail: { entityId: s.entity.entityId } }),
      );
      return;
    }
    const move = keyMove(ev.key, later);
    if (!move) return;
    ev.preventDefault();
    // Carry on from where the pointer last was, when it moved since.
    const hovered = hoverTime(host);
    const from = at && hovered !== undefined ? { ...at, t: hovered } : at;
    // Only readings on show: a zoomed line keeps one either side of its window for drawing.
    const inView = series.map((s) => ({
      index: s.index,
      points: s.points.filter((p) => p.t >= range.start && p.t <= range.end),
    }));
    const next = moveKey(inView, from, move);
    if (!next) return;
    states.set(host, next);
    if (hoverTime(host) === next.t) ctx.requestUpdate();
    else setHoverTime(ctx, next.t);
  };
  const blur = () => {
    const at = states.get(host);
    if (!at) return;
    states.delete(host);
    if (hoverTime(host) === at.t) setHoverTime(ctx, undefined);
    else ctx.requestUpdate();
  };
  const at = states.get(host);
  // The ring shows while the chart's hover time is still the keyboard's (the pointer can take it over).
  const s = at && hoverTime(host) === at.t ? series.find((x) => x.index === at.series) : undefined;
  const p = s ? nearestReading(s.points, at!.t) : undefined;
  let ring: TemplateResult | typeof nothing = nothing;
  if (s && p && p.v !== null) {
    const xy = options.position
      ? options.position(s, p)
      : [scales.x(p.t), options.dotY ? options.dotY(s, p) : scales.y(p.v)];
    const [x, y] = xy ?? [NaN, NaN];
    if (x !== null && y !== null && x >= 0 && x <= VIEW_W && y >= 0 && y <= VIEW_H) {
      ring = html`<span
        class="key-point"
        style="left:${pct(x / VIEW_W)};top:${pct(y / VIEW_H)};background:${s.color}"
      ></span>`;
    }
  }
  return {
    keys: {
      label: localize(ctx.hass, 'keyboard_nav_label', { chart: label }),
      keydown,
      blur,
    },
    layer: html`${ring}
      <span class="key-live" role="status" aria-live="polite">${s && p ? readOut(ctx, s, p, options) : ''}</span>`,
  };
}

export const keyboardStyles = css`
  .plot-area[tabindex]:focus {
    outline: none;
  }
  .plot-area[tabindex]:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-radius: 2px;
  }
  .key-point {
    position: absolute;
    z-index: 2;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    box-shadow:
      0 0 0 2px var(--card-background-color, #fff),
      0 0 0 4px var(--primary-color);
  }
  .key-live {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`;
