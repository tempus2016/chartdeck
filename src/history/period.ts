import type { CardConfig } from '../types';
import type { Range } from './types';

export const PERIOD_UNITS = ['hour', 'day', 'week', 'month'] as const;
export type PeriodUnit = (typeof PERIOD_UNITS)[number];

export interface Period {
  last: number;
  unit: PeriodUnit;
}

export const DEFAULT_PERIOD: Period = { last: 24, unit: 'hour' };

const UNIT_MS: Record<Exclude<PeriodUnit, 'month'>, number> = {
  hour: 3_600_000,
  day: 86_400_000,
  week: 7 * 86_400_000,
};

/** `period` from YAML: `{ last: 24, unit: hour }`, every key optional. Throws a readable error. */
export function parsePeriod(raw: CardConfig['period']): Period {
  if (raw === undefined || raw === null) return DEFAULT_PERIOD;
  if (typeof raw !== 'object' || Array.isArray(raw)) throw new Error('"period" must have "last" and "unit"');
  const { last = DEFAULT_PERIOD.last, unit = DEFAULT_PERIOD.unit } = raw as { last?: unknown; unit?: unknown };
  const n = typeof last === 'string' && last.trim() !== '' ? Number(last) : last;
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 1) {
    throw new Error('"period.last" must be a whole number of 1 or more');
  }
  if (!PERIOD_UNITS.includes(unit as PeriodUnit)) {
    throw new Error(`"period.unit" must be one of: ${PERIOD_UNITS.join(', ')}`);
  }
  return { last: n, unit: unit as PeriodUnit };
}

/** The rolling span ending at `now`. Months step back by calendar month in local time. */
export function rollingRange(period: Period, now: number): Range {
  if (period.unit === 'month') {
    const start = new Date(now);
    start.setMonth(start.getMonth() - period.last);
    return { start: start.getTime(), end: now };
  }
  return { start: now - period.last * UNIT_MS[period.unit], end: now };
}
