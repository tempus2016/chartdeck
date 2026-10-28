import { afterEach, describe, expect, it } from 'vitest';
import '../src/chartdeck-card';
import type { ChartdeckCard } from '../src/chartdeck-card';
import { litCells } from '../src/styles/segmented';
import { STYLES } from '../src/styles';
import { STYLE_NAMES } from '../src/types';
import type { CardConfig } from '../src/types';
import { makeHass } from './helpers/hass';

type Card = ChartdeckCard;

const hass = () =>
  makeHass({
    'sensor.a': ['42', { unit_of_measurement: '%', friendly_name: 'A very long entity name that must be truncated' }],
    'sensor.b': 'unavailable',
  });

async function mount(config: Partial<CardConfig>): Promise<Card> {
  const card = document.createElement('chartdeck-card') as Card;
  card.setConfig({ type: 'custom:chartdeck-card', entities: ['sensor.a'], ...config });
  card.hass = hass();
  document.body.appendChild(card);
  await card.updateComplete;
  return card;
}

const q = (card: Card, sel: string) => card.shadowRoot!.querySelector(sel);

afterEach(() => {
  document.body.innerHTML = '';
});

describe('litCells', () => {
  it('lights cells whose centre is inside the span', () => {
    expect(litCells([0, 0.38])).toEqual([true, true, true, true, false, false, false, false, false, false]);
    expect(litCells([0, 0])).toEqual(Array(10).fill(false));
    expect(litCells([0.25, 0.5]).filter(Boolean)).toHaveLength(2);
    expect(litCells([0.25, 0.5])[3]).toBe(true);
    expect(litCells([0.25, 0.5])[4]).toBe(true);
  });
});

describe('styles', () => {
  const names = STYLE_NAMES.filter((n) => n in STYLES);

  it('renders every registered style without throwing for available, unavailable and missing entities', async () => {
    for (const style of names) {
      const card = await mount({ style, entities: ['sensor.a', 'sensor.b', 'sensor.missing'] });
      expect(card.shadowRoot!.querySelectorAll('[role=meter]')).toHaveLength(3);
      card.remove();
    }
  });

  it('truncates long names', async () => {
    for (const style of names.filter((n) => n !== 'bar')) {
      const card = await mount({ style });
      expect(q(card, '.name')?.textContent).toContain('truncated');
      card.remove();
    }
  });

  it('segmented lights cells and outlines the target cell', async () => {
    const card = await mount({ style: 'segmented', entities: [{ entity: 'sensor.a', target: 75 }] } as never);
    expect(card.shadowRoot!.querySelectorAll('.cell.on')).toHaveLength(4);
    const marks = card.shadowRoot!.querySelectorAll('.cell.mark');
    expect(marks).toHaveLength(1);
    expect(marks[0].getAttribute('style')).toContain('--i:7');
  });

  it('thin draws a target marker only when shown', async () => {
    const entities = [{ entity: 'sensor.a', target: 75 }] as never;
    const on = await mount({ style: 'thin', entities });
    expect(q(on, '.target')).not.toBeNull();
    const off = await mount({ style: 'thin', entities, show: { target: false } });
    expect(q(off, '.target')).toBeNull();
  });
});
