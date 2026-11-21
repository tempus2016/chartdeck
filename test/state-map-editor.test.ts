import { afterEach, describe, expect, it } from 'vitest';
import { makeHass } from './helpers/hass';

for (const tag of ['ha-selector', 'ha-icon-button']) {
  if (!customElements.get(tag)) customElements.define(tag, class extends HTMLElement {});
}
const { knownStates, rowsToMap } = await import('../src/editor/state-map-editor');

type MapEditor = HTMLElement & {
  hass?: unknown;
  map?: Record<string, number | ''>;
  entityId?: string;
  attribute?: string;
  updateComplete: Promise<boolean>;
};

const hass = makeHass({
  'climate.lounge': ['heat', { hvac_action: 'idle', hvac_modes: ['off', 'heat'], friendly_name: 'Lounge' }],
  'sensor.mode': ['eco', { options: ['eco', 'boost', 'away'] }],
  'sensor.temp': '21.5',
});

async function mount(map?: Record<string, number | ''>, attribute?: string, entityId = 'climate.lounge') {
  const el = document.createElement('cd-state-map-editor') as MapEditor;
  el.hass = hass;
  el.map = map;
  el.entityId = entityId;
  el.attribute = attribute;
  const events: unknown[] = [];
  el.addEventListener('value-changed', (e) => events.push((e as CustomEvent).detail.value));
  document.body.appendChild(el);
  await el.updateComplete;
  return { el, events, root: el.shadowRoot! };
}

const fire = (target: Element, value: unknown) =>
  target.dispatchEvent(new CustomEvent('value-changed', { detail: { value } }));

afterEach(() => {
  document.body.innerHTML = '';
});

describe('knownStates', () => {
  it('lists the current state first, then the ones the entity can take', () => {
    expect(knownStates(hass, 'climate.lounge', 'hvac_action').slice(0, 3)).toEqual(['idle', 'off', 'preheating']);
    expect(knownStates(hass, 'climate.lounge')).toEqual(['heat', 'off']);
    expect(knownStates(hass, 'sensor.mode')).toEqual(['eco', 'boost', 'away']);
  });

  it('is empty for numbers and missing entities', () => {
    expect(knownStates(hass, 'sensor.temp')).toEqual([]);
    expect(knownStates(hass, 'sensor.gone')).toEqual([]);
    expect(knownStates(undefined, 'sensor.mode')).toEqual([]);
  });
});

describe('rowsToMap', () => {
  it('leaves out blank states and is undefined with none', () => {
    expect(
      rowsToMap([
        { state: 'eco', value: 1 },
        { state: ' ', value: 2 },
      ]),
    ).toEqual({ eco: 1 });
    expect(rowsToMap([])).toBeUndefined();
  });
});

describe('the state map editor', () => {
  it('shows one row per mapped state', async () => {
    const { root } = await mount({ heating: 100, idle: 0 }, 'hvac_action');
    expect(root.querySelectorAll('.row')).toHaveLength(2);
  });

  it('adds the current state at 0, then the next known one at 100', async () => {
    const { root, events, el } = await mount(undefined, 'hvac_action');
    (root.querySelector('.add-state') as HTMLElement).click();
    expect(events.at(-1)).toEqual({ idle: 0 });
    el.map = events.at(-1) as Record<string, number>;
    await el.updateComplete;
    (root.querySelector('.add-state') as HTMLElement).click();
    expect(events.at(-1)).toEqual({ idle: 0, off: 100 });
  });

  it('offers known states in a dropdown that also takes typed text', async () => {
    const { root } = await mount({ eco: 0 }, undefined, 'sensor.mode');
    const selector = (root.querySelector('[data-role="state"]') as HTMLElement & { selector: unknown }).selector;
    expect(selector).toEqual({ select: { options: ['eco', 'boost', 'away'], custom_value: true, mode: 'dropdown' } });
  });

  it('renames a state and changes its number in place', async () => {
    const { root, events } = await mount({ heating: 100, idle: 0 }, 'hvac_action');
    fire(root.querySelectorAll('[data-role="state"]')[0], 'preheating');
    expect(events.at(-1)).toEqual({ preheating: 100, idle: 0 });
    fire(root.querySelectorAll('[data-role="number"]')[1], 5);
    expect(events.at(-1)).toEqual({ preheating: 100, idle: 5 });
    fire(root.querySelectorAll('[data-role="number"]')[1], undefined);
    expect(events.at(-1)).toEqual({ preheating: 100, idle: '' });
  });

  it('keeps a row whose state is still blank', async () => {
    const { root, events, el } = await mount(undefined, undefined, 'sensor.temp');
    (root.querySelector('.add-state') as HTMLElement).click();
    expect(events.at(-1)).toBeUndefined();
    el.map = undefined;
    await el.updateComplete;
    expect(root.querySelectorAll('.row')).toHaveLength(1);
  });

  it('removes a row, and clears the map with the last one', async () => {
    const { root, events } = await mount({ heating: 100 }, 'hvac_action');
    (root.querySelector('.remove') as HTMLElement).click();
    expect(events.at(-1)).toBeUndefined();
  });
});
