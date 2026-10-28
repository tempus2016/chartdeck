import { describe, expect, it } from 'vitest';
import {
  addEntity,
  entityId,
  fireConfigChanged,
  moveEntity,
  removeEntity,
  setEntityOption,
  setOption,
} from '../src/editor/edit';
import type { CardConfig } from '../src/types';

const raw: CardConfig = {
  type: 'custom:chartdeck-card',
  entities: ['sensor.a', { entity: 'sensor.b', name: 'B' }],
  future_option: { x: 1 },
};

describe('setOption', () => {
  it('sets and removes a top-level key', () => {
    expect(setOption(raw, ['title'], 'Hi')).toEqual({ ...raw, title: 'Hi' });
    expect(setOption({ ...raw, title: 'Hi' }, ['title'], '')).toEqual(raw);
    expect(setOption({ ...raw, title: 'Hi' }, ['title'], null)).toEqual(raw);
  });

  it('sets nested show keys and drops an emptied show object', () => {
    expect(setOption(raw, ['show', 'legend'], true).show).toEqual({ legend: true });
    expect(setOption(setOption(raw, ['show', 'legend'], true), ['show', 'legend'], undefined)).toEqual(raw);
  });

  it('keeps sibling show keys', () => {
    const c = { ...raw, show: { name: false, legend: true } };
    expect(setOption(c, ['show', 'legend'], undefined).show).toEqual({ name: false });
  });

  it('does not mutate its input', () => {
    const c = { ...raw, show: { legend: true } };
    setOption(c, ['show', 'name'], false);
    expect(c.show).toEqual({ legend: true });
  });
});

describe('entity helpers', () => {
  it('converts shorthand to an object and back', () => {
    expect(setEntityOption(raw, 0, 'name', 'A').entities![0]).toEqual({ entity: 'sensor.a', name: 'A' });
    expect(setEntityOption(raw, 1, 'name', undefined).entities![1]).toBe('sensor.b');
  });

  it('moves, removes and adds entities', () => {
    expect(moveEntity(raw, 1, 0).entities!.map(entityId)).toEqual(['sensor.b', 'sensor.a']);
    expect(removeEntity(raw, 0).future_option).toEqual({ x: 1 });
    expect(removeEntity(raw, 0).entities).toEqual([{ entity: 'sensor.b', name: 'B' }]);
    expect(addEntity(raw, 'sensor.c').entities!.map(entityId)).toEqual(['sensor.a', 'sensor.b', 'sensor.c']);
    expect(addEntity({ type: 'custom:chartdeck-card' }, 'sensor.c').entities).toEqual(['sensor.c']);
    expect(raw.entities![0]).toBe('sensor.a');
    expect(raw.entities).toHaveLength(2);
  });
});

describe('fireConfigChanged', () => {
  it('dispatches a bubbling, composed config-changed event', () => {
    const el = document.createElement('div');
    let event: CustomEvent | undefined;
    el.addEventListener('config-changed', (e) => (event = e as CustomEvent));
    fireConfigChanged(el, raw);
    expect(event?.bubbles).toBe(true);
    expect(event?.composed).toBe(true);
    expect(event?.detail).toEqual({ config: raw });
  });
});
