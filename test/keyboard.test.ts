import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/chartdeck-card';
import {
  keyMove,
  keyPoint,
  keyboardNavEnabled,
  moveKey,
  nearestReading,
  pageStep,
  readings,
  stopKeyboard,
  validateKeyboardNav,
} from '../src/chart/keyboard';
import { STYLES } from '../src/styles';
import type { ChartStyleModule } from '../src/styles';
import type { CardConfig } from '../src/types';
import { H, ago, chartHass, mountCard, mountEditor, q, qa, tooltipRows } from './helpers/chart';
import type { Card } from './helpers/chart';
import { unfold } from './helpers/schema';

const now = Date.now();

function hass() {
  return chartHass(
    {
      'sensor.in': ['21', { friendly_name: 'Inside', unit_of_measurement: '°C' }],
      'sensor.out': ['9', { friendly_name: 'Outside', unit_of_measurement: '°C' }],
    },
    {
      'sensor.in': [
        { s: '19', lu: ago(now, 20 * H) },
        { s: '20', lu: ago(now, 10 * H) },
        { s: '21', lu: ago(now, 2 * H) },
      ],
      'sensor.out': [
        { s: '5', lu: ago(now, 20 * H) },
        { s: '9', lu: ago(now, 4 * H) },
      ],
    },
  );
}

const LINE = { style: 'line', entities: ['sensor.in', 'sensor.out'] };

/** A reading every hour, for zooming in. */
function denseHass() {
  const rows = (base: number) =>
    Array.from({ length: 24 }, (_, i) => ({ s: String(base + (i % 5)), lu: ago(now, (24 - i) * H - 60_000) }));
  return chartHass(
    {
      'sensor.in': ['21', { friendly_name: 'Inside', unit_of_measurement: '°C' }],
      'sensor.out': ['9', { friendly_name: 'Outside', unit_of_measurement: '°C' }],
    },
    { 'sensor.in': rows(18), 'sensor.out': rows(4) },
  );
}

async function settle(...cards: Card[]) {
  for (const c of cards) await c.updateComplete;
  await new Promise((r) => setTimeout(r, 0));
  for (const c of cards) await c.updateComplete;
}

const area = (card: Card) => q(card, '.plot-area') as HTMLElement;

async function press(card: Card, key: string, target: Element = area(card), init: KeyboardEventInit = {}) {
  const ev = new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, composed: true, ...init });
  target.dispatchEvent(ev);
  await settle(card);
  return ev;
}

const live = (card: Card) => q(card, '.key-live')!.textContent!.trim();

afterEach(() => {
  document.body.innerHTML = '';
  vi.restoreAllMocks();
});

describe('keyboard moves', () => {
  const p = (t: number, v: number | null = 1) => ({ t, v });
  const series = [
    { index: 0, points: [p(1), p(2, null), p(3), p(5)] },
    { index: 1, points: [p(1, null)] },
    { index: 2, points: [p(2), p(4)] },
  ];

  it('maps keys to moves, following the way the time axis is drawn', () => {
    expect(keyMove('ArrowRight')).toBe('next');
    expect(keyMove('ArrowLeft')).toBe('prev');
    expect(keyMove('ArrowRight', -1)).toBe('prev');
    expect(keyMove('ArrowLeft', -1)).toBe('next');
    expect(keyMove('ArrowUp')).toBe('up');
    expect(keyMove('ArrowDown')).toBe('down');
    expect(keyMove('PageUp')).toBe('back');
    expect(keyMove('PageDown')).toBe('on');
    expect(keyMove('Home')).toBe('first');
    expect(keyMove('End')).toBe('last');
    expect(keyMove('a')).toBeUndefined();
  });

  it('starts on the first series, at its latest reading (its first for Home)', () => {
    expect(moveKey(series, undefined, 'prev')).toEqual({ series: 0, t: 5 });
    expect(moveKey(series, undefined, 'first')).toEqual({ series: 0, t: 1 });
    // A series no longer shown starts afresh too.
    expect(moveKey(series, { series: 9, t: 3 }, 'next')).toEqual({ series: 0, t: 5 });
    expect(moveKey([], undefined, 'next')).toBeUndefined();
    expect(moveKey([{ index: 0, points: [p(1, null)] }], undefined, 'next')).toBeUndefined();
  });

  it('steps over gaps, and stays put at either end', () => {
    expect(moveKey(series, { series: 0, t: 3 }, 'prev')).toEqual({ series: 0, t: 1 });
    expect(moveKey(series, { series: 0, t: 1 }, 'next')).toEqual({ series: 0, t: 3 });
    expect(moveKey(series, { series: 0, t: 1 }, 'prev')).toEqual({ series: 0, t: 1 });
    expect(moveKey(series, { series: 0, t: 5 }, 'next')).toEqual({ series: 0, t: 5 });
    expect(moveKey(series, { series: 0, t: 3 }, 'last')).toEqual({ series: 0, t: 5 });
    expect(moveKey(series, { series: 0, t: 3 }, 'first')).toEqual({ series: 0, t: 1 });
    // From a time between readings (the pointer was there), a step goes to the neighbour of the nearest.
    expect(moveKey(series, { series: 0, t: 4.4 }, 'next')).toEqual({ series: 0, t: 5 });
  });

  it('jumps a tenth of the readings with Page Up and Page Down', () => {
    expect(pageStep(5)).toBe(1);
    expect(pageStep(100)).toBe(10);
    const long = [{ index: 0, points: Array.from({ length: 50 }, (_, i) => p(i)) }];
    expect(moveKey(long, { series: 0, t: 20 }, 'back')).toEqual({ series: 0, t: 15 });
    expect(moveKey(long, { series: 0, t: 20 }, 'on')).toEqual({ series: 0, t: 25 });
    expect(moveKey(long, { series: 0, t: 48 }, 'on')).toEqual({ series: 0, t: 49 });
  });

  it('moves between series that have readings, to the nearest in time', () => {
    expect(moveKey(series, { series: 0, t: 5 }, 'down')).toEqual({ series: 2, t: 4 });
    expect(moveKey(series, { series: 2, t: 2 }, 'up')).toEqual({ series: 0, t: 1 });
    expect(moveKey(series, { series: 0, t: 3 }, 'up')).toEqual({ series: 0, t: 3 });
    expect(moveKey(series, { series: 2, t: 4 }, 'down')).toEqual({ series: 2, t: 4 });
  });

  it('reads values only', () => {
    expect(readings(series[0].points).map((x) => x.t)).toEqual([1, 3, 5]);
    expect(nearestReading(series[0].points, 2.2)!.t).toBe(3);
    expect(nearestReading(series[1].points, 1)).toBeUndefined();
  });

  it('checks its option, and is on unless turned off', () => {
    expect(keyboardNavEnabled({} as CardConfig)).toBe(true);
    expect(keyboardNavEnabled({ keyboard_nav: false } as CardConfig)).toBe(false);
    expect(() => validateKeyboardNav({ keyboard_nav: true } as CardConfig)).not.toThrow();
    expect(() => validateKeyboardNav({ keyboard_nav: 'no' } as unknown as CardConfig)).toThrow(
      '"keyboard_nav" must be true or false',
    );
    for (const style of ['line', 'column', 'area']) {
      const mod = STYLES[style as keyof typeof STYLES] as ChartStyleModule;
      expect(() => mod.validate!({ type: 'x', keyboard_nav: 1 } as unknown as CardConfig)).toThrow('keyboard_nav');
    }
  });
});

describe('reading a line chart from the keyboard', () => {
  it('makes the plot one named Tab stop, unless turned off', async () => {
    const card = await mountCard(LINE, hass());
    expect(area(card).getAttribute('tabindex')).toBe('0');
    expect(area(card).getAttribute('role')).toBe('group');
    expect(area(card).getAttribute('aria-label')).toBe(
      'Line chart of Inside, Outside. Arrow keys read the values, Enter opens the series, Esc stops.',
    );
    expect(q(card, '.key-live')!.getAttribute('aria-live')).toBe('polite');
    expect(live(card)).toBe('');
    const off = await mountCard({ ...LINE, keyboard_nav: false }, hass());
    expect(area(off).hasAttribute('tabindex')).toBe(false);
    expect(q(off, '.key-live')).toBeNull();
    const ev = await press(off, 'ArrowLeft');
    expect(ev.defaultPrevented).toBe(false);
  });

  it('steps through readings and series, with the tooltip, a ring and the reading read out', async () => {
    const card = await mountCard(LINE, hass());
    expect(q(card, '.tooltip')).toBeNull();
    const first = await press(card, 'ArrowLeft');
    expect(first.defaultPrevented).toBe(true);
    // The first key lands on the latest reading: the value carried to now.
    expect(tooltipRows(card)).toEqual(['Inside 21.0 °C', 'Outside 9.0 °C']);
    expect(q(card, '.key-point')).not.toBeNull();
    expect(live(card)).toMatch(/^Inside, .+: 21\.0 °C$/);
    const ringAt = () => q(card, '.key-point')!.getAttribute('style');
    const latest = ringAt();
    await press(card, 'ArrowLeft');
    expect(ringAt()).not.toBe(latest);
    expect(live(card)).toMatch(/: 21\.0 °C$/);
    await press(card, 'ArrowLeft');
    expect(live(card)).toMatch(/: 20\.0 °C$/);
    await press(card, 'Home');
    expect(live(card)).toMatch(/^Inside, .+: 19\.0 °C$/);
    await press(card, 'ArrowLeft');
    expect(live(card)).toMatch(/: 19\.0 °C$/);
    await press(card, 'ArrowDown');
    expect(live(card)).toMatch(/^Outside, .+: 5\.0 °C$/);
    await press(card, 'ArrowDown');
    expect(live(card)).toMatch(/^Outside/);
    await press(card, 'End');
    expect(live(card)).toMatch(/^Outside, .+: 9\.0 °C$/);
    await press(card, 'ArrowUp');
    expect(live(card)).toMatch(/^Inside/);
    expect(keyPoint(card)?.series).toBe(0);
  });

  it('opens the focused series with Enter, and lets go with Escape', async () => {
    const card = await mountCard(LINE, hass());
    const opened: string[] = [];
    card.addEventListener('hass-more-info', (e) => opened.push((e as CustomEvent).detail.entityId));
    // Nothing focused yet: Enter and Escape are left alone.
    expect((await press(card, 'Enter')).defaultPrevented).toBe(false);
    expect((await press(card, 'Escape')).defaultPrevented).toBe(false);
    expect(opened).toEqual([]);
    await press(card, 'End');
    await press(card, 'ArrowDown');
    expect((await press(card, 'Enter')).defaultPrevented).toBe(true);
    expect(opened).toEqual(['sensor.out']);
    const esc = await press(card, 'Escape');
    expect(esc.defaultPrevented).toBe(true);
    expect(q(card, '.tooltip')).toBeNull();
    expect(q(card, '.key-point')).toBeNull();
    expect(keyPoint(card)).toBeUndefined();
    // Escape again belongs to whatever is around the card.
    expect((await press(card, 'Escape')).defaultPrevented).toBe(false);
  });

  it('lets go when focus leaves, and leaves keys with modifiers or from inside the plot alone', async () => {
    const card = await mountCard(LINE, hass());
    expect((await press(card, 'ArrowLeft', area(card), { ctrlKey: true })).defaultPrevented).toBe(false);
    const inner = document.createElement('button');
    area(card).appendChild(inner);
    expect((await press(card, 'ArrowLeft', inner)).defaultPrevented).toBe(false);
    inner.remove();
    await press(card, 'End');
    expect(q(card, '.tooltip')).not.toBeNull();
    area(card).dispatchEvent(new FocusEvent('blur'));
    await settle(card);
    expect(q(card, '.tooltip')).toBeNull();
    expect(keyPoint(card)).toBeUndefined();
    // Blurring with nothing focused does nothing.
    area(card).dispatchEvent(new FocusEvent('blur'));
    stopKeyboard(card);
  });

  it('hides the ring while the pointer has the chart, and carries on from the pointer', async () => {
    const card = await mountCard(LINE, hass());
    await press(card, 'Home');
    expect(q(card, '.key-point')).not.toBeNull();
    const el = area(card);
    el.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 1000, height: 160, right: 1000, bottom: 160 }) as DOMRect;
    const move = new MouseEvent('pointermove', { bubbles: true, clientX: 600 });
    Object.defineProperty(move, 'pointerType', { value: 'mouse' });
    el.dispatchEvent(move);
    await settle(card);
    expect(q(card, '.key-point')).toBeNull();
    // 60 % across 24 hours is 9.6 h ago: the nearest reading is 10 h ago (20 °C); one on is 2 h ago.
    await press(card, 'ArrowRight');
    expect(live(card)).toMatch(/: 21\.0 °C$/);
    expect(q(card, '.key-point')).not.toBeNull();
  });

  it('moves the guide on charts synced with it', async () => {
    const a = await mountCard({ ...LINE, sync: 'kb' }, hass());
    const b = await mountCard({ ...LINE, sync: 'kb' }, hass());
    await press(a, 'Home');
    await settle(a, b);
    expect(q(b, '.crosshair')).not.toBeNull();
    await press(a, 'Escape');
    await settle(a, b);
    expect(q(b, '.crosshair')).toBeNull();
  });

  it('keeps the zoom keys working, and steps through the readings in the zoomed window', async () => {
    const card = await mountCard({ ...LINE, zoom: true, overview: true }, denseHass());
    const win = q(card, '.overview-window') as HTMLElement;
    expect((await press(card, 'ArrowUp', win)).defaultPrevented).toBe(true);
    expect(q(card, '.zoom-reset')).not.toBeNull();
    expect(keyPoint(card)).toBeUndefined();
    // The reset button's own keys are its own.
    expect((await press(card, 'ArrowLeft', q(card, '.zoom-reset')!)).defaultPrevented).toBe(false);
    await press(card, 'Home');
    expect(keyPoint(card)).toBeDefined();
    expect(q(card, '.tooltip')).not.toBeNull();
    // Home is the first reading in the window, not the first of the whole span.
    const shown = qa(card, '.x-axis .axis-label').length;
    expect(shown).toBeGreaterThan(0);
    expect(keyPoint(card)!.t).toBeGreaterThan(now - 20 * H);
  });

  it('keeps arrows to the screen in a right-to-left language, where time still runs left to right', async () => {
    document.documentElement.setAttribute('dir', 'rtl');
    try {
      const card = await mountCard(LINE, hass());
      card.setAttribute('dir', 'rtl');
      await press(card, 'Home');
      await press(card, 'ArrowRight');
      expect(live(card)).toMatch(/: 20\.0 °C$/);
      await press(card, 'ArrowLeft');
      expect(live(card)).toMatch(/: 19\.0 °C$/);
    } finally {
      document.documentElement.removeAttribute('dir');
    }
  });

  it('reads with the tooltip turned off: the ring and the live text still show', async () => {
    const card = await mountCard({ ...LINE, tooltip: false }, hass());
    await press(card, 'End');
    expect(q(card, '.tooltip')).toBeNull();
    expect(q(card, '.key-point')).not.toBeNull();
    expect(live(card)).toMatch(/^Inside/);
  });
});

describe('reading columns and areas from the keyboard', () => {
  it('rings the focused column and highlights its slot', async () => {
    const card = await mountCard(
      { style: 'column', entities: ['sensor.in', 'sensor.out'], period: { last: 24, unit: 'hour' }, group_by: 'hour' },
      hass(),
    );
    expect(area(card).getAttribute('tabindex')).toBe('0');
    await press(card, 'End');
    expect(q(card, '.slot-hover')).not.toBeNull();
    const ring = q(card, '.key-point')!;
    expect(ring).not.toBeNull();
    const left = (el: Element) => parseFloat(/left:([\d.]+)%/.exec(el.getAttribute('style')!)![1]);
    const inside = left(ring);
    await press(card, 'ArrowDown');
    // The second series' column sits to the right of the first's in the same slot.
    expect(left(q(card, '.key-point')!)).toBeGreaterThan(inside);
    expect(live(card)).toMatch(/^Outside, /);
  });

  it('rings the top of a stacked column', async () => {
    const card = await mountCard(
      {
        style: 'column',
        entities: ['sensor.in', 'sensor.out'],
        period: { last: 24, unit: 'hour' },
        group_by: 'hour',
        stack: 'normal',
      },
      hass(),
    );
    await press(card, 'End');
    const top = (el: Element) => parseFloat(/top:([\d.]+)%/.exec(el.getAttribute('style')!)![1]);
    const lower = top(q(card, '.key-point')!);
    await press(card, 'ArrowDown');
    expect(top(q(card, '.key-point')!)).toBeLessThan(lower);
  });

  it('steps through an area chart, ringing the top of each layer when stacked', async () => {
    const card = await mountCard({ ...LINE, style: 'area', stack: 'normal' }, hass());
    await press(card, 'End');
    const top = (el: Element) => parseFloat(/top:([\d.]+)%/.exec(el.getAttribute('style')!)![1]);
    const first = top(q(card, '.key-point')!);
    await press(card, 'ArrowDown');
    expect(top(q(card, '.key-point')!)).toBeLessThan(first);
    expect(tooltipRows(card).at(-1)).toMatch(/^Total/);
  });
});

describe('keyboard editor', () => {
  it('offers the switch with the axes options of each chart', async () => {
    for (const style of ['line', 'column', 'area']) {
      const { form, change, events } = await mountEditor(
        { type: 'custom:chartdeck-card', style, entities: ['sensor.in'] } as CardConfig,
        hass(),
      );
      const schema = form().schema as { type?: string; schema?: { name: string }[] }[];
      expect(unfold(schema).map((s) => s.name)).toContain('keyboard_nav');
      const axes = schema.find((s) => s.type === 'expandable' && s.schema!.some((f) => f.name === 'keyboard_nav'));
      if (axes) expect(axes.schema!.some((f) => f.name === 'tooltip')).toBe(true);
      expect((form().data as Record<string, unknown>).keyboard_nav).toBe(true);
      change({ keyboard_nav: false });
      expect(events.at(-1)!.keyboard_nav).toBe(false);
      document.body.innerHTML = '';
    }
  });
});
