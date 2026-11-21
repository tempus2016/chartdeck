import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/chartdeck-card';
import { axisTop, durationValue, quietMix, stackOrder, stateDurations, timeScale } from '../src/chart/state-duration';
import type { GroupDurations } from '../src/chart/state-duration';
import { STYLES } from '../src/styles';
import { durationGroup, withStates } from '../src/styles/state-duration';
import type { CardConfig, HomeAssistant } from '../src/types';
import { H, mountCard, mountEditor, pointAt, q, qa, tooltipRows } from './helpers/chart';
import type { Card } from './helpers/chart';
import { makeHass } from './helpers/hass';

const span = (start: number, end: number, state: string | undefined) => ({ start, end, state });

describe('time in each state', () => {
  it('adds up each state per group, splitting a span across groups and leaving gaps out', () => {
    const groups = stateDurations(
      [span(0, 15, 'on'), span(15, 18, 'unavailable'), span(18, 25, 'off'), span(25, 28, 'on')],
      [0, 10, 20, 30],
    );
    expect(groups.map((g) => Object.fromEntries(g.time))).toEqual([{ on: 10 }, { on: 5, off: 2 }, { off: 5, on: 3 }]);
    expect(groups.map((g) => g.recorded)).toEqual([10, 7, 8]);
    expect(groups[1]).toMatchObject({ start: 10, end: 20 });
  });

  it('leaves groups before the first span and after the last empty', () => {
    const groups = stateDurations([span(12, 14, 'on')], [0, 10, 20, 30]);
    expect(groups.map((g) => g.recorded)).toEqual([0, 2, 0]);
    expect(stateDurations([], [0, 10])).toEqual([{ start: 0, end: 10, time: new Map(), recorded: 0 }]);
  });

  it('stacks the busiest state first and quiet ones on top, or the listed states in their order', () => {
    const g = (time: Record<string, number>): GroupDurations => ({
      start: 0,
      end: 1,
      time: new Map(Object.entries(time)),
      recorded: 0,
    });
    const groups = [[g({ off: 50, heating: 10, idle: 20 })], [g({ heating: 5, fan: 30 })]];
    const quiet = (s: string) => s === 'off';
    expect(stackOrder(groups, undefined, quiet)).toEqual(['fan', 'idle', 'heating', 'off']);
    expect(stackOrder(groups, ['off', 'heating', 'off', 'cool'], quiet)).toEqual(['off', 'heating', 'cool']);
    expect(stackOrder(groups, [], quiet)).toHaveLength(4);
    // Equal times fall back to the words' order, so the stack doesn't jump between draws.
    expect(stackOrder([[g({ b: 1, a: 1 })]], undefined, () => false)).toEqual(['a', 'b']);
  });

  it('reads a slice as hours, minutes for hour groups, or a share of the time recorded', () => {
    const group: GroupDurations = { start: 0, end: 24 * H, time: new Map(), recorded: 12 * H };
    expect(durationValue(3 * H, group, 'normal', 'day')).toBe(3);
    expect(durationValue(H / 2, group, 'normal', 'hour')).toBe(30);
    expect(durationValue(3 * H, group, 'percent', 'day')).toBe(25);
    expect(durationValue(3 * H, { ...group, recorded: 0 }, 'percent', 'day')).toBe(0);
    expect(timeScale('week')).toBe(H);
  });

  it('tops the axis at the longest group, or 100 for a share', () => {
    const day = (h: number): GroupDurations => ({ start: 0, end: h * H, time: new Map(), recorded: 0 });
    expect(axisTop([day(24), day(25)], 'normal', 'day')).toBe(25);
    expect(axisTop([day(1)], 'normal', 'hour')).toBe(60);
    expect(axisTop([day(24)], 'percent', 'day')).toBe(100);
    expect(axisTop([], 'normal', 'day')).toBe(0);
  });

  it('draws each quiet state fainter than the one under it', () => {
    const quiet = (s: string) => s !== 'heating';
    expect([...quietMix(['heating', 'idle', 'off', 'standby', 'away'], quiet)]).toEqual([
      ['idle', 55],
      ['off', 32],
      ['standby', 18],
      ['away', 18],
    ]);
  });

  it('picks a group for the span when none is set', () => {
    expect(durationGroup({} as CardConfig)).toBe('day');
    expect(durationGroup({ group_by: 'auto', period: { calendar: 'day' } } as unknown as CardConfig)).toBe('hour');
    expect(durationGroup({ group_by: 'week' } as unknown as CardConfig)).toBe('week');
  });
});

/* ------------------------------------------------------------------ card ------------------------------------------------------------------ */

// A fixed time on the hour, so hour and day groups line up with the canned history.
vi.useFakeTimers({ toFake: ['Date'] });
vi.setSystemTime(new Date('2026-11-18T15:00:00Z'));
const now = Date.now();
const sec = (msAgo: number) => (now - msAgo) / 1000;

function hassWith(rows: Record<string, unknown[]>, fail = false) {
  const hass = makeHass({
    'climate.hall': ['heat', { friendly_name: 'Hall', hvac_action: 'idle' }],
    'switch.kettle': ['off', { friendly_name: 'Kettle' }],
    'sensor.temp': ['19.9', { friendly_name: 'Temp', unit_of_measurement: '°C' }],
  });
  const words: Record<string, string> = { heating: 'Heating', idle: 'Idle', off: 'Off', on: 'On' };
  hass.formatEntityState = (s, state) => words[state ?? s.state] ?? state ?? s.state;
  hass.formatEntityAttributeValue = (_s, _a, v) => words[v as string] ?? String(v);
  hass.callWS = vi.fn(async () => {
    if (fail) throw new Error('boom');
    return rows;
  }) as HomeAssistant['callWS'];
  return hass;
}

/** The kettle: on for 1 h of the last 3, a gap, and the rest off. */
const kettle = {
  'switch.kettle': [
    { s: 'off', lu: sec(3 * H) },
    { s: 'on', lu: sec(2 * H) },
    { s: 'off', lu: sec(H) },
  ],
};

const mount = (config: Partial<CardConfig> = {}, hass = hassWith(kettle)) =>
  mountCard(
    { style: 'state_duration', entities: ['switch.kettle'], period: { last: 3, unit: 'hour' }, ...config },
    hass,
  );

const style = (el: Element) => el.getAttribute('style') ?? '';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('state duration chart', () => {
  it('stacks each hour’s time in each state, with a legend, labels and an aria label', async () => {
    const card = await mount();
    expect(qa(card, '.sd-key').map((k) => k.textContent!.trim())).toEqual(['On', 'Off']);
    expect(qa(card, '.sd-slice').length).toBeGreaterThanOrEqual(3);
    // Grouped by hour: minutes up the side, every quarter hour.
    expect(qa(card, '.y-axis .axis-label').map((l) => l.textContent!.trim())).toEqual([
      '0 min',
      '15 min',
      '30 min',
      '45 min',
      '60 min',
    ]);
    const on = qa(card, '.sd-slice').find((s) => style(s).includes('--state-switch-on-color'))!;
    expect(on).toBeDefined();
    const off = qa(card, '.sd-slice').find((s) => style(s).includes('--state-switch-off-color'))!;
    expect(style(off)).toContain('color-mix');
    expect(q(card, '.plot')!.getAttribute('aria-label')).toBe('Time in each state chart of Kettle');
    expect(qa(card, '.sd-hit')[0].getAttribute('data-index')).toBe('0');
    expect(qa(card, '.x-axis .axis-label').length).toBeGreaterThan(0);
  });

  it('labels slices that have room, as a share when stacked to 100 %', async () => {
    const card = await mount({ labels: true } as Partial<CardConfig>);
    // Three hour columns: off, on, off, each the whole hour.
    expect(qa(card, '.sd-label').map((l) => l.textContent!.trim())).toEqual(['60 min', '60 min', '60 min']);
    const share = await mount({ labels: true, stack: 'percent' } as Partial<CardConfig>);
    expect(qa(share, '.sd-label').map((l) => l.textContent!.trim())).toEqual(['100 %', '100 %', '100 %']);
    expect(qa(share, '.y-axis .axis-label').map((l) => l.textContent!.trim())).toContain('100 %');
    const day = await mount({ period: { calendar: 'day' } } as Partial<CardConfig>);
    // Today by hour (auto), the axis in minutes; by day, in hours to 24.
    expect(qa(day, '.y-axis .axis-label').map((l) => l.textContent!.trim())).toContain('60 min');
    const days = await mount({ group_by: 'day' } as Partial<CardConfig>);
    expect(qa(days, '.y-axis .axis-label').map((l) => l.textContent!.trim())).toEqual([
      '0 h',
      '6 h',
      '12 h',
      '18 h',
      '24 h',
    ]);
  });

  it('shows only the listed states, in order, in the card’s own colours', async () => {
    const card = await mount({ states: ['off'], state_colors: { off: 'red' } } as Partial<CardConfig>);
    expect(qa(card, '.sd-key').map((k) => k.textContent!.trim())).toEqual(['Off']);
    const slices = qa(card, '.sd-slice');
    expect(slices.every((s) => style(s).includes('var(--error-color'))).toBe(true);
  });

  it('reads an attribute, and puts entities side by side, named in the tooltip', async () => {
    const rows = {
      ...kettle,
      'climate.hall': [
        { s: 'heat', a: { hvac_action: 'heating' }, lu: sec(3 * H) },
        { s: 'heat', a: { hvac_action: 'idle' }, lu: sec(H) },
      ],
    };
    const card = await mount(
      {
        entities: ['switch.kettle', { entity: 'climate.hall', attribute: 'hvac_action' }],
        period: { calendar: 'day' },
        group_by: 'day',
      } as Partial<CardConfig>,
      hassWith(rows),
    );
    expect(qa(card, '.sd-key').map((k) => k.textContent!.trim())).toEqual(['Heating', 'On', 'Off', 'Idle']);
    expect(new Set(qa(card, '.sd-hit').map((h) => h.getAttribute('data-index')))).toEqual(new Set(['0', '1']));
    pointAt(q(card, '.plot-area')!, 'pointermove', 0.5);
    await card.updateComplete;
    expect(tooltipRows(card)).toEqual(['Kettle · On 1 h', 'Kettle · Off 2 h', 'Hall · Heating 2 h', 'Hall · Idle 1 h']);
    expect(q(card, '.slot-hover')).not.toBeNull();
  });

  it('shows each state’s time under the pointer, with its share when stacked to 100 %', async () => {
    const card = await mount({ stack: 'percent' } as Partial<CardConfig>);
    const area = q(card, '.plot-area')!;
    // The hour two to one hours ago: the kettle was on all of it.
    pointAt(area, 'pointermove', 0.6);
    await card.updateComplete;
    const rows = tooltipRows(card);
    expect(rows.some((r) => r.startsWith('On 100 % · '))).toBe(true);
    expect(rows).toContain('Off —');
    const off = await mount({ tooltip: false });
    expect(q(off, '.plot-area')!.classList.contains('hoverable')).toBe(false);
  });

  it('says when history is loading, failed, holds no states, or holds readings', async () => {
    const card = document.createElement('chartdeck-card') as Card;
    card.setConfig({
      type: 'custom:chartdeck-card',
      style: 'state_duration',
      entities: ['switch.kettle'],
    } as CardConfig);
    card.hass = hassWith(kettle);
    document.body.appendChild(card);
    await card.updateComplete;
    expect(q(card, '.chart-message')!.textContent!.trim()).toBe('Loading history…');
    const failed = await mount({}, hassWith(kettle, true));
    expect(q(failed, '.chart-message.error')!.textContent!.trim()).toBe("Couldn't load history: boom");
    const empty = await mount({}, hassWith({ 'switch.kettle': [{ s: 'unavailable', lu: sec(H) }] }));
    expect(q(empty, '.chart-message')!.textContent!.trim()).toBe('No states recorded in this period.');
    const temps = {
      'sensor.temp': Array.from({ length: 20 }, (_, i) => ({ s: String(18 + i / 10), lu: sec((20 - i) * 600_000) })),
    };
    const measured = await mount({ entities: ['sensor.temp'] }, hassWith(temps));
    expect(q(measured, '.chart-message')!.textContent!.trim()).toBe(
      'Readings, not states: a line chart suits this one',
    );
    const hidden = await mount({ header: 'hidden', compact: true } as Partial<CardConfig>);
    expect(q(hidden, '.sd-legend')).toBeNull();
    expect(q(hidden, '.frame.compact')).not.toBeNull();
    const over = await mount({ header: 'over' } as Partial<CardConfig>);
    expect(q(over, '.header-over .sd-legend')).not.toBeNull();
  });

  it('opens more-info from a column', async () => {
    const card = await mount();
    const fired: string[] = [];
    card.addEventListener('hass-action', (e) => fired.push((e as CustomEvent).detail.config.entity));
    const hit = qa(card, '.sd-hit')[0] as HTMLElement;
    hit.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }));
    hit.dispatchEvent(new MouseEvent('pointerup', { bubbles: true }));
    expect(fired).toEqual(['switch.kettle']);
  });

  it('checks its options', () => {
    const validate = (raw: Record<string, unknown>) => () =>
      (STYLES.state_duration as { validate(r: CardConfig): void }).validate({
        type: 'custom:chartdeck-card',
        entities: [],
        ...raw,
      } as CardConfig);
    expect(validate({ source: 'statistics' })).toThrow('"source" must be history');
    expect(validate({ group_by: 'year' })).toThrow('"group_by" must be one of: auto, hour, day, week, month');
    expect(validate({ stack: 'none' })).toThrow('"stack" must be one of: normal, percent');
    expect(validate({ states: 'on' })).toThrow('"states" must be a list');
    expect(validate({ states: ['on', ''] })).toThrow('"states" must be a list');
    expect(validate({ labels: 'yes' })).toThrow('"labels" must be true or false');
    expect(validate({ state_colors: ['on'] })).toThrow('"state_colors" must map states');
    expect(validate({ compact: 'yes' })).toThrow('"compact" must be true or false');
    expect(
      validate({ group_by: 'auto', stack: 'percent', states: ['on'], labels: true, source: 'history' }),
    ).not.toThrow();
  });
});

describe('state duration editor', () => {
  const hass = hassWith(kettle);

  it('offers grouping, stacking, states, labels and colours, without source or aggregate', async () => {
    const { ed, form } = await mountEditor(
      { type: 'custom:chartdeck-card', style: 'state_duration', entities: ['switch.kettle'] } as CardConfig,
      hass,
    );
    const names = JSON.stringify(form().schema);
    for (const name of ['group_by', 'stack', 'state_duration_states', 'column_labels', 'x_axis', 'header']) {
      expect(names).toContain(`"${name}"`);
    }
    expect(names).not.toContain('"source"');
    expect(names).not.toContain('"aggregate"');
    expect(names).not.toContain('"legend_toggle"');
    expect(form().data).toMatchObject({ group_by: 'auto', stack: 'normal', period_last: 7, period_unit: 'day' });
    expect(ed.shadowRoot!.querySelector('[data-section="state-colors"]')).not.toBeNull();
  });

  it('writes the options, keeping the period whole and dropping an emptied states list', async () => {
    const { events, change } = await mountEditor(
      { type: 'custom:chartdeck-card', style: 'state_duration', entities: ['switch.kettle'] } as CardConfig,
      hass,
    );
    change({
      group_by: 'week',
      stack: 'percent',
      state_duration_states: ['heating', ' idle ', ''],
      column_labels: true,
    });
    expect(events.at(-1)).toMatchObject({
      group_by: 'week',
      stack: 'percent',
      states: ['heating', 'idle'],
      labels: true,
    });
    change({ period_last: 14 });
    expect(events.at(-1)!.period).toEqual({ last: 14, unit: 'day' });
    expect(withStates({ states: ['', ' '] } as unknown as CardConfig)).not.toHaveProperty('states');
    const same = { type: 'x' } as unknown as CardConfig;
    expect(withStates(same)).toBe(same);
  });

  it('draws its picture for the style picker', () => {
    expect(STYLES.state_duration.layout).toBe('chart');
    const style = STYLES.state_duration as { thumbnail(): unknown };
    expect(style.thumbnail()).toBeTruthy();
  });
});
