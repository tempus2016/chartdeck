/**
 * A straight line through a scatter chart's dots by least squares, and how well it fits. Pure
 * maths, no drawing.
 *
 *   fit: linear   # none (default) | linear
 */

export const FIT = ['none', 'linear'] as const;
export type Fit = (typeof FIT)[number];

/** A line `y = intercept + slope · x` and how much of the spread in y it explains. */
export interface LinearFit {
  slope: number;
  intercept: number;
  /** R², 0 to 1: the share of the spread in y the line explains (1 when every y is the same). */
  r2: number;
  /** How many points it was fitted to. */
  n: number;
}

/**
 * The least-squares line through `points` ([x, y] pairs). Sums are taken about the means so large
 * readings (a meter in the thousands) don't lose precision. Undefined with fewer than two points,
 * or when every x is the same (a vertical line has no slope).
 */
export function linearFit(points: readonly (readonly [number, number])[]): LinearFit | undefined {
  const n = points.length;
  if (n < 2) return undefined;
  let mx = 0;
  let my = 0;
  for (const [x, y] of points) {
    mx += x;
    my += y;
  }
  mx /= n;
  my /= n;
  let sxx = 0;
  let sxy = 0;
  let syy = 0;
  for (const [x, y] of points) {
    const dx = x - mx;
    const dy = y - my;
    sxx += dx * dx;
    sxy += dx * dy;
    syy += dy * dy;
  }
  // Every x the same, to rounding: what is left is a few units in the last place of the mean.
  const ulp = 16 * Number.EPSILON * Math.max(1, Math.abs(mx));
  if (!(sxx > n * ulp * ulp)) return undefined;
  const slope = sxy / sxx;
  const r2 = syy > 0 ? Math.min(1, Math.max(0, (sxy * sxy) / (sxx * syy))) : 1;
  return { slope, intercept: my - slope * mx, r2, n };
}

/**
 * The part of the line inside the box `x` × `y` (data units), as its two ends, or undefined when
 * the line misses the box. The line spans the whole x range unless it leaves through the top or
 * bottom first.
 */
export function clipFit(
  fit: Pick<LinearFit, 'slope' | 'intercept'>,
  [x0, x1]: readonly [number, number],
  [y0, y1]: readonly [number, number],
): [[number, number], [number, number]] | undefined {
  const at = (x: number) => fit.intercept + fit.slope * x;
  let lo = Math.min(x0, x1);
  let hi = Math.max(x0, x1);
  const yl = Math.min(y0, y1);
  const yh = Math.max(y0, y1);
  if (fit.slope === 0) {
    if (fit.intercept < yl || fit.intercept > yh) return undefined;
  } else {
    const a = (yl - fit.intercept) / fit.slope;
    const b = (yh - fit.intercept) / fit.slope;
    lo = Math.max(lo, Math.min(a, b));
    hi = Math.min(hi, Math.max(a, b));
    if (!(hi > lo)) return undefined;
  }
  return [
    [lo, at(lo)],
    [hi, at(hi)],
  ];
}

/**
 * Decimals that show `v` to about `digits` significant figures (-0.2134 → 2, 153.2 → 0), at most
 * 6. Zero shows as 0.
 */
export function significantDecimals(v: number, digits = 2): number {
  if (!Number.isFinite(v) || v === 0) return 0;
  return Math.min(6, Math.max(0, digits - 1 - Math.floor(Math.log10(Math.abs(v)))));
}
