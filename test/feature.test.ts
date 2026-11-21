import { afterEach, describe, expect, it, vi } from 'vitest';
import type { CardConfig, HassEntity, HomeAssistant } from '../src/types';
import { makeHass } from './helpers/hass';
import { H, stubEditorElements } from './helpers/chart';

stubEditorElements();
const {
  ChartdeckFeature,
  carryToNow,
  columnAggregate,
  featureCard,
  featureColor,
  featureOptions,
  featureSource,
  supportedState,
} = await import('../src/feature');
const { FEATURE_ACTION_FIELDS, FEATURE_FIELDS, featureLabelKey, featureLimits, featureSchema } =
  await import('../src/editor/feature-editor');
const { localize } = await import('../src/localize');
await import('../src/chartdeck-card');

type Feature = HTMLElement & {
  setConfig(c: Record<string, unknown>): void;
  hass?: HomeAssistant;
  context?: { entity_id?: string };
  stateObj?: HassEntity;
  color?: string;
  updateComplete: Promise<boolean>;
};

const now = Date.now();
const states = {
  'sensor.kettle_power': ['2100', { unit_of_measurement: 'W', friendly_name: 'Kettle power', device_class: 'power' }],
  'sensor.kettle_energy': [
    '12.4',
    { unit_of_measurement: 'kWh', device_class: 'energy', state_class: 'total_increasing' },
  ],
  'sensor.kettle_voltage': ['239', { unit_of_measurement: 'V', device_class: 'voltage' }],
  'switch.kettle': ['on', { friendly_name: 'Kettle plug' }],
  'switch.lonely': ['off', {}],
  'climate.bedroom': ['heat', { friendly_name: 'Bedroom', current_temperature: 19.4, temperature: 20 }],
  'sensor.temp': ['19.4', { unit_of_measurement: '°C', friendly_name: 'Bedroom temperature' }],
  'sensor.off': ['unavailable', { unit_of_measurement: 'W', friendly_name: 'Off' }],
  'person.me': ['home', {}],
} as const;
const entities = {
  'switch.kettle': { entity_id: 'switch.kettle', device_id: 'plug' },
  'sensor.kettle_voltage': { entity_id: 'sensor.kettle_voltage', device_id: 'plug' },
  'sensor.kettle_energy': { entity_id: 'sensor.kettle_energy', device_id: 'plug' },
  'sensor.kettle_power': { entity_id: 'sensor.kettle_power', device_id: 'plug' },
  'switch.lonely': { entity_id: 'switch.lonely', device_id: 'lonely' },
  'person.me': { entity_id: 'person.me' },
};

function hassWithHistory(rows: Record<string, { s: string; lu: number }[]> = {}) {
  const hass = makeHass(states as never, { entities });
  hass.callWS = vi.fn(async () => rows) as HomeAssistant['callWS'];
  return hass;
}

async function mount(
  config: Record<string, unknown>,
  hass = hassWithHistory(),
  context: { entity_id?: string } = { entity_id: 'sensor.temp' },
): Promise<Feature> {
  const el = document.createElement('chartdeck-feature') as Feature;
  el.setConfig({ type: 'custom:chartdeck-feature', ...config });
  el.hass = hass;
  el.context = context;
  document.body.appendChild(el);
  await el.updateComplete;
  return el;
}

const q = (el: Element, sel: string) => el.shadowRoot!.querySelector(sel);

afterEach(() => {
  document.body.innerHTML = '';
});

describe('feature config', () => {
  it('has defaults and rejects bad options with readable errors', () => {
    expect(featureOptions({ type: 'x' })).toEqual({ style: 'sparkline', hours: 24, fill: true, aggregate: 'auto' });
    const bad = (c: Record<string, unknown>) => () => featureOptions({ type: 'x', ...c });
    expect(() => featureOptions(null as never)).toThrow('Invalid configuration');
    expect(bad({ style: 'gauge' })).toThrow('"style" must be one of: sparkline, column, bar');
    expect(bad({ hours: 0 })).toThrow(/"hours"/);
    expect(bad({ hours: 169 })).toThrow(/"hours"/);
    expect(bad({ hours: 'x' })).toThrow(/"hours"/);
    expect(bad({ fill: 'no' })).toThrow('"fill" must be true or false');
    expect(bad({ aggregate: 'median' })).toThrow(/"aggregate" must be one of: auto, mean/);
    expect(bad({ entity: '' })).toThrow('"entity" must be an entity id');
    expect(bad({ color: 1 })).toThrow(/"color"/);
  });

  it('goes through the card’s own checks, as one entity', () => {
    const card = featureCard({ type: 'x', style: 'bar', max: 3000, attribute: 'speed' }, 'sensor.a');
    expect(card.entities[0]).toMatchObject({ entity: 'sensor.a', attribute: 'speed', max: 3000 });
    const el = document.createElement('chartdeck-feature') as Feature;
    expect(() => el.setConfig({ type: 'x', min: 10, max: 5 })).toThrow(/"max"/);
    expect(() => el.setConfig({ type: 'x', style: 'pie' })).toThrow(/"style"/);
  });

  it('works out what a tile’s entity has to draw', () => {
    const hass = makeHass(states as never, { entities });
    expect(featureSource(hass, 'sensor.temp')).toEqual({});
    // Unavailable now, but a unit says it is a number.
    expect(featureSource(hass, 'sensor.off')).toEqual({});
    expect(featureSource(hass, 'climate.bedroom')).toEqual({ attribute: 'current_temperature' });
    // A plug's switch: its power sensor, before energy and voltage.
    expect(featureSource(hass, 'switch.kettle')).toEqual({ entity: 'sensor.kettle_power' });
    expect(featureSource(hass, 'switch.lonely')).toBeUndefined();
    expect(featureSource(hass, 'person.me')).toBeUndefined();
    expect(featureSource(hass, 'sensor.gone')).toBeUndefined();
    expect(featureSource(hass, undefined)).toBeUndefined();
    expect(featureSource(makeHass(states as never), 'switch.kettle')).toBeUndefined();
    // Energy before any other sensor when there is no power.
    const noPower = { ...entities, 'sensor.kettle_power': { entity_id: 'sensor.kettle_power', device_id: 'x' } };
    expect(featureSource(makeHass(states as never, { entities: noPower }), 'switch.kettle')).toEqual({
      entity: 'sensor.kettle_energy',
    });
  });

  it('says which tiles it suits, old and new HA', () => {
    const hass = makeHass(states as never, { entities });
    expect(supportedState(hass.states['sensor.temp'])).toBe(true);
    expect(supportedState(hass.states['climate.bedroom'])).toBe(true);
    expect(supportedState(hass.states['switch.lonely'])).toBe(true);
    expect(supportedState(hass.states['person.me'])).toBe(false);
    expect(supportedState(undefined)).toBe(false);
    const list = (window as unknown as { customCardFeatures: Record<string, unknown>[] }).customCardFeatures;
    const entry = list.filter((f) => f.type === 'chartdeck-feature');
    expect(entry).toHaveLength(1);
    expect(entry[0]).toMatchObject({ name: 'Chartdeck chart', configurable: true });
    const isSupported = entry[0].isSupported as (h: HomeAssistant, c: { entity_id?: string }) => boolean;
    expect(isSupported(hass, { entity_id: 'switch.kettle' })).toBe(true);
    expect(isSupported(hass, { entity_id: 'switch.lonely' })).toBe(false);
    expect(isSupported(hass, {})).toBe(false);
    expect(customElements.get('chartdeck-feature')).toBe(ChartdeckFeature);
  });

  it('stubs a sparkline of what the tile has, and has an editor', () => {
    const hass = makeHass(states as never, { entities });
    expect(ChartdeckFeature.getStubConfig(hass, { entity_id: 'switch.kettle' })).toEqual({
      type: 'custom:chartdeck-feature',
      style: 'sparkline',
      entity: 'sensor.kettle_power',
    });
    expect(ChartdeckFeature.getStubConfig(hass, { entity_id: 'sensor.temp' })).toEqual({
      type: 'custom:chartdeck-feature',
      style: 'sparkline',
    });
    expect(ChartdeckFeature.getStubConfig()).toEqual({ type: 'custom:chartdeck-feature', style: 'sparkline' });
    expect(ChartdeckFeature.getConfigElement().tagName.toLowerCase()).toBe('chartdeck-feature-editor');
  });
});

describe('feature maths', () => {
  it('rises per column for a meter, else averages, unless told', () => {
    const meter = { entity_id: 'sensor.m', state: '1', attributes: { state_class: 'total_increasing' } };
    expect(columnAggregate('auto', meter)).toBe('change');
    expect(columnAggregate('auto', { ...meter, attributes: { state_class: 'total' } })).toBe('change');
    expect(columnAggregate('auto', { ...meter, attributes: {} })).toBe('mean');
    expect(columnAggregate('auto', undefined)).toBe('mean');
    expect(columnAggregate('max', meter)).toBe('max');
  });

  it('takes its own colour, then its band’s, then the tile’s, then the theme’s', () => {
    const e = { band: { color: 'red' } } as never;
    expect(featureColor(e, { type: 'x', color: 'green', severity: [{ from: 0, color: 'red' }] })).toContain(
      '--success-color',
    );
    expect(featureColor(e, { type: 'x', severity: [{ from: 0, color: 'red' }] })).toContain('--error-color');
    expect(featureColor(e, { type: 'x' }, 'rgb(1, 2, 3)')).toBe('rgb(1, 2, 3)');
    expect(featureColor(e, { type: 'x' }, 'state')).toBe('var(--tile-color, var(--primary-color, #03a9f4))');
    expect(featureColor(e, { type: 'x' }, 7)).toBe('var(--tile-color, var(--primary-color, #03a9f4))');
  });

  it('carries the last reading on to now, not a gap', () => {
    expect(carryToNow([{ t: 1, v: 2 }], 5)).toEqual([
      { t: 1, v: 2 },
      { t: 5, v: 2 },
    ]);
    expect(carryToNow([{ t: 1, v: null }], 5)).toHaveLength(1);
    expect(carryToNow([], 5)).toEqual([]);
  });
});

describe('feature', () => {
  const rows = {
    'sensor.temp': [
      { s: '18', lu: (now - 20 * H) / 1000 },
      { s: '21', lu: (now - 10 * H) / 1000 },
      { s: '19.4', lu: (now - 2 * H) / 1000 },
    ],
  };

  it('draws the tile entity’s history as a filled sparkline, labelled for screen readers', async () => {
    const hass = hassWithHistory(rows);
    const el = await mount({}, hass);
    expect(q(el, '.empty')).not.toBeNull();
    await vi.waitFor(() => expect(q(el, '.spark-line')).not.toBeNull());
    expect(q(el, '.spark-fill')).not.toBeNull();
    const call = (hass.callWS as ReturnType<typeof vi.fn>).mock.calls[0][0];
    expect(call.entity_ids).toEqual(['sensor.temp']);
    expect(Date.parse(call.start_time)).toBeGreaterThanOrEqual(now - 24 * H - 1000);
    const box = q(el, '.feature')!;
    expect(box.getAttribute('aria-label')).toBe('Bedroom temperature, last 24 h: 19.4 °C');
    expect(box.getAttribute('role')).toBe('button');
    expect(box.getAttribute('style')).toContain('--tile-color');
  });

  it('draws a line only with fill off, and its own entity over the tile’s', async () => {
    const hass = hassWithHistory({ 'sensor.kettle_power': rows['sensor.temp'] });
    const el = await mount({ entity: 'sensor.kettle_power', fill: false, hours: 6 }, hass, {
      entity_id: 'switch.kettle',
    });
    await vi.waitFor(() => expect(q(el, '.spark-line')).not.toBeNull());
    expect(q(el, '.spark-fill')).toBeNull();
    expect((hass.callWS as ReturnType<typeof vi.fn>).mock.calls[0][0].entity_ids).toEqual(['sensor.kettle_power']);
  });

  it('reads the tile’s state on HA before 2025.2', async () => {
    const hass = hassWithHistory(rows);
    const el = document.createElement('chartdeck-feature') as Feature;
    el.setConfig({ type: 'custom:chartdeck-feature', style: 'bar', max: 30 });
    el.hass = hass;
    el.stateObj = hass.states['sensor.temp'];
    el.color = 'rgb(255, 0, 0)';
    document.body.appendChild(el);
    await el.updateComplete;
    expect(q(el, '.fill')!.getAttribute('style')).toContain('width:64.7%');
    expect(q(el, '.fill')!.getAttribute('style')).toContain('rgb(255, 0, 0)');
  });

  it('draws columns per hour, averaged, or the rise of a meter', async () => {
    const hass = hassWithHistory(rows);
    const el = await mount({ style: 'column', hours: 12 }, hass);
    await vi.waitFor(() => expect(q(el, '.spark-columns')).not.toBeNull());
    expect(el.shadowRoot!.querySelectorAll('.spark-columns rect').length).toBeGreaterThanOrEqual(11);
  });

  it('fills a bar to the value with the target marked and band colours', async () => {
    const el = await mount({
      style: 'bar',
      min: 14,
      max: 26,
      target: 20,
      severity: [
        { from: 0, color: 'blue' },
        { from: 22, color: 'red' },
      ],
    });
    const fill = q(el, '.fill')!.getAttribute('style')!;
    expect(fill).toContain('left:0%;width:45%');
    expect(fill).toContain('linear-gradient');
    expect(q(el, '.target')!.getAttribute('style')).toBe('--target:0.5');
    expect(q(el, '.feature')!.getAttribute('aria-label')).toBe('Bedroom temperature, 19.4 °C');
  });

  it('greys out an unavailable entity and stays empty without history or an entity', async () => {
    const off = await mount({ style: 'bar', target: 5 }, hassWithHistory(), { entity_id: 'sensor.off' });
    expect(q(off, '.feature')!.classList.contains('unavailable')).toBe(true);
    expect(q(off, '.fill')).toBeNull();
    expect(q(off, '.target')).toBeNull();
    const none = await mount({}, hassWithHistory(), {});
    expect(q(none, '.feature')).toBeNull();
    const gone = await mount({}, hassWithHistory(), { entity_id: 'sensor.gone' });
    await new Promise((r) => setTimeout(r, 0));
    await gone.updateComplete;
    expect(q(gone, '.empty')).not.toBeNull();
  });

  it('is an image without actions, and fires its tap action', async () => {
    const still = await mount({ tap_action: { action: 'none' } });
    expect(q(still, '.feature')!.getAttribute('role')).toBe('img');
    expect(q(still, '.feature')!.hasAttribute('tabindex')).toBe(false);
    const el = await mount({ style: 'bar' });
    const heard = vi.fn();
    el.addEventListener('hass-action', heard);
    const box = q(el, '.feature') as HTMLElement;
    box.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }));
    box.dispatchEvent(new MouseEvent('pointerup', { bubbles: true }));
    await vi.waitFor(() => expect(heard).toHaveBeenCalled());
    expect(heard.mock.calls[0][0].detail.config.entity).toBe('sensor.temp');
    // A new look draws a new box: the gestures follow it.
    el.setConfig({ type: 'custom:chartdeck-feature', style: 'sparkline' });
    await el.updateComplete;
    (q(el, '.feature') as HTMLElement).dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(heard).toHaveBeenCalledTimes(2);
  });

  it('redraws only for the entities it reads, and stops on leaving the page', async () => {
    const hass = hassWithHistory();
    const el = await mount({ style: 'bar', max: 'sensor.kettle_power' }, hass);
    const update = el as unknown as { shouldUpdate(c: Map<string, unknown>): boolean };
    const change = (id: string) => ({ ...hass, states: { ...hass.states, [id]: { ...hass.states[id] } } });
    el.hass = change('sensor.kettle_voltage');
    expect(update.shouldUpdate(new Map([['hass', hass]]))).toBe(false);
    el.hass = change('sensor.kettle_power');
    expect(update.shouldUpdate(new Map([['hass', hass]]))).toBe(true);
    el.hass = change('sensor.temp');
    expect(update.shouldUpdate(new Map([['hass', hass]]))).toBe(true);
    el.hass = { ...hass, themes: { darkMode: true } };
    expect(update.shouldUpdate(new Map([['hass', hass]]))).toBe(true);
    expect(update.shouldUpdate(new Map())).toBe(true);
    expect(update.shouldUpdate(new Map([['hass', undefined]]))).toBe(true);
    el.remove();
    document.body.appendChild(el);
    await el.updateComplete;
    expect(q(el, '.fill')).not.toBeNull();
  });
});

describe('feature editor', () => {
  type Editor = HTMLElement & {
    setConfig(c: CardConfig): void;
    hass?: unknown;
    context?: unknown;
    updateComplete: Promise<boolean>;
  };

  async function editor(config: Record<string, unknown>, context = { entity_id: 'sensor.temp' }) {
    const ed = document.createElement('chartdeck-feature-editor') as Editor;
    ed.hass = makeHass(states as never);
    ed.context = context;
    ed.setConfig({ type: 'custom:chartdeck-feature', ...config } as CardConfig);
    const events: CardConfig[] = [];
    ed.addEventListener('config-changed', (e) => events.push((e as CustomEvent).detail.config));
    document.body.appendChild(ed);
    await ed.updateComplete;
    return { ed, events };
  }
  const names = (schema: unknown[]) =>
    (schema as { name: string; schema?: { name: string }[] }[]).flatMap((f) =>
      f.schema ? f.schema.map((x) => x.name) : [f.name],
    );

  it('shows each look’s own options, every one of them written', () => {
    const spark = names(featureSchema(undefined, { type: 'x' }, 'sensor.temp'));
    expect(spark).toEqual(expect.arrayContaining(['style', 'entity', 'attribute', 'hours', 'fill']));
    expect(spark).not.toContain('aggregate');
    const column = names(featureSchema(undefined, { type: 'x', style: 'column' }));
    expect(column).toContain('aggregate');
    expect(column).not.toContain('fill');
    expect(column).not.toContain('attribute');
    const bar = names(featureSchema(undefined, { type: 'x', style: 'bar', entity: 'sensor.temp' }));
    expect(bar).not.toContain('hours');
    expect(bar).toContain('attribute');
    for (const name of [...spark, ...column, ...bar]) expect(FEATURE_FIELDS.some((f) => f.name === name)).toBe(true);
    expect(featureLimits(undefined, 'bar').map(([k]) => k)).toEqual(['min', 'max', 'target']);
    expect(featureLimits(undefined, 'sparkline').map(([k]) => k)).toEqual(['min', 'max']);
  });

  it('has a label for every field in English', () => {
    const all = [
      ...names(featureSchema(undefined, { type: 'x' }, 'sensor.temp')),
      ...names(featureSchema(undefined, { type: 'x', style: 'column' })),
      'min',
      'max',
      'target',
      'bands',
      'actions',
      'style_sparkline',
      'style_column',
      'style_bar',
      ...FEATURE_ACTION_FIELDS.map((f) => f.name),
    ];
    for (const name of all) expect(localize(undefined, featureLabelKey(name))).not.toBe(featureLabelKey(name));
  });

  it('writes the form, limits, bands and actions, dropping defaults', async () => {
    const { ed, events } = await editor({});
    const form = ed.shadowRoot!.querySelector('ha-form[data-section="feature"]') as HTMLElement & {
      data: Record<string, unknown>;
      computeLabel(s: { name: string }): string;
      computeHelper(s: { name: string }): string | undefined;
    };
    expect(form.data).toMatchObject({ style: 'sparkline', hours: 24, fill: true });
    expect(form.computeLabel({ name: 'style' })).toBe('Look');
    expect(form.computeLabel({ name: 'fill' })).toBe('Fill below the line');
    expect(form.computeHelper({ name: 'entity' })).toBe("Empty: the tile's entity.");
    form.dispatchEvent(new CustomEvent('value-changed', { detail: { value: { ...form.data, style: 'bar' } } }));
    expect(events.at(-1)).toEqual({ type: 'custom:chartdeck-feature', style: 'bar' });
    await ed.updateComplete;
    const limits = [...ed.shadowRoot!.querySelectorAll('cd-limit-field')] as (HTMLElement & { label?: string })[];
    expect(limits.map((l) => [l.dataset.limit, l.label])).toEqual([
      ['min', 'Minimum'],
      ['max', 'Maximum'],
      ['target', 'Target'],
    ]);
    limits[2].dispatchEvent(new CustomEvent('value-changed', { detail: { value: 20 } }));
    expect(events.at(-1)).toMatchObject({ style: 'bar', target: 20 });
    const bands = ed.shadowRoot!.querySelector('cd-bands-editor') as HTMLElement & { unit?: string };
    expect(bands.unit).toBe('°C');
    bands.dispatchEvent(new CustomEvent('value-changed', { detail: { value: [{ from: 0, color: 'red' }] } }));
    expect(events.at(-1)!.severity).toEqual([{ from: 0, color: 'red' }]);
    const actions = ed.shadowRoot!.querySelector('ha-form[data-section="actions"]') as HTMLElement & {
      data: Record<string, unknown>;
    };
    actions.dispatchEvent(
      new CustomEvent('value-changed', { detail: { value: { ...actions.data, tap_action: { action: 'none' } } } }),
    );
    expect(events.at(-1)).toMatchObject({ target: 20, tap_action: { action: 'none' } });
  });

  it('draws nothing before it has a config', async () => {
    const ed = document.createElement('chartdeck-feature-editor') as Editor;
    document.body.appendChild(ed);
    await ed.updateComplete;
    expect(ed.shadowRoot!.querySelector('ha-form')).toBeNull();
  });
});
