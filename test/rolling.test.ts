import { afterEach, describe, expect, it } from 'vitest';
import '../src/chartdeck-card';
import {
  rolling,
  rollingLead,
  rollingSeries,
  rollingWindow,
  validateRolling,
  wantsRaw,
  withRollingFields,
} from '../src/history/transform-rolling';
import { withCumulativeFields } from '../src/history/transform-cumulative';
import { withDerivativeFields } from '../src/history/transform-derivative';
import type { Point } from '../src/history/types';
import type { ResolvedEntity } from '../src/resolve';
import type { CardConfig, EntityConfig } from '../src/types';
import { H, ago, chartHass, mountCard, q, qa, stubEditorElements } from './helpers/chart';
import type { Editor, Stub } from './helpers/chart';
import { makeHass } from './helpers/hass';

stubEditorElements();
await import('../src/editor/chartdeck-card-editor');

afterEach(() => {
  document.body.innerHTML = '';
});

const pts = (...rows: [number, number | null][]): Point[] => rows.map(([t, v]) => ({ t: t * H, v }));
const values = (points: Point[]) => points.map((p) => [p.t / H, p.v === null ? null : Math.round(p.v * 1000) / 1000]);

describe('rolling', () => {
  it('gives the time-weighted mean over the window before each change, exact at each bend', () => {
    // 10 for 1 h, then 20: a 2 h mean climbs in a straight line from 10 to 20 over the next 2 h.
    expect(values(rolling(pts([0, 10], [1, 20]), 2 * H, 'mean', 4 * H))).toEqual([
      [0, 10],
      [1, 10],
      [2, 15],
      [3, 20],
      [4, 20],
    ]);
  });

  it('weights each reading by how long it held, not by count', () => {
    // 0 for 3 h, then three readings of 30 within the last hour.
    const out = rolling(pts([0, 0], [3, 30], [3.25, 30], [3.5, 30]), 4 * H, 'mean', 4 * H);
    expect(values(out).at(-1)).toEqual([4, 7.5]);
  });

  it('gives the time-weighted median', () => {
    // 3 h at 10, 1 h at 100: the median over 4 h is 10; the mean would be 32.5.
    expect(values(rolling(pts([0, 10], [3, 100]), 4 * H, 'median', 4 * H)).at(-1)).toEqual([4, 10]);
    expect(values(rolling(pts([0, 10], [1, 100]), 4 * H, 'median', 4 * H)).at(-1)).toEqual([4, 100]);
  });

  it('gives the lowest and highest that held in the window, the newest reading included', () => {
    const p = pts([0, 5], [1, 9], [2, 1], [3, 4]);
    // Worked out at 1.5, 2 and 2.5 too, but 9 held all along: only where it starts and ends stay.
    // The 9 held until 2 h, inside the window back to 1.5 h at 3 h; it has left by 3.5 h.
    expect(values(rolling(p, 1.5 * H, 'max', 4 * H))).toEqual([
      [0, 5],
      [1, 9],
      [3, 9],
      [3.5, 4],
      [4, 4],
    ]);
    expect(values(rolling(p, 1.5 * H, 'min', 4 * H)).slice(0, 3)).toEqual([
      [0, 5],
      [1.5, 5],
      [2, 1],
    ]);
  });

  it('keeps only where each value starts when it holds briefly, so a climb is smooth', () => {
    // Readings every 10 min climbing by 1: the 1 h lowest steps up as each leaves the window.
    const climb = Array.from({ length: 13 }, (_, i): [number, number] => [i / 6, i]);
    const out = values(rolling(pts(...climb), H, 'min', 2 * H));
    const vs = out.map(([, v]) => v as number);
    expect(vs).toEqual([...vs].sort((a, b) => a - b));
    expect(new Set(vs).size).toBe(vs.length - 1);
  });

  it('leaves a gap out of the window, and is a gap only when the whole window is', () => {
    const p = pts([0, 10], [1, null], [1.5, 30], [2, null], [5, 40]);
    const out = values(rolling(p, 1 * H, 'mean', 6 * H));
    // The half hour at 30 and the hour at 10 before the gap.
    expect(out).toContainEqual([1.5, 10]);
    expect(out).toContainEqual([2, 30]);
    // A whole hour of gap, once.
    expect(out.filter(([, v]) => v === null)).toHaveLength(1);
    expect(out.at(-1)).toEqual([6, 40]);
  });

  it('keeps the last of readings at the same time, and ignores readings after until', () => {
    expect(values(rolling(pts([0, 1], [0, 3], [5, 99]), H, 'mean', 1 * H))).toEqual([
      [0, 3],
      [1, 3],
    ]);
    expect(rolling([], H)).toEqual([]);
  });

  it('works out the statistic at extra moments asked for', () => {
    const out = rolling(pts([0, 0], [2, 10]), 2 * H, 'mean', 4 * H, [2.5 * H, 9 * H]);
    expect(values(out)).toContainEqual([2.5, 2.5]);
    expect(values(out).some(([t]) => t === 9)).toBe(false);
  });

  it('samples a long window for the median', () => {
    const many = Array.from({ length: 1000 }, (_, i): [number, number] => [i / 100, i % 2 ? 10 : 20]);
    const out = rolling(pts(...many), 10 * H, 'median', 10 * H);
    expect([10, 20]).toContain(out.at(-1)!.v);
  });
});

describe('rolling options', () => {
  const card = (e: Record<string, unknown>) => ({ type: 'x', entities: [{ entity: 'sensor.a', ...e }] }) as CardConfig;

  it('checks the window, statistic and raw switch', () => {
    expect(() => validateRolling(card({ transform: 'rolling', transform_window: '2h' }))).not.toThrow();
    expect(() => validateRolling(card({ transform: 'rolling' }))).toThrow(/needs a "transform_window"/);
    expect(() => validateRolling(card({ transform_window: 'soon' }))).toThrow(/up to 7 days/);
    expect(() => validateRolling(card({ transform_window: '8d' }))).toThrow(/up to 7 days/);
    expect(() => validateRolling(card({ transform_stat: 'mode' }))).toThrow(/mean, median, min, max/);
    expect(() => validateRolling(card({ transform_raw: 'yes' }))).toThrow(/true or false/);
    expect(() => validateRolling({ type: 'x', entities: ['sensor.a'] })).not.toThrow();
  });

  it('reads the window, the lead to load and whether to keep the readings', () => {
    expect(rollingWindow({ transform: 'rolling', transform_window: '30min' })).toBe(H / 2);
    expect(rollingWindow({ transform: 'derivative', transform_window: '30min' })).toBeUndefined();
    expect(
      rollingLead([
        {},
        { transform: 'rolling', transform_window: '2h' },
        { transform: 'rolling', transform_window: '1h' },
      ]),
    ).toBe(2 * H);
    expect(rollingLead([])).toBe(0);
    expect(wantsRaw({ transform: 'rolling', transform_window: '2h', transform_raw: true })).toBe(true);
    expect(wantsRaw({ transform_raw: true })).toBe(false);
  });

  it('trims the series to the span and reads its value from the last point', () => {
    const entity = {
      config: { entity: 'sensor.a', transform: 'rolling', transform_window: '2h', transform_stat: 'max' },
      name: 'A',
      unit: 'ppm',
      decimals: 0,
      value: 1,
    } as unknown as ResolvedEntity;
    const hass = makeHass({});
    const { entity: e, points } = rollingSeries(
      entity,
      pts([0, 900], [3, 500], [5, 600]),
      { start: 2 * H, end: 6 * H },
      hass,
      6 * H,
    );
    expect(points[0]).toEqual({ t: 2 * H, v: 900, carried: true });
    expect(e.display).toBe('600 ppm');
    expect(e.value).toBe(600);
    const plain = { ...entity, config: { entity: 'sensor.a' } } as unknown as ResolvedEntity;
    expect(rollingSeries(plain, pts([0, 1]), { start: 0, end: H }, hass).entity).toBe(plain);
    const gapOnly = rollingSeries(entity, pts([0, null]), { start: 0, end: H }, hass, H);
    expect(gapOnly.entity).toBe(entity);
  });
});

describe('rolling on charts', () => {
  const now = Date.now();
  const states = { 'sensor.co2': ['700', { friendly_name: 'Office CO₂', unit_of_measurement: 'ppm' }] } as Parameters<
    typeof makeHass
  >[0];
  const history = {
    'sensor.co2': [
      { s: '400', lu: ago(now, 30 * H) },
      { s: '1000', lu: ago(now, 3 * H) },
      { s: '700', lu: ago(now, 1 * H) },
    ],
  };

  it('loads a window early and draws the rolling line with the readings faint behind it', async () => {
    const hass = chartHass(states, history);
    const card = await mountCard(
      {
        style: 'line',
        decimals: 0,
        entities: [
          { entity: 'sensor.co2', transform: 'rolling', transform_window: '4h', transform_raw: true } as EntityConfig,
        ],
      },
      hass,
    );
    const call = (hass.callWS as unknown as { mock: { calls: [{ start_time: string }][] } }).mock.calls[0][0];
    // The last 24 hours, and the 4 h window before them.
    expect(Math.round((now - Date.parse(call.start_time)) / H)).toBe(28);
    // 1 h at 400, 2 h at 1000, 1 h at 700 over the last 4 h.
    expect(q(card, '.series-item')!.textContent!.replace(/\s+/g, ' ').trim()).toBe('Office CO₂ 775 ppm');
    expect(qa(card, 'path.line')).toHaveLength(1);
    expect(qa(card, '.ghosts path.ghost')).toHaveLength(1);
  });

  it('draws no faint line unless asked, and keeps other series to their span', async () => {
    const hass = chartHass(
      { ...states, 'sensor.t': ['20', { unit_of_measurement: '°C' }] },
      {
        ...history,
        'sensor.t': [
          { s: '10', lu: ago(now, 26 * H) },
          { s: '20', lu: ago(now, 2 * H) },
        ],
      },
    );
    const card = await mountCard(
      {
        style: 'line',
        entities: [
          {
            entity: 'sensor.co2',
            transform: 'rolling',
            transform_window: '4h',
            transform_stat: 'median',
          } as EntityConfig,
          'sensor.t',
        ],
      },
      hass,
    );
    expect(qa(card, '.ghosts')).toHaveLength(0);
    expect(qa(card, 'path.line')).toHaveLength(2);
  });

  it('rolls grouped columns too', async () => {
    const card = await mountCard(
      {
        style: 'column',
        labels: true,
        decimals: 0,
        period: { last: 2, unit: 'day' },
        group_by: 'day',
        entities: [
          { entity: 'sensor.co2', transform: 'rolling', transform_window: '1d', transform_stat: 'min' } as EntityConfig,
        ],
      },
      chartHass(states, history),
    );
    expect(qa(card, '.col').length).toBeGreaterThan(0);
    expect(qa(card, '.col-label').map((l) => l.textContent)).toContain('400');
  });
});

describe('rolling in the editor', () => {
  const config = (transform?: string) =>
    ({ type: 'x', entities: [{ entity: 'sensor.a', ...(transform ? { transform } : {}) }] }) as CardConfig;

  it('adds its choice to the transform dropdown, and its fields while an entity uses it', () => {
    expect(withRollingFields(undefined, config(), undefined)).toBeUndefined();
    const base = withDerivativeFields(
      'line',
      undefined,
      config(),
      withCumulativeFields('line', undefined, config(), undefined),
    )!;
    const plain = withRollingFields(undefined, config(), base)!;
    expect(plain.fields).toBe(base.fields);
    expect(JSON.stringify(plain.schema)).toContain('Rolling window');
    expect(withRollingFields(undefined, config(), base)).toBe(plain);
    const on = withRollingFields(undefined, config('rolling'), base)!;
    expect(on.fields.slice(-3)).toEqual([
      { name: 'rolling_window', path: ['transform_window'] },
      { name: 'rolling_stat', path: ['transform_stat'], default: 'mean' },
      { name: 'rolling_raw', path: ['transform_raw'], default: false },
    ]);
    expect(JSON.stringify(on.schema)).toContain('Median');
    const noDropdown = { schema: [], fields: [{ name: 'x', path: ['color'] }] };
    expect(withRollingFields(undefined, config(), noDropdown)).toBe(noDropdown);
  });

  it("shows in each entity's options in the card editor and writes the transform and its options", async () => {
    const ed = document.createElement('chartdeck-card-editor') as Editor;
    const events: CardConfig[] = [];
    ed.addEventListener('config-changed', (e) => events.push((e as CustomEvent).detail.config));
    ed.hass = makeHass({});
    ed.setConfig({
      type: 'custom:chartdeck-card',
      style: 'line',
      entities: [{ entity: 'sensor.a', transform: 'rolling', transform_window: '2h' }],
    } as CardConfig);
    document.body.appendChild(ed);
    await ed.updateComplete;
    const list = ed.shadowRoot!.querySelector('cd-entities-editor') as Stub & { updateComplete: Promise<boolean> };
    (list.shadowRoot!.querySelector('.expand') as HTMLElement).click();
    await list.updateComplete;
    const form = list.shadowRoot!.querySelector('ha-form[data-section="entity-transform"]') as Stub & {
      computeLabel: (s: { name: string }) => string;
      computeHelper: (s: { name: string }) => string | undefined;
    };
    expect(form.data).toMatchObject({ rolling_window: '2h', rolling_stat: 'mean', rolling_raw: false });
    expect(form.computeLabel({ name: 'rolling_raw' })).toBe('Keep the readings faint behind it');
    expect(form.computeHelper({ name: 'rolling_window' })).toMatch(/30min/);
    form.dispatchEvent(
      new CustomEvent('value-changed', {
        detail: { value: { ...(form.data as object), rolling_stat: 'max', rolling_raw: true } },
      }),
    );
    expect(events.at(-1)!.entities).toEqual([
      { entity: 'sensor.a', transform: 'rolling', transform_window: '2h', transform_stat: 'max', transform_raw: true },
    ]);
  });
});
