import { css, html, nothing, svg } from 'lit';
import type { SVGTemplateResult, TemplateResult } from 'lit';
import { formatNumber, withUnit } from '../format';
import { CALENDAR_SPANS } from '../history/period';
import type { CalendarSpan } from '../history/period';
import type { Point, Range } from '../history/types';
import { localize } from '../localize';
import type { ResolvedEntity } from '../resolve';
import type { ChartContext } from '../styles/index';
import type { CardConfig, HomeAssistant } from '../types';
import { VIEW_H, VIEW_W } from './frame';
import type { HistoryFrame } from './frame';
import type { PlotScales } from './grid';

/*
 * Goal pacing on the line chart (`goal`): the first entity's running total over a calendar
 * period, against a target.
 *
 *   goal:
 *     target: 300            # a number, or an entity whose state is the target
 *     period: month          # day | week | month | year: the chart spans the whole period
 *     direction: below       # below: stay under the target (energy use); above: reach it (solar)
 *     project: linear        # linear: the pace since the start; recent: the pace of late
 *
 * The chart spans the period from its start to its end (previous / next buttons step through
 * periods). The first entity is drawn as its running total from the period's start (the
 * `transform: cumulative` machinery: a meter's rises, a power integrated over time). Behind it:
 * the ideal pace (a straight line from zero at the start to the target at the end) and the
 * target line; from the latest total, a dashed projection to the period's end, ending in a dot
 * with its value. The header gets a pill: "On pace for 342 kWh · 14% over", in the good colour
 * when the projection is on the right side of the target for `direction`, else the bad one.
 * A finished period says "Ended at …".
 *
 * `recent` projects at the rate of the last stretch: 3 hours of a day, 2 days of a week, 7 days
 * of a month, 30 days of a year (or what has passed, when less).
 */

export const GOAL_PERIODS = CALENDAR_SPANS;
export const GOAL_DIRECTIONS = ['below', 'above'] as const;
export const GOAL_PROJECTIONS = ['linear', 'recent'] as const;

export type GoalDirection = (typeof GOAL_DIRECTIONS)[number];
export type GoalProjection = (typeof GOAL_PROJECTIONS)[number];

export interface Goal {
  target?: number | string;
  period: CalendarSpan;
  direction: GoalDirection;
  project: GoalProjection;
}

const HOUR = 3_600_000;
const DAY = 24 * HOUR;
/** How far back `recent` measures the pace, per period. */
export const RECENT_MS: Record<CalendarSpan, number> = { day: 3 * HOUR, week: 2 * DAY, month: 7 * DAY, year: 30 * DAY };

const isEntityId = (v: unknown): v is string => typeof v === 'string' && /^[a-z_]+\.[a-z0-9_]+$/.test(v.trim());
const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

/** Check `goal`. Throws a readable error. */
export function validateGoal(raw: CardConfig): void {
  const g = raw.goal;
  if (g === undefined) return;
  if (!isObject(g)) throw new Error('"goal" must have a "target"');
  const t = g.target;
  if (t !== undefined && !isEntityId(t) && !(typeof t === 'number' && Number.isFinite(t))) {
    throw new Error('"goal.target" must be a number or an entity id');
  }
  const lists: [string, readonly string[]][] = [
    ['period', GOAL_PERIODS],
    ['direction', GOAL_DIRECTIONS],
    ['project', GOAL_PROJECTIONS],
  ];
  for (const [k, values] of lists) {
    if (g[k] !== undefined && !values.includes(g[k] as string)) {
      throw new Error(`"goal.${k}" must be one of: ${values.join(', ')}`);
    }
  }
  // The goal draws the first entity as its running total: another transform would be dropped unseen.
  const first = raw.entities?.[0];
  const transform = isObject(first) ? first.transform : undefined;
  if (transform !== undefined && transform !== 'cumulative') {
    throw new Error(
      `"goal" paces the first entity's running total, so that entity can't also have "transform: ${String(transform)}"`,
    );
  }
}

/** The card's goal with its defaults, or undefined when it has none. */
export function goalOf(raw: CardConfig): Goal | undefined {
  const g = raw.goal;
  if (!isObject(g)) return undefined;
  return {
    ...(g.target !== undefined ? { target: g.target as number | string } : {}),
    period: (g.period as CalendarSpan | undefined) ?? 'month',
    direction: (g.direction as GoalDirection | undefined) ?? 'below',
    project: (g.project as GoalProjection | undefined) ?? 'linear',
  };
}

/**
 * The card the history frame reads while a goal is set: the goal's whole calendar period (the
 * card's offset and buttons kept), ungrouped, with the first entity as its running total.
 */
export function goalContext(ctx: ChartContext): ChartContext {
  const goal = goalOf(ctx.raw);
  if (!goal) return ctx;
  const own = isObject(ctx.raw.period) ? ctx.raw.period : {};
  const raw: CardConfig = {
    ...ctx.raw,
    period: {
      calendar: goal.period,
      until: 'end',
      ...(own.offset !== undefined ? { offset: own.offset } : {}),
      ...(own.navigate !== undefined ? { navigate: own.navigate } : {}),
    },
  };
  delete raw.group_by;
  delete raw.aggregate;
  // A total counts up from zero: the axis starts there unless the card sets its own.
  if (raw.y_min === undefined) raw.y_min = 0;
  const items = ctx.items.map((e, i) => {
    if (i > 0 || (e.config as { transform?: string }).transform === 'cumulative') return e;
    return { ...e, config: { ...e.config, transform: 'cumulative', transform_reset: 'none' } } as ResolvedEntity;
  });
  return { ...ctx, raw, items };
}

/** The target entity, so its changes redraw the card. */
export function goalEntities(raw: CardConfig): string[] {
  const t = isObject(raw.goal) ? raw.goal.target : undefined;
  return isEntityId(t) ? [t.trim()] : [];
}

/** The target's value: the number, or the target entity's state (undefined while it isn't one). */
export function goalTarget(goal: Goal, hass: HomeAssistant | undefined): number | undefined {
  if (typeof goal.target === 'number') return goal.target;
  if (!isEntityId(goal.target)) return undefined;
  const v = Number(hass?.states[goal.target.trim()]?.state);
  return Number.isFinite(v) && hass?.states[goal.target.trim()]?.state !== '' ? v : undefined;
}

/** The last known total at or before `t`, with its time. */
export function latest(points: readonly Point[], t: number): Point | undefined {
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    if (p.t <= t && p.v !== null) return p;
  }
  return undefined;
}

/**
 * Where the total ends the period: `linear` keeps the pace since the start; `recent` the pace of
 * the last stretch (`RECENT_MS`, or since the start when less has passed). A finished period
 * ends at what it reached. Undefined when nothing has been read yet.
 */
export function projectTotal(
  points: readonly Point[],
  range: Range,
  now: number,
  project: GoalProjection,
  period: CalendarSpan,
): { at: Point; end: number } | undefined {
  const until = Math.min(now, range.end);
  const at = latest(points, until);
  if (!at) return undefined;
  const v = at.v as number;
  if (now >= range.end) return { at, end: v };
  const elapsed = at.t - range.start;
  if (elapsed <= 0) return { at, end: v };
  let rate = v / elapsed;
  if (project === 'recent') {
    const from = Math.max(range.start, at.t - RECENT_MS[period]);
    const back = latest(points, from);
    const base = back ? (back.v as number) : 0;
    if (at.t > from) rate = (v - base) / (at.t - from);
  }
  return { at, end: v + rate * (range.end - at.t) };
}

/** How the projection sits against the target: the share over (+) or under (−) it, and whether that is good. */
export function goalVerdict(end: number, target: number, direction: GoalDirection): { share: number; good: boolean } {
  const share = target === 0 ? (end === 0 ? 0 : Math.sign(end)) : (end - target) / Math.abs(target);
  return { share, good: direction === 'below' ? end <= target : end >= target };
}

/** What the goal draws for a frame, worked out once per render. */
export interface GoalState {
  goal: Goal;
  target?: number;
  projection?: { at: Point; end: number };
  range: Range;
  entity: ResolvedEntity;
  ended: boolean;
}

/** The goal's sums for a frame, or undefined without a goal or a series. */
export function goalState(ctx: ChartContext, frame: HistoryFrame, now = Date.now()): GoalState | undefined {
  const goal = goalOf(ctx.raw);
  const s = frame.series.find((x) => x.index === 0);
  if (!goal || !s) return undefined;
  return {
    goal,
    target: goalTarget(goal, ctx.hass),
    projection: projectTotal(s.points, frame.range, now, goal.project, goal.period),
    range: frame.range,
    entity: s.entity,
    ended: now >= frame.range.end,
  };
}

/** Values the value axis must reach: zero, the target and the projected end. */
export function goalExtent(state: GoalState | undefined): Point[] {
  if (!state) return [];
  const t = state.range.start;
  return [0, state.target, state.projection?.end]
    .filter((v): v is number => typeof v === 'number' && Number.isFinite(v))
    .map((v) => ({ t, v }));
}

const fmt = (v: number, e: ResolvedEntity, hass: HomeAssistant | undefined) =>
  withUnit(formatNumber(v, e.decimals, hass), e.unit);

/** A share as a whole percent, the way the language writes it ("14%", "%14", "14 %"). */
export function percentText(share: number, hass: HomeAssistant | undefined): string {
  const options = { style: 'percent', maximumFractionDigits: 0 } as const;
  try {
    return new Intl.NumberFormat(hass?.locale?.language ?? hass?.language ?? 'en', options).format(share);
  } catch {
    return new Intl.NumberFormat('en', options).format(share);
  }
}

/** The pill's text and whether it is good news; undefined without a target or a projection. */
export function goalPillText(
  state: GoalState,
  hass: HomeAssistant | undefined,
): { text: string; good: boolean } | undefined {
  if (state.target === undefined || !state.projection) return undefined;
  const { share, good } = goalVerdict(state.projection.end, state.target, state.goal.direction);
  const value = fmt(state.projection.end, state.entity, hass);
  const percent = percentText(Math.abs(share), hass);
  const key = `goal_${state.ended ? 'ended' : 'pace'}_${share > 0 ? 'over' : share < 0 ? 'under' : 'on'}`;
  return { text: localize(hass, key, { value, percent }), good };
}

/** The pill for the header. */
export function goalPill(
  state: GoalState | undefined,
  hass: HomeAssistant | undefined,
): TemplateResult | typeof nothing {
  const pill = state ? goalPillText(state, hass) : undefined;
  if (!pill) return nothing;
  return html`<div class="goal-pill ${pill.good ? 'good' : 'bad'}" role="status">${pill.text}</div>`;
}

/** The ideal pace and the target line, drawn behind the series. */
export function goalBehind(state: GoalState | undefined, scales: PlotScales): SVGTemplateResult | typeof nothing {
  if (!state || state.target === undefined) return nothing;
  const { start, end } = state.range;
  const x0 = scales.x(start);
  const x1 = scales.x(end);
  const y0 = scales.y(0);
  const yt = scales.y(state.target);
  return svg`<g class="goal">
    <path class="goal-ideal" d="M${x0} ${y0}L${x1} ${yt}" fill="none"></path>
    <path class="goal-target" d="M${x0} ${yt}L${x1} ${yt}" fill="none"></path>
  </g>`;
}

/** The projection from the latest total to the period's end, drawn over the series. */
export function goalFront(state: GoalState | undefined, scales: PlotScales): SVGTemplateResult | typeof nothing {
  const p = state?.projection;
  if (!state || !p || state.ended) return nothing;
  const good = state.target === undefined || goalVerdict(p.end, state.target, state.goal.direction).good;
  return svg`<path
    class="goal-projection ${good ? 'good' : 'bad'}"
    d="M${scales.x(p.at.t)} ${scales.y(p.at.v as number)}L${scales.x(state.range.end)} ${scales.y(p.end)}"
    fill="none"
  ></path>`;
}

const pct = (n: number) => `${Math.round(n * 10000) / 100}%`;

/** The dots and labels in HTML over the plot (round at any card width): the target's name and the projected end. */
export function goalOverlay(
  state: GoalState | undefined,
  scales: PlotScales,
  hass: HomeAssistant | undefined,
): TemplateResult | typeof nothing {
  if (!state) return nothing;
  const parts: TemplateResult[] = [];
  if (state.target !== undefined) {
    const y = scales.y(state.target) / VIEW_H;
    if (y >= 0 && y <= 1) {
      parts.push(
        html`<span class="goal-label goal-target-label" style="top:${pct(y)}"
          >${localize(hass, 'goal_target', { value: fmt(state.target, state.entity, hass) })}</span
        >`,
      );
    }
  }
  const p = state.projection;
  if (p && !state.ended) {
    const good = state.target === undefined || goalVerdict(p.end, state.target, state.goal.direction).good;
    const x = scales.x(state.range.end) / VIEW_W;
    const y = scales.y(p.end) / VIEW_H;
    const ax = scales.x(p.at.t) / VIEW_W;
    const ay = scales.y(p.at.v as number) / VIEW_H;
    if (ax >= 0 && ax <= 1 && ay >= 0 && ay <= 1) {
      parts.push(html`<span class="goal-dot now" style="left:${pct(ax)};top:${pct(ay)}"></span>`);
    }
    if (y >= 0 && y <= 1) {
      parts.push(
        html`<span class="goal-dot end ${good ? 'good' : 'bad'}" style="left:${pct(x)};top:${pct(y)}"></span>
          <span class="goal-label goal-end-label ${good ? 'good' : 'bad'}" style="top:${pct(y)}"
            >${formatNumber(p.end, state.entity.decimals, hass)}</span
          >`,
      );
    }
  }
  return parts.length ? html`<div class="goal-layer" aria-hidden="true">${parts}</div>` : nothing;
}

export const goalStyles = css`
  .goal-pill {
    display: inline-block;
    margin: 0 0 6px;
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 0.8125em;
    font-weight: 500;
  }
  .goal-pill.good {
    color: var(--success-color, #43a047);
    background: color-mix(in srgb, var(--success-color, #43a047) 15%, transparent);
  }
  .goal-pill.bad {
    color: var(--error-color, #db4437);
    background: color-mix(in srgb, var(--error-color, #db4437) 15%, transparent);
  }
  .goal-ideal {
    stroke: var(--secondary-text-color);
    stroke-width: 1.2px;
    stroke-dasharray: 4 3;
    opacity: 0.8;
  }
  .goal-target {
    stroke: var(--success-color, #43a047);
    stroke-width: 1.4px;
  }
  .goal-projection {
    stroke-width: 2px;
    stroke-dasharray: 2 3;
    stroke-linecap: round;
  }
  .goal-projection.good,
  .goal-dot.end.good,
  .goal-end-label.good {
    stroke: var(--success-color, #43a047);
    color: var(--success-color, #43a047);
  }
  .goal-projection.bad,
  .goal-dot.end.bad,
  .goal-end-label.bad {
    stroke: var(--error-color, #db4437);
    color: var(--error-color, #db4437);
  }
  .goal-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .goal-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    margin: -4px 0 0 -4px;
    border-radius: 50%;
    background: currentColor;
  }
  .goal-dot.now {
    color: var(--primary-color);
  }
  .goal-label {
    position: absolute;
    font-size: 11px;
    line-height: 1;
    transform: translateY(calc(-100% - 4px));
    white-space: nowrap;
  }
  .goal-target-label {
    left: 4px;
    color: var(--success-color, #43a047);
  }
  .goal-end-label {
    right: 6px;
    font-weight: 600;
  }
`;
