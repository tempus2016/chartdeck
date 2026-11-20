import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import '../src/chartdeck-card';
import {
  CLICK_WAIT_MS,
  historyEntities,
  historySpan,
  historyTarget,
  historyUrl,
  historyWindow,
  parseHistoryWindow,
  validatePointAction,
} from '../src/chart/history-link';
import type { ChartSeries } from '../src/chart/frame';
import type { CardConfig, HomeAssistant } from '../src/types';
import { makeHass } from './helpers/hass';
import { mountEditor } from './helpers/chart';

const now = new Date(2026, 10, 7, 15, 0, 0).getTime();
const H = 3_600_000;
const sec = (ago: number) => (now - ago) / 1000;
const iso = (ms: number) => encodeURIComponent(new Date(ms).toISOString());

const series = (id: string, points: { t: number; v: number | null; end?: number }[]) =>
  ({ entity: { entityId: id }, points }) as unknown as ChartSeries;

describe('point action maths', () => {
  it('reads a window, and only a sensible one', () => {
    expect(parseHistoryWindow('2h')).toBe(2 * H);
    expect(parseHistoryWindow('30min')).toBe(30 * 60_000);
    expect(parseHistoryWindow(' 1.5 d ')).toBe(36 * H);
    expect(parseHistoryWindow('90s')).toBe(90_000);
    expect(parseHistoryWindow('0h')).toBeUndefined();
    expect(parseHistoryWindow('32d')).toBeUndefined();
    expect(parseHistoryWindow('2 hours')).toBeUndefined();
    expect(parseHistoryWindow(2)).toBeUndefined();
  });

  it('opens History only when asked, with 2 h by default', () => {
    expect(historyWindow({ type: 'x' })).toBeUndefined();
    expect(historyWindow({ type: 'x', point_action: { action: 'none' } })).toBeUndefined();
    expect(historyWindow({ type: 'x', point_action: { action: 'history' } })).toBe(2 * H);
    expect(historyWindow({ type: 'x', point_action: { action: 'history', window: '6h' } })).toBe(6 * H);
  });

  it('rejects a bad point action with a readable error', () => {
    const bad = (pa: unknown) => () => validatePointAction({ type: 'x', point_action: pa } as CardConfig);
    expect(bad(undefined)).not.toThrow();
    expect(bad({ action: 'history', window: '1d' })).not.toThrow();
    expect(bad('history')).toThrow('"point_action" must be an object');
    expect(bad(['history'])).toThrow('"point_action" must be an object');
    expect(bad({ action: 'more-info' })).toThrow('"point_action.action" must be one of: none, history');
    expect(bad({ action: 'history', window: 'soon' })).toThrow('"point_action.window" must be a duration');
  });

  it('centres the window on the point, keeps it out of the future, and opens a group whole', () => {
    expect(historySpan(10 * H, 2 * H, undefined, 20 * H)).toEqual({ start: 9 * H, end: 11 * H });
    expect(historySpan(19.5 * H, 2 * H, undefined, 20 * H)).toEqual({ start: 18 * H, end: 20 * H });
    expect(historySpan(0, 2 * H, { t: 0, v: 1, end: 24 * H }, 30 * H)).toEqual({ start: 0, end: 24 * H });
    // Today's group so far ends now.
    expect(historySpan(0, 2 * H, { t: 0, v: 1, end: 24 * H }, 5 * H)).toEqual({ start: 0, end: 5 * H });
    expect(historySpan(10 * H, 2 * H, { t: 10 * H, v: 1, end: 10 * H }, 20 * H)).toEqual({ start: 9 * H, end: 11 * H });
  });

  it('lists each entity once and leaves out statistics with no entity', () => {
    expect(
      historyEntities([series('sensor.a', []), series('sensor.b', []), series('sensor.a', []), series('x:y', [])]),
    ).toEqual(['sensor.a', 'sensor.b']);
  });

  it('builds the History panel address', () => {
    expect(historyUrl(['sensor.a', 'sensor.b'], { start: 0, end: H })).toBe(
      `/history?entity_id=sensor.a,sensor.b&start_date=${iso(0)}&end_date=${iso(H)}`,
    );
    const s = [series('sensor.a', [{ t: 0, v: 1, end: 24 * H }]), series('x:y', [])];
    expect(historyTarget(s, 0, 2 * H, 48 * H)).toBe(historyUrl(['sensor.a'], { start: 0, end: 24 * H }));
    expect(historyTarget(s, 5 * H, 2 * H, 48 * H)).toBe(historyUrl(['sensor.a'], { start: 4 * H, end: 6 * H }));
    expect(historyTarget([series('x:y', [])], 0, H)).toBeUndefined();
  });
});

type Card = HTMLElement & { setConfig(c: CardConfig): void; hass?: HomeAssistant; updateComplete: Promise<boolean> };

function hass() {
  const h = makeHass({
    'sensor.in': ['21', { friendly_name: 'Inside', unit_of_measurement: '°C' }],
    'sensor.out': ['9', { friendly_name: 'Outside', unit_of_measurement: '°C' }],
  });
  h.callWS = vi.fn(async (msg: { type: string }) =>
    msg.type === 'recorder/statistics_during_period'
      ? {}
      : {
          'sensor.in': [
            { s: '19', lu: sec(20 * H) },
            { s: '20.25', lu: sec(12 * H) },
            { s: '21', lu: sec(2 * H) },
          ],
          'sensor.out': [{ s: '5', lu: sec(20 * H) }],
        },
  ) as HomeAssistant['callWS'];
  return h;
}

async function mount(extra: Record<string, unknown> = {}) {
  const card = document.createElement('chartdeck-card') as Card;
  card.setConfig({
    type: 'custom:chartdeck-card',
    style: 'line',
    entities: ['sensor.in', 'sensor.out'],
    point_action: { action: 'history' },
    ...extra,
  } as CardConfig);
  card.hass = hass();
  document.body.appendChild(card);
  await card.updateComplete;
  await new Promise((r) => setTimeout(r, 0));
  await card.updateComplete;
  return card;
}

const q = (card: Card, sel: string) => card.shadowRoot!.querySelector(sel);

/** A pointer event at `frac` of the way across a 1000 px plot, on `el` (default the plot). */
function point(el: Element, type: string, frac: number, pointerType = 'mouse', detail = 1) {
  const area = el.closest('.plot-area') ?? el;
  area.getBoundingClientRect = () =>
    ({ left: 0, top: 0, width: 1000, height: 160, right: 1000, bottom: 160 }) as DOMRect;
  const ev = new MouseEvent(type, { bubbles: true, composed: true, clientX: frac * 1000, detail });
  Object.defineProperty(ev, 'pointerType', { value: pointerType });
  el.dispatchEvent(ev);
}

function heard(card: Card) {
  const paths: string[] = [];
  card.addEventListener('hass-action', (e) => {
    const d = (e as CustomEvent).detail;
    if (d.config.tap_action?.action === 'navigate') paths.push(d.config.tap_action.navigation_path);
  });
  return paths;
}

const at12h = historyUrl(['sensor.in', 'sensor.out'], { start: now - 13 * H, end: now - 11 * H });

beforeEach(() => {
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(now);
});

afterEach(() => {
  document.body.innerHTML = '';
  vi.useRealTimers();
});

describe('opening History from a chart', () => {
  it('opens History round the clicked reading on a mouse click', async () => {
    const card = await mount();
    const paths = heard(card);
    const area = q(card, '.plot-area')!;
    expect(area.classList.contains('opens-history')).toBe(true);
    point(area, 'pointerdown', 0.49);
    point(area, 'click', 0.49);
    expect(paths).toEqual([at12h]);
  });

  it('puts an Open in History link in the tooltip, which a finger can tap', async () => {
    const card = await mount();
    const paths = heard(card);
    const area = q(card, '.plot-area')!;
    point(area, 'pointerdown', 0.5, 'touch');
    point(area, 'click', 0.5, 'touch');
    // A tap shows the tooltip; it doesn't leave the page.
    expect(paths).toEqual([]);
    await card.updateComplete;
    const link = q(card, '.tooltip-history') as HTMLAnchorElement;
    expect(link.textContent).toBe('Open in History');
    expect(link.getAttribute('href')).toBe(at12h);
    // Pressing the link doesn't move the tooltip under it.
    const moved = vi.fn();
    area.addEventListener('pointerdown', moved);
    link.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }));
    expect(moved).not.toHaveBeenCalled();
    const click = new MouseEvent('click', { bubbles: true, cancelable: true });
    link.dispatchEvent(click);
    expect(click.defaultPrevented).toBe(true);
    expect(paths).toEqual([at12h]);
  });

  it('opens on a tap straight away when there is no tooltip', async () => {
    const card = await mount({ tooltip: false });
    const paths = heard(card);
    const area = q(card, '.plot-area')!;
    point(area, 'pointerdown', 0.5, 'touch');
    point(area, 'click', 0.5, 'touch');
    expect(paths).toEqual([at12h]);
    expect(q(card, '.tooltip-history')).toBeNull();
  });

  it('leaves drags, header taps and charts without it alone', async () => {
    const card = await mount();
    const paths = heard(card);
    const area = q(card, '.plot-area')!;
    point(area, 'click', 0.5);
    point(area, 'pointerdown', 0.2);
    point(area, 'click', 0.5);
    const header = q(card, '.series-item')!;
    point(area, 'pointerdown', 0.5);
    point(header, 'click', 0.5);
    expect(paths).toEqual([]);
    const off = await mount({ point_action: undefined });
    expect(q(off, '.plot-area')!.classList.contains('opens-history')).toBe(false);
    point(q(off, '.plot-area')!, 'pointermove', 0.5);
    await off.updateComplete;
    expect(q(off, '.tooltip')).not.toBeNull();
    expect(q(off, '.tooltip-history')).toBeNull();
  });

  it('waits on a zoomable chart, so a double-click resets the zoom instead', async () => {
    const card = await mount({ zoom: true });
    const paths = heard(card);
    vi.useFakeTimers({ toFake: ['Date', 'setTimeout', 'clearTimeout'], now });
    const area = q(card, '.plot-area')!;
    point(area, 'pointerdown', 0.5);
    point(area, 'pointerup', 0.5);
    point(area, 'click', 0.5);
    point(area, 'pointerdown', 0.5);
    point(area, 'pointerup', 0.5);
    point(area, 'click', 0.5, 'mouse', 2);
    vi.advanceTimersByTime(CLICK_WAIT_MS * 2);
    expect(paths).toEqual([]);
    point(area, 'pointerdown', 0.5);
    point(area, 'pointerup', 0.5);
    point(area, 'click', 0.5);
    expect(paths).toEqual([]);
    vi.advanceTimersByTime(CLICK_WAIT_MS);
    expect(paths).toHaveLength(1);
    card.remove();
  });

  it('opens a day’s column for the whole day', async () => {
    const card = await mount({ style: 'column', period: { last: 3, unit: 'day' }, group_by: 'day' });
    const paths = heard(card);
    const area = q(card, '.plot-area')!;
    point(area, 'pointerdown', 0.5);
    point(area, 'click', 0.5);
    expect(paths).toHaveLength(1);
    const url = new URL(paths[0], 'http://x');
    const start = Date.parse(url.searchParams.get('start_date')!);
    const end = Date.parse(url.searchParams.get('end_date')!);
    expect(new Date(start).getHours()).toBe(0);
    expect(end - start).toBe(24 * H);
    point(area, 'pointermove', 0.5);
    await card.updateComplete;
    expect(q(card, '.tooltip-history')).not.toBeNull();
  });

  it('works on the area chart and line small multiples too', async () => {
    const area = await mount({ style: 'area' });
    const paths = heard(area);
    point(q(area, '.plot-area')!, 'pointerdown', 0.49);
    point(q(area, '.plot-area')!, 'click', 0.49);
    expect(paths).toEqual([at12h]);
    point(q(area, '.plot-area')!, 'pointermove', 0.5);
    await area.updateComplete;
    expect(q(area, '.tooltip-history')).not.toBeNull();
    const multiples = await mount({ multiples: true });
    const one = heard(multiples);
    const first = q(multiples, '.plot-area')!;
    point(first, 'pointerdown', 0.49);
    point(first, 'click', 0.49);
    expect(one).toEqual([historyUrl(['sensor.in'], { start: now - 13 * H, end: now - 11 * H })]);
    point(first, 'pointermove', 0.5);
    await multiples.updateComplete;
    expect(q(multiples, '.tooltip-history')).not.toBeNull();
  });

  it('rejects a bad option on each chart', async () => {
    for (const style of ['line', 'column', 'area']) {
      const card = document.createElement('chartdeck-card') as Card;
      expect(() =>
        card.setConfig({
          type: 'x',
          style,
          entities: ['sensor.in'],
          point_action: { action: 'history', window: 'x' },
        } as never),
      ).toThrow('"point_action.window"');
    }
  });
});

describe('point action editor', () => {
  it('sets and clears the action and window on the line, column and area charts', async () => {
    for (const style of ['line', 'column', 'area']) {
      const { ed, events, form, change } = await mountEditor(
        { type: 'custom:chartdeck-card', style, entities: ['sensor.in'] } as CardConfig,
        makeHass({ 'sensor.in': '1' }),
      );
      expect((form().data as Record<string, unknown>).point_action).toBe('none');
      expect((form().data as Record<string, unknown>).point_action_window).toBe('2h');
      change({ point_action: 'history', point_action_window: '6h' });
      expect(events.at(-1)!.point_action).toEqual({ action: 'history', window: '6h' });
      await ed.updateComplete;
      change({ point_action: 'none', point_action_window: '2h' });
      expect(events.at(-1)!.point_action).toBeUndefined();
      document.body.innerHTML = '';
    }
  });
});
