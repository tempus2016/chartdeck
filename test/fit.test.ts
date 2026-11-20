import { describe, expect, it } from 'vitest';
import { clipFit, linearFit, significantDecimals } from '../src/chart/fit';

describe('linearFit', () => {
  it('finds the line through points on it exactly, with R² 1', () => {
    const f = linearFit([
      [0, 3],
      [1, 1],
      [2, -1],
    ])!;
    expect(f.slope).toBeCloseTo(-2);
    expect(f.intercept).toBeCloseTo(3);
    expect(f.r2).toBeCloseTo(1);
    expect(f.n).toBe(3);
  });

  it('gives the least-squares line and R² of scattered points', () => {
    // x 1..5, y 2 4 5 4 5: slope 0.6, intercept 2.2, R² 0.6.
    const f = linearFit([
      [1, 2],
      [2, 4],
      [3, 5],
      [4, 4],
      [5, 5],
    ])!;
    expect(f.slope).toBeCloseTo(0.6);
    expect(f.intercept).toBeCloseTo(2.2);
    expect(f.r2).toBeCloseTo(0.6);
  });

  it('keeps its precision on large readings', () => {
    const f = linearFit([
      [1e9, 5e9 + 1],
      [1e9 + 1, 5e9 + 3],
      [1e9 + 2, 5e9 + 5],
    ])!;
    expect(f.slope).toBeCloseTo(2);
    expect(f.r2).toBeCloseTo(1);
  });

  it('has no line for fewer than two points or when every x is the same', () => {
    expect(linearFit([])).toBeUndefined();
    expect(linearFit([[1, 2]])).toBeUndefined();
    expect(
      linearFit([
        [4, 1],
        [4, 9],
      ]),
    ).toBeUndefined();
  });

  it('calls a flat line through equal readings a perfect fit', () => {
    const f = linearFit([
      [1, 7],
      [2, 7],
      [3, 7],
    ])!;
    expect(f.slope).toBe(0);
    expect(f.r2).toBe(1);
  });
});

describe('clipFit', () => {
  it('spans the x range when the line stays inside', () => {
    expect(clipFit({ slope: 1, intercept: 0 }, [0, 10], [-5, 20])).toEqual([
      [0, 0],
      [10, 10],
    ]);
  });

  it('stops where the line leaves through the top or bottom', () => {
    const [a, b] = clipFit({ slope: -2, intercept: 10 }, [0, 10], [0, 8])!;
    expect(a[0]).toBeCloseTo(1);
    expect(a[1]).toBeCloseTo(8);
    expect(b[0]).toBeCloseTo(5);
    expect(b[1]).toBeCloseTo(0);
  });

  it('misses the box above, below, or flat outside', () => {
    expect(clipFit({ slope: 1, intercept: 100 }, [0, 10], [0, 10])).toBeUndefined();
    expect(clipFit({ slope: 0, intercept: -1 }, [0, 10], [0, 10])).toBeUndefined();
    expect(clipFit({ slope: 0, intercept: 4 }, [0, 10], [0, 10])).toEqual([
      [0, 4],
      [10, 4],
    ]);
  });
});

describe('significantDecimals', () => {
  it('shows about two significant figures', () => {
    expect(significantDecimals(-0.2134)).toBe(2);
    expect(significantDecimals(153.2)).toBe(0);
    expect(significantDecimals(2.5)).toBe(1);
    expect(significantDecimals(0.00034)).toBe(5);
    expect(significantDecimals(1e-9)).toBe(6);
    expect(significantDecimals(0)).toBe(0);
    expect(significantDecimals(Number.NaN)).toBe(0);
    expect(significantDecimals(12, 3)).toBe(1);
  });
});
