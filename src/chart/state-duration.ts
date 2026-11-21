import type { GroupUnit } from '../history/group';
import { isGap } from './timeline';
import type { StateSpan } from './timeline';

/**
 * State duration maths: how long an entity spent in each state in each group (an hour, a day, a
 * week, a month), worked out from its state spans (see `stateSpans` in timeline.ts), and the
 * order the states stack in.
 */

/**
 * How each column's height reads (`stack`): time on top of each other, in hours (minutes when
 * grouped by hour), or each state's share of the time recorded, to 100 %.
 */
export const DURATION_STACKS = ['normal', 'percent'] as const;
export type DurationStack = (typeof DURATION_STACKS)[number];

/** Grouping choices: `auto` picks one for the span, as the column chart does. */
export const DURATION_GROUPS = ['auto', 'hour', 'day', 'week', 'month'] as const;

/** One group's time in each state. */
export interface GroupDurations {
  start: number;
  end: number;
  /** Milliseconds spent in each state in the group (gaps left out). */
  time: Map<string, number>;
  /** Milliseconds with any state recorded: the sum of `time`, before any states are left out. */
  recorded: number;
}

/**
 * Time in each state per group. `bounds` are the group boundaries (each start, then the last end).
 * Spans already stop at the present; a group after it, or one with nothing recorded, has an empty
 * map. Unavailable and unknown don't count as a state, so they leave a gap, not a slice.
 */
export function stateDurations(spans: readonly StateSpan[], bounds: readonly number[]): GroupDurations[] {
  const out: GroupDurations[] = [];
  let j = 0;
  for (let i = 0; i + 1 < bounds.length; i++) {
    const start = bounds[i];
    const end = bounds[i + 1];
    const group: GroupDurations = { start, end, time: new Map(), recorded: 0 };
    out.push(group);
    // Skip spans that end before this group; the one straddling its start counts in both.
    while (j < spans.length && spans[j].end <= start) j++;
    for (let k = j; k < spans.length && spans[k].start < end; k++) {
      const span = spans[k];
      if (isGap(span.state)) continue;
      const ms = Math.min(end, span.end) - Math.max(start, span.start);
      if (ms <= 0) continue;
      const state = span.state as string;
      group.time.set(state, (group.time.get(state) ?? 0) + ms);
      group.recorded += ms;
    }
  }
  return out;
}

/**
 * The states to draw, bottom of the stack first. With `include`, those states in that order (one
 * not seen in the period still gets its place, so the legend stays the same from day to day).
 * Otherwise every state seen, the busiest first, with "nothing happening" states (`quiet`: off,
 * idle) on top, so the active time stands on the axis where it's easy to compare.
 */
export function stackOrder(
  groups: readonly GroupDurations[][],
  include: readonly string[] | undefined,
  quiet: (state: string) => boolean,
): string[] {
  if (include && include.length) return [...new Set(include)];
  const total = new Map<string, number>();
  for (const series of groups) {
    for (const g of series) for (const [state, ms] of g.time) total.set(state, (total.get(state) ?? 0) + ms);
  }
  const busiest = (a: string, b: string) => (total.get(b) ?? 0) - (total.get(a) ?? 0) || (a < b ? -1 : a > b ? 1 : 0);
  const states = [...total.keys()];
  return [...states.filter((s) => !quiet(s)).sort(busiest), ...states.filter((s) => quiet(s)).sort(busiest)];
}

/** Milliseconds per unit of the value axis: minutes for hour groups, hours otherwise. */
export function timeScale(unit: GroupUnit): number {
  return unit === 'hour' ? 60_000 : 3_600_000;
}

/**
 * A slice's height in axis units: time in hours (minutes for hour groups), or its share of the
 * group's recorded time in percent. Nothing recorded is 0, not a division by zero.
 */
export function durationValue(ms: number, group: GroupDurations, mode: DurationStack, groupUnit: GroupUnit): number {
  if (mode === 'percent') return group.recorded > 0 ? (ms / group.recorded) * 100 : 0;
  return ms / timeScale(groupUnit);
}

/**
 * The top of the value axis: 100 for percent, else the longest group in axis units (24 h for a
 * day, 25 on the day the clocks go back), so a full column reaches the top and a part-day reads
 * as part of one.
 */
export function axisTop(groups: readonly GroupDurations[], mode: DurationStack, groupUnit: GroupUnit): number {
  if (mode === 'percent') return 100;
  const longest = Math.max(0, ...groups.map((g) => g.end - g.start));
  return longest / timeScale(groupUnit);
}

/** How strongly each quiet state's colour shows, lowest in the stack first. */
const QUIET_MIX = [55, 32, 18];

/**
 * Quiet states (off, idle) are all grey, so stacked one on another they would merge: each gets a
 * fainter mix than the one below it. Returns the percent of colour for each quiet state in `order`.
 */
export function quietMix(order: readonly string[], quiet: (state: string) => boolean): Map<string, number> {
  const out = new Map<string, number>();
  for (const state of order) {
    if (!quiet(state)) continue;
    out.set(state, QUIET_MIX[Math.min(out.size, QUIET_MIX.length - 1)]);
  }
  return out;
}
