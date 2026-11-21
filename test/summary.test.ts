import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/chartdeck-card';
import {
  describeSeries,
  seriesFacts,
  spanText,
  summaryBlock,
  summaryText,
  validateSummary,
} from '../src/chart/summary';
import type { ResolvedEntity } from '../src/resolve';
import type { CardConfig } from '../src/types';
import { H, ago, chartHass, mountCard, mountEditor, q } from './helpers/chart';

// A fixed time on the hour, so clock times in the sentences don't move between runs.
vi.useFakeTimers({ toFake: ['Date'] });
vi.setSystemTime(new Date('2026-11-18T15:00:00Z'));
const now = Date.now();

const pts = (...rows: [number, number | null][]) => rows.map(([t, v]) => ({ t, v }));
const entity = (name = 'Temp', unit = '°C', decimals = 1) =>
  ({ name, unit, decimals, config: { entity: 'sensor.temp' } }) as unknown as ResolvedEntity;
const options = { range: { start: 0, end: 6 * H }, live: true, when: (t: number) => `t${t / H}` };

describe('summary facts', () => {
  it('finds the start, end, peak and low, skipping gaps', () => {
    expect(seriesFacts(pts([0, 18], [H, null], [2 * H, 23], [3 * H, 15], [4 * H, 22]))).toEqual({
      first: 18,
      last: 22,
      min: 15,
      minAt: 3 * H,
      max: 23,
      maxAt: 2 * H,
      overall: 'rising',
      recent: 'rising',
    });
    expect(seriesFacts(pts([0, null]))).toBeUndefined();
    expect(seriesFacts([])).toBeUndefined();
  });

  it('reads a small change as level, and a flat line as steady', () => {
    expect(seriesFacts(pts([0, 20], [H, 30], [2 * H, 20.2]))).toMatchObject({ overall: 'steady', recent: 'falling' });
    expect(seriesFacts(pts([0, 5], [H, 5]))).toMatchObject({ overall: 'steady', recent: 'steady' });
    expect(seriesFacts(pts([0, 30], [9 * H, 20], [10 * H, 20]))).toMatchObject({
      overall: 'falling',
      recent: 'steady',
    });
  });
});

describe('summary sentences', () => {
  it('says where it went, the peak and low that stand out, and which way it is heading', () => {
    const facts = seriesFacts(pts([0, 18.1], [2 * H, 23.1], [4 * H, 22.5], [6 * H, 22]))!;
    expect(describeSeries(facts, { entity: entity() }, options, undefined)).toBe(
      'Rose from 18.1 °C to 22.0 °C over 6 h. Peak 23.1 °C at t2. Now falling.',
    );
    const fell = seriesFacts(pts([0, 30], [H, 10], [6 * H, 12]))!;
    expect(describeSeries(fell, { entity: entity() }, { ...options, live: false }, undefined)).toBe(
      'Fell from 30.0 °C to 12.0 °C over 6 h. Low 10.0 °C at t1.',
    );
    const level = seriesFacts(pts([0, 20], [H, 25], [2 * H, 20]))!;
    expect(describeSeries(level, { entity: entity() }, { ...options, live: false }, undefined)).toBe(
      'Ended about where it started, at 20.0 °C, over 6 h. Peak 25.0 °C at t1.',
    );
  });

  it('names a peak by clock time for a day or less, by date beyond', () => {
    const facts = seriesFacts(pts([now - 2 * H, 10], [now - H, 30], [now, 20]))!;
    const day = describeSeries(
      facts,
      { entity: entity() },
      { range: { start: now - 6 * H, end: now }, live: false },
      undefined,
    );
    expect(day).toMatch(/Peak 30\.0 °C at \d{1,2}:00( [AP]M)?\./);
    const week = describeSeries(
      facts,
      { entity: entity() },
      { range: { start: now - 7 * 24 * H, end: now }, live: false },
      undefined,
    );
    expect(week).toContain('over 7 d');
    expect(week).toMatch(/Peak 30\.0 °C at \w{3}, \w{3} \d+, \d+:00 [AP]M\./);
  });

  it('uses the card’s own text, says nothing when off, and names each series when there are several', () => {
    const a = { entity: entity('Hall'), points: pts([0, 18], [6 * H, 22]) };
    const b = { entity: entity('Loft'), points: pts([0, 5], [6 * H, 5]) };
    expect(summaryText({ summary: 'off' } as unknown as CardConfig, [a], options, undefined)).toBeUndefined();
    expect(summaryText({ summary: ' Mine. ' } as unknown as CardConfig, [a], options, undefined)).toBe('Mine.');
    expect(summaryText({} as CardConfig, [a], { ...options, live: false }, undefined)).toBe(
      'Rose from 18.0 °C to 22.0 °C over 6 h.',
    );
    expect(
      summaryText({ summary: 'auto' } as unknown as CardConfig, [a, b], { ...options, live: false }, undefined),
    ).toBe('Hall: Rose from 18.0 °C to 22.0 °C over 6 h. Loft: Ended about where it started, at 5.0 °C, over 6 h.');
    expect(summaryText({} as CardConfig, [{ entity: entity(), points: [] }], options, undefined)).toBeUndefined();
    expect(summaryBlock(undefined)).toBeTypeOf('symbol');
  });

  it('writes the span in hours up to two days, then days', () => {
    expect(spanText(24 * H)).toBe('24 h');
    expect(spanText(48 * H)).toBe('48 h');
    expect(spanText(90 * 60_000)).toBe('1 h 30');
    expect(spanText(7 * 24 * H)).toBe('7 d');
  });

  it('checks its options', () => {
    const check = (raw: Record<string, unknown>) => () => validateSummary(raw as unknown as CardConfig);
    expect(check({ summary: 3 })).toThrow('"summary" must be auto, off, or your own text');
    expect(check({ show_summary: 'yes' })).toThrow('"show_summary" must be true or false');
    expect(check({ summary: 'auto', show_summary: true })).not.toThrow();
  });
});

/* ------------------------------------------------------------------ cards ------------------------------------------------------------------ */

const sec = (ms: number) => ago(now, ms);
const states = {
  'sensor.temp': ['22', { friendly_name: 'Temp', unit_of_measurement: '°C' }],
  'sensor.hum': ['50', { friendly_name: 'Humidity', unit_of_measurement: '%' }],
} as const;
const history = {
  'sensor.temp': [
    { s: '18', lu: sec(20 * H) },
    { s: '25', lu: sec(10 * H) },
    { s: '22', lu: sec(H) },
  ],
  'sensor.hum': [{ s: '50', lu: sec(20 * H) }],
};
const mount = (config: Record<string, unknown>) =>
  mountCard({ entities: ['sensor.temp'], ...config } as Partial<CardConfig>, chartHass(states, history));

afterEach(() => {
  document.body.innerHTML = '';
});

describe('summary on charts', () => {
  it('describes a line chart for screen readers, hidden until asked to show', async () => {
    const card = await mount({ style: 'line' });
    // One labelled element: the focusable plot area (keyboard reading), described by the summary.
    const area = q(card, '.plot-area')!;
    expect(area.getAttribute('role')).toBe('group');
    expect(area.getAttribute('aria-describedby')).toBe('cd-summary');
    expect(q(card, '.plot')!.getAttribute('aria-hidden')).toBe('true');
    expect(q(card, '.plot')!.hasAttribute('role')).toBe(false);
    // Without keyboard reading the drawing itself is the labelled image.
    const still = await mount({ style: 'line', keyboard_nav: false });
    const plot = q(still, '.plot')!;
    expect(plot.getAttribute('role')).toBe('img');
    expect(plot.getAttribute('aria-describedby')).toBe('cd-summary');
    expect(q(still, '.plot-area')!.hasAttribute('role')).toBe(false);
    const text = q(card, '#cd-summary')!;
    expect(text.classList.contains('sr-only')).toBe(true);
    expect(text.textContent).toMatch(
      /^Rose from 18\.0 °C to 22\.0 °C over 24 h\. Peak 25\.0 °C at \d+:00 [AP]M\. Now falling\.$/,
    );
    const shown = await mount({ style: 'line', show_summary: true });
    expect(q(shown, '#cd-summary')!.classList.contains('sr-only')).toBe(false);
  });

  it('leaves it out when off, and reads the card’s own text', async () => {
    const off = await mount({ style: 'area', summary: 'off' });
    expect(q(off, '#cd-summary')).toBeNull();
    expect(q(off, '.plot')!.hasAttribute('aria-describedby')).toBe(false);
    expect(q(off, '.plot-area')!.hasAttribute('aria-describedby')).toBe(false);
    const own = await mount({ style: 'area', summary: 'Warm all day.', entities: ['sensor.temp', 'sensor.hum'] });
    expect(q(own, '#cd-summary')!.textContent).toBe('Warm all day.');
    const auto = await mount({ style: 'area', entities: ['sensor.temp', 'sensor.hum'] });
    expect(q(auto, '#cd-summary')!.textContent).toContain('Humidity: Ended about where it started, at 50 %');
  });

  it('names a column chart’s peak by its group, without "now"', async () => {
    const card = await mount({ style: 'column', group_by: 'hour', period: { last: 24, unit: 'hour' } });
    const text = q(card, '#cd-summary')!.textContent!;
    expect(text).toMatch(/Peak 25\.0 °C at \w{3}, \w{3} \d+, .+ – .+\./);
    expect(text).not.toContain('Now');
  });

  it('offers both options in the line, area and column editors', async () => {
    for (const style of ['line', 'area', 'column']) {
      const { form, change, events } = await mountEditor(
        { type: 'custom:chartdeck-card', style, entities: ['sensor.temp'] } as CardConfig,
        chartHass(states, history),
      );
      const schema = JSON.stringify(form().schema);
      expect(schema, style).toContain('"summary_text"');
      expect(schema, style).toContain('"summary_show"');
      change({ summary_text: 'off', summary_show: true });
      expect(events.at(-1), style).toMatchObject({ summary: 'off', show_summary: true });
      document.body.innerHTML = '';
    }
  });
});
