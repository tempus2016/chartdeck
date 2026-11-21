import { render } from 'lit';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/chartdeck-card';
import type { HistoryFrame } from '../src/chart/frame';
import {
  percentText,
  goalBehind,
  goalContext,
  goalEntities,
  goalExtent,
  goalFront,
  goalOf,
  goalOverlay,
  goalPill,
  goalPillText,
  goalState,
  goalTarget,
  goalVerdict,
  latest,
  projectTotal,
  validateGoal,
} from '../src/chart/goal';
import type { GoalState } from '../src/chart/goal';
import type { PlotScales } from '../src/chart/grid';
import { goalEditor, goalFormData, goalSchema, withGoalForm } from '../src/editor/goal-editor';
import type { Point } from '../src/history/types';
import type { ResolvedEntity } from '../src/resolve';
import type { ChartContext } from '../src/styles/index';
import type { CardConfig, HomeAssistant } from '../src/types';
import { makeHass } from './helpers/hass';

class Stub extends HTMLElement {
  [key: string]: unknown;
}
for (const tag of ['ha-form', 'ha-icon-button']) {
  if (!customElements.get(tag)) customElements.define(tag, class extends Stub {});
}

const H = 3_600_000;
const D = 24 * H;
const card = (extra: Record<string, unknown> = {}) =>
  ({ type: 'custom:chartdeck-card', style: 'line', ...extra }) as CardConfig;
const range = { start: 0, end: 30 * D };
const pts = (...rows: [number, number | null][]): Point[] => rows.map(([d, v]) => ({ t: d * D, v }));
const entity = {
  name: 'Import',
  unit: 'kWh',
  decimals: 0,
  config: { entity: 'sensor.i' },
} as unknown as ResolvedEntity;
const scales = { x: (t: number) => (t / range.end) * 1000, y: (v: number) => 200 - v / 2 } as unknown as PlotScales;

afterEach(() => {
  document.body.innerHTML = '';
});

describe('goal options', () => {
  it('accepts a goal and rejects bad ones with readable errors', () => {
    expect(() => validateGoal(card())).not.toThrow();
    expect(() =>
      validateGoal(card({ goal: { target: 'sensor.t', period: 'week', direction: 'above', project: 'recent' } })),
    ).not.toThrow();
    expect(() => validateGoal(card({ goal: 3 }))).toThrow('"goal" must have a "target"');
    // The first entity becomes a running total: another transform there is refused, not dropped.
    const paced = (transform: string) =>
      validateGoal(
        card({ goal: { target: 5 }, entities: [{ entity: 'sensor.t', transform, transform_window: '2h' }] }),
      );
    expect(() => paced('rolling')).toThrow(`"goal" paces the first entity's running total`);
    expect(() => paced('derivative')).toThrow('"transform: derivative"');
    expect(() => paced('cumulative')).not.toThrow();
    expect(() => validateGoal(card({ goal: { target: 'lots' } }))).toThrow('"goal.target" must be a number');
    expect(() => validateGoal(card({ goal: { period: 'decade' } }))).toThrow('"goal.period" must be one of');
    expect(() => validateGoal(card({ goal: { direction: 'up' } }))).toThrow('"goal.direction" must be one of');
    expect(() => validateGoal(card({ goal: { project: 'magic' } }))).toThrow('"goal.project" must be one of');
  });

  it('fills in defaults and reads the target from a number or an entity', () => {
    expect(goalOf(card())).toBeUndefined();
    expect(goalOf(card({ goal: { target: 300 } }))).toEqual({
      target: 300,
      period: 'month',
      direction: 'below',
      project: 'linear',
    });
    const hass = makeHass({ 'input_number.t': '250', 'sensor.bad': 'unavailable', 'sensor.blank': '' });
    expect(goalTarget({ target: 300, period: 'month', direction: 'below', project: 'linear' }, hass)).toBe(300);
    expect(goalTarget({ target: 'input_number.t', period: 'day', direction: 'below', project: 'linear' }, hass)).toBe(
      250,
    );
    expect(
      goalTarget({ target: 'sensor.bad', period: 'day', direction: 'below', project: 'linear' }, hass),
    ).toBeUndefined();
    expect(
      goalTarget({ target: 'sensor.blank', period: 'day', direction: 'below', project: 'linear' }, hass),
    ).toBeUndefined();
    expect(goalTarget({ period: 'day', direction: 'below', project: 'linear' }, hass)).toBeUndefined();
    expect(goalEntities(card({ goal: { target: 'input_number.t' } }))).toEqual(['input_number.t']);
    expect(goalEntities(card({ goal: { target: 3 } }))).toEqual([]);
  });

  it('reads the whole calendar period, ungrouped, with the first entity as a running total', () => {
    const ctx = {
      raw: card({
        goal: { period: 'week' },
        period: { last: 3, unit: 'day', offset: 1, navigate: true },
        group_by: 'day',
      }),
      items: [{ config: { entity: 'a' } }, { config: { entity: 'b' } }],
    } as unknown as ChartContext;
    const out = goalContext(ctx);
    expect(out.raw.period).toEqual({ calendar: 'week', until: 'end', offset: 1, navigate: true });
    expect(out.raw.group_by).toBeUndefined();
    expect(out.raw.y_min).toBe(0);
    expect(goalContext({ ...ctx, raw: { ...ctx.raw, y_min: -5 } }).raw.y_min).toBe(-5);
    expect(out.items[0].config).toMatchObject({ transform: 'cumulative', transform_reset: 'none' });
    expect(out.items[1]).toBe(ctx.items[1]);
    const plain = { raw: card(), items: [] } as unknown as ChartContext;
    expect(goalContext(plain)).toBe(plain);
    const already = {
      raw: card({ goal: {} }),
      items: [{ config: { entity: 'a', transform: 'cumulative' } }],
    } as unknown as ChartContext;
    expect(goalContext(already).items[0]).toBe(already.items[0]);
  });
});

describe('goal maths', () => {
  const sofar = pts([0, 0], [10, 100], [18, 150], [20, 198]);

  it('finds the latest total and projects the end at the pace so far or of late', () => {
    expect(latest(sofar, 19 * D)).toEqual({ t: 18 * D, v: 150 });
    expect(latest(pts([0, null]), D)).toBeUndefined();
    const linear = projectTotal(sofar, range, 20 * D, 'linear', 'month')!;
    expect(linear.end).toBeCloseTo(297);
    // The last 7 days: from 150-ish… 100 at day 10 is before day 13, so day 10's total is the base.
    const recent = projectTotal(sofar, range, 20 * D, 'recent', 'month')!;
    expect(recent.end).toBeCloseTo(198 + ((198 - 100) / (7 * D)) * 10 * D);
    expect(projectTotal(sofar, range, 31 * D, 'linear', 'month')!.end).toBe(198);
    expect(projectTotal(pts([0, 0]), range, D, 'linear', 'month')!.end).toBe(0);
    expect(projectTotal([], range, D, 'linear', 'month')).toBeUndefined();
    // Too little time for a recent pace: the pace since the start.
    expect(projectTotal(pts([0, 0], [0.05, 10]), { start: 0, end: D }, 0.05 * D, 'recent', 'day')!.end).toBeCloseTo(
      200,
    );
  });

  it('says how far over or under the target it ends, and whether that is good', () => {
    expect(goalVerdict(342, 300, 'below')).toEqual({ share: 0.14, good: false });
    expect(goalVerdict(270, 300, 'below').good).toBe(true);
    expect(goalVerdict(270, 300, 'above').good).toBe(false);
    expect(goalVerdict(0, 0, 'below').share).toBe(0);
    expect(goalVerdict(5, 0, 'below').share).toBe(1);
  });
});

describe('goal drawing', () => {
  const state = (extra: Partial<GoalState> = {}): GoalState => ({
    goal: { target: 300, period: 'month', direction: 'below', project: 'linear' },
    target: 300,
    projection: { at: { t: 20 * D, v: 198 }, end: 342 },
    range,
    entity,
    ended: false,
    ...extra,
  });
  const hass = makeHass({});

  it('writes the pill: on pace, ended, over, under and on target', () => {
    expect(goalPillText(state(), hass)).toEqual({ text: 'On pace for 342 kWh · 14% over', good: false });
    expect(goalPillText(state({ projection: { at: { t: 0, v: 0 }, end: 270 } }), hass)!.text).toBe(
      'On pace for 270 kWh · 10% under',
    );
    expect(goalPillText(state({ ended: true, projection: { at: { t: 0, v: 0 }, end: 300 } }), hass)!.text).toBe(
      'Ended at 300 kWh · on target',
    );
    expect(goalPillText(state({ target: undefined }), hass)).toBeUndefined();
    const host = document.createElement('div');
    render(goalPill(state(), hass), host);
    expect(host.querySelector('.goal-pill.bad')!.textContent).toContain('342');
    expect(goalPill(undefined, hass)).toBeTypeOf('symbol');
    expect(percentText(0.14, { ...hass, locale: { language: 'tr' } })).toBe('%14');
    expect(percentText(0.14, { ...hass, locale: { language: 'not a language!' } })).toBe('14%');
  });

  it('draws the ideal pace, the target, the projection and their labels', () => {
    const host = document.createElement('div');
    render(goalBehind(state(), scales), host);
    expect(host.querySelector('.goal-ideal')!.getAttribute('d')).toBe('M0 200L1000 50');
    expect(host.querySelector('.goal-target')).not.toBeNull();
    render(goalFront(state(), scales), host);
    expect(host.querySelector('.goal-projection.bad')).not.toBeNull();
    render(
      goalFront(
        state({ goal: { ...state().goal, direction: 'above' }, projection: { at: { t: 0, v: 0 }, end: 350 } }),
        scales,
      ),
      host,
    );
    expect(host.querySelector('.goal-projection.good')).not.toBeNull();
    render(goalOverlay(state(), scales, hass), host);
    expect(host.querySelector('.goal-target-label')!.textContent).toBe('Target 300 kWh');
    expect(host.querySelector('.goal-end-label')!.textContent).toBe('342');
    expect(host.querySelectorAll('.goal-dot')).toHaveLength(2);
    expect(goalBehind(state({ target: undefined }), scales)).toBeTypeOf('symbol');
    expect(goalFront(state({ ended: true }), scales)).toBeTypeOf('symbol');
    expect(goalOverlay(undefined, scales, hass)).toBeTypeOf('symbol');
    // Off the plot (a fixed axis end below them): nothing to label.
    expect(
      goalOverlay(state({ target: 900, projection: { at: { t: 0, v: 900 }, end: 900 } }), scales, hass),
    ).toBeTypeOf('symbol');
    expect(goalExtent(state()).map((p) => p.v)).toEqual([0, 300, 342]);
    expect(goalExtent(undefined)).toEqual([]);
  });

  it('works out the state from the frame', () => {
    const frame = { range, series: [{ index: 0, entity, points: pts([0, 0], [20, 198]) }] } as unknown as HistoryFrame;
    const ctx = { raw: card({ goal: { target: 300 } }), hass } as unknown as ChartContext;
    const s = goalState(ctx, frame, 20 * D)!;
    expect(s.projection!.end).toBeCloseTo(297);
    expect(goalState({ ...ctx, raw: card() }, frame)).toBeUndefined();
    expect(goalState(ctx, { ...frame, series: [] })).toBeUndefined();
  });
});

describe('goal on the line chart', () => {
  it('draws the running total with its pace, target and pill', async () => {
    const now = Date.now();
    const hass = makeHass({
      'sensor.import': [
        '1050',
        { friendly_name: 'Import', unit_of_measurement: 'kWh', state_class: 'total_increasing' },
      ],
    });
    hass.callWS = vi.fn(async () => ({
      'sensor.import': [
        { s: '1000', lu: (now - 40 * D) / 1000 },
        { s: '1050', lu: (now - H) / 1000 },
      ],
    })) as unknown as HomeAssistant['callWS'];
    type Card = HTMLElement & {
      setConfig(c: CardConfig): void;
      hass?: HomeAssistant;
      updateComplete: Promise<boolean>;
    };
    const el = document.createElement('chartdeck-card') as Card;
    el.setConfig(card({ decimals: 0, goal: { target: 10, period: 'year' }, entities: ['sensor.import'] }));
    el.hass = hass;
    document.body.appendChild(el);
    for (let i = 0; i < 3; i++) {
      await el.updateComplete;
      await new Promise((r) => setTimeout(r, 0));
    }
    const root = el.shadowRoot!;
    expect(root.querySelector('.series-item')!.textContent).toContain('50 kWh');
    expect(root.querySelector('.goal-pill.bad')!.textContent).toContain('over');
    expect(root.querySelector('.goal-ideal')).not.toBeNull();
    expect(root.querySelector('.goal-projection')).not.toBeNull();
    expect(() => el.setConfig(card({ goal: { period: 'decade' } }))).toThrow('"goal.period"');
  });
});

describe('goal editor', () => {
  it('reads and writes the goal through the form, leaving defaults out', () => {
    expect(goalFormData(card())).toEqual({ goal_on: false });
    const raw = card({ goal: { target: 300, direction: 'above' } });
    expect(goalFormData(raw)).toEqual({
      goal_on: true,
      goal_target: 300,
      goal_period: 'month',
      goal_direction: 'above',
      goal_project: 'linear',
    });
    expect(goalFormData(card({ goal: { target: 'sensor.t' } })).goal_target_entity).toBe('sensor.t');
    expect(withGoalForm(raw, { goal_on: false }).goal).toBeUndefined();
    expect(withGoalForm(card(), { goal_on: true }).goal).toEqual({});
    expect(withGoalForm(raw, { ...goalFormData(raw), goal_target_entity: 'sensor.t' }).goal).toEqual({
      target: 'sensor.t',
      direction: 'above',
    });
    expect(
      withGoalForm(raw, { ...goalFormData(raw), goal_target: 250, goal_direction: 'below', goal_period: 'week' }).goal,
    ).toEqual({
      target: 250,
      period: 'week',
    });
    expect(withGoalForm(raw, { ...goalFormData(raw), goal_target: undefined }).goal).toEqual({ direction: 'above' });
  });

  it('draws the form and commits its changes', () => {
    expect(goalSchema(undefined, false)).toHaveLength(1);
    expect(goalSchema(undefined, true)).toBe(goalSchema(undefined, true));
    const commit = vi.fn();
    const host = document.createElement('div');
    render(goalEditor({ hass: makeHass({}), config: card({ goal: { target: 1 } }), commit }), host);
    const form = host.querySelector('ha-form')!;
    form.dispatchEvent(new CustomEvent('value-changed', { detail: { value: { goal_on: false } } }));
    expect(commit.mock.calls[0][0].goal).toBeUndefined();
  });
});
