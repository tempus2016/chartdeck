import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import '../src/chartdeck-card';
import {
  MAX_TABLE_ROWS,
  changeFromAverage,
  firstKept,
  formatChange,
  tableAverage,
  tableMode,
  tableViewSchema,
  validateTableView,
} from '../src/chart/table-view';
import { STYLES } from '../src/styles';
import type { ChartStyleModule } from '../src/styles';
import type { CardConfig, HomeAssistant } from '../src/types';
import { H, ago, chartHass, mountCard, mountEditor, q, qa } from './helpers/chart';
import type { Card } from './helpers/chart';
import { unfold } from './helpers/schema';

const now = Date.now();

function hass() {
  return chartHass(
    {
      'sensor.in': ['21', { friendly_name: 'Inside', unit_of_measurement: '°C' }],
      'sensor.out': ['9', { friendly_name: 'Outside', unit_of_measurement: '°C' }],
    },
    {
      'sensor.in': [
        { s: '19', lu: ago(now, 20 * H) },
        { s: '21', lu: ago(now, 2 * H) },
      ],
      'sensor.out': [
        { s: '5', lu: ago(now, 20 * H) },
        { s: 'unavailable', lu: ago(now, 10 * H) },
        { s: '9', lu: ago(now, 4 * H) },
      ],
    },
  );
}

const LINE = { style: 'line', entities: ['sensor.in', 'sensor.out'], table_toggle: true };

async function settle(card: Card) {
  await card.updateComplete;
  await new Promise((r) => setTimeout(r, 0));
  await card.updateComplete;
}

const options = (card: Card) => qa(card, '.table-switch-option') as HTMLButtonElement[];
const cells = (card: Card) =>
  qa(card, '.data-table tbody tr').map((r) => [...r.children].map((c) => c.textContent!.replace(/\s+/g, ' ').trim()));
const heads = (card: Card) => qa(card, '.data-table thead th').map((c) => c.textContent!.replace(/\s+/g, ' ').trim());

async function choose(card: Card, which: 'chart' | 'table') {
  options(card)[which === 'chart' ? 0 : 1].click();
  await settle(card);
}

beforeEach(() => localStorage.clear());
afterEach(() => {
  document.body.innerHTML = '';
  vi.restoreAllMocks();
});

describe('table maths', () => {
  it('averages values once each, or weighted by how long each was held, leaving out gaps and skipped rows', () => {
    expect(tableAverage([1, 2, 3])).toBe(2);
    expect(tableAverage([1, null, 3])).toBe(2);
    expect(tableAverage([10, 20], [3, 1])).toBe(12.5);
    expect(tableAverage([10, 20, 99], undefined, new Set([2]))).toBe(15);
    // A reading held for no time counts for nothing.
    expect(tableAverage([10, 20], [0, 1])).toBe(20);
    expect(tableAverage([null, Number.NaN])).toBeNull();
    expect(tableAverage([])).toBeNull();
  });

  it('measures change in percent of the average, with none for a gap or a zero average', () => {
    expect(changeFromAverage(11, 10)).toBeCloseTo(10);
    expect(changeFromAverage(9, 10)).toBeCloseTo(-10);
    // Against a negative average, more is still up.
    expect(changeFromAverage(-5, -10)).toBeCloseTo(50);
    expect(changeFromAverage(null, 10)).toBeNull();
    expect(changeFromAverage(5, null)).toBeNull();
    expect(changeFromAverage(5, 0)).toBeNull();
  });

  it('writes a change signed, whole, in the user number format', () => {
    expect(formatChange(9.4)).toBe('+9 %');
    expect(formatChange(-4.2)).toBe('−4 %');
    expect(formatChange(0.3)).toBe('0 %');
    expect(formatChange(-0.4)).toBe('0 %');
    const de = { locale: { language: 'de', number_format: 'decimal_comma' } } as unknown as HomeAssistant;
    expect(formatChange(1234, de)).toBe('+1.234 %');
  });

  it('keeps the latest rows', () => {
    expect(firstKept(10)).toBe(0);
    expect(firstKept(MAX_TABLE_ROWS + 5)).toBe(5);
    expect(firstKept(10, 4)).toBe(6);
  });

  it('checks its options', () => {
    expect(() => validateTableView({ table_toggle: true, table_change: false } as CardConfig)).not.toThrow();
    expect(() => validateTableView({ table_toggle: 'yes' } as unknown as CardConfig)).toThrow(
      '"table_toggle" must be true or false',
    );
    expect(() => validateTableView({ table_change: 1 } as unknown as CardConfig)).toThrow(
      '"table_change" must be true or false',
    );
    for (const style of ['line', 'column', 'area']) {
      const mod = STYLES[style as keyof typeof STYLES] as ChartStyleModule;
      expect(() => mod.validate!({ type: 'x', table_toggle: 2 } as unknown as CardConfig)).toThrow('table_toggle');
    }
  });

  it('reads the chart until the card asks for the switch', () => {
    const host = document.createElement('div');
    expect(tableMode({ raw: {} as CardConfig, host })).toBe('chart');
    expect(tableMode({ raw: { table_toggle: true } as CardConfig, host })).toBe('chart');
  });
});

describe('table view on a chart', () => {
  it('adds nothing while the option is off', async () => {
    const card = await mountCard({ ...LINE, table_toggle: undefined }, hass());
    expect(q(card, '.table-switch')).toBeNull();
    expect(q(card, '.data-table')).toBeNull();
    expect(q(card, 'svg.plot')).not.toBeNull();
  });

  it('switches a line chart to a table of its readings and back, remembering the choice', async () => {
    const card = await mountCard(LINE, hass());
    const sw = q(card, '.table-switch')!;
    expect(sw.getAttribute('role')).toBe('group');
    expect(sw.getAttribute('aria-label')).toBe('Show as');
    expect(options(card).map((b) => [b.textContent!.trim(), b.getAttribute('aria-pressed')])).toEqual([
      ['Chart', 'true'],
      ['Table', 'false'],
    ]);
    // The switch sits in the header, beside the names.
    expect(q(card, '.table-head .table-head-main .series-header')).not.toBeNull();
    const fired: unknown[] = [];
    card.addEventListener('hass-action', (e) => fired.push(e));
    await choose(card, 'table');
    expect(fired).toHaveLength(0);
    expect(q(card, 'svg.plot')).toBeNull();
    const table = q(card, 'table.data-table')!;
    expect(table).not.toBeNull();
    expect(q(card, '.data-table caption')!.textContent!.trim()).toBe('Last 24 hours');
    expect(q(card, '.data-table-wrap')!.getAttribute('role')).toBe('region');
    expect(q(card, '.data-table-wrap')!.getAttribute('tabindex')).toBe('0');
    expect(heads(card)).toEqual(['Time', 'Inside °C', 'vs avg', 'Outside °C', 'vs avg']);
    expect(qa(card, '.data-table thead th.change')[0].getAttribute('aria-label')).toBe(
      'Inside, change from its average',
    );
    // One row per time either series has a reading; a series holds its value, and a gap reads as a dash.
    const rows = cells(card);
    expect(rows.map((r) => r.slice(1).filter((_, i) => i % 2 === 0))).toEqual([
      ['19.0', '5.0'],
      ['19.0', '—'],
      ['19.0', '9.0'],
      ['21.0', '9.0'],
    ]);
    expect(qa(card, '.data-table tbody th[scope="row"]')).toHaveLength(4);
    // Inside's time-weighted average is 19.2 °C (19 for 22 h, 21 for 2): 21 is about 9 % above it.
    expect(rows[3][2]).toBe('+9 %');
    expect(rows[1][4]).toBe('—');
    expect(options(card)[1].getAttribute('aria-pressed')).toBe('true');
    expect(localStorage.length).toBe(1);
    expect(localStorage.getItem(localStorage.key(0)!)).toBe('table');

    // A new card with the same config comes back as a table.
    const again = await mountCard(LINE, hass());
    expect(q(again, 'table.data-table')).not.toBeNull();

    await choose(card, 'chart');
    expect(q(card, 'svg.plot')).not.toBeNull();
    expect(localStorage.length).toBe(0);
  });

  it('leaves the change column out when asked', async () => {
    const card = await mountCard({ ...LINE, table_change: false }, hass());
    await choose(card, 'table');
    expect(heads(card)).toEqual(['Time', 'Inside °C', 'Outside °C']);
    expect(cells(card)[0]).toHaveLength(3);
  });

  it('keeps a row for the switch when the header is hidden, and moves a header over the plot above the table', async () => {
    const hidden = await mountCard({ ...LINE, header: 'hidden' }, hass());
    expect(q(hidden, '.series-header')).toBeNull();
    expect(options(hidden)).toHaveLength(2);
    const over = await mountCard({ ...LINE, header: 'over', title: 'b' }, hass());
    expect(q(over, '.header-over .table-switch')).not.toBeNull();
    await choose(over, 'table');
    expect(q(over, '.header-over')).toBeNull();
    expect(q(over, '.frame > .table-head .series-header')).not.toBeNull();
  });

  it('works with small multiples, keeping the switch above the charts', async () => {
    const card = await mountCard({ ...LINE, multiples: true }, hass());
    expect(q(card, '.frame > .table-head .table-switch')).not.toBeNull();
    await choose(card, 'table');
    expect(q(card, 'table.data-table')).not.toBeNull();
  });

  it('still shows loading and empty messages, with the switch', async () => {
    const h = hass();
    h.callWS = vi.fn(async () => ({})) as HomeAssistant['callWS'];
    const card = await mountCard({ ...LINE, entities: ['sensor.in'] }, h);
    await choose(card, 'table');
    expect(q(card, '.chart-message')!.textContent).toContain('No readings');
    expect(options(card)).toHaveLength(2);
  });

  it('survives storage that throws', async () => {
    const get = vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('denied');
    });
    const set = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('full');
    });
    const card = await mountCard({ ...LINE, title: 'storage' }, hass());
    expect(q(card, 'svg.plot')).not.toBeNull();
    await choose(card, 'table');
    expect(q(card, 'table.data-table')).not.toBeNull();
    expect(get).toHaveBeenCalled();
    expect(set).toHaveBeenCalled();
  });

  it('keeps only the latest rows of a long history and says so', async () => {
    const readings = Array.from({ length: MAX_TABLE_ROWS + 20 }, (_, i) => ({
      s: String(i % 7),
      lu: ago(now, (MAX_TABLE_ROWS + 20 - i) * 60_000),
    }));
    const h = chartHass(
      { 'sensor.in': ['3', { friendly_name: 'Inside', unit_of_measurement: '°C' }] },
      {
        'sensor.in': readings,
      },
    );
    const card = await mountCard({ ...LINE, entities: ['sensor.in'], title: 'long' }, h);
    await choose(card, 'table');
    expect(cells(card)).toHaveLength(MAX_TABLE_ROWS);
    expect(q(card, '.data-table caption')!.textContent!.trim()).toMatch(
      new RegExp(`^Last 24 hours, latest ${MAX_TABLE_ROWS} of \\d+ rows$`),
    );
  });
});

describe('table view on columns and areas', () => {
  function meterHass() {
    const day = 86_400_000;
    const midnight = new Date(now);
    midnight.setHours(0, 0, 0, 0);
    const m = midnight.getTime();
    return chartHass(
      { 'sensor.import': ['4', { friendly_name: 'Import', unit_of_measurement: 'kWh' }] },
      {
        'sensor.import': [
          { s: '10', lu: (m - 2 * day + H) / 1000 },
          { s: '12', lu: (m - day + H) / 1000 },
          { s: '1', lu: (m + 60_000) / 1000 },
        ],
      },
    );
  }

  it('lists one row per group, naming the group, and calls a running total "so far"', async () => {
    const card = await mountCard(
      {
        style: 'column',
        entities: ['sensor.import'],
        period: { last: 3, unit: 'day' },
        group_by: 'day',
        aggregate: 'sum',
        table_toggle: true,
      },
      meterHass(),
    );
    await choose(card, 'table');
    expect(heads(card)[0]).toBe('Day');
    const rows = cells(card);
    expect(rows.length).toBeGreaterThanOrEqual(3);
    // Today's group is still adding up: it isn't compared with whole days.
    expect(rows[rows.length - 1].at(-1)).toBe('so far');
    // The whole days are compared with each other (10 and 12: 11 on average).
    expect(rows[rows.length - 3].slice(1)).toEqual(['10.0', '−9 %']);
    expect(rows[rows.length - 2].slice(1)).toEqual(['12.0', '+9 %']);
  });

  it('compares a running mean as it is', async () => {
    const card = await mountCard(
      {
        style: 'line',
        entities: ['sensor.import'],
        period: { last: 3, unit: 'day' },
        group_by: 'day',
        aggregate: 'mean',
        table_toggle: true,
      },
      meterHass(),
    );
    await choose(card, 'table');
    expect(cells(card).at(-1)!.at(-1)).not.toBe('so far');
  });

  it('switches an area chart too', async () => {
    const card = await mountCard({ ...LINE, style: 'area', stack: 'normal' }, hass());
    expect(q(card, '.table-switch')).not.toBeNull();
    await choose(card, 'table');
    // The table lists each series' own values, not the stacked heights.
    expect(cells(card).at(-1)!.slice(1)).toEqual(['21.0', '+9 %', '9.0', expect.any(String)]);
  });
});

describe('table view editor', () => {
  it('shows the change switch once the table is on, in the layout section of each chart', async () => {
    expect(tableViewSchema(undefined).map((s) => s.name)).toEqual(['table_toggle']);
    expect(tableViewSchema({ table_toggle: true } as CardConfig).map((s) => s.name)).toEqual([
      'table_toggle',
      'table_change',
    ]);
    for (const style of ['line', 'column', 'area']) {
      const { form, change, events } = await mountEditor(
        { type: 'custom:chartdeck-card', style, entities: ['sensor.in'] } as CardConfig,
        hass(),
      );
      const names = () => unfold(form().schema).map((s) => s.name);
      expect(names()).toContain('table_toggle');
      expect(names()).not.toContain('table_change');
      change({ table_toggle: true });
      expect(events.at(-1)!.table_toggle).toBe(true);
      document.body.innerHTML = '';
    }
    const { form } = await mountEditor(
      { type: 'custom:chartdeck-card', style: 'line', entities: ['sensor.in'], table_toggle: true } as CardConfig,
      hass(),
    );
    const schema = form().schema as { type?: string; schema?: { name: string }[] }[];
    const items = unfold(schema).map((s) => s.name);
    expect(items).toContain('table_change');
    // Folded with the layout options.
    const layout = schema.find((s) => s.type === 'expandable' && s.schema!.some((f) => f.name === 'table_toggle'));
    expect(layout!.schema!.some((f) => f.name === 'compact' || f.name === 'legend_toggle')).toBe(true);
  });
});
