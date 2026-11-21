import { afterEach, describe, expect, it } from 'vitest';
import '../src/chartdeck-card';
import { normalizeConfig } from '../src/config';
import {
  combineSeries,
  evaluate,
  formulaEntities,
  formulaOf,
  formulaRequest,
  formulaVars,
  parseFormula,
  readFormula,
  sharedUnit,
} from '../src/formula';
import { formulaNow, key, loadHistory, loadStatistics } from '../src/history/fetch';
import { HistoryStore } from '../src/history/store';
import type { Point } from '../src/history/types';
import { resolveEntities, watchedEntityIds } from '../src/resolve';
import type { CardConfig, EntityConfig, HomeAssistant } from '../src/types';
import { applyFormulaForm, formulaNames, formulaProblem } from '../src/editor/formula-editor';
import { entityId } from '../src/editor/edit';
import { isMeter } from '../src/chart/columns';
import { meterKind } from '../src/history/transform-cumulative';
import { H, ago, chartHass, mountCard, q, qa, stubEditorElements } from './helpers/chart';
import type { Editor } from './helpers/chart';
import { makeHass } from './helpers/hass';

stubEditorElements();
await import('../src/editor/chartdeck-card-editor');

afterEach(() => {
  document.body.innerHTML = '';
});

const calc = (text: string, vars: Record<string, number | null> = {}) => evaluate(parseFormula(text), vars);

describe('parseFormula and evaluate', () => {
  it('does arithmetic with the usual precedence', () => {
    expect(calc('1 + 2 * 3')).toBe(7);
    expect(calc('(1 + 2) * 3')).toBe(9);
    expect(calc('10 - 4 - 3')).toBe(3);
    expect(calc('12 / 3 / 2')).toBe(2);
    expect(calc('2 ^ 3 ^ 2')).toBe(512);
    expect(calc('-2 ^ 2')).toBe(-4);
    expect(calc('2 ^ -1')).toBe(0.5);
    expect(calc('--3')).toBe(3);
    expect(calc('+3 - -2')).toBe(5);
    expect(calc('1.5e3 + .5')).toBe(1500.5);
  });

  it('reads × ÷ and − as people write them', () => {
    expect(calc('6 × 2 ÷ 4 − 1')).toBe(2);
  });

  it('calls min, max, abs and round', () => {
    expect(calc('min(3, 1, 2)')).toBe(1);
    expect(calc('max(3, 1, 2)')).toBe(3);
    expect(calc('abs(-4)')).toBe(4);
    expect(calc('round(2.5)')).toBe(3);
    expect(calc('round(3.14159, 2)')).toBe(3.14);
  });

  it('reads variables, and gives null for one without a number', () => {
    expect(calc('a - b', { a: 21, b: 9 })).toBe(12);
    expect(calc('a - b', { a: 21, b: null })).toBeNull();
    expect(calc('a - b', { a: 21 })).toBeNull();
    expect(calc('constructor + 1', {})).toBeNull();
  });

  it('gives null for a division by zero or a result that is not a number', () => {
    expect(calc('1 / 0')).toBeNull();
    expect(calc('0 ^ -1')).toBeNull();
    expect(calc('10 ^ 400')).toBeNull();
  });

  it('rejects what is not arithmetic, with a readable error', () => {
    expect(() => parseFormula('')).toThrow(/write one/);
    expect(() => parseFormula('a; alert(1)')).toThrow(/";" is not allowed/);
    expect(() => parseFormula('a +')).toThrow(/ends too soon/);
    expect(() => parseFormula('(a + b')).toThrow(/expected "\)" at the end/);
    expect(() => parseFormula('min(a b)')).toThrow(/expected "\)" before "b"/);
    expect(() => parseFormula('a b')).toThrow(/"b" is out of place/);
    expect(() => parseFormula(')')).toThrow(/"\)" is out of place/);
    expect(() => parseFormula('eval(a)')).toThrow(/not a function/);
    expect(() => parseFormula('constructor(a)')).toThrow(/not a function/);
    expect(() => parseFormula('min + 1')).toThrow(/is a function/);
    expect(() => parseFormula('abs(1, 2)')).toThrow(/takes 1 value/);
    expect(() => parseFormula('round(1, 2, 3)')).toThrow(/takes 1 or 2 values/);
    expect(() => parseFormula('max()')).toThrow(/takes 1 or more values/);
    expect(() => parseFormula('a'.repeat(501))).toThrow(/under 500/);
    expect(() => parseFormula(42 as unknown as string)).toThrow(/write one/);
  });

  it('lists the variables a formula uses, once each', () => {
    expect(formulaVars(parseFormula('max(a, b) - -a * round(c, 1)'))).toEqual(['a', 'b', 'c']);
    expect(formulaVars(parseFormula('2 + 2'))).toEqual([]);
  });
});

describe('readFormula', () => {
  it('reads a formula and the variables it uses, leaving out ones it does not', () => {
    const f = readFormula({ formula: 'a - b', vars: { a: 'sensor.in', b: 'sensor.out', c: 'sensor.old' } });
    expect(f?.vars).toEqual({ a: 'sensor.in', b: 'sensor.out' });
    expect(formulaEntities(f!)).toEqual(['sensor.in', 'sensor.out']);
  });

  it('has nothing to read without a formula', () => {
    expect(readFormula({})).toBeUndefined();
    expect(readFormula({ formula: '' })).toBeUndefined();
  });

  it('says what is wrong', () => {
    expect(() => readFormula({ formula: 3 })).toThrow(/must be text/);
    expect(() => readFormula({ formula: 'a', vars: ['sensor.x'] })).toThrow(/"vars" must map/);
    expect(() => readFormula({ formula: 'a', vars: { a: 3 } })).toThrow(/must be an entity id/);
    expect(() => readFormula({ formula: 'a', vars: { 'a-b': 'sensor.x' } })).toThrow(/can't be a variable/);
    expect(() => readFormula({ formula: 'a', vars: { min: 'sensor.x' } })).toThrow(/can't be a variable/);
    expect(() => readFormula({ formula: 'a - b', vars: { a: 'sensor.x', b: '' } })).toThrow(/uses "b"/);
    const many = Object.fromEntries('abcdefghijk'.split('').map((n) => [n, `sensor.${n}`]));
    expect(() => readFormula({ formula: 'a', vars: many })).toThrow(/at most 10/);
    expect(formulaOf({ formula: 'a' })).toBeUndefined();
  });

  it('becomes part of a history request', () => {
    expect(formulaRequest({})).toEqual({});
    expect(formulaRequest({ formula: 'a * 2', vars: { a: 'sensor.p' } })).toEqual({
      formula: 'a * 2',
      vars: { a: 'sensor.p' },
    });
    const r = { entity: 'sensor.p', formula: 'a * 2', vars: { a: 'sensor.p' } };
    expect(key(r)).not.toBe(key({ entity: 'sensor.p' }));
    expect(key({ ...r, text: true })).toBe('sensor.p|text');
  });
});

const p = (t: number, v: number | null, carried = false): Point => (carried ? { t, v, carried } : { t, v });

describe('combineSeries', () => {
  const expr = parseFormula('a - b');

  it('joins on time, each variable holding its last reading', () => {
    const out = combineSeries(expr, {
      a: [p(0, 20, true), p(2, 22), p(5, 21)],
      b: [p(0, 5, true), p(3, 7), p(5, 6)],
    });
    expect(out).toEqual([p(0, 15, true), p(2, 17), p(3, 15), p(5, 15)]);
  });

  it('waits until every variable has a reading', () => {
    const out = combineSeries(expr, { a: [p(0, 20), p(4, 21)], b: [p(2, 5)] });
    expect(out).toEqual([p(2, 15), p(4, 16)]);
  });

  it('draws a gap where any variable has one, once', () => {
    const out = combineSeries(expr, {
      a: [p(0, 20), p(1, null), p(2, null), p(3, 22)],
      b: [p(0, 5), p(1.5, 6)],
    });
    expect(out).toEqual([p(0, 15), p(1, null), p(3, 16)]);
  });

  it('is empty with no readings', () => {
    expect(combineSeries(expr, { a: [], b: [p(0, 1)] })).toEqual([]);
    expect(combineSeries(parseFormula('1'), {})).toEqual([]);
  });
});

const states = {
  'sensor.in': ['21.5', { friendly_name: 'Inside', unit_of_measurement: '°C' }],
  'sensor.out': ['9.25', { friendly_name: 'Outside', unit_of_measurement: '°C' }],
  'sensor.power': ['2000', { friendly_name: 'Power', unit_of_measurement: 'W' }],
  'sensor.price': ['0.25', { friendly_name: 'Price', unit_of_measurement: '£/kWh' }],
  'sensor.import': ['100', { unit_of_measurement: 'kWh', state_class: 'total_increasing' }],
  'sensor.export': ['40', { unit_of_measurement: 'kWh', state_class: 'total_increasing' }],
  'sensor.off': 'unavailable',
  'switch.pump': 'on',
} as Parameters<typeof makeHass>[0];

const resolve = (entities: CardConfig['entities'], hass = makeHass(states)) =>
  resolveEntities(normalizeConfig({ type: 'x', entities }), hass);

describe('a formula entity', () => {
  it('is worked out from its variables, named after its formula, in the unit they share', () => {
    const [e] = resolve([{ formula: 'a - b', vars: { a: 'sensor.in', b: 'sensor.out' } } as EntityConfig]);
    expect(e.entityId).toBe('sensor.in');
    expect(e.name).toBe('a - b');
    expect(e.value).toBe(12.25);
    expect(e.unit).toBe('°C');
    expect(e.formula).toBe('measurement');
    expect(e.available).toBe(true);
  });

  it('keeps its own name, unit and decimals', () => {
    const [e] = resolve([
      {
        entity: 'sensor.power',
        name: 'Cost per hour',
        unit: '£/h',
        decimals: 3,
        formula: 'p / 1000 * c',
        vars: { p: 'sensor.power', c: 'sensor.price' },
      },
    ]);
    expect(e.name).toBe('Cost per hour');
    expect(e.value).toBe(0.5);
    expect(e.display).toBe('0.500 £/h');
  });

  it('has no unit and two decimals when its variables differ in unit', () => {
    const [e] = resolve([{ formula: 'p * c', vars: { p: 'sensor.power', c: 'sensor.price' } } as EntityConfig]);
    expect(e.unit).toBe('');
    expect(e.valueText).toBe('500.00');
    expect(sharedUnit(formulaOf(e.config)!, makeHass(states))).toBe('');
  });

  it('converts to a unit the card knows from the one its variables share', () => {
    const [e] = resolve([{ formula: 'p', vars: { p: 'sensor.power' }, unit: 'kW' } as EntityConfig]);
    expect(e.value).toBe(2);
    expect(e.conversion).toBeDefined();
  });

  it('is unavailable when a variable is, and missing when its entity is', () => {
    const [off] = resolve([{ formula: 'a - b', vars: { a: 'sensor.in', b: 'sensor.off' } } as EntityConfig]);
    expect(off.available).toBe(false);
    expect(off.display).toBe('Unavailable');
    const [gone] = resolve([{ formula: 'a', vars: { a: 'sensor.gone' } } as EntityConfig]);
    expect(gone.display).toBe('Entity not found');
  });

  it('reads on and off as 1 and 0', () => {
    const hass = makeHass(states);
    expect(formulaNow(formulaOf({ formula: 'p * s', vars: { p: 'sensor.power', s: 'switch.pump' } })!, hass)).toBe(
      2000,
    );
  });

  it('is a meter when every variable is one', () => {
    const [net, temp] = resolve([
      { formula: 'a - b', vars: { a: 'sensor.import', b: 'sensor.export' } } as EntityConfig,
      { formula: 'a', vars: { a: 'sensor.in' } } as EntityConfig,
    ]);
    expect(net.formula).toBe('meter');
    expect(isMeter(net)).toBe(true);
    expect(meterKind(net)).toBe('total');
    expect(isMeter(temp)).toBe(false);
    expect(meterKind(temp)).toBeUndefined();
  });

  it('redraws the card when a variable changes', () => {
    const config = normalizeConfig({
      type: 'x',
      entities: [{ entity: 'sensor.in', formula: 'a - b', vars: { a: 'sensor.in', b: 'sensor.out' } }],
    });
    expect([...watchedEntityIds(config)]).toEqual(expect.arrayContaining(['sensor.in', 'sensor.out']));
  });

  it('says which entity has a formula that does not read', () => {
    expect(() => normalizeConfig({ type: 'x', entities: ['sensor.a', { formula: 'a +' } as EntityConfig] })).toThrow(
      'Entity 2: Formula: it ends too soon',
    );
    expect(() => normalizeConfig({ type: 'x', entities: [{ formula: '2 + 2' } as EntityConfig] })).toThrow(
      'Entity 1 needs an "entity" id',
    );
  });
});

describe('formula history', () => {
  const now = Date.now();
  const history = {
    'sensor.in': [
      { s: '20', lu: ago(now, 6 * H) },
      { s: '22', lu: ago(now, 3 * H) },
    ],
    'sensor.out': [
      { s: '5', lu: ago(now, 6 * H) },
      { s: 'unavailable', lu: ago(now, 2 * H) },
      { s: '8', lu: ago(now, 1 * H) },
    ],
  };
  const request = { entity: 'sensor.in', formula: 'a - b', vars: { a: 'sensor.in', b: 'sensor.out' } };

  it('loads each variable once and joins them', async () => {
    const hass = chartHass(states, history);
    const data = await loadHistory(hass, [request, { entity: 'sensor.in' }], { start: now - 7 * H, end: now });
    const call = (hass.callWS as unknown as { mock: { calls: [{ entity_ids: string[] }][] } }).mock.calls[0][0];
    expect(call.entity_ids).toEqual(['sensor.in', 'sensor.out']);
    expect(data.get(key(request))!.map((x) => x.v)).toEqual([15, 17, null, 14]);
    expect(data.get('sensor.in')!.map((x) => x.v)).toEqual([20, 22]);
  });

  it('joins statistics row by row', async () => {
    const hass = chartHass(
      states,
      {},
      {
        'sensor.in': [
          { start: now - 2 * H, mean: 20 },
          { start: now - H, mean: 21 },
        ],
        'sensor.out': [
          { start: now - 2 * H, mean: 4 },
          { start: now - H, mean: 6 },
        ],
      },
    );
    const data = await loadStatistics(hass, [request], { start: now - 3 * H, end: now });
    expect(data.get(key(request))!.map((x) => x.v)).toEqual([16, 15]);
  });

  it('keeps up with live states of any variable', async () => {
    const hass = chartHass(states, history) as HomeAssistant;
    let redraws = 0;
    const store = new HistoryStore(() => redraws++);
    const range = { start: now - 7 * H, end: now + H };
    store.get(hass, [request], range, 'history');
    await new Promise((r) => setTimeout(r, 0));
    expect(redraws).toBe(1);
    const changed = {
      ...hass,
      states: {
        ...hass.states,
        'sensor.out': {
          ...hass.states['sensor.out'],
          state: '2',
          last_updated: new Date(now + 60_000).toISOString(),
        },
      },
    };
    const points = store.get(changed, [request], range, 'history').data.get(key(request))!;
    expect(points[points.length - 1]).toEqual({ t: now + 60_000, v: 19.5 });
    // Nothing new: no new point.
    expect(store.get(changed, [request], range, 'history').data.get(key(request))!.length).toBe(points.length);
  });

  it('draws as a line', async () => {
    const hass = chartHass(states, history);
    const card = await mountCard(
      {
        style: 'line',
        entities: [{ formula: 'a - b', vars: { a: 'sensor.in', b: 'sensor.out' }, name: 'Difference' } as EntityConfig],
      },
      hass,
    );
    expect(qa(card, 'path.line').length).toBeGreaterThan(0);
    expect(q(card, '.series-item')!.textContent!.replace(/\s+/g, ' ').trim()).toBe('Difference 12.3 °C');
    const d = q(card, 'path.line')!.getAttribute('d')!;
    // The gap while the outside sensor was unavailable breaks the line.
    expect(d.match(/M/g)).toHaveLength(2);
  });

  it('draws as columns, a meter formula by its change', async () => {
    const meters = {
      'sensor.import': [
        { s: '90', lu: ago(now, 30 * H) },
        { s: '100', lu: ago(now, H) },
      ],
      'sensor.export': [
        { s: '35', lu: ago(now, 30 * H) },
        { s: '40', lu: ago(now, H) },
      ],
    };
    const card = await mountCard(
      {
        style: 'column',
        labels: true,
        period: { last: 2, unit: 'day' },
        group_by: 'day',
        entities: [{ formula: 'a - b', vars: { a: 'sensor.import', b: 'sensor.export' } } as EntityConfig],
      },
      chartHass(states, meters),
    );
    // Imported 10, exported 5: a net 5 on the day it changed, by the change of the net meter.
    expect(qa(card, '.col-label').map((l) => l.textContent)).toContain('5.0');
  });

  it('draws as a bar from its current value', async () => {
    const card = await mountCard(
      {
        style: 'bar',
        entities: [{ formula: 'a - b', vars: { a: 'sensor.in', b: 'sensor.out' }, max: 20 } as EntityConfig],
      },
      makeHass(states),
    );
    expect(card.shadowRoot!.textContent).toContain('a - b12.3 °C');
  });
});

describe('formula editor', () => {
  it('finds the names in a formula, even half written', () => {
    expect(formulaNames(undefined)).toEqual([]);
    expect(formulaNames('max(a, b) * c')).toEqual(['a', 'b', 'c']);
    expect(formulaNames('max(a, b) *')).toEqual(['a', 'b']);
  });

  it('keeps vars to the names the formula uses', () => {
    const own: EntityConfig = { entity: 'sensor.in', formula: 'a - b', vars: { a: 'sensor.in', b: 'sensor.out' } };
    expect(applyFormulaForm(own, { formula: 'a * 2', var_a: 'sensor.in', var_b: 'sensor.out' })).toEqual({
      entity: 'sensor.in',
      formula: 'a * 2',
      vars: { a: 'sensor.in' },
    });
    expect(applyFormulaForm(own, { formula: '' })).toEqual({ entity: 'sensor.in' });
    expect(applyFormulaForm({ entity: 'sensor.in' }, { formula: 'a + 1' })).toEqual({
      entity: 'sensor.in',
      formula: 'a + 1',
    });
  });

  it('says why a formula does not work', () => {
    expect(formulaProblem({ entity: 'x', formula: 'a' })).toMatch(/uses "a"/);
    expect(formulaProblem({ entity: 'x', formula: 'a', vars: { a: 'sensor.in' } })).toBeUndefined();
  });

  it('names a formula row without an entity by the first entity it reads', () => {
    expect(entityId({ formula: 'a', vars: { a: 'sensor.in' } } as unknown as EntityConfig)).toBe('sensor.in');
    expect(entityId({ formula: '1' } as unknown as EntityConfig)).toBe('');
  });

  it('shows the formula and a picker per name in each entity row', async () => {
    const editor = document.createElement('chartdeck-card-editor') as Editor;
    editor.hass = makeHass(states);
    editor.setConfig({
      type: 'custom:chartdeck-card',
      style: 'line',
      entities: [{ entity: 'sensor.in', formula: 'a - b', vars: { a: 'sensor.in' } }],
    });
    document.body.appendChild(editor);
    await editor.updateComplete;
    const list = editor.shadowRoot!.querySelector('cd-entities-editor') as HTMLElement & {
      updateComplete: Promise<boolean>;
    };
    await list.updateComplete;
    (list.shadowRoot!.querySelector('.expand') as HTMLElement).click();
    await list.updateComplete;
    const form = list.shadowRoot!.querySelector('ha-form[data-section="entity-formula"]') as HTMLElement & {
      schema: { name: string }[];
      data: Record<string, unknown>;
      computeLabel: (s: { name: string }) => string;
      computeHelper: (s: { name: string }) => string | undefined;
    };
    expect(form.schema.map((s) => s.name)).toEqual(['formula', 'var_a', 'var_b']);
    expect(form.data).toEqual({ formula: 'a - b', var_a: 'sensor.in', var_b: '' });
    expect(form.computeLabel({ name: 'var_b' })).toBe('Entity for b');
    expect(form.computeLabel({ name: 'formula' })).toBe('Formula');
    expect(form.computeHelper({ name: 'formula' })).toMatch(/power \* price/);
    expect(form.computeHelper({ name: 'var_a' })).toBeUndefined();
    expect(list.shadowRoot!.querySelector('[data-warning="formula"]')?.textContent).toMatch(/uses "b"/);
    let config: CardConfig | undefined;
    editor.addEventListener('config-changed', (ev) => (config = (ev as CustomEvent).detail.config));
    form.dispatchEvent(
      new CustomEvent('value-changed', {
        detail: { value: { formula: 'a - b', var_a: 'sensor.in', var_b: 'sensor.out' } },
      }),
    );
    expect(config?.entities).toEqual([
      { entity: 'sensor.in', formula: 'a - b', vars: { a: 'sensor.in', b: 'sensor.out' } },
    ]);
    // The same values again change nothing.
    config = undefined;
    form.dispatchEvent(
      new CustomEvent('value-changed', { detail: { value: { formula: 'a - b', var_a: 'sensor.in' } } }),
    );
    expect(config).toBeUndefined();
  });
});
