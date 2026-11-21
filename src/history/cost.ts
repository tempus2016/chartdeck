import { formatNumber, moneyUnit, withUnit } from '../format';
import { localize } from '../localize';
import type { ResolvedEntity } from '../resolve';
import type { CardConfig, EntityConfig, HomeAssistant } from '../types';
import type { EnergyMarks } from './energy';
import { key } from './fetch';
import { increments } from './group';
import { HistoryStore } from './store';
import { addUnits, startOf, wallTime, zonedTime } from './timezone';
import type { Zone } from './timezone';
import type { Point, Range } from './types';

/*
 * Cost (`cost` on the card or on an entity): a history chart draws what the energy cost instead
 * of how much was used.
 *
 *   cost:
 *     price: sensor.octopus_rate        # an entity (its history: the price when each kWh was used)
 *     # price: 0.24                      # or a fixed price per kWh
 *     tariff:                            # time-of-use prices, in Home Assistant's time zone
 *       - { from: "00:30", to: "05:30", price: 0.09, name: Off-peak }
 *       - { from: "16:00", to: "19:00", price: 0.32, name: Peak }
 *     currency: GBP                      # Home Assistant's currency when left out
 *     split: true                        # column chart: each column stacked by tariff band
 *
 * - The price is per kWh for energy (Wh and MWh are converted), and per the entity's own unit for
 *   anything else (m³ of gas, litres of water).
 * - A tariff period runs from `from` to `to` every day, past midnight when `to` is earlier. Times
 *   no period covers take `price` (a number or an entity). The first period listed wins where two
 *   overlap.
 * - A price entity holds each price until it changes, so a reading is priced at what the entity
 *   said at the time. Before its first known price the first one is used; unavailable stretches
 *   keep the last known price. Prices may be negative (paid to use energy).
 * - A meter (state_class total_increasing or total, or any energy unit) is priced by how much it
 *   went up between readings, at the mean price between them. A power sensor (W, kW, MW) is
 *   integrated over time, each stretch at the price then.
 * - Long-term statistics (and `source: energy`) are read as each hour's change, priced at that
 *   hour's mean price. A price that changes on the half hour is averaged across the hour.
 * - The line and area charts draw the running total over the span; the column chart each
 *   group's cost. The header shows the total over the span, in the currency.
 * - On a card with `source: energy`, a flow the Energy settings give a price uses it when the
 *   card's `cost` names none (`cost: {}` or `cost: true`).
 * - An entity can leave the card's cost with `cost: false`, or set its own (its keys win over the
 *   card's).
 */

/** Styles that draw a cost. */
export const COST_STYLES = ['line', 'column', 'area'];

export interface TariffPeriod {
  from: string;
  to: string;
  price: number;
  name?: string;
  color?: string;
}

export interface CostConfig {
  price?: string | number;
  tariff?: TariffPeriod[];
  currency?: string;
  split?: boolean;
}

const HOUR = 3_600_000;
const DAY_MINUTES = 1440;
const CLOCK = /^\s*(\d{1,2}):(\d{2})(?::(\d{2}))?\s*$/;
const isEntityId = (v: unknown): v is string => typeof v === 'string' && /^[a-z_]+\.[a-z0-9_]+$/.test(v.trim());
const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

/** "05:30" (or "05:30:00", as Home Assistant's time picker writes it) as minutes after midnight; "24:00" is 1440. */
export function parseClock(v: unknown): number | undefined {
  if (typeof v !== 'string') return undefined;
  const m = CLOCK.exec(v);
  if (!m) return undefined;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 24 || min > 59 || (h === 24 && min > 0)) return undefined;
  return h * 60 + min;
}

function validateOne(cost: unknown, where: string): void {
  if (cost === undefined || typeof cost === 'boolean') return;
  if (!isObject(cost)) throw new Error(`"${where}" must be true, false or a list of options`);
  const { price, tariff, currency, split } = cost;
  if (price !== undefined && !isEntityId(price) && !(typeof price === 'number' && Number.isFinite(price))) {
    throw new Error(`"${where}.price" must be a number or an entity id`);
  }
  if (currency !== undefined && (typeof currency !== 'string' || !/^[A-Za-z]{3}$/.test(currency))) {
    throw new Error(`"${where}.currency" must be a three-letter currency code, like GBP or EUR`);
  }
  if (split !== undefined && typeof split !== 'boolean') throw new Error(`"${where}.split" must be true or false`);
  if (tariff === undefined) return;
  if (!Array.isArray(tariff)) throw new Error(`"${where}.tariff" must be a list of periods`);
  tariff.forEach((p, i) => {
    const at = `${where}.tariff[${i}]`;
    if (!isObject(p)) throw new Error(`"${at}" must have "from", "to" and "price"`);
    const from = parseClock(p.from);
    const to = parseClock(p.to);
    if (from === undefined) throw new Error(`"${at}.from" must be a time, like 00:30`);
    if (to === undefined) throw new Error(`"${at}.to" must be a time, like 05:30`);
    if (from % DAY_MINUTES === to % DAY_MINUTES) throw new Error(`"${at}" must end at another time than it starts`);
    if (typeof p.price !== 'number' || !Number.isFinite(p.price)) throw new Error(`"${at}.price" must be a number`);
    for (const k of ['name', 'color']) {
      if (p[k] !== undefined && typeof p[k] !== 'string') throw new Error(`"${at}.${k}" must be text`);
    }
  });
}

/** Check the card's `cost` and each entity's. Throws a readable error. */
export function validateCost(raw: CardConfig): void {
  const any = raw.cost !== undefined || (raw.entities ?? []).some((e) => isObject(e) && e.cost !== undefined);
  if (!any) return;
  const style = String(raw.style ?? 'bar');
  if (!COST_STYLES.includes(style)) throw new Error(`"cost" works with these styles: ${COST_STYLES.join(', ')}`);
  validateOne(raw.cost, 'cost');
  (raw.entities ?? []).forEach((e, i) => {
    if (!isObject(e)) return;
    validateOne(e.cost, `entities[${i}].cost`);
    if (costOf(e as EntityConfig, raw) && (e as { transform?: unknown }).transform !== undefined) {
      throw new Error(`"entities[${i}]" can't have both "cost" and "transform"`);
    }
  });
}

/**
 * One entity's cost settings: its own `cost` over the card's, key by key; undefined when it has
 * none (or `cost: false`). With no price or tariff of its own, an Energy dashboard flow takes the
 * price its settings give.
 */
export function costOf(entity: EntityConfig, card: CardConfig): CostConfig | undefined {
  const own = (entity as { cost?: unknown }).cost;
  const base = card.cost;
  if (own === false) return undefined;
  if (own === undefined && (base === undefined || base === false)) return undefined;
  const merged: CostConfig = { ...(isObject(base) ? base : {}), ...(isObject(own) ? own : {}) };
  const energy = (entity as EnergyMarks).energy_price;
  if (merged.price === undefined && merged.tariff === undefined && energy !== undefined) merged.price = energy;
  return merged;
}

/** Whether any series of a cost style draws a cost. */
export function costOn(raw: CardConfig): boolean {
  if (!COST_STYLES.includes(String(raw.style ?? 'bar'))) return false;
  return raw.cost !== undefined && raw.cost !== false
    ? true
    : (raw.entities ?? []).some((e) => isObject(e) && e.cost !== undefined && e.cost !== false);
}

/** Every price entity the card's costs read, so their changes redraw it. */
export function costEntities(raw: CardConfig, configs: readonly EntityConfig[] = []): string[] {
  const ids = new Set<string>();
  const add = (c: unknown) => {
    if (isObject(c) && isEntityId(c.price)) ids.add(c.price.trim());
  };
  add(raw.cost);
  for (const e of raw.entities ?? []) if (isObject(e)) add(e.cost);
  for (const e of configs) {
    const c = costOf(e, raw);
    if (c && isEntityId(c.price)) ids.add(c.price.trim());
  }
  return [...ids];
}

/** One price band: the price outside every tariff period (band 0), or the periods sharing a name (or price). */
export interface CostBand {
  name?: string;
  price: number | string | undefined;
  color?: string;
}

/** The bands of a cost: band 0 for times no period covers, then one per distinct period name (or price). */
export function costBands(cost: CostConfig): { bands: CostBand[]; bandOf: number[] } {
  const bands: CostBand[] = [{ price: cost.price }];
  const keys = new Map<string, number>();
  const bandOf = (cost.tariff ?? []).map((p) => {
    const k = p.name ? `n:${p.name}` : `p:${p.price}`;
    let i = keys.get(k);
    if (i === undefined) {
      i = bands.length;
      keys.set(k, i);
      bands.push({ name: p.name, price: p.price, color: p.color });
    }
    return i;
  });
  return { bands, bandOf };
}

/** A price held from `t` until the next step; `band` is which band it belongs to. */
export interface PriceStep {
  t: number;
  v: number | null;
  band: number;
}

/** Which tariff period (by list order) covers a minute of the day, or -1. */
function periodAt(minute: number, periods: readonly { from: number; to: number }[]): number {
  for (let i = 0; i < periods.length; i++) {
    const { from, to } = periods[i];
    const inside = from < to ? minute >= from && minute < to : minute >= from || minute < to;
    if (inside) return i;
  }
  return -1;
}

/**
 * The price over `range` as steps: the base price (a number, an entity's readings, or none),
 * with each tariff period laid over it every day in the zone. An entity's first known price also
 * stands for the time before it; its unavailable stretches keep the price before.
 */
export function priceSteps(
  range: Range,
  base: number | Point[] | undefined,
  tariff: readonly TariffPeriod[],
  bandOf: readonly number[],
  zone: Zone,
): PriceStep[] {
  const known = Array.isArray(base) ? base.filter((p) => p.v !== null) : [];
  const baseAt = (t: number): number | null => {
    if (typeof base === 'number') return base;
    if (!known.length) return null;
    let lo = 0;
    let hi = known.length - 1;
    if (t < known[0].t) return known[0].v;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (known[mid].t <= t) lo = mid;
      else hi = mid - 1;
    }
    return known[lo].v;
  };
  const periods = tariff
    .map((p) => ({ from: parseClock(p.from), to: parseClock(p.to), price: p.price }))
    .filter((p): p is { from: number; to: number; price: number } => p.from !== undefined && p.to !== undefined)
    .map((p) => ({ ...p, to: p.to % DAY_MINUTES }));
  const times = new Set<number>([range.start]);
  for (const p of known) if (p.t > range.start && p.t < range.end) times.add(p.t);
  if (periods.length) {
    // Every period's edges on every day the range touches.
    for (let day = startOf('day', range.start, zone); day < range.end; day = addUnits('day', day, 1, zone)) {
      const w = wallTime(day, zone.timeZone);
      for (const p of periods) {
        for (const m of [p.from, p.to]) {
          const t = zonedTime(zone.timeZone, w.year, w.month, w.day, Math.floor(m / 60), m % 60);
          if (t > range.start && t < range.end) times.add(t);
        }
      }
    }
  }
  const steps: PriceStep[] = [];
  for (const t of [...times].sort((a, b) => a - b)) {
    let step: PriceStep;
    if (periods.length) {
      const w = wallTime(t, zone.timeZone);
      const i = periodAt(w.hour * 60 + w.minute, periods);
      step = i >= 0 ? { t, v: periods[i].price, band: bandOf[i] ?? 0 } : { t, v: baseAt(t), band: 0 };
    } else {
      step = { t, v: baseAt(t), band: 0 };
    }
    const last = steps[steps.length - 1];
    if (!last || last.v !== step.v || last.band !== step.band) steps.push(step);
  }
  return steps;
}

/**
 * The mean price from `a` to `b` (the price at `a` when they are equal). With `band`, the price
 * counts only while in that band and is 0 otherwise. Null when no price is known in that time.
 */
export function meanPrice(steps: readonly PriceStep[], a: number, b: number, band?: number): number | null {
  if (!steps.length) return null;
  const price = (s: PriceStep) => (band === undefined || s.band === band ? s.v : s.v === null ? null : 0);
  // The step in force at `a` (the first one stands for anything before it).
  let lo = 0;
  let hi = steps.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (steps[mid].t <= a) lo = mid;
    else hi = mid - 1;
  }
  if (b <= a) return price(steps[lo]);
  let sum = 0;
  let time = 0;
  for (let i = lo; i < steps.length; i++) {
    const from = Math.max(a, i === lo ? a : steps[i].t);
    if (from >= b) break;
    const to = Math.min(b, i + 1 < steps.length ? steps[i + 1].t : b);
    const v = price(steps[i]);
    if (v !== null && to > from) {
      sum += v * (to - from);
      time += to - from;
    }
  }
  return time > 0 ? sum / time : null;
}

/** How a series turns into energy: a meter's rises, or a power integrated over time; and the factor to kWh. */
export interface CostMeasure {
  how: 'increasing' | 'total' | 'power';
  factor: number;
}

const POWER_KW: Record<string, number> = { W: 1e-3, kW: 1, MW: 1e3 };
const ENERGY_KWH: Record<string, number> = { Wh: 1e-3, kWh: 1, MWh: 1e3 };

/** What a series measures: a power (W, kW, MW) is integrated, anything else is a meter. */
export function costMeasure(entity: ResolvedEntity): CostMeasure {
  const unit = entity.unit;
  const cls = entity.config.attribute ? undefined : entity.stateObj?.attributes?.state_class;
  if (POWER_KW[unit] !== undefined && cls !== 'total_increasing' && cls !== 'total') {
    return { how: 'power', factor: POWER_KW[unit] };
  }
  return { how: cls === 'total' ? 'total' : 'increasing', factor: ENERGY_KWH[unit] ?? 1 };
}

/**
 * A series' running cost from its first reading: a meter priced by how much it rose between
 * readings (at the mean price between them), a power by the energy of each stretch it held (at
 * the price then). A power's total is also written at each of `cuts` (group boundaries) and at
 * `end` (now: a sensor still holding its value keeps costing). A gap is a gap in the line; a
 * meter's rise across it still counts.
 */
export function costTotal(
  points: readonly Point[],
  measure: CostMeasure,
  price: (a: number, b: number) => number | null,
  cuts: readonly number[] = [],
  end = -Infinity,
): Point[] {
  const out: Point[] = [];
  let total = 0;
  if (measure.how !== 'power') {
    const steps =
      measure.how === 'increasing'
        ? increments(points as Point[])
        : (() => {
            let prev: number | null = null;
            return points.map((p) => {
              if (p.v === null) return null;
              const d = prev === null ? 0 : p.v - prev;
              prev = p.v;
              return d;
            });
          })();
    let since: number | undefined;
    points.forEach((p, i) => {
      const step = steps[i];
      if (step === null) {
        out.push({ t: p.t, v: null });
        return;
      }
      if (step !== 0) {
        const m = price(since ?? p.t, p.t);
        if (m !== null) total += step * measure.factor * m;
      }
      since = p.t;
      out.push({ t: p.t, v: total });
    });
    return out;
  }
  let held: number | null = null;
  let from = points[0]?.t ?? end;
  let c = 0;
  const accrue = (to: number) => {
    if (held !== null && to > from) {
      const m = price(from, to);
      if (m !== null) total += (held * measure.factor * (to - from) * m) / HOUR;
    }
    from = Math.max(from, to);
  };
  const reach = (t: number) => {
    while (c < cuts.length && cuts[c] < t) {
      if (cuts[c] > from) {
        accrue(cuts[c]);
        out.push({ t: cuts[c], v: held === null ? null : total });
      }
      c++;
    }
    accrue(t);
  };
  for (const p of points) {
    reach(p.t);
    held = p.v;
    out.push({ t: p.t, v: p.v === null ? null : total });
  }
  const last = points[points.length - 1];
  if (last && end > last.t) {
    reach(end);
    if (held !== null) out.push({ t: end, v: total });
  }
  return out;
}

/** Long-term statistics rows of hourly change, each priced at its hour's mean price. */
export function costRows(
  rows: readonly Point[],
  factor: number,
  price: (a: number, b: number) => number | null,
  rowMs = HOUR,
): Point[] {
  return rows.map((r) => {
    if (r.v === null) return { ...r };
    const m = price(r.t, r.t + rowMs);
    return { ...r, v: m === null ? null : r.v * factor * m };
  });
}

/** The index of the last point at or before `t`, or -1 before the first. */
function indexAt(points: readonly Point[], t: number): number {
  if (!points.length || points[0].t > t) return -1;
  let lo = 0;
  let hi = points.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (points[mid].t <= t) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}

/** The last known value at or before index `i`, or null. */
function knownAt(points: readonly Point[], i: number): number | null {
  for (let k = i; k >= 0; k--) if (points[k].v !== null) return points[k].v;
  return null;
}

/**
 * A running total grouped: each group's cost is the total at its end less the total at its start.
 * A group past `until` (now), before the first reading, or inside a gap, is a gap.
 */
export function costGroups(total: readonly Point[], bounds: readonly number[], until: number): Point[] {
  const out: Point[] = [];
  for (let i = 0; i + 1 < bounds.length; i++) {
    const start = bounds[i];
    const end = bounds[i + 1];
    const stop = Math.min(end, until);
    const group: Point = { t: start, end, v: null };
    out.push(group);
    if (stop <= start) continue;
    const last = indexAt(total, stop);
    if (last < 0) continue;
    const first = indexAt(total, start);
    let inside = false;
    for (let k = last; k > first && !inside; k--) if (total[k].v !== null) inside = true;
    // Nothing read in the group, and it began in a gap: unknown, not free.
    if (!inside && (first < 0 || total[first].v === null)) continue;
    const endTotal = knownAt(total, last);
    if (endTotal === null) continue;
    group.v = endTotal - (first < 0 ? 0 : (knownAt(total, first) ?? 0));
  }
  return out;
}

/** Grouped amounts as a running total, for the line and area charts. Gaps stay gaps. */
export function runningSum(points: readonly Point[]): Point[] {
  let sum = 0;
  return points.map((p) => {
    if (p.v === null) return { ...p };
    sum += p.v;
    return { ...p, v: sum };
  });
}

/** The currency a cost is shown in: its own, Home Assistant's, the price entity's unit ("GBP/kWh"), else euros. */
export function costCurrency(cost: CostConfig, hass: HomeAssistant | undefined): string {
  if (cost.currency) return cost.currency.toUpperCase();
  const own = hass?.config?.currency;
  if (typeof own === 'string' && /^[A-Za-z]{3}$/.test(own)) return own.toUpperCase();
  const unit = isEntityId(cost.price) ? hass?.states[cost.price.trim()]?.attributes?.unit_of_measurement : undefined;
  const code = typeof unit === 'string' ? /^([A-Za-z]{3})\s*\//.exec(unit)?.[1] : undefined;
  return code ? code.toUpperCase() : 'EUR';
}

/** A price as text in the currency ("£0.32"), for a band's name. */
export function priceText(price: number, currency: string, hass: HomeAssistant | undefined): string {
  const { unit } = moneyUnit(currency, hass);
  const decimals = Math.min(4, Math.max(2, (String(price).split('.')[1] ?? '').length));
  return withUnit(formatNumber(price, decimals, hass), unit);
}

/**
 * The entity as a cost series: its unit the currency, its decimals the currency's (unless the card
 * or entity sets its own), its value and text the total over the span (`total`).
 */
export function costEntity(
  entity: ResolvedEntity,
  total: number | null,
  currency: string,
  hass: HomeAssistant | undefined,
  decimals?: number,
): ResolvedEntity {
  const money = moneyUnit(currency, hass);
  const places = decimals ?? money.decimals;
  // No cost known: nothing to show, rather than the meter's own reading.
  if (total === null) {
    return {
      ...entity,
      unit: money.unit,
      decimals: places,
      value: null,
      valueText: '',
      display: '',
      label: entity.name,
    };
  }
  const valueText = formatNumber(total, places, hass);
  const display = withUnit(valueText, money.unit);
  return {
    ...entity,
    unit: money.unit,
    decimals: places,
    value: total,
    valueText,
    display,
    label: `${entity.name}, ${display}`,
  };
}

/** The colours of `n` bands from cheapest to dearest: green to red through amber. */
const BAND_COLORS: Record<number, string[]> = {
  1: ['primary'],
  2: ['green', 'red'],
  3: ['green', 'amber', 'red'],
  4: ['green', '#84cc16', 'amber', 'red'],
};
const MANY = ['green', '#14b8a6', '#84cc16', 'amber', '#f97316', 'red'];

/** Each band's colour: its own, else by price rank (cheapest green, dearest red). */
export function bandColors(bands: readonly CostBand[], basePrice: number | undefined): string[] {
  const priceOf = (b: CostBand, i: number) =>
    i === 0 ? (basePrice ?? (typeof b.price === 'number' ? b.price : 0)) : (b.price as number);
  const order = bands.map((b, i) => ({ i, p: priceOf(b, i) })).sort((x, y) => x.p - y.p);
  const palette = BAND_COLORS[bands.length] ?? MANY;
  const out: string[] = [];
  order.forEach(({ i }, rank) => {
    const at =
      palette.length === bands.length
        ? rank
        : Math.round((rank * (palette.length - 1)) / Math.max(1, bands.length - 1));
    out[i] = bands[i].color ?? palette[at];
  });
  return out;
}

/** A band's name: its own, else its price ("£0.09"); band 0 (outside every period) is "Standard" when its price is an entity. */
export function bandName(band: CostBand, currency: string, hass: HomeAssistant | undefined): string {
  if (band.name) return band.name;
  if (typeof band.price === 'number') return priceText(band.price, currency, hass);
  return localize(hass, 'cost_band_standard');
}

const stores = new WeakMap<HTMLElement, HistoryStore>();

export interface Prices {
  pending: boolean;
  /** Each price entity's readings over the range, by entity id. */
  points: Map<string, Point[]>;
}

/** Load (or reuse) the history of every price entity over `range`: one extra store per card. */
export function loadPrices(
  host: HTMLElement,
  hass: HomeAssistant,
  ids: readonly string[],
  range: Range,
  live: boolean,
  onChange: () => void,
): Prices {
  const points = new Map<string, Point[]>();
  if (!ids.length) return { pending: false, points };
  let store = stores.get(host);
  if (!store) {
    store = new HistoryStore(onChange);
    stores.set(host, store);
  }
  const requests = ids.map((entity) => ({ entity }));
  const loaded = store.get(hass, requests, range, 'history', { live });
  requests.forEach((r) => points.set(r.entity, loaded.data.get(key(r)) ?? []));
  return { pending: loaded.status === 'loading', points };
}

/** Pause a card's price history when it leaves the page. */
export function pausePrices(host: HTMLElement): void {
  stores.get(host)?.pause();
}

/** A cost's price steps over `range`, from its price entity's readings when it has one. */
export function costSteps(cost: CostConfig, range: Range, prices: Prices | undefined, zone: Zone): PriceStep[] {
  const { bandOf } = costBands(cost);
  const base = isEntityId(cost.price)
    ? (prices?.points.get(cost.price.trim()) ?? [])
    : typeof cost.price === 'number'
      ? cost.price
      : undefined;
  return priceSteps(range, base, cost.tariff ?? [], bandOf, zone);
}

/** Whether a cost has any way of knowing a price. */
export function hasPrice(cost: CostConfig): boolean {
  return cost.price !== undefined || (cost.tariff ?? []).length > 0;
}

/** What the history frame knows that a cost series needs. */
export interface CostFrame {
  /** The span loaded (statistics from one row early), for the price steps. */
  load: Range;
  until: number;
  zone: Zone;
  source: 'history' | 'statistics';
  /** Group boundaries, when the chart groups its readings. */
  bounds?: number[];
  prices?: Prices;
  hass: HomeAssistant | undefined;
  /** Draw the running total (line, area) rather than each group's cost (column). */
  cumulative: boolean;
  /** Group by group, the sum of rows (statistics) or the change of a running total. */
  groupRows: (rows: Point[], bounds: number[], until: number) => Point[];
}

/** One tariff band's share of a split cost series: its name, colour and grouped cost. */
export interface CostPart {
  name: string;
  color: string;
  points: Point[];
}

/**
 * A series drawn as its cost, ready to plot: grouped (each group's cost, or their running total
 * on a line) or the running total itself, with the entity carrying the span's total in the
 * currency. A column of a split cost also gets each tariff band's share (`parts`). A cost with
 * no price at all draws nothing (`noPrice`).
 */
export function costSeries(
  entity: ResolvedEntity,
  readings: Point[],
  cost: CostConfig,
  f: CostFrame,
): { entity: ResolvedEntity; points: Point[]; parts?: CostPart[]; noPrice?: boolean } {
  const currency = costCurrency(cost, f.hass);
  const decimals = typeof entity.config.decimals === 'number' ? entity.config.decimals : undefined;
  if (!hasPrice(cost)) {
    return {
      entity: costEntity(entity, null, currency, f.hass, decimals),
      points: readings.map((p) => ({ t: p.t, v: null })),
      noPrice: true,
    };
  }
  const steps = costSteps(cost, f.load, f.prices, f.zone);
  const measure = costMeasure(entity);
  const amounts = (band?: number): Point[] => {
    const price = (a: number, b: number) => meanPrice(steps, a, b, band);
    if (f.bounds && f.source === 'statistics')
      return f.groupRows(costRows(readings, measure.factor, price), f.bounds, f.until);
    const total = costTotal(readings, measure, price, f.bounds ?? [], f.until);
    if (f.bounds) return costGroups(total, f.bounds, f.until);
    // Carried on to now, as any history series is: the total holds until the next reading.
    const last = total[total.length - 1];
    if (f.source === 'history' && last && last.v !== null && last.t < f.until) total.push({ t: f.until, v: last.v });
    return total;
  };
  let points = amounts();
  let total: number | null = null;
  if (f.bounds) {
    for (const p of points) if (p.v !== null) total = (total ?? 0) + p.v;
    if (f.cumulative) points = runningSum(points);
  } else {
    for (let i = points.length - 1; i >= 0 && total === null; i--) total = points[i].v;
  }
  const out: { entity: ResolvedEntity; points: Point[]; parts?: CostPart[] } = {
    entity: costEntity(entity, total, currency, f.hass, decimals),
    points,
  };
  if (cost.split && f.bounds && !f.cumulative && (cost.tariff ?? []).length) {
    const { bands } = costBands(cost);
    const colors = bandColors(bands, typeof cost.price === 'number' ? cost.price : undefined);
    const parts = bands.map((b, i) => ({ name: bandName(b, currency, f.hass), color: colors[i], points: amounts(i) }));
    // Band 0 is only drawn when some time falls outside every period.
    out.parts = parts.filter((p, i) => i > 0 || p.points.some((q) => q.v !== null && q.v !== 0));
  }
  return out;
}
