import type { Point } from '../history/types';

/**
 * Duration curve maths: a series' readings sorted from highest to lowest, each as wide as the time
 * it held, so the curve's height at x% is the value the sensor was at or above for x% of the
 * time. Pure, no drawing.
 */

/** One stretch of the curve: a value, and the share of time (0 to 1) from `from` to `to` it covers. */
export interface CurveStep {
  v: number;
  from: number;
  to: number;
}

/** The most points one curve is drawn with; longer curves are resampled evenly across the time. */
export const MAX_CURVE_POINTS = 400;

/**
 * The curve for `points` weighted by `weights` (ms each held, from `pointWeights`): equal values
 * merged, highest first. With `skipZero`, readings of exactly 0 are left out of the time too (a
 * solar panel at night), so the curve covers only the time it ran. Empty when nothing has weight.
 */
export function durationSteps(points: readonly Point[], weights: readonly number[], skipZero = false): CurveStep[] {
  const held = new Map<number, number>();
  points.forEach((p, i) => {
    const w = weights[i];
    if (p.v === null || !Number.isFinite(p.v) || !(w > 0) || (skipZero && p.v === 0)) return;
    held.set(p.v, (held.get(p.v) ?? 0) + w);
  });
  const total = [...held.values()].reduce((a, b) => a + b, 0);
  if (!(total > 0)) return [];
  const steps: CurveStep[] = [];
  let at = 0;
  for (const v of [...held.keys()].sort((a, b) => b - a)) {
    const to = Math.min(1, at + held.get(v)! / total);
    steps.push({ v, from: at, to });
    at = to;
  }
  steps[steps.length - 1].to = 1;
  return steps;
}

/** The value at share `s` (0 to 1) of the time: the step whose stretch holds it. */
export function valueAtShare(steps: readonly CurveStep[], s: number): number | undefined {
  if (steps.length === 0) return undefined;
  let lo = 0;
  let hi = steps.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (steps[mid].to < s) lo = mid + 1;
    else hi = mid;
  }
  return steps[lo].v;
}

/** The share of time (0 to 1) the value was above `threshold`. */
export function shareAbove(steps: readonly CurveStep[], threshold: number): number {
  let share = 0;
  for (const st of steps) {
    if (st.v <= threshold) break;
    share = st.to;
  }
  return share;
}

/**
 * The curve as [share, value] corners to draw as a stepped line: each value runs flat across its
 * stretch. More than `max` corners and it is resampled at `max` evenly spaced shares instead,
 * which a plot a few hundred px wide can't tell apart.
 */
export function curvePoints(steps: readonly CurveStep[], max = MAX_CURVE_POINTS): [number, number][] {
  if (steps.length === 0) return [];
  if (steps.length * 2 <= max) return steps.flatMap((st) => [[st.from, st.v] as [number, number], [st.to, st.v]]);
  const out: [number, number][] = [];
  for (let i = 0; i < max; i++) {
    const s = i / (max - 1);
    out.push([s, valueAtShare(steps, s)!]);
  }
  return out;
}

/**
 * Marker values from YAML: a number, a list of numbers, or text with numbers split by commas or
 * spaces ("2, 5"). Undefined when anything in it isn't a number.
 */
export function parseMarkers(raw: unknown): number[] | undefined {
  if (raw === undefined || raw === null || raw === '') return [];
  const list =
    typeof raw === 'number'
      ? [raw]
      : Array.isArray(raw)
        ? raw
        : typeof raw === 'string'
          ? raw.split(/[\s,;]+/)
          : undefined;
  if (!list) return undefined;
  const out: number[] = [];
  for (const item of list) {
    if (typeof item === 'string' && item.trim() === '') continue;
    const n = typeof item === 'number' ? item : typeof item === 'string' ? Number(item) : NaN;
    if (!Number.isFinite(n)) return undefined;
    out.push(n);
  }
  return out;
}
