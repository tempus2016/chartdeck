import { render } from 'lit';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/chartdeck-card';
import { costLegend, costPartRows, partsAt } from '../src/chart/cost-parts';
import type { ChartSeries } from '../src/chart/frame';
import {
  bandColors,
  bandName,
  costBands,
  costCurrency,
  costEntities,
  costGroups,
  costMeasure,
  costOf,
  costOn,
  costRows,
  costSeries,
  costTotal,
  meanPrice,
  parseClock,
  priceSteps,
  runningSum,
  validateCost,
} from '../src/history/cost';
import type { CostFrame } from '../src/history/cost';
import { energyEntities, energyStatistics } from '../src/history/energy';
import { groupStatistics } from '../src/history/group';
import type { Point } from '../src/history/types';
import { moneyUnit, withUnit } from '../src/format';
import type { ResolvedEntity } from '../src/resolve';
import type { ChartContext } from '../src/styles/index';
import type { CardConfig, EntityConfig, HomeAssistant } from '../src/types';
import {
  costEditor,
  costFormData,
  periodFromData,
  shortClock,
  withCostFields,
  withCostForm,
  withTariff,
} from '../src/editor/cost-editor';
import { makeHass } from './helpers/hass';

class Stub extends HTMLElement {
  [key: string]: unknown;
}
for (const tag of ['ha-form', 'ha-icon-button', 'ha-expansion-panel', 'ha-selector', 'ha-entity-picker', 'ha-switch']) {
  if (!customElements.get(tag)) customElements.define(tag, class extends Stub {});
}

const H = 3_600_000;
const UTC = { timeZone: 'UTC', firstDay: 1 };
const DAY0 = Date.UTC(2026, 10, 2);
const pts = (...rows: [number, number | null][]): Point[] => rows.map(([t, v]) => ({ t: DAY0 + t * H, v }));
const values = (points: Point[]) =>
  points.map((p) => [(p.t - DAY0) / H, p.v === null ? null : Math.round(p.v * 10000) / 10000]);
const card = (extra: Record<string, unknown> = {}) =>
  ({ type: 'custom:chartdeck-card', style: 'line', ...extra }) as CardConfig;

function entity(unit: string, stateClass?: string, config: Record<string, unknown> = {}): ResolvedEntity {
  return {
    entityId: 'sensor.e',
    config: { entity: 'sensor.e', ...config },
    stateObj: { entity_id: 'sensor.e', state: '0', attributes: stateClass ? { state_class: stateClass } : {} },
    name: 'Import',
    unit,
    decimals: 1,
    value: 0,
    display: '0',
  } as unknown as ResolvedEntity;
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('cost options', () => {
  it('reads clock times, with or without seconds', () => {
    expect(parseClock('00:30')).toBe(30);
    expect(parseClock('5:30:00')).toBe(330);
    expect(parseClock('24:00')).toBe(1440);
    expect(parseClock('24:30')).toBeUndefined();
    expect(parseClock('7pm')).toBeUndefined();
    expect(parseClock(7)).toBeUndefined();
  });

  it('accepts a full cost and rejects bad ones with readable errors', () => {
    expect(() =>
      validateCost(
        card({
          cost: {
            price: 'sensor.rate',
            currency: 'gbp',
            split: true,
            tariff: [{ from: '00:30', to: '05:30', price: 0.09, name: 'Off-peak', color: 'green' }],
          },
          entities: [{ entity: 'sensor.a', cost: false }, { entity: 'sensor.b', cost: { price: 0.2 } }, 'sensor.c'],
        }),
      ),
    ).not.toThrow();
    expect(() => validateCost(card({ style: 'pie', cost: { price: 1 } }))).toThrow('"cost" works with these styles');
    expect(() => validateCost(card({ cost: 'yes' }))).toThrow('"cost" must be true, false or a list');
    expect(() => validateCost(card({ cost: { price: 'cheap' } }))).toThrow('"cost.price" must be a number');
    expect(() => validateCost(card({ cost: { currency: 'pounds' } }))).toThrow('three-letter currency code');
    expect(() => validateCost(card({ cost: { split: 'yes' } }))).toThrow('"cost.split" must be true or false');
    expect(() => validateCost(card({ cost: { tariff: {} } }))).toThrow('must be a list of periods');
    expect(() => validateCost(card({ cost: { tariff: [3] } }))).toThrow('must have "from", "to" and "price"');
    expect(() => validateCost(card({ cost: { tariff: [{ from: 'x', to: '01:00', price: 1 }] } }))).toThrow('.from"');
    expect(() => validateCost(card({ cost: { tariff: [{ from: '01:00', to: 'x', price: 1 }] } }))).toThrow('.to"');
    expect(() => validateCost(card({ cost: { tariff: [{ from: '00:00', to: '24:00', price: 1 }] } }))).toThrow(
      'end at another time',
    );
    expect(() => validateCost(card({ cost: { tariff: [{ from: '00:00', to: '01:00', price: '1' }] } }))).toThrow(
      '.price" must be a number',
    );
    expect(() => validateCost(card({ cost: { tariff: [{ from: '00:00', to: '01:00', price: 1, name: 2 }] } }))).toThrow(
      '.name" must be text',
    );
    expect(() =>
      validateCost(card({ entities: [{ entity: 'sensor.a', cost: { price: 1 }, transform: 'cumulative' }] })),
    ).toThrow('can\'t have both "cost" and "transform"');
    expect(() => validateCost(card({}))).not.toThrow();
  });

  it('merges an entity cost over the card, honours cost: false and falls back to the Energy settings price', () => {
    const raw = card({ cost: { price: 0.2, currency: 'GBP' } });
    expect(costOf({ entity: 'a' } as EntityConfig, raw)).toEqual({ price: 0.2, currency: 'GBP' });
    expect(costOf({ entity: 'a', cost: false } as EntityConfig, raw)).toBeUndefined();
    expect(costOf({ entity: 'a', cost: { price: 'sensor.r' } } as EntityConfig, raw)).toEqual({
      price: 'sensor.r',
      currency: 'GBP',
    });
    expect(costOf({ entity: 'a' } as EntityConfig, card())).toBeUndefined();
    expect(costOf({ entity: 'a', energy_price: 0.3 } as EntityConfig, card({ cost: true }))).toEqual({ price: 0.3 });
    expect(costOn(raw)).toBe(true);
    expect(costOn(card({ entities: [{ entity: 'a', cost: { price: 1 } }] }))).toBe(true);
    expect(costOn(card({ style: 'pie', cost: true }))).toBe(false);
    expect(
      costEntities(card({ cost: { price: 'sensor.r' }, entities: [{ entity: 'a', cost: { price: 'sensor.s' } }] })),
    ).toEqual(['sensor.r', 'sensor.s']);
    expect(costEntities(raw, [{ entity: 'a', energy_price: 'sensor.p' } as EntityConfig])).toEqual([]);
    expect(costEntities(card({ cost: true }), [{ entity: 'a', energy_price: 'sensor.p' } as EntityConfig])).toEqual([
      'sensor.p',
    ]);
  });

  it('picks the currency: its own, Home Assistant’s, the price entity’s unit, else euros', () => {
    const hass = makeHass({ 'sensor.r': ['0.2', { unit_of_measurement: 'USD/kWh' }] });
    expect(costCurrency({ currency: 'gbp' }, hass)).toBe('GBP');
    expect(costCurrency({}, { ...hass, config: { currency: 'NOK' } })).toBe('NOK');
    expect(costCurrency({ price: 'sensor.r' }, hass)).toBe('USD');
    expect(costCurrency({ price: 0.2 }, hass)).toBe('EUR');
  });
});

describe('money', () => {
  it('formats money with the symbol where the language puts it, a minus before the symbol', () => {
    const en = moneyUnit('GBP', makeHass({}));
    expect(en.decimals).toBe(2);
    expect(withUnit('4.82', en.unit)).toBe('£4.82');
    expect(withUnit('-1.20', en.unit)).toBe('-£1.20');
    const de = moneyUnit('EUR', { ...makeHass({}), locale: { language: 'de' } });
    expect(withUnit('4,82', de.unit)).toBe('4,82 €');
    expect(moneyUnit('JPY', makeHass({})).decimals).toBe(0);
    // Still reads as the code where a unit is shown on its own.
    expect(en.unit.startsWith('GBP')).toBe(true);
    expect(withUnit('3', 'kWh')).toBe('3 kWh');
  });
});

describe('price steps', () => {
  const tariff = [
    { from: '00:30', to: '05:30', price: 0.09, name: 'Off-peak' },
    { from: '16:00', to: '19:00', price: 0.32, name: 'Peak' },
    { from: '23:00', to: '00:30', price: 0.09, name: 'Off-peak' },
  ];

  it('lays tariff periods over a fixed price every day, past midnight too', () => {
    const { bandOf } = costBands({ price: 0.24, tariff });
    expect(bandOf).toEqual([1, 2, 1]);
    const steps = priceSteps({ start: DAY0, end: DAY0 + 24 * H }, 0.24, tariff, bandOf, UTC);
    expect(steps.map((s) => [(s.t - DAY0) / H, s.v, s.band])).toEqual([
      [0, 0.09, 1],
      [5.5, 0.24, 0],
      [16, 0.32, 2],
      [19, 0.24, 0],
      [23, 0.09, 1],
    ]);
    expect(meanPrice(steps, DAY0 + 16 * H, DAY0 + 20 * H)).toBeCloseTo((3 * 0.32 + 0.24) / 4);
    // Only the peak band counts; the rest is free.
    expect(meanPrice(steps, DAY0 + 16 * H, DAY0 + 20 * H, 2)).toBeCloseTo((3 * 0.32) / 4);
    expect(meanPrice(steps, DAY0 + 17 * H, DAY0 + 17 * H)).toBe(0.32);
    expect(meanPrice([], DAY0, DAY0 + H)).toBeNull();
  });

  it('follows a price entity, its first price standing for the time before it and gaps keeping the last', () => {
    const rate = pts([2, 0.2], [3, null], [4, 0.3]);
    const steps = priceSteps({ start: DAY0, end: DAY0 + 6 * H }, rate, [], [], UTC);
    expect(steps.map((s) => [(s.t - DAY0) / H, s.v])).toEqual([
      [0, 0.2],
      [4, 0.3],
    ]);
    expect(meanPrice(steps, DAY0 - H, DAY0)).toBe(0.2);
    // No known price at all: unknown.
    const none = priceSteps({ start: DAY0, end: DAY0 + H }, pts([0, null]), [], [], UTC);
    expect(meanPrice(none, DAY0, DAY0 + H)).toBeNull();
    expect(meanPrice(priceSteps({ start: DAY0, end: DAY0 + H }, undefined, [], [], UTC), DAY0, DAY0 + H)).toBeNull();
  });

  it('names and colours bands by price, cheapest green', () => {
    const { bands } = costBands({ price: 0.24, tariff });
    expect(bands).toHaveLength(3);
    expect(bandColors(bands, 0.24)).toEqual(['amber', 'green', 'red']);
    expect(bandColors([{ price: undefined }], undefined)).toEqual(['primary']);
    expect(bandColors([{ price: 1, color: 'teal' }, { price: 2 }], 1)).toEqual(['teal', 'red']);
    const many = costBands({
      price: 0.1,
      tariff: [1, 2, 3, 4, 5].map((p) => ({ from: `0${p}:00`, to: `0${p}:30`, price: p })),
    });
    expect(bandColors(many.bands, 0.1)[0]).toBe('green');
    const hass = makeHass({});
    expect(bandName({ name: 'Peak', price: 0.32 }, 'GBP', hass)).toBe('Peak');
    expect(bandName({ price: 0.09 }, 'GBP', hass)).toBe('£0.09');
    expect(bandName({ price: 'sensor.r' }, 'GBP', hass)).toBe('Standard');
  });
});

describe('cost sums', () => {
  const flat = (v: number) => () => v;

  it('prices a meter by how much it rose between readings, at the mean price between them', () => {
    const steps = priceSteps({ start: DAY0, end: DAY0 + 4 * H }, pts([0, 0.1], [2, 0.3]), [], [], UTC);
    const out = costTotal(
      pts([0, 100], [1, 101], [3, 103], [4, null], [5, 104]),
      { how: 'increasing', factor: 1 },
      (a, b) => meanPrice(steps, a, b),
    );
    // 1 kWh at 0.1, then 2 kWh over 1-3 h (half at 0.1, half at 0.3), then 1 kWh across the gap at 0.3.
    expect(values(out)).toEqual([
      [0, 0],
      [1, 0.1],
      [3, 0.5],
      [4, null],
      [5, 0.8],
    ]);
  });

  it('prices a net meter by every change, and Wh as thousandths of a kWh', () => {
    const out = costTotal(pts([0, 10], [1, 8], [2, 12]), { how: 'total', factor: 1 }, flat(1));
    expect(values(out).map((r) => r[1])).toEqual([0, -2, 2]);
    expect(costMeasure(entity('Wh', 'total_increasing'))).toEqual({ how: 'increasing', factor: 1e-3 });
    expect(costMeasure(entity('kWh', 'total'))).toEqual({ how: 'total', factor: 1 });
    expect(costMeasure(entity('W'))).toEqual({ how: 'power', factor: 1e-3 });
    expect(costMeasure(entity('kW', 'total_increasing')).how).toBe('increasing');
    expect(costMeasure(entity('m³', 'total_increasing'))).toEqual({ how: 'increasing', factor: 1 });
  });

  it('integrates a power over time, writing the total at each cut and on to now', () => {
    const out = costTotal(
      pts([0, 2], [2, 0], [3, null]),
      { how: 'power', factor: 1 },
      flat(0.5),
      [DAY0 + H],
      DAY0 + 4 * H,
    );
    expect(values(out)).toEqual([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, null],
    ]);
    const held = costTotal(pts([0, 1]), { how: 'power', factor: 1 }, flat(1), [], DAY0 + 2 * H);
    expect(values(held)).toEqual([
      [0, 0],
      [2, 2],
    ]);
  });

  it('prices statistics rows by their hour and groups a running total by its change', () => {
    expect(values(costRows(pts([0, 2], [1, null]), 1, flat(0.5)))).toEqual([
      [0, 1],
      [1, null],
    ]);
    expect(values(costRows(pts([0, 2]), 1, () => null))).toEqual([[0, null]]);
    const total = pts([0, 0], [1, 1], [2, 3], [3, null], [5, 6]);
    const bounds = [0, 1, 2, 3, 4, 5, 6].map((h) => DAY0 + h * H);
    expect(costGroups(total, bounds, DAY0 + 5.5 * H).map((p) => p.v)).toEqual([1, 2, 0, null, 3, 0]);
    expect(costGroups(total, [DAY0 - 2 * H, DAY0 - H], DAY0).map((p) => p.v)).toEqual([null]);
    expect(costGroups(total, [DAY0 + 6 * H, DAY0 + 7 * H], DAY0 + 5 * H).map((p) => p.v)).toEqual([null]);
    expect(values(runningSum(pts([0, 1], [1, null], [2, 2])))).toEqual([
      [0, 1],
      [1, null],
      [2, 3],
    ]);
  });
});

describe('cost series', () => {
  const hass = { ...makeHass({}), config: { currency: 'GBP' } } as HomeAssistant;
  const bounds = [0, 12, 24].map((h) => DAY0 + h * H);
  const frame = (extra: Partial<CostFrame> = {}): CostFrame => ({
    load: { start: DAY0, end: DAY0 + 24 * H },
    until: DAY0 + 24 * H,
    zone: UTC,
    source: 'history',
    hass,
    cumulative: false,
    groupRows: (rows, b, u) => groupStatistics(rows, b, 'change', u),
    ...extra,
  });
  const meter = pts([0, 0], [6, 6], [17, 10], [24, 12]);
  const cost = {
    price: 0.2,
    split: true,
    tariff: [{ from: '16:00', to: '19:00', price: 0.5, name: 'Peak' }],
  };

  it('groups a meter’s cost and splits it by band, the header showing the span’s total in the currency', () => {
    const out = costSeries(entity('kWh', 'total_increasing'), meter, cost, frame({ bounds }));
    // 6 kWh at 0.2; 4 kWh over 6-17 h (1 h of it peak); 2 kWh at 0.2.
    const second = 4 * ((10 * 0.2 + 0.5) / 11) + 2 * ((2 * 0.5 + 5 * 0.2) / 7);
    expect(out.points.map((p) => p.v)).toEqual([expect.closeTo(1.2), expect.closeTo(second)]);
    expect(out.entity.display).toBe(`£${(1.2 + second).toFixed(2)}`);
    expect(out.entity.decimals).toBe(2);
    expect(out.parts?.map((p) => p.name)).toEqual(['£0.20', 'Peak']);
    const sum = out.parts!.reduce((a, p) => a + (p.points[1].v ?? 0), 0);
    expect(sum).toBeCloseTo(second);
  });

  it('draws the running total on a line and carries an ungrouped total on to now', () => {
    const line = costSeries(entity('kWh', 'total_increasing'), meter, cost, frame({ bounds, cumulative: true }));
    expect(line.parts).toBeUndefined();
    expect(line.points[1].v).toBeCloseTo(line.entity.value as number);
    const plain = costSeries(
      entity('kWh', 'total_increasing', { decimals: 3 }),
      pts([0, 0], [1, 1]),
      { price: 1 },
      frame(),
    );
    expect(values(plain.points)).toEqual([
      [0, 0],
      [1, 1],
      [24, 1],
    ]);
    expect(plain.entity.display).toBe('£1.000');
  });

  it('prices statistics rows by the hour and sums them into groups', () => {
    const rows = [0, 1, 2].map((h): Point => ({ t: DAY0 + h * H, v: 1 }));
    const out = costSeries(entity('kWh'), rows, { price: 0.3 }, frame({ bounds, source: 'statistics' }));
    expect(out.points[0].v).toBeCloseTo(0.9);
  });

  it('draws nothing, and says so, without a price', () => {
    const out = costSeries(entity('kWh'), meter, {}, frame());
    expect(out.noPrice).toBe(true);
    expect(out.points.every((p) => p.v === null)).toBe(true);
  });

  it('lists each band’s share in the key and the tooltip', () => {
    const out = costSeries(entity('kWh', 'total_increasing'), meter, cost, frame({ bounds }));
    const s = { index: 0, entity: out.entity, points: out.points, costParts: out.parts, color: 'red' } as ChartSeries;
    expect(partsAt(out.parts!, bounds[0]).map((p) => p.v)).toEqual([expect.closeTo(1.2), 0]);
    expect(partsAt(out.parts!, 1).map((p) => p.v)).toEqual([0, 0]);
    const host = document.createElement('div');
    render(costLegend([s, s]), host);
    expect(host.querySelectorAll('.cost-band')).toHaveLength(2);
    expect(costLegend([{ ...s, costParts: undefined }])).toBeTypeOf('symbol');
    const ctx = { hass } as unknown as ChartContext;
    render(
      costPartRows(ctx, [{ s, p: { t: 5, v: 1 } }], () => bounds[1]),
      host,
    );
    expect(host.querySelectorAll('.cost-part')).toHaveLength(2);
    expect(host.textContent).toContain('Peak');
    expect(costPartRows(ctx, [{ s, p: undefined }], () => bounds[1])).toBeTypeOf('symbol');
    expect(costPartRows(ctx, [{ s, p: { t: 5, v: 1 } }], () => undefined)).toBeTypeOf('symbol');
  });
});

describe('Energy settings prices', () => {
  it('keeps each flow’s price from the Energy settings for the cost', () => {
    const stats = energyStatistics(
      {
        energy_sources: [
          {
            type: 'grid',
            flow_from: [{ stat_energy_from: 'sensor.import', entity_energy_price: 'sensor.rate' }],
            flow_to: [{ stat_energy_to: 'sensor.export', number_energy_price: 0.15 }],
          },
          { type: 'gas', stat_energy_from: 'sensor.gas', number_energy_price: 1.1 },
        ],
      },
      ['grid_import', 'grid_export', 'gas'],
    );
    expect(stats.map((s) => s.price)).toEqual(['sensor.rate', 0.15, 1.1]);
    const entities = energyEntities(stats, makeHass({}));
    expect(entities.map((e) => (e as { energy_price?: unknown }).energy_price)).toEqual(['sensor.rate', 0.15, 1.1]);
  });
});

type Card = HTMLElement & { setConfig(c: CardConfig): void; hass?: HomeAssistant; updateComplete: Promise<boolean> };

async function mount(config: Record<string, unknown>, hass: HomeAssistant): Promise<Card> {
  const el = document.createElement('chartdeck-card') as Card;
  el.setConfig({ type: 'custom:chartdeck-card', ...config } as CardConfig);
  el.hass = hass;
  document.body.appendChild(el);
  for (let i = 0; i < 3; i++) {
    await el.updateComplete;
    await new Promise((r) => setTimeout(r, 0));
  }
  return el;
}

describe('cost on the card', () => {
  function meterHass(history: Record<string, { s: string; lu: number }[]>, stats?: Record<string, unknown[]>) {
    const hass = makeHass({
      'sensor.import': [
        '1010',
        { friendly_name: 'Import', unit_of_measurement: 'kWh', state_class: 'total_increasing' },
      ],
      'sensor.rate': ['0.3', { unit_of_measurement: 'GBP/kWh' }],
    });
    hass.config = { currency: 'GBP', time_zone: 'UTC' };
    hass.callWS = vi.fn(async (msg: Record<string, unknown>) =>
      msg.type === 'recorder/statistics_during_period' ? (stats ?? {}) : history,
    ) as unknown as HomeAssistant['callWS'];
    return hass;
  }

  it('draws a line of the running cost, priced by the price entity, with the total in the header', async () => {
    const now = Date.now();
    const sec = (ago: number) => (now - ago) / 1000;
    const hass = meterHass({
      'sensor.import': [
        { s: '1000', lu: sec(10 * H) },
        { s: '1010', lu: sec(5 * H) },
      ],
      'sensor.rate': [{ s: '0.3', lu: sec(30 * H) }],
    });
    const el = await mount(
      {
        style: 'line',
        period: { last: 12, unit: 'hour' },
        cost: { price: 'sensor.rate' },
        entities: ['sensor.import'],
      },
      hass,
    );
    const header = el.shadowRoot!.querySelector('.series-item')!.textContent!.replace(/\s+/g, ' ').trim();
    expect(header).toBe('Import £3.00');
    expect(el.shadowRoot!.querySelectorAll('path.line')).toHaveLength(1);
    const calls = (hass.callWS as unknown as { mock: { calls: [Record<string, unknown>][] } }).mock.calls;
    expect(calls.some(([m]) => (m.entity_ids as string[]).includes('sensor.rate'))).toBe(true);
  });

  it('stacks each column by tariff band, with a key of the bands', async () => {
    const now = Date.now();
    const sec = (ago: number) => (now - ago) / 1000;
    const hass = meterHass({
      'sensor.import': [
        { s: '1000', lu: sec(60 * H) },
        { s: '1004', lu: sec(40 * H) },
        { s: '1010', lu: sec(20 * H) },
        { s: '1012', lu: sec(2 * H) },
      ],
    });
    const el = await mount(
      {
        style: 'column',
        period: { last: 3, unit: 'day' },
        cost: {
          price: 0.2,
          split: true,
          tariff: [{ from: '00:00', to: '12:00', price: 0.1, name: 'Night' }],
        },
        entities: ['sensor.import'],
      },
      hass,
    );
    const root = el.shadowRoot!;
    expect(root.querySelectorAll('.cost-band')).toHaveLength(2);
    expect(root.querySelectorAll('.col').length).toBeGreaterThan(2);
    expect(root.querySelector('.series-item')!.textContent).toContain('£');
  });

  it('reads statistics as each hour’s change', async () => {
    const start = Date.now() - 3 * H;
    const rows = [0, 1, 2].map((h) => ({ start: start + h * H, end: start + (h + 1) * H, change: 2, state: 1000 + h }));
    const hass = meterHass({}, { 'sensor.import': rows });
    const el = await mount(
      {
        style: 'column',
        source: 'statistics',
        group_by: 'day',
        period: { calendar: 'week' },
        cost: { price: 0.5 },
        entities: ['sensor.import'],
      },
      hass,
    );
    const calls = (hass.callWS as unknown as { mock: { calls: [Record<string, unknown>][] } }).mock.calls;
    const query = calls.find(([m]) => m.type === 'recorder/statistics_during_period')![0];
    expect(query.period).toBe('hour');
    expect(query.types).toContain('change');
    expect(el.shadowRoot!.querySelector('.series-item')!.textContent).toContain('£');
  });

  it('asks for a price when none is set', async () => {
    const now = Date.now();
    const hass = meterHass({ 'sensor.import': [{ s: '1000', lu: (now - H) / 1000 }] });
    const el = await mount({ style: 'area', cost: {}, entities: ['sensor.import'] }, hass);
    expect(el.shadowRoot!.querySelector('.chart-message')!.textContent).toContain('Set a price or a tariff');
  });
});

describe('cost editor', () => {
  it('reads and writes the card’s cost through the form', () => {
    const raw = card({ cost: { price: 'sensor.rate', currency: 'GBP', split: true } });
    expect(costFormData(card())).toEqual({ cost_on: false });
    expect(costFormData(card({ cost: true }))).toEqual({ cost_on: true, cost_split: false });
    expect(costFormData(raw)).toEqual({
      cost_on: true,
      cost_split: true,
      cost_price_entity: 'sensor.rate',
      cost_currency: 'GBP',
    });
    expect(costFormData(card({ cost: { price: 0.2 } })).cost_price).toBe(0.2);
    expect(withCostForm(raw, { cost_on: false }).cost).toBeUndefined();
    expect(withCostForm(card(), { cost_on: true }).cost).toEqual({});
    // A number typed replaces the entity; the entity picked replaces a number.
    expect(withCostForm(raw, { ...costFormData(raw), cost_price: 0.3 }).cost).toMatchObject({ price: 0.3 });
    const fixed = card({ cost: { price: 0.3 } });
    expect(withCostForm(fixed, { ...costFormData(fixed), cost_price_entity: 'sensor.x' }).cost).toEqual({
      price: 'sensor.x',
    });
    expect(withCostForm(fixed, { cost_on: true }).cost).toEqual({});
    expect(withCostForm(raw, { ...costFormData(raw), cost_currency: ' eur ', cost_split: false }).cost).toEqual({
      price: 'sensor.rate',
      currency: 'EUR',
    });
    expect(withCostForm(raw, { cost_on: true, cost_price_entity: '' }).cost).toEqual({});
  });

  it('edits tariff periods: short times, blanks left out, emptied list removed', () => {
    expect(shortClock('05:30:00')).toBe('05:30');
    expect(shortClock('5:30')).toBe('05:30');
    expect(shortClock(undefined)).toBe('');
    const before = { from: '00:00', to: '07:00', price: 0 };
    expect(
      periodFromData({ from: '00:30:00', to: '05:30:00', price: 0.09, name: ' Off-peak ', color: '' }, before),
    ).toEqual({
      from: '00:30',
      to: '05:30',
      price: 0.09,
      name: 'Off-peak',
    });
    expect(periodFromData({}, before)).toEqual(before);
    const raw = card({ cost: { price: 1, tariff: [before] } });
    expect(withTariff(raw, []).cost).toEqual({ price: 1 });
    expect(withTariff(card(), [before]).cost).toEqual({ tariff: [before] });
  });

  it('draws the cost section: the form, each period with a remove button, and add', async () => {
    const commit = vi.fn();
    const host = document.createElement('div');
    document.body.appendChild(host);
    const config = card({ cost: { price: 0.2, tariff: [{ from: '00:00', to: '07:00', price: 0.1 }] } });
    render(costEditor({ hass: makeHass({}), config, commit }, true), host);
    const forms = host.querySelectorAll('ha-form');
    expect(forms).toHaveLength(2);
    const schema = (forms[0] as unknown as { schema: { name: string }[] }).schema;
    expect(schema.some((s) => s.name === 'cost_split')).toBe(true);
    forms[0].dispatchEvent(new CustomEvent('value-changed', { detail: { value: { cost_on: false } } }));
    expect(commit.mock.calls[0][0].cost).toBeUndefined();
    forms[1].dispatchEvent(
      new CustomEvent('value-changed', { detail: { value: { from: '01:00:00', to: '07:00:00', price: 0.1 } } }),
    );
    expect(commit.mock.calls[1][0].cost.tariff[0].from).toBe('01:00');
    (host.querySelector('ha-icon-button') as HTMLElement).click();
    expect(commit.mock.calls[2][0].cost.tariff).toBeUndefined();
    (host.querySelector('.cost-add') as HTMLElement).click();
    expect(commit.mock.calls[3][0].cost.tariff).toHaveLength(2);
    const off = document.createElement('div');
    render(costEditor({ hass: makeHass({}), config: card(), commit }), off);
    expect(off.querySelectorAll('ha-form')).toHaveLength(1);
    expect(off.querySelector('.cost-add')).toBeNull();
  });

  it('adds each entity’s cost fields while a cost is set', () => {
    expect(withCostFields('line', undefined, card(), undefined)).toBeUndefined();
    expect(withCostFields('pie', undefined, card({ cost: true }), undefined)).toBeUndefined();
    const on = withCostFields('line', undefined, card({ cost: true }), undefined)!;
    expect(on.fields.map((f) => [f.name, f.default])).toEqual([
      ['cost_entity_on', true],
      ['cost_entity_price', undefined],
    ]);
    expect(withCostFields('line', undefined, card({ cost: true }), undefined)).toBe(on);
    const own = withCostFields(
      'column',
      undefined,
      card({ entities: [{ entity: 'a', cost: { price: 1 } }] }),
      undefined,
    )!;
    expect(own.fields.find((f) => f.name === 'cost_entity_on')?.default).toBe(false);
  });
});
