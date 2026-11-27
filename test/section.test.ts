import { describe, expect, it } from 'vitest';
import { localize } from '../src/localize';
import { areaSection, firstArea, styleFor } from '../src/section';
import { kitchenHass } from './helpers/areas';
import { makeHass } from './helpers/hass';

const kitchen = { type: 'custom:chartdeck-area', area: 'kitchen' };

describe('area section', () => {
  const hass = kitchenHass();

  it('maps device classes to styles', () => {
    expect(styleFor('battery')).toBe('battery');
    expect(styleFor('temperature')).toBe('line');
    expect(styleFor('humidity')).toBe('line');
    expect(styleFor('power')).toBe('sparkline');
    expect(styleFor('energy')).toBe('bar');
  });

  it('builds a heading then one card per class, in order', () => {
    const s = areaSection(kitchen, hass);
    expect(s.type).toBe('grid');
    expect(s.cards[0]).toEqual({ type: 'heading', heading: 'Kitchen' });
    expect(s.cards.slice(1).map((c) => (c.include as { device_class?: string[] }).device_class?.[0] ?? null)).toEqual([
      'temperature',
      'humidity',
      'power',
      'battery',
      'energy',
      null,
    ]);
    expect(s.cards[1]).toEqual({
      type: 'custom:chartdeck-card',
      style: 'line',
      include: { area: ['kitchen'], domain: ['sensor'], device_class: ['temperature'] },
    });
  });

  it('gives unclassified sensors a bar card that excludes the shown classes', () => {
    expect(areaSection(kitchen, hass).cards.at(-1)).toEqual({
      type: 'custom:chartdeck-card',
      style: 'bar',
      include: { area: ['kitchen'], domain: ['sensor'] },
      exclude: { device_class: ['temperature', 'humidity', 'power', 'battery', 'energy'] },
    });
  });

  it('leaves out the unclassified card when every sensor has a class', () => {
    const h = kitchenHass();
    delete h.states['sensor.kitchen_count'];
    const charts = areaSection(kitchen, h).cards.filter((c) => c.type === 'custom:chartdeck-card');
    expect(charts.every((c) => 'device_class' in (c.include as object))).toBe(true);
  });

  it('ignores hidden and non-sensor entities', () => {
    expect(JSON.stringify(areaSection(kitchen, hass))).not.toContain('carbon_dioxide');
  });

  it('shows a message for an area with no numeric sensors', () => {
    expect(areaSection({ type: 'custom:chartdeck-area', area: 'loft' }, hass).cards).toEqual([
      { type: 'heading', heading: 'Loft' },
      { type: 'markdown', content: localize(hass, 'section_empty', { area: 'Loft' }) },
    ]);
  });

  it('shows a message when the area is missing or deleted', () => {
    for (const area of [undefined, 'gone']) {
      expect(areaSection({ type: 'custom:chartdeck-area', area }, hass).cards).toEqual([
        { type: 'markdown', content: localize(hass, 'section_no_area') },
      ]);
    }
  });

  it('picks the first area, by name, that has numeric sensors', () => {
    expect(firstArea(hass)).toBe('kitchen');
    expect(firstArea(makeHass({}))).toBeUndefined();
  });
});
