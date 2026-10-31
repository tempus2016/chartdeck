import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/chartdeck-card';
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

type Card = HTMLElement & { setConfig(c: CardConfig): void; hass?: HomeAssistant; updateComplete: Promise<boolean> };

const now = Date.now();
const sec = (msAgo: number) => (now - msAgo) / 1000;
const H = 3_600_000;

function hassWith(history: Record<string, { s: string; lu: number }[]>, fail = false) {
  const hass = makeHass({
    'sensor.in': ['21', { friendly_name: 'Inside', unit_of_measurement: '°C' }],
    'sensor.out': ['9', { friendly_name: 'Outside', unit_of_measurement: '°C' }],
  });
  hass.callWS = vi.fn(async () => {
    if (fail) throw new Error('boom');
    return history;
  }) as HomeAssistant['callWS'];
  return hass;
}

const history = {
  'sensor.in': [
    { s: '19', lu: sec(20 * H) },
    { s: '20', lu: sec(10 * H) },
    { s: 'unavailable', lu: sec(8 * H) },
    { s: '21', lu: sec(2 * H) },
  ],
  'sensor.out': [
    { s: '5', lu: sec(20 * H) },
    { s: '9', lu: sec(4 * H) },
  ],
};

async function mount(config: Partial<CardConfig>, hass = hassWith(history)) {
  const card = document.createElement('chartdeck-card') as Card;
  card.setConfig({
    type: 'custom:chartdeck-card',
    style: 'line',
    entities: ['sensor.in', 'sensor.out'],
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

afterEach(() => {
  document.body.innerHTML = '';
});

describe('line chart', () => {
  it('draws one line per entity, broken at the unavailable stretch, under a header of current values', async () => {
    const card = await mount({});
    const lines = qa(card, 'path.line');
    expect(lines).toHaveLength(2);
    expect(lines[0].getAttribute('d')!.match(/M/g)).toHaveLength(2);
    expect(lines[1].getAttribute('d')!.match(/M/g)).toHaveLength(1);
    expect(lines[0].getAttribute('stroke')).toContain('--primary-color');
    expect(lines[1].getAttribute('stroke')).toContain('--warning-color');
    const header = qa(card, '.series-item').map((e) => e.textContent!.replace(/\s+/g, ' ').trim());
    expect(header).toEqual(['Inside 21.0 °C', 'Outside 9.0 °C']);
    expect(q(card, 'svg.plot')!.getAttribute('aria-label')).toBe('Line chart of Inside, Outside');
    expect(card.hass!.callWS).toHaveBeenCalledTimes(1);
  });

  it('uses per-entity colour, dashes and shape, and a stepped card shape', async () => {
    const card = await mount({
      curve: 'step',
      entities: [
        { entity: 'sensor.in', color: 'red', dash: true },
        { entity: 'sensor.out', curve: 'straight' },
      ],
    } as Partial<CardConfig>);
    const [a, b] = qa(card, 'path.line');
    expect(a.getAttribute('stroke')).toContain('--error-color');
    expect(a.classList.contains('dashed')).toBe(true);
    expect(a.getAttribute('d')).toMatch(/H/);
    expect(b.getAttribute('d')).toMatch(/L/);
  });

  it('colours by band with a gradient, and labels points when asked', async () => {
    const card = await mount({
      color_by: 'bands',
      labels: true,
      severity: [
        { from: 0, color: 'blue' },
        { from: 20, color: 'red' },
      ],
    } as Partial<CardConfig>);
    expect(qa(card, 'linearGradient')).toHaveLength(2);
    expect(qa(card, 'path.line')[0].getAttribute('stroke')).toBe('url(#cd-bands-0)');
    const labels = qa(card, '.point-label').map((e) => e.textContent);
    expect(labels).toContain('19.0');
    expect(labels).toContain('5.0');
  });

  it('says when history is loading, failed, or empty', async () => {
    const card = document.createElement('chartdeck-card') as Card;
    card.setConfig({ type: 'custom:chartdeck-card', style: 'line', entities: ['sensor.in'] } as CardConfig);
    card.hass = hassWith(history);
    document.body.appendChild(card);
    await card.updateComplete;
    expect(q(card, '.chart-message')!.textContent).toBe('Loading history…');
    const failed = await mount({}, hassWith(history, true));
    expect(q(failed, '.chart-message.error')!.textContent!.trim()).toBe("Couldn't load history: boom");
    const empty = await mount({}, hassWith({}));
    expect(q(empty, '.chart-message')!.textContent).toBe('No readings in this period.');
  });

  it('draws its data even when moved while it was loading (masonry re-layout)', async () => {
    const card = document.createElement('chartdeck-card') as Card;
    card.setConfig({ type: 'custom:chartdeck-card', style: 'line', entities: ['sensor.in'] } as CardConfig);
    card.hass = hassWith(history);
    document.body.appendChild(card);
    await card.updateComplete;
    card.remove();
    document.body.appendChild(card);
    await new Promise((r) => setTimeout(r, 0));
    await card.updateComplete;
    expect(qa(card, 'path.line')).toHaveLength(1);
  });

  it('checks its options', () => {
    const card = document.createElement('chartdeck-card') as Card;
    const set = (extra: Record<string, unknown>) => () =>
      card.setConfig({ type: 'x', style: 'line', entities: ['sensor.in'], ...extra } as CardConfig);
    expect(set({ source: 'cloud' })).toThrow(/source/);
    expect(set({ curve: 'wiggly' })).toThrow(/curve/);
    expect(set({ entities: [{ entity: 'sensor.in', curve: 'wiggly' }] })).toThrow(/curve/);
    expect(set({ color_by: 'mood' })).toThrow(/color_by/);
    expect(set({ period: { last: -1 } })).toThrow(/period/);
  });

  it('opens more-info from a header item', async () => {
    const card = await mount({});
    const fired: string[] = [];
    card.addEventListener('hass-action', (e) => fired.push((e as CustomEvent).detail.config.entity));
    const item = qa(card, '.series-item')[1] as HTMLElement;
    item.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }));
    item.dispatchEvent(new MouseEvent('pointerup', { bubbles: true }));
    expect(fired).toEqual(['sensor.out']);
  });
});

describe('line chart editor', () => {
  it('shows the Chart section and writes period, source, shape and labels', async () => {
    const ed = document.createElement('chartdeck-card-editor') as HTMLElement & {
      setConfig(c: CardConfig): void;
      hass?: unknown;
      updateComplete: Promise<boolean>;
    };
    const events: CardConfig[] = [];
    ed.addEventListener('config-changed', (e) => events.push((e as CustomEvent).detail.config));
    ed.hass = makeHass({});
    const raw = { type: 'custom:chartdeck-card', style: 'line', entities: ['sensor.in'] } as CardConfig;
    ed.setConfig(raw);
    document.body.appendChild(ed);
    await ed.updateComplete;
    const form = ed.shadowRoot!.querySelector('.section-chart ha-form') as Stub;
    expect(form.data).toEqual({
      period_last: 24,
      period_unit: 'hour',
      source: 'history',
      curve: 'smooth',
      color_by: 'series',
      labels: false,
    });
    form.dispatchEvent(
      new CustomEvent('value-changed', {
        detail: { value: { ...(form.data as object), period_last: 7, period_unit: 'day', labels: true } },
      }),
    );
    expect(events.at(-1)).toEqual({ ...raw, period: { last: 7, unit: 'day' }, labels: true });
    const list = ed.shadowRoot!.querySelector('cd-entities-editor') as Stub;
    expect(list.chart).toBe(true);
  });
});
