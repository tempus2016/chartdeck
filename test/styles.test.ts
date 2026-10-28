import { afterEach, describe, expect, it } from 'vitest';
import '../src/chartdeck-card';
import { ChartdeckCard } from '../src/chartdeck-card';
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

describe('tank', () => {
  it('renders a tube with a rising fill and a target marker', async () => {
    const card = await mount({ style: 'tank', entities: [{ entity: 'sensor.a', target: 75 }] } as never);
    expect(q(card, '.tube .fill')).not.toBeNull();
    expect(q(card, '[role=meter]')!.getAttribute('style')).toContain('--end:0.42');
    expect(q(card, '.target')).not.toBeNull();
  });

  it('omits the target marker when show.target is false', async () => {
    const card = await mount({
      style: 'tank',
      entities: [{ entity: 'sensor.a', target: 75 }],
      show: { target: false },
    } as never);
    expect(q(card, '.target')).toBeNull();
  });

  it('sizes four tanks without a title to 12 columns and 4 rows', async () => {
    const card = await mount({ style: 'tank', entities: ['sensor.a', 'sensor.a', 'sensor.a', 'sensor.a'] });
    expect(card.getGridOptions().columns).toBe(12);
    expect(card.getGridOptions().rows).toBe(4);
  });
});

describe('static mode', () => {
  it('marks the host static and the shared reset covers pseudo-elements', async () => {
    const card = await mount({ style: 'segmented', animate: false });
    expect(card.hasAttribute('static')).toBe(true);
    const css = (ChartdeckCard.styles as { cssText: string }[]).map((s) => s.cssText).join('');
    expect(css).toMatch(/:host\(\[static\]\) \.entity \*::before/);
    expect(css).toMatch(/:host\(\[static\]\) \.entity \*::after/);
  });
});
