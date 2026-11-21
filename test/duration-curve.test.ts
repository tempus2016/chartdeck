import { afterEach, describe, expect, it, vi } from 'vitest';
import { flipLabel, typedDecimals } from '../src/styles/duration-curve';
import { curvePoints, durationSteps, parseMarkers, shareAbove, valueAtShare } from '../src/chart/duration-curve';
import '../src/chartdeck-card';
import type { Point } from '../src/history/types';
import type { CardConfig, HomeAssistant } from '../src/types';
import { makeHass } from './helpers/hass';

class Stub extends HTMLElement {
  [key: string]: unknown;
}
for (const tag of [
  'ha-form',
  'ha-expansion-panel',
  'ha-selector',
  'ha-entity-picker',
  'ha-icon-picker',
  'ha-icon-button',
  'ha-switch',
]) {
  if (!customElements.get(tag)) customElements.define(tag, class extends Stub {});
}
await import('../src/editor/chartdeck-card-editor');

const pts = (...vs: [number, number | null][]): Point[] => vs.map(([t, v]) => ({ t, v }));

describe('duration curve maths', () => {
  // 0 for 12, 3 for 4, 2 for 2, 1 for 6 (and 3 again for 2): 24 in all.
  const points = pts([0, 0], [12, 3], [16, 2], [18, 1], [24, 3], [26, null]);
  const weights = [12, 4, 2, 6, 2, 5];

  it('sorts readings high to low, each as wide as the time it held, equal values merged', () => {
    const steps = durationSteps(points, weights);
    expect(steps.map((s) => s.v)).toEqual([3, 2, 1, 0]);
    expect(steps[0].from).toBe(0);
    expect(steps[0].to).toBeCloseTo(6 / 26);
    expect(steps[1].to).toBeCloseTo(8 / 26);
    expect(steps[3].to).toBe(1);
  });

  it('leaves zero out of the time when asked, and has nothing without weight', () => {
    const steps = durationSteps(points, weights, true);
    expect(steps.map((s) => s.v)).toEqual([3, 2, 1]);
    expect(steps[0].to).toBeCloseTo(6 / 14);
    expect(durationSteps(points, [0, 0, 0, 0, 0, 0])).toEqual([]);
    expect(durationSteps([], [])).toEqual([]);
  });

  it('reads the value at a share of time and the share above a value', () => {
    const steps = durationSteps(points, weights);
    expect(valueAtShare(steps, 0)).toBe(3);
    expect(valueAtShare(steps, 0.25)).toBe(2);
    expect(valueAtShare(steps, 0.5)).toBe(1);
    expect(valueAtShare(steps, 0.6)).toBe(0);
    expect(valueAtShare(steps, 1)).toBe(0);
    expect(valueAtShare([], 0.5)).toBeUndefined();
    expect(shareAbove(steps, 1.5)).toBeCloseTo(8 / 26);
    expect(shareAbove(steps, 3)).toBe(0);
    expect(shareAbove(steps, -1)).toBe(1);
  });

  it('draws steps as flat corners, resampled evenly when there are too many', () => {
    const steps = durationSteps(points, weights);
    const corners = curvePoints(steps);
    expect(corners).toHaveLength(8);
    expect(corners[0]).toEqual([0, 3]);
    expect(corners.at(-1)).toEqual([1, 0]);
    const many = durationSteps(
      pts(...Array.from({ length: 500 }, (_, i) => [i, i] as [number, number])),
      new Array(500).fill(1),
    );
    const sampled = curvePoints(many, 50);
    expect(sampled).toHaveLength(50);
    expect(sampled[0]).toEqual([0, 499]);
    expect(sampled.at(-1)).toEqual([1, 0]);
    expect(curvePoints([])).toEqual([]);
  });

  it('prints a marker with the decimals it was typed with', () => {
    expect(typedDecimals(2)).toBe(0);
    expect(typedDecimals(1.25)).toBe(2);
    expect(typedDecimals(1e-9)).toBe(0);
  });

  it('puts a marker sentence left of its dot only when the right has no room', () => {
    expect(flipLabel(0.2, 500)).toBe(false);
    expect(flipLabel(0.7, 500)).toBe(true);
    expect(flipLabel(0.45, 290)).toBe(false);
    expect(flipLabel(0.6, 290)).toBe(true);
    expect(flipLabel(0.7, 0)).toBe(true);
  });

  it('reads markers from a number, a list or text', () => {
    expect(parseMarkers(undefined)).toEqual([]);
    expect(parseMarkers('')).toEqual([]);
    expect(parseMarkers(2)).toEqual([2]);
    expect(parseMarkers([2, '5'])).toEqual([2, 5]);
    expect(parseMarkers('2, 5;  -1.5 ')).toEqual([2, 5, -1.5]);
    expect(parseMarkers('two')).toBeUndefined();
    expect(parseMarkers({ a: 1 })).toBeUndefined();
    expect(parseMarkers([true])).toBeUndefined();
  });
});

type Card = HTMLElement & { setConfig(c: CardConfig): void; hass?: HomeAssistant; updateComplete: Promise<boolean> };

const now = Date.now();
const sec = (msAgo: number) => (now - msAgo) / 1000;
const H = 3_600_000;

// Over the last 24 h: 0 for 12 h, 3 for 4 h, 2 for 2 h, 1 for 6 h.
const history = {
  'sensor.solar': [
    { s: '0', lu: sec(30 * H) },
    { s: '3', lu: sec(12 * H) },
    { s: '2', lu: sec(8 * H) },
    { s: '1', lu: sec(6 * H) },
  ],
  'sensor.wind': [
    { s: '4', lu: sec(30 * H) },
    { s: '1', lu: sec(12 * H) },
  ],
};

function hassWith(data: Record<string, { s: string; lu: number }[]> = history) {
  const hass = makeHass({
    'sensor.solar': ['1', { friendly_name: 'Solar', unit_of_measurement: 'kW' }],
    'sensor.wind': ['1', { friendly_name: 'Wind', unit_of_measurement: 'kW' }],
  });
  hass.callWS = vi.fn(async () => data) as HomeAssistant['callWS'];
  return hass;
}

async function mount(config: Partial<CardConfig>, hass = hassWith()) {
  const card = document.createElement('chartdeck-card') as Card;
  card.setConfig({
    type: 'custom:chartdeck-card',
    style: 'duration_curve',
    entities: ['sensor.solar'],
    ...config,
  } as CardConfig);
  card.hass = hass;
  document.body.appendChild(card);
  await card.updateComplete;
  await new Promise((r) => setTimeout(r, 0));
  await card.updateComplete;
  return card;
}

const q = (card: Card, sel: string) => card.shadowRoot!.querySelector(sel);
const qa = (card: Card, sel: string) => [...card.shadowRoot!.querySelectorAll(sel)];

function point(el: Element, type: string, fx: number, fy: number) {
  el.getBoundingClientRect = () => ({ left: 0, top: 0, width: 1000, height: 200, right: 1000, bottom: 200 }) as DOMRect;
  const ev = new MouseEvent(type, { bubbles: true, clientX: fx * 1000, clientY: fy * 200 });
  Object.defineProperty(ev, 'pointerType', { value: 'mouse' });
  el.dispatchEvent(ev);
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('duration curve chart', () => {
  it('draws a stepped curve from 0 to 100% of the time, filled to zero, with percent labels', async () => {
    const card = await mount({});
    const curve = q(card, 'path.curve')!;
    expect(curve.getAttribute('stroke')).toContain('--primary-color');
    expect(curve.getAttribute('d')!.startsWith('M0,')).toBe(true);
    expect(q(card, 'path.curve-fill')!.getAttribute('d')!.endsWith('Z')).toBe(true);
    const bottom = qa(card, '.x-axis .axis-label').map((e) => e.textContent!.trim());
    expect(bottom[0]).toBe('0%');
    expect(bottom.at(-1)).toBe('100%');
    expect(q(card, 'svg.plot')!.getAttribute('aria-label')).toBe('Duration curve chart of Solar');
  });

  it('labels each marker with how long it was above, in the plot for one curve', async () => {
    const card = await mount({ markers: [1.5] } as Partial<CardConfig>);
    expect(q(card, '.marker-label')!.textContent).toBe('Above 1.5 kW for 25% of the time');
    expect(qa(card, '.marker line').length).toBe(2);
    expect(q(card, '.marker-list')).toBeNull();
    expect(q(card, 'svg.plot')!.getAttribute('aria-label')).toContain('Above 1.5 kW for 25% of the time');
    // Leaving zero out: 12 h of time, 6 of them above 1.5.
    const skip = await mount({ markers: '1.5', skip_zero: true } as Partial<CardConfig>);
    expect(q(skip, '.marker-label')!.textContent).toBe('Above 1.5 kW for 50% of the time');
    // Off the chart: listed under it instead.
    const off = await mount({ markers: [99], y_max: 5 } as Partial<CardConfig>);
    expect(q(off, '.marker-label')).toBeNull();
    expect(q(off, '.marker-list')!.textContent!.trim()).toBe('Above 99 kW for 0% of the time');
  });

  it('draws one curve per entity and lists markers under the chart by name', async () => {
    const card = await mount({ entities: ['sensor.solar', 'sensor.wind'], markers: [2] } as Partial<CardConfig>);
    expect(qa(card, 'path.curve')).toHaveLength(2);
    expect(q(card, '.marker-label')).toBeNull();
    const list = qa(card, '.marker-list span').map((e) => e.textContent);
    expect(list).toEqual(['Solar: Above 2 kW for 17% of the time', 'Wind: Above 2 kW for 50% of the time']);
    expect(qa(card, '.marker-dot')).toHaveLength(2);
  });

  it("shows each curve's value at the share of time under the pointer", async () => {
    const card = await mount({
      entities: ['sensor.solar', 'sensor.wind'],
      x_axis: false,
      y_axis: false,
    } as Partial<CardConfig>);
    const area = q(card, '.plot-area')!;
    point(area, 'pointermove', 0.1, 0.5);
    await card.updateComplete;
    expect(q(card, '.tooltip-time')!.textContent).toBe('At or above this for 10% of the time');
    const rows = qa(card, '.tooltip-row').map((e) => e.textContent!.replace(/\s+/g, ' ').trim());
    expect(rows).toEqual(['Solar 3.0 kW', 'Wind 4.0 kW']);
    point(area, 'pointerleave', 0, 0);
    await card.updateComplete;
    expect(q(card, '.tooltip')).toBeNull();
  });

  it('copes with no readings and with a missing entity', async () => {
    const empty = await mount({}, hassWith({}));
    expect(q(empty, '.chart-message')!.textContent).toBe('No readings in this period.');
    const missing = await mount({ entities: ['sensor.solar', 'sensor.gone'], header: 'over' } as Partial<CardConfig>);
    expect(qa(missing, 'path.curve')).toHaveLength(1);
    expect(q(missing, '.header-over')).not.toBeNull();
    // A header over the plot would cover in-plot sentences: they go under the chart.
    const over = await mount({ markers: [1.5], header: 'over' } as Partial<CardConfig>);
    expect(q(over, '.marker-label')).toBeNull();
    expect(q(over, '.marker-list')!.textContent!.trim()).toBe('Above 1.5 kW for 25% of the time');
  });

  it('checks its options', () => {
    const card = document.createElement('chartdeck-card') as Card;
    const set = (extra: Record<string, unknown>) => () =>
      card.setConfig({ type: 'x', style: 'duration_curve', entities: ['sensor.solar'], ...extra } as CardConfig);
    expect(set({ markers: 'lots' })).toThrow('"markers" must be a number or a list of numbers');
    expect(set({ skip_zero: 'yes' })).toThrow('"skip_zero" must be true or false');
    expect(set({ markers: [1, 2], skip_zero: true })).not.toThrow();
  });
});

describe('duration curve editor', () => {
  it('writes markers, skip zero and the bottom labels, and a colour per entity', async () => {
    const ed = document.createElement('chartdeck-card-editor') as HTMLElement & {
      setConfig(c: CardConfig): void;
      hass?: unknown;
      updateComplete: Promise<boolean>;
    };
    const events: CardConfig[] = [];
    ed.addEventListener('config-changed', (e) => events.push((e as CustomEvent).detail.config));
    ed.hass = makeHass({});
    const raw = { type: 'custom:chartdeck-card', style: 'duration_curve', entities: ['sensor.solar'] } as CardConfig;
    ed.setConfig(raw);
    document.body.appendChild(ed);
    await ed.updateComplete;
    const form = ed.shadowRoot!.querySelector('.section-chart ha-form') as Stub;
    expect(form.data).toMatchObject({ duration_skip_zero: false, xy_x_axis: true, tooltip: true });
    form.dispatchEvent(
      new CustomEvent('value-changed', {
        detail: {
          value: { ...(form.data as object), duration_markers: '2, 5', duration_skip_zero: true, xy_x_axis: false },
        },
      }),
    );
    expect(events.at(-1)).toEqual({ ...raw, markers: '2, 5', skip_zero: true, x_axis: false });
    const list = ed.shadowRoot!.querySelector('cd-entities-editor') as Stub;
    const fields = (list.chartFields as { fields: { name: string }[] }).fields.map((f) => f.name);
    expect(fields).toContain('series_color');
  });
});
