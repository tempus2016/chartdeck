import { afterEach, describe, expect, it } from 'vitest';
import { makeHass } from './helpers/hass';
import type { CardConfig } from '../src/types';

class StubElement extends HTMLElement {
  [key: string]: unknown;
}
for (const tag of [
  'ha-form',
  'ha-expansion-panel',
  'ha-selector',
  'ha-entity-picker',
  'ha-icon-picker',
  'ha-icon-button',
  'ha-switch',
  'ha-alert',
]) {
  if (!customElements.get(tag)) customElements.define(tag, class extends StubElement {});
}

await import('../src/editor/chartdeck-card-editor');
const { groupChartSchema, chartGroupOf } = await import('../src/editor/chart-editors');
const { computeHelper } = await import('../src/editor/helper');
const { STYLE_NAMES } = await import('../src/types');
const en = (await import('../src/locales/en.json')).default as Record<string, string>;

type Editor = HTMLElement & {
  setConfig(c: CardConfig): void;
  hass?: unknown;
  updateComplete: Promise<boolean>;
};

async function mount(
  config: Partial<CardConfig>,
  states: Parameters<typeof makeHass>[0] = { 'sensor.a': '1' },
): Promise<{ editor: Editor; events: CardConfig[] }> {
  const editor = document.createElement('chartdeck-card-editor') as Editor;
  editor.hass = makeHass(states);
  editor.setConfig({ type: 'custom:chartdeck-card', entities: ['sensor.a'], ...config } as CardConfig);
  const events: CardConfig[] = [];
  editor.addEventListener('config-changed', (e) => events.push((e as CustomEvent).detail.config));
  document.body.appendChild(editor);
  await editor.updateComplete;
  return { editor, events };
}

async function settle(editor: Editor): Promise<void> {
  for (let i = 0; i < 4; i += 1) {
    await editor.updateComplete;
    await new Promise((r) => setTimeout(r, 0));
  }
}

const q = (editor: Editor, sel: string) => editor.shadowRoot!.querySelector(sel) as StubElement | null;
const button = (editor: Editor, style: string) => q(editor, `button[data-style="${style}"]`) as HTMLButtonElement;
const panel = (editor: Editor, key: string) => q(editor, `ha-expansion-panel[data-panel="${key}"]`)!;

afterEach(() => {
  document.body.innerHTML = '';
});

describe('chart options in sections', () => {
  const field = (name: string) => ({ name, selector: { boolean: {} } });

  it('sorts fields into data, look, axes, extras and layout, a grid going with its first field', () => {
    expect(chartGroupOf(field('period_last'))).toBe('data');
    expect(chartGroupOf(field('group_by'))).toBe('data');
    expect(chartGroupOf(field('compare_style'))).toBe('data');
    expect(chartGroupOf(field('curve'))).toBe('look');
    expect(chartGroupOf(field('y_min_secondary'))).toBe('axes');
    expect(chartGroupOf(field('tooltip'))).toBe('axes');
    expect(chartGroupOf(field('anomalies_sigma'))).toBe('extras');
    expect(chartGroupOf(field('multiples_columns'))).toBe('layout');
    expect(chartGroupOf({ type: 'grid', name: '', schema: [field('header'), field('compact')] })).toBe('layout');
    // A name that only starts like a group's field stays where it belongs.
    expect(chartGroupOf(field('sources_per_hour'))).toBe('look');
  });

  it('folds a long form into sections, the first open, and keeps every field in order within them', () => {
    const schema = [
      field('period_last'),
      field('curve'),
      field('dots'),
      field('x_axis'),
      field('y_axis'),
      field('zoom'),
      field('zones'),
      field('sync'),
      field('header'),
      field('source'),
    ];
    const out = groupChartSchema(undefined, schema) as {
      type: string;
      title: string;
      expanded: boolean;
      flatten: boolean;
      schema: { name: string }[];
    }[];
    expect(out.map((s) => s.title)).toEqual([
      'Time span and readings',
      'Look',
      'Axes and gridlines',
      'Markers and extras',
      'Layout and sharing',
    ]);
    expect(out.every((s) => s.type === 'expandable' && s.flatten)).toBe(true);
    expect(out.map((s) => s.expanded)).toEqual([true, false, false, false, false]);
    expect(out[0].schema.map((s) => s.name)).toEqual(['period_last', 'source']);
    expect(out.flatMap((s) => s.schema)).toHaveLength(schema.length);
    // Same schema in, same object out, so ha-form isn't handed a new one each render.
    expect(groupChartSchema(undefined, schema)).toBe(out);
  });

  it('leaves short forms, one-section forms and forms that already fold as they are', () => {
    const short = [field('curve'), field('period_last')];
    expect(groupChartSchema(undefined, short)).toBe(short);
    const oneSection = Array.from({ length: 12 }, (_, i) => field(`option_${i}`));
    expect(groupChartSchema(undefined, oneSection)).toBe(oneSection);
    const folding = [
      ...Array.from({ length: 10 }, (_, i) => field(i % 2 ? `x_axis` : `curve_${i}`)),
      { type: 'expandable', name: '', schema: [] },
    ];
    expect(groupChartSchema(undefined, folding)).toBe(folding);
  });

  it('folds the line chart in the Chart section, with the time span first', async () => {
    const { editor } = await mount({ style: 'line' });
    const form = q(editor, '.section-chart ha-form[data-section="chart"]')!;
    const sections = form.schema as { title: string; expanded: boolean }[];
    expect(sections[0]).toMatchObject({ title: 'Time span and readings', expanded: true });
    expect(sections.length).toBeGreaterThanOrEqual(4);
  });
});

describe('helper text', () => {
  it('finds a field’s helper by its label key, and nothing when there is none', () => {
    expect(computeHelper(undefined, 'editor_zoom')).toBe('Pinch, Ctrl + scroll, or drag.');
    expect(computeHelper(undefined, 'editor_curve')).toBeUndefined();
  });

  it('keeps instructions out of labels: every helper belongs to a label that exists', () => {
    for (const key of Object.keys(en).filter((k) => k.endsWith('_helper'))) {
      expect(en, key).toHaveProperty(key.slice(0, -'_helper'.length));
    }
  });
});

describe('style picker', () => {
  it('says what every style is for', () => {
    for (const style of STYLE_NAMES) {
      expect(en[`editor_style_purpose_${style}`], style).toBeTruthy();
    }
  });

  it('is one radio group with one Tab stop, the chosen style describing itself', async () => {
    const { editor } = await mount({ style: 'ring' });
    const group = q(editor, '[role="radiogroup"]')!;
    expect(group.getAttribute('aria-label')).toBe('Style');
    const radios = [...group.querySelectorAll('[role="radio"]')];
    expect(radios).toHaveLength(STYLE_NAMES.length);
    expect(radios.filter((r) => r.getAttribute('tabindex') === '0').map((r) => r.getAttribute('data-style'))).toEqual([
      'ring',
    ]);
    expect(button(editor, 'ring').getAttribute('aria-checked')).toBe('true');
    expect(button(editor, 'line').title).toBe(en.editor_style_purpose_line);
    expect(q(editor, '.style-purpose')!.textContent).toContain(en.editor_style_purpose_ring);
    // Each group of styles is named by its heading.
    const named = group.querySelector('[role="group"]')!;
    expect(named.getAttribute('aria-labelledby')).toBe('style-group-bars');
    expect(q(editor, '#style-group-bars')!.textContent).toBe('Bars');
  });

  it('moves with the arrow keys, Home and End without picking; Enter or a click picks', async () => {
    const { editor, events } = await mount({ style: 'bar' });
    const key = (style: string, k: string) =>
      button(editor, style).dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true }));
    // The order on screen: by group, then within each group.
    const order = [...editor.shadowRoot!.querySelectorAll('[role="radio"]')].map((b) => b.getAttribute('data-style')!);
    const last = order.at(-1)!;
    key('bar', 'ArrowRight');
    await settle(editor);
    expect(button(editor, 'thin').getAttribute('tabindex')).toBe('0');
    expect(button(editor, 'bar').getAttribute('tabindex')).toBe('-1');
    expect(editor.shadowRoot!.activeElement).toBe(button(editor, 'thin'));
    expect(events).toHaveLength(0);
    key('thin', 'End');
    await settle(editor);
    expect(button(editor, last).getAttribute('tabindex')).toBe('0');
    key(last, 'ArrowDown');
    await settle(editor);
    expect(button(editor, 'bar').getAttribute('tabindex')).toBe('0');
    key('bar', 'ArrowUp');
    await settle(editor);
    expect(button(editor, last).getAttribute('tabindex')).toBe('0');
    key(last, 'Home');
    await settle(editor);
    expect(button(editor, 'bar').getAttribute('tabindex')).toBe('0');
    button(editor, 'ring').click();
    expect(events.at(-1)!.style).toBe('ring');
  });

  it('picking the chosen style again changes nothing', async () => {
    const { editor, events } = await mount({ style: 'ring' });
    button(editor, 'ring').click();
    expect(events).toHaveLength(0);
  });

  it('says when a style change turns grouping off, and when it sorts', async () => {
    const { editor } = await mount({ style: 'column', group_by: 'day' });
    button(editor, 'treemap').click();
    await settle(editor);
    expect(q(editor, 'ha-alert[data-notice]')!.textContent).toBe(
      "Grouping by Day was turned off: Treemap can't group that way.",
    );
    button(editor, 'battery').click();
    await settle(editor);
    expect(q(editor, 'ha-alert[data-notice]')!.textContent).toBe(en.editor_notice_sorted);
    button(editor, 'bar').click();
    await settle(editor);
    expect(q(editor, 'ha-alert[data-notice]')).toBeNull();
  });
});

describe('warnings', () => {
  it('warns when the minimum is not below the maximum, defaults included', async () => {
    const warning = async (config: Partial<CardConfig>) => {
      const { editor } = await mount(config);
      const text = q(editor, '.section-limits ha-alert[data-warning="limits"]')?.textContent ?? null;
      document.body.innerHTML = '';
      return text;
    };
    expect(await warning({})).toBeNull();
    expect(await warning({ min: 10, max: 5 })).toContain('The minimum (10) isn’t'.replace('’', "'"));
    expect(await warning({ min: 150 })).toContain('(100)');
    expect(await warning({ min: '20', max: '20' })).not.toBeNull();
    // An entity limit is only known when the card draws, so it isn't judged here.
    expect(await warning({ min: 'sensor.low', max: 5 })).toBeNull();
  });

  it('flags an entity whose state is not a number on a style that draws numbers only', async () => {
    const states = {
      'sensor.a': '1',
      'binary_sensor.door': ['on', { friendly_name: 'Front door' }],
      'sensor.off': 'unavailable',
    } as Parameters<typeof makeHass>[0];
    const entities = ['sensor.a', 'binary_sensor.door', 'sensor.off', { entity: 'binary_sensor.door', attribute: 'x' }];
    const { editor } = await mount({ style: 'bar', entities } as Partial<CardConfig>, states);
    await settle(editor);
    const list = q(editor, 'cd-entities-editor')!;
    const warnings = [...list.shadowRoot!.querySelectorAll('ha-alert[data-warning="not-number"]')];
    expect(warnings.map((w) => w.textContent)).toEqual([
      'Front door reads "on", which isn\'t a number, so this style can\'t draw it. Pick a sensor that reports a number, or read one of its attributes under its options.',
    ]);
    document.body.innerHTML = '';
    const timeline = await mount({ style: 'timeline', entities } as Partial<CardConfig>, states);
    await settle(timeline.editor);
    expect(q(timeline.editor, 'cd-entities-editor')!.shadowRoot!.querySelector('ha-alert')).toBeNull();
  });

  it('warns when two bands start at the same number', async () => {
    const { editor } = await mount({
      severity: [
        { from: 0, color: 'red' },
        { from: 50, color: 'amber' },
        { from: 50, color: 'green' },
      ],
    } as Partial<CardConfig>);
    await settle(editor);
    const bands = q(editor, '.section-colours cd-bands-editor')!;
    expect(bands.shadowRoot!.querySelector('ha-alert[data-warning="bands"]')!.textContent).toBe(
      'Two bands start at 50, so only one of them shows. Give each band its own start.',
    );
    expect(bands.shadowRoot!.querySelector('.swatch')!.getAttribute('aria-label')).toBe('Red');
  });
});

describe('section summaries', () => {
  it('says under each section name what it is set to', async () => {
    const { editor } = await mount({
      style: 'line',
      entities: ['sensor.a', 'sensor.b'],
      include: { area: ['kitchen'] },
      min: 5,
      target: 'sensor.goal',
      severity: [
        { from: 0, color: 'red', label: 'Low' },
        { from: 20, color: 'amber' },
        { from: 50, color: 'green' },
      ],
    } as Partial<CardConfig>);
    expect(panel(editor, 'entities').secondary).toBe('2 entities · plus matches');
    expect(panel(editor, 'style').secondary).toBe('Line');
    expect(panel(editor, 'limits').secondary).toBe('5 to 100 · target sensor.goal');
    expect(panel(editor, 'colours').secondary).toBe('Battery (low is bad)');
    expect(panel(editor, 'display').secondary).toBe('');
  });

  it('counts one entity, custom bands and no bands in plain words', async () => {
    const one = await mount({ severity: [{ from: 3, color: 'red' }] } as Partial<CardConfig>);
    expect(panel(one.editor, 'entities').secondary).toBe('1 entity');
    expect(panel(one.editor, 'colours').secondary).toBe('1 band');
    document.body.innerHTML = '';
    const none = await mount({ entities: [] });
    expect(panel(none.editor, 'entities').secondary).toBe('No entities yet');
    expect(panel(none.editor, 'colours').secondary).toBe('No bands');
  });

  it('opens the Entities section for a card with none yet, and only then', async () => {
    const empty = await mount({ entities: [] });
    expect(panel(empty.editor, 'entities').expanded).toBe(true);
    expect(panel(empty.editor, 'style').expanded).toBe(false);
    // Adding the first entity doesn't fold the section away under the pointer.
    empty.editor.setConfig({ type: 'custom:chartdeck-card', entities: ['sensor.a'] } as CardConfig);
    await settle(empty.editor);
    expect(panel(empty.editor, 'entities').expanded).toBe(true);
    document.body.innerHTML = '';
    const full = await mount({});
    expect(panel(full.editor, 'entities').expanded).toBe(false);
  });
});
