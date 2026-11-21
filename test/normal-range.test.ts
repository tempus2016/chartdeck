import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/chartdeck-card';
import {
  bandAt,
  hourValues,
  hourlyMeans,
  normalRangeDetail,
  normalRangeOptions,
  normalRangeSchema,
  normalRangeVariant,
  normalSlots,
  outsideBand,
  percentile,
  referenceDays,
  referenceRange,
  validateNormalRange,
} from '../src/chart/normal-range';
import type { NormalSlot } from '../src/chart/normal-range';
import type { CardConfig, HomeAssistant } from '../src/types';
import { H, mountEditor, q, qa } from './helpers/chart';
import type { Card } from './helpers/chart';
import { makeHass } from './helpers/hass';

const UTC = { timeZone: 'UTC', firstDay: 1 };
const LONDON = { timeZone: 'Europe/London', firstDay: 1 };
const D = 24 * H;

describe('normal range options', () => {
  const check = (extra: Record<string, unknown>) => () =>
    validateNormalRange({ type: 'x', normal_range: true, ...extra } as CardConfig);
  it('accepts good options and names bad ones', () => {
    expect(check({ normal_range_weeks: 8, normal_range_days: 'same_weekday', normal_range_low: 5 })).not.toThrow();
    expect(check({ normal_range: 'yes' })).toThrow('"normal_range" must be true or false');
    expect(check({ normal_range_median: 1 })).toThrow('"normal_range_median" must be true or false');
    expect(check({ normal_range_weeks: 0 })).toThrow('"normal_range_weeks" must be a whole number from 1 to 12');
    expect(check({ normal_range_weeks: 2.5 })).toThrow('whole number');
    expect(check({ normal_range_days: 'weekends' })).toThrow(
      '"normal_range_days" must be one of: every_day, same_weekday',
    );
    expect(check({ normal_range_high: 120 })).toThrow('"normal_range_high" must be a number from 0 to 100');
    expect(check({ normal_range_low: 95 })).toThrow('"normal_range_low" must be below "normal_range_high"');
    expect(check({ normal_range_color: 3 })).toThrow('"normal_range_color" must be text');
  });

  it('fills in defaults, and is off unless asked for', () => {
    expect(normalRangeOptions({ type: 'x' } as CardConfig)).toBeUndefined();
    expect(normalRangeOptions({ type: 'x', normal_range: true } as CardConfig)).toEqual({
      weeks: 4,
      days: 'every_day',
      low: 10,
      high: 90,
      median: true,
      marks: true,
      color: 'amber',
    });
  });

  it('describes itself without plurals', () => {
    const o = normalRangeOptions({ type: 'x', normal_range: true } as CardConfig)!;
    expect(normalRangeDetail(o)).toBe('10–90 percentile · days back: 28');
    expect(normalRangeDetail({ ...o, days: 'same_weekday', weeks: 6 })).toBe(
      '10–90 percentile · same weekday, weeks back: 6',
    );
  });
});

describe('normal range maths', () => {
  it('takes percentiles between neighbours', () => {
    expect(percentile([1, 2, 3, 4, 5], 50)).toBe(3);
    expect(percentile([1, 2, 3, 4], 50)).toBe(2.5);
    expect(percentile([0, 10], 10)).toBe(1);
    expect(percentile([7], 90)).toBe(7);
    expect(percentile([1, 2], 150)).toBe(2);
    expect(percentile([], 50)).toBeNaN();
  });

  it('picks the days to look back on', () => {
    expect(referenceDays('same_weekday', 3)).toEqual([7, 14, 21]);
    expect(referenceDays('every_day', 1)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    const r = referenceRange({ start: 100 * D, end: 101 * D }, [7, 14], UTC);
    expect(r).toEqual({ start: 86 * D, end: 94 * D });
  });

  it('keys statistics by their hour, and averages history per hour by time held', () => {
    expect([
      ...hourValues([
        { t: H, v: 3 },
        { t: 2 * H + 5, v: null },
        { t: 3 * H, v: 4 },
      ]),
    ]).toEqual([
      [H, 3],
      [3 * H, 4],
    ]);
    const means = hourlyMeans(
      [
        { t: 0, v: 10 },
        { t: H / 2, v: 20 },
        { t: H + H / 4, v: null },
        { t: H + H / 2, v: 40 },
      ],
      2 * H,
    );
    expect(means.get(0)).toBe(15);
    // 15 min of 20, then 15 min gap, then 30 min of 40.
    expect(means.get(H)).toBeCloseTo((20 * 15 + 40 * 30) / 45);
    expect(means.has(2 * H)).toBe(false);
  });

  it('works out each hour of the band from the same hour on earlier days', () => {
    const values = new Map<number, number>();
    // Days 1..7 back: hour 10 read 1..7, hour 11 only twice.
    for (let k = 1; k <= 7; k++) values.set(100 * D - k * D + 10 * H, k);
    values.set(100 * D - D + 11 * H, 50);
    values.set(100 * D - 2 * D + 11 * H, 60);
    const slots = normalSlots(
      { start: 100 * D + 10 * H, end: 100 * D + 12 * H },
      values,
      [1, 2, 3, 4, 5, 6, 7],
      UTC,
      10,
      90,
    );
    expect(slots).toHaveLength(2);
    expect(slots[0]).toEqual({ t: 100 * D + 10.5 * H, lo: percentile([1, 2, 3, 4, 5, 6, 7], 10), mid: 4, hi: 6.4 });
    // Fewer than three values: a gap.
    expect(slots[1]).toBeNull();
    // One week back with the same weekday: one value is enough.
    const one = normalSlots({ start: 100 * D + 10 * H, end: 100 * D + 11 * H }, values, [7], UTC, 10, 90);
    expect(one[0]).toMatchObject({ lo: 7, mid: 7, hi: 7 });
  });

  it('keeps the time of day across a clock change', () => {
    // 1 Nov 2026, 09:00 in London (GMT). A week earlier, 25 Oct, the clocks went back that night:
    // 09:00 on 25 Oct is already GMT, but 24 Oct 09:00 was BST (08:00 UTC).
    const t = Date.UTC(2026, 10, 1, 9);
    const values = new Map<number, number>([
      [Date.UTC(2026, 9, 24, 8), 5],
      [Date.UTC(2026, 9, 24, 9), 99],
    ]);
    const [slot] = normalSlots({ start: t, end: t + H }, values, [8], LONDON, 10, 90);
    expect(slot).toMatchObject({ mid: 5 });
  });

  const slots: (NormalSlot | null)[] = [
    { t: 0.5 * H, lo: 10, mid: 15, hi: 20 },
    { t: 1.5 * H, lo: 20, mid: 25, hi: 30 },
    null,
    { t: 3.5 * H, lo: 0, mid: 1, hi: 2 },
  ];

  it('reads the band at any time between hours, with gaps', () => {
    expect(bandAt(slots, H)).toEqual({ lo: 15, hi: 25 });
    expect(bandAt(slots, 0.5 * H)).toEqual({ lo: 10, hi: 20 });
    expect(bandAt(slots, 0)).toEqual({ lo: 10, hi: 20 });
    expect(bandAt(slots, 2 * H)).toBeUndefined();
    expect(bandAt(slots, 3.25 * H)).toEqual({ lo: 0, hi: 2 });
    expect(bandAt(slots, 3 * H - 1)).toBeUndefined();
    expect(bandAt(slots, 3.9 * H)).toEqual({ lo: 0, hi: 2 });
    expect(bandAt(slots, 5 * H)).toBeUndefined();
    expect(bandAt([], 0)).toBeUndefined();
  });

  it('marks the furthest reading of each stretch outside the band', () => {
    const out = outsideBand(
      [
        { t: 0, v: 50, carried: true },
        { t: 0.5 * H, v: 15 },
        { t: 0.6 * H, v: 22 },
        { t: 0.7 * H, v: 26 },
        { t: 0.8 * H, v: 21.5 },
        { t: 0.9 * H, v: 5 },
        { t: 1.0 * H, v: 16 },
        { t: 1.2 * H, v: null },
        { t: 1.3 * H, v: 40 },
        { t: 2 * H, v: 99 },
        { t: 3.5 * H, v: 3 },
      ],
      slots,
    );
    expect(out.map((o) => [o.t / H, o.side])).toEqual([
      [0.7, 'above'],
      [0.9, 'below'],
      [1.3, 'above'],
      [3.5, 'above'],
    ]);
    // Read between the first two hours: 12 to 22 at 0.7 h.
    expect(out[0]).toMatchObject({ v: 26, lo: 12, hi: 22 });
  });
});

// ---------------------------------------------------------------- on the line chart

const now = Date.now();
const ago = (ms: number) => (now - ms) / 1000;

/** A recorder with four weeks of hourly statistics for sensor.in (18–22) and today's history. */
function recorder(stats = true) {
  const h = makeHass({
    'sensor.in': ['21', { friendly_name: 'Inside', unit_of_measurement: '°C' }],
    'sensor.attr': ['1', { friendly_name: 'Attr', unit_of_measurement: '°C' }],
  });
  const fn = vi.fn(async (msg: Record<string, unknown>) => {
    const start = Date.parse(msg.start_time as string);
    const end = Date.parse(msg.end_time as string);
    if (msg.type === 'recorder/statistics_during_period') {
      if (!stats) return {};
      const rows = [];
      for (let t = Math.floor(start / H) * H; t < end; t += H) {
        rows.push({ start: t, end: t + H, mean: 18 + (Math.floor(t / D) % 5), state: null });
      }
      return { 'sensor.in': rows };
    }
    if (end - start > 3 * D) {
      // The earlier weeks' history, for the fallback: 18 to 22 by day, as above.
      const rows = [];
      for (let t = start; t < end; t += 2 * H) rows.push({ s: String(18 + (Math.floor(t / D) % 5)), lu: t / 1000 });
      return { 'sensor.in': rows };
    }
    return {
      'sensor.in': [
        { s: '20', lu: ago(30 * H) },
        { s: '21', lu: ago(20 * H) },
        { s: '30', lu: ago(10 * H) },
        { s: '31', lu: ago(9.5 * H) },
        { s: '20', lu: ago(9 * H) },
        { s: '5', lu: ago(3 * H) },
        { s: '20', lu: ago(2 * H) },
      ],
    };
  });
  h.callWS = fn as unknown as HomeAssistant['callWS'];
  return { h, fn };
}

async function mount(extra: Record<string, unknown>, h: HomeAssistant) {
  const card = document.createElement('chartdeck-card') as Card;
  card.setConfig({
    type: 'custom:chartdeck-card',
    style: 'line',
    entities: ['sensor.in'],
    normal_range: true,
    ...extra,
  } as CardConfig);
  card.hass = h;
  document.body.appendChild(card);
  for (let i = 0; i < 6; i++) {
    await card.updateComplete;
    await new Promise((r) => setTimeout(r, 0));
  }
  return card;
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('normal range on the line chart', () => {
  it('loads hourly statistics for the weeks before and shades the band with its median and a key', async () => {
    const { h, fn } = recorder();
    const card = await mount({}, h);
    const calls = fn.mock.calls.map((c) => c[0]);
    const stats = calls.find((m) => m.type === 'recorder/statistics_during_period')!;
    expect(stats).toMatchObject({ period: 'hour', statistic_ids: ['sensor.in'] });
    // 28 days back from the chart's start, to a day before its end.
    const span = Date.parse(stats.end_time as string) - Date.parse(stats.start_time as string);
    expect(span).toBeGreaterThan(27 * D);
    expect(span).toBeLessThan(29 * D);
    expect(qa(card, 'path.normal-band')).toHaveLength(1);
    expect(qa(card, 'path.normal-median')).toHaveLength(1);
    expect(q(card, '.normal-range-key')!.textContent).toContain('Usual range');
    expect(q(card, '.normal-range-key')!.getAttribute('title')).toBe('10–90 percentile · days back: 28');
    // Behind the line.
    const band = q(card, 'path.normal-band')!;
    expect(band.compareDocumentPosition(q(card, 'path.line')!)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });

  it('marks the stretches outside the band, one marker each', async () => {
    const { h } = recorder();
    const card = await mount({ normal_range_color: 'red' }, h);
    const dots = qa(card, '.normal-range-dot');
    expect(dots).toHaveLength(2);
    const titles = dots.map((d) => d.getAttribute('title'));
    expect(titles[0]).toMatch(/^Inside: 31\.0 °C, above the usual 18\.\d–2\d\.\d °C$/);
    expect(titles[1]).toMatch(/^Inside: 5\.0 °C, below the usual/);
    expect((q(card, '.normal-range-marks') as HTMLElement).style.getPropertyValue('--cd-anomaly')).toContain(
      '--error-color',
    );
    // The axis reaches the band and the readings.
    const values = qa(card, '.y-axis .axis-label').map((e) => Number(e.textContent));
    expect(Math.min(...values)).toBeLessThanOrEqual(5);
  });

  it('can leave out the median and the markers', async () => {
    const { h } = recorder();
    const card = await mount({ normal_range_median: false, normal_range_marks: false }, h);
    expect(qa(card, 'path.normal-band')).toHaveLength(1);
    expect(qa(card, 'path.normal-median')).toHaveLength(0);
    expect(qa(card, '.normal-range-dot')).toHaveLength(0);
  });

  it('falls back to history for an entity without statistics', async () => {
    const { h, fn } = recorder(false);
    const card = await mount({ normal_range_days: 'same_weekday', normal_range_weeks: 3 }, h);
    const histories = fn.mock.calls.map((c) => c[0]).filter((m) => m.type === 'history/history_during_period');
    expect(histories.length).toBe(2);
    expect(qa(card, 'path.normal-band')).toHaveLength(1);
  });

  it('draws no band for a transformed series, a long span or day groups, or when off', async () => {
    const { h } = recorder();
    for (const extra of [
      { entities: [{ entity: 'sensor.in', transform: 'cumulative' }] },
      { period: { last: 21, unit: 'day' } },
      { period: { last: 7, unit: 'day' }, group_by: 'day' },
      { normal_range: false },
    ]) {
      const card = await mount(extra, h);
      expect(qa(card, 'path.line').length).toBeGreaterThan(0);
      expect(qa(card, 'path.normal-band')).toHaveLength(0);
      expect(q(card, '.normal-range-key')).toBeNull();
      card.remove();
    }
  });

  it('draws the chart without the band when neither statistics nor history load for the earlier weeks', async () => {
    const { h, fn } = recorder();
    const plain = fn.getMockImplementation()!;
    fn.mockImplementation(async (msg: Record<string, unknown>) => {
      const long = Date.parse(msg.end_time as string) - Date.parse(msg.start_time as string) > 3 * D;
      if (msg.type === 'recorder/statistics_during_period' || long) throw new Error('nope');
      return plain(msg);
    });
    const card = await mount({}, h);
    expect(qa(card, 'path.line')).toHaveLength(1);
    expect(qa(card, 'path.normal-band')).toHaveLength(0);
  });

  it('does not work the band out again on every draw', async () => {
    const { h, fn } = recorder();
    const card = await mount({}, h);
    const before = fn.mock.calls.length;
    const d = q(card, 'path.normal-band')!.getAttribute('d');
    card.hass = { ...h };
    await card.updateComplete;
    expect(fn.mock.calls.length).toBe(before);
    expect(q(card, 'path.normal-band')!.getAttribute('d')).toBe(d);
  });
});

describe('normal range in the editor', () => {
  it('shows the switch, then its options once on', async () => {
    expect(normalRangeVariant({ type: 'x' } as CardConfig)).toBe('');
    expect(normalRangeSchema(undefined, { type: 'x' } as CardConfig)).toHaveLength(1);
    const on = normalRangeSchema(undefined, { type: 'x', normal_range: true } as CardConfig) as {
      name: string;
      schema?: { name: string }[];
    }[];
    expect(on[1].schema!.map((s) => s.name)).toEqual([
      'normal_range_days',
      'normal_range_weeks',
      'normal_range_low',
      'normal_range_high',
      'normal_range_median',
      'normal_range_marks',
      'normal_range_color',
    ]);
    const { ed, events } = await mountEditor(
      { type: 'custom:chartdeck-card', style: 'line', entities: ['sensor.in'] } as CardConfig,
      makeHass({}),
    );
    const forms = [...ed.shadowRoot!.querySelectorAll('.section-chart ha-form')] as (HTMLElement & {
      data: Record<string, unknown>;
    })[];
    const form = forms.find((f) => 'normal_range' in f.data)!;
    expect(form.data.normal_range).toBe(false);
    form.dispatchEvent(
      new CustomEvent('value-changed', {
        detail: { value: { ...form.data, normal_range: true, normal_range_weeks: 6 } },
      }),
    );
    expect(events.at(-1)).toMatchObject({ normal_range: true, normal_range_weeks: 6 });
    expect(events.at(-1)!.normal_range_low).toBeUndefined();
  });
});
