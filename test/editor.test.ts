import { afterEach, describe, expect, it, vi } from 'vitest';
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
]) {
  if (!customElements.get(tag)) customElements.define(tag, class extends StubElement {});
}

await import('../src/editor/chartdeck-card-editor');
await import('../src/chartdeck-card');
const { limitMode } = await import('../src/editor/limit-field');
const { presetFor } = await import('../src/editor/bands-editor');
const { BAND_PRESETS } = await import('../src/bands');

type Editor = HTMLElement & {
  setConfig(c: CardConfig): void;
  hass?: unknown;
  updateComplete: Promise<boolean>;
};

const raw: CardConfig = {
  type: 'custom:chartdeck-card',
  title: 'Batteries',
  style: 'tank',
  entities: ['sensor.a', { entity: 'sensor.b', name: 'B' }],
  show: { legend: false },
  future_option: { x: 1 },
};

async function mount(config: CardConfig): Promise<{ editor: Editor; events: CardConfig[] }> {
  const editor = document.createElement('chartdeck-card-editor') as Editor;
  editor.hass = makeHass({ 'sensor.a': '1' });
  editor.setConfig(config);
  const events: CardConfig[] = [];
  editor.addEventListener('config-changed', (e) => events.push((e as CustomEvent).detail.config));
  document.body.appendChild(editor);
  await editor.updateComplete;
  return { editor, events };
}

function form(editor: Editor, section: string): StubElement {
  const el = editor.shadowRoot!.querySelector(`ha-form[data-section="${section}"]`) as StubElement | null;
  if (!el) throw new Error(`no ${section} form`);
  return el;
}

/** Query inside a chain of shadow roots: each selector but the last names a host element. */
function deep(root: Element, ...selectors: string[]): StubElement {
  let node: Element | null = root;
  for (const sel of selectors) {
    node = node!.shadowRoot!.querySelector(sel);
    if (!node) throw new Error(`nothing matches ${sel}`);
  }
  return node as StubElement;
}

function deepAll(root: Element, ...selectors: string[]): StubElement[] {
  const host = selectors.length > 1 ? deep(root, ...selectors.slice(0, -1)) : root;
  return [...host.shadowRoot!.querySelectorAll(selectors.at(-1)!)] as StubElement[];
}

async function settle(editor: Editor): Promise<void> {
  for (let i = 0; i < 4; i += 1) {
    await editor.updateComplete;
    await new Promise((r) => setTimeout(r, 0));
  }
}

function pick(el: HTMLElement, value: unknown): void {
  el.dispatchEvent(new CustomEvent('value-changed', { detail: { value }, bubbles: true, composed: true }));
}

function change(el: HTMLElement, value: Record<string, unknown>): void {
  el.dispatchEvent(new CustomEvent('value-changed', { detail: { value }, bubbles: true, composed: true }));
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('chartdeck-card-editor', () => {
  it('is what the card returns as its config element', () => {
    const card = customElements.get('chartdeck-card') as unknown as { getConfigElement(): HTMLElement };
    expect(card.getConfigElement().tagName.toLowerCase()).toBe('chartdeck-card-editor');
  });

  it('lays out the sections in spec order with the title above them', async () => {
    const { editor } = await mount(raw);
    const root = editor.shadowRoot!;
    const headers = [...root.querySelectorAll('ha-expansion-panel')].map((p) => (p as StubElement).header);
    expect(headers).toEqual(['Entities', 'Style', 'Limits', 'Colours', 'Display', 'Actions']);
    const titleForm = form(editor, 'title');
    expect(titleForm.compareDocumentPosition(root.querySelector('ha-expansion-panel')!)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
  });

  it('round-trips YAML → editor → YAML unchanged when nothing is edited', async () => {
    const { editor, events } = await mount(raw);
    for (const section of ['title', 'display', 'actions']) {
      const f = form(editor, section);
      change(f, { ...(f.data as Record<string, unknown>) });
    }
    expect(events.length).toBeGreaterThan(0);
    for (const config of events) expect(config).toEqual(raw);
  });

  it('keeps unknown keys when an option changes', async () => {
    const { editor, events } = await mount(raw);
    const f = form(editor, 'display');
    change(f, { ...(f.data as Record<string, unknown>), columns: 2 });
    expect(events.at(-1)).toEqual({ ...raw, columns: 2 });
    change(form(editor, 'title'), { title: 'Power' });
    expect(events.at(-1)).toEqual({ ...raw, columns: 2, title: 'Power' });
  });

  it('selecting a style emits style; selecting bar removes it', async () => {
    const { editor, events } = await mount(raw);
    const button = (name: string) =>
      editor.shadowRoot!.querySelector(`button[data-style="${name}"]`) as HTMLButtonElement;
    expect(editor.shadowRoot!.querySelectorAll('button[data-style]')).toHaveLength(7);
    expect(button('tank').getAttribute('aria-pressed')).toBe('true');
    expect(button('bar').getAttribute('aria-pressed')).toBe('false');
    expect(button('ring').querySelector('svg')).not.toBeNull();
    button('ring').click();
    expect(events.at(-1)!.style).toBe('ring');
    await editor.updateComplete;
    expect(button('ring').getAttribute('aria-pressed')).toBe('true');
    button('bar').click();
    expect(events.at(-1)).not.toHaveProperty('style');
    expect(events.at(-1)!.future_option).toEqual({ x: 1 });
  });

  it('a Display toggle set back to its default removes the key', async () => {
    const { editor, events } = await mount({ type: 'custom:chartdeck-card', entities: ['sensor.a'] });
    const f = form(editor, 'display');
    const data = f.data as Record<string, unknown>;
    expect(data).toMatchObject({ show_name: true, show_legend: false, sort: 'none', animate: true });
    change(f, { ...data, show_legend: true });
    expect(events.at(-1)!.show).toEqual({ legend: true });
    await editor.updateComplete;
    change(f, { ...(f.data as Record<string, unknown>), show_legend: false });
    expect(events.at(-1)).toEqual({ type: 'custom:chartdeck-card', entities: ['sensor.a'] });
    change(f, { ...(f.data as Record<string, unknown>), animate: false, sort: 'descending' });
    expect(events.at(-1)).toMatchObject({ animate: false, sort: 'descending' });
  });

  it('clearing a number removes it', async () => {
    const { editor, events } = await mount({ type: 'custom:chartdeck-card', columns: 3, decimals: 1 });
    const f = form(editor, 'display');
    const { columns: _c, ...rest } = f.data as Record<string, unknown>;
    void _c;
    change(f, { ...rest, decimals: undefined });
    expect(events.at(-1)).toEqual({ type: 'custom:chartdeck-card' });
  });

  it('actions default to more-info / none and drop when set back to default', async () => {
    const { editor, events } = await mount({ type: 'custom:chartdeck-card' });
    const f = form(editor, 'actions');
    expect(f.data).toEqual({
      tap_action: { action: 'more-info' },
      hold_action: { action: 'none' },
      double_tap_action: { action: 'none' },
    });
    change(f, { ...(f.data as Record<string, unknown>), hold_action: { action: 'toggle' } });
    expect(events.at(-1)).toEqual({ type: 'custom:chartdeck-card', hold_action: { action: 'toggle' } });
    await editor.updateComplete;
    change(f, { ...(f.data as Record<string, unknown>), hold_action: { action: 'none' } });
    expect(events.at(-1)).toEqual({ type: 'custom:chartdeck-card' });
  });

  it('labels form fields in English', async () => {
    const { editor } = await mount(raw);
    const f = form(editor, 'display');
    const computeLabel = f.computeLabel as (s: { name: string }) => string;
    expect(computeLabel({ name: 'show_legend' })).toBe('Show legend');
    expect(computeLabel({ name: 'columns' })).toBe('Columns');
  });
});

describe('editor helpers', () => {
  it('limitMode classifies a limit', () => {
    expect(limitMode(undefined)).toBe('default');
    expect(limitMode(5)).toBe('number');
    expect(limitMode('sensor.x')).toBe('entity');
  });

  it('presetFor matches presets exactly', () => {
    expect(presetFor(BAND_PRESETS.battery)).toBe('battery');
    expect(presetFor(structuredClone(BAND_PRESETS.usage))).toBe('usage');
    expect(presetFor(undefined)).toBe('none');
    expect(presetFor([{ from: 0, color: 'pink' }])).toBe('custom');
  });
});

describe('editor: limits', () => {
  it('card-level limits use limit fields with the spec defaults', async () => {
    const { editor, events } = await mount({ ...raw, max: 'sensor.cap' });
    await settle(editor);
    const fields = [...editor.shadowRoot!.querySelectorAll('.section-limits cd-limit-field')] as StubElement[];
    expect(fields.map((f) => f.defaultLabel)).toEqual(['0', '100', 'None']);
    const max = fields[1];
    expect(max.value).toBe('sensor.cap');
    const mode = deep(max, 'ha-selector[data-role="mode"]');
    expect(mode.value).toBe('entity');
    pick(deep(max, 'ha-selector[data-role="entity"]'), 'sensor.other');
    expect(events.at(-1)).toEqual({ ...raw, max: 'sensor.other' });
    await settle(editor);
    pick(deep(max, 'ha-selector[data-role="mode"]'), 'default');
    expect(events.at(-1)).toEqual(raw);
  });

  it('switching to Number shows a number box and writes the number', async () => {
    const { editor, events } = await mount(raw);
    await settle(editor);
    const min = editor.shadowRoot!.querySelector('.section-limits cd-limit-field') as StubElement;
    pick(deep(min, 'ha-selector[data-role="mode"]'), 'number');
    await settle(editor);
    expect(events).toHaveLength(0);
    const box = deep(min, 'ha-selector[data-role="number"]');
    expect(box.selector).toEqual({ number: { mode: 'box', step: 'any' } });
    pick(box, -20);
    expect(events.at(-1)).toEqual({ ...raw, min: -20 });
  });
});

describe('editor: clearing a limit mid-edit', () => {
  it('keeps the number box when it is cleared, then writes the retyped number', async () => {
    const { editor, events } = await mount({ ...raw, min: 5 });
    await settle(editor);
    const min = editor.shadowRoot!.querySelector('.section-limits cd-limit-field') as StubElement;
    pick(deep(min, 'ha-selector[data-role="number"]'), undefined);
    expect(events.at(-1)).toEqual(raw);
    await settle(editor);
    expect(deep(min, 'ha-selector[data-role="mode"]').value).toBe('number');
    pick(deep(min, 'ha-selector[data-role="number"]'), 7);
    expect(events.at(-1)).toEqual({ ...raw, min: 7 });
  });

  it('keeps the entity picker when it is cleared', async () => {
    const { editor, events } = await mount({ ...raw, max: 'sensor.cap' });
    await settle(editor);
    const max = editor.shadowRoot!.querySelectorAll('.section-limits cd-limit-field')[1] as StubElement;
    pick(deep(max, 'ha-selector[data-role="entity"]'), '');
    expect(events.at(-1)).toEqual(raw);
    await settle(editor);
    expect(deep(max, 'ha-selector[data-role="mode"]').value).toBe('entity');
    pick(deep(max, 'ha-selector[data-role="entity"]'), 'sensor.other');
    expect(events.at(-1)).toEqual({ ...raw, max: 'sensor.other' });
  });
});

describe('editor: colours', () => {
  const bands = (editor: Editor) => editor.shadowRoot!.querySelector('.section-colours cd-bands-editor') as StubElement;

  it('choosing the Usage preset writes its bands; None removes severity', async () => {
    const { editor, events } = await mount(raw);
    await settle(editor);
    const preset = deep(bands(editor), 'ha-selector[data-role="preset"]');
    expect(preset.value).toBe('none');
    pick(preset, 'usage');
    expect(events.at(-1)).toEqual({ ...raw, severity: BAND_PRESETS.usage });
    expect(events.at(-1)!.severity).not.toBe(BAND_PRESETS.usage);
    await settle(editor);
    expect(deepAll(bands(editor), '.band')).toHaveLength(3);
    pick(deep(bands(editor), 'ha-selector[data-role="preset"]'), 'none');
    expect(events.at(-1)).toEqual(raw);
  });

  it('editing one band keeps the others and their labels', async () => {
    const severity = [
      { from: 0, color: 'red', label: 'Low' },
      { from: 20, color: 'amber' },
      { from: 50, color: '#123456', label: 'Good' },
    ];
    const { editor, events } = await mount({ ...raw, severity });
    await settle(editor);
    const el = bands(editor);
    expect(deep(el, 'ha-selector[data-role="preset"]').value).toBe('custom');
    const rows = deepAll(el, '.band');
    expect(rows).toHaveLength(3);
    const swatch = rows[0].querySelector('.swatch') as HTMLElement;
    expect(swatch.style.getPropertyValue('--swatch')).toContain('--error-color');
    expect((rows[2].querySelector('ha-selector[data-role="color"]') as StubElement).value).toBe('custom');
    expect((rows[2].querySelector('ha-selector[data-role="custom-color"]') as StubElement).value).toBe('#123456');
    expect(rows[0].querySelector('ha-selector[data-role="custom-color"]')).toBeNull();
    const row = (i: number, role: string) =>
      deepAll(bands(editor), '.band')[i].querySelector(`ha-selector[data-role="${role}"]`) as HTMLElement;
    pick(row(1, 'from'), 30);
    expect(events.at(-1)!.severity).toEqual([severity[0], { from: 30, color: 'amber' }, severity[2]]);
    await settle(editor);
    pick(row(1, 'color'), 'purple');
    expect(events.at(-1)!.severity).toEqual([severity[0], { from: 30, color: 'purple' }, severity[2]]);
    await settle(editor);
    pick(row(0, 'label'), '');
    expect((events.at(-1)!.severity as unknown[])[0]).toEqual({ from: 0, color: 'red' });
    expect(events.at(-1)!.future_option).toEqual({ x: 1 });
  });

  it('adds and removes bands; an empty list removes severity', async () => {
    const { editor, events } = await mount({ ...raw, severity: [{ from: 40, color: 'red' }] });
    await settle(editor);
    (deep(bands(editor), 'button.add-band') as unknown as HTMLButtonElement).click();
    expect(events.at(-1)!.severity).toEqual([
      { from: 40, color: 'red' },
      { from: 50, color: 'primary' },
    ]);
    await settle(editor);
    (deepAll(bands(editor), '.band')[0].querySelector('ha-icon-button.remove') as HTMLElement).click();
    expect(events.at(-1)!.severity).toEqual([{ from: 50, color: 'primary' }]);
    await settle(editor);
    (deepAll(bands(editor), '.band')[0].querySelector('ha-icon-button.remove') as HTMLElement).click();
    expect(events.at(-1)).toEqual(raw);
  });

  it('choosing Custom… keeps the colour and reveals a text field', async () => {
    const { editor, events } = await mount({ ...raw, severity: [{ from: 0, color: 'green' }] });
    await settle(editor);
    const row = deepAll(bands(editor), '.band')[0];
    const before = events.length;
    pick(row.querySelector('ha-selector[data-role="color"]') as HTMLElement, 'custom');
    expect(events.length).toBe(before);
    await settle(editor);
    const custom = deepAll(bands(editor), '.band')[0].querySelector('ha-selector[data-role="custom-color"]');
    pick(custom as HTMLElement, 'var(--accent-color)');
    expect(events.at(-1)!.severity).toEqual([{ from: 0, color: 'var(--accent-color)' }]);
  });
});

describe('editor: entities', () => {
  const list = (editor: Editor) =>
    editor.shadowRoot!.querySelector('.section-entities cd-entities-editor') as StubElement;
  const rows = (editor: Editor) => deepAll(list(editor), '.entity');

  it('lists entities by friendly name; a missing entity says "(not found)" and can be removed', async () => {
    const { editor, events } = await mount(raw);
    editor.hass = makeHass({ 'sensor.a': ['1', { friendly_name: 'Battery A' }] });
    await settle(editor);
    const r = rows(editor);
    expect(r).toHaveLength(2);
    expect(r[0].querySelector('.label')!.textContent).toBe('Battery A');
    expect(r[1].querySelector('.label')!.textContent).toBe('sensor.b (not found)');
    expect((r[1].querySelector('ha-entity-picker') as StubElement).value).toBe('sensor.b');
    (r[1].querySelector('ha-icon-button.remove') as HTMLElement).click();
    expect(events.at(-1)).toEqual({ ...raw, entities: ['sensor.a'] });
  });

  it('adds an entity from the empty picker and ignores clearing a row picker', async () => {
    const { editor, events } = await mount(raw);
    await settle(editor);
    pick(deep(list(editor), 'ha-entity-picker.add'), 'sensor.c');
    expect(events.at(-1)!.entities).toEqual([...raw.entities!, 'sensor.c']);
    await settle(editor);
    const picker = rows(editor)[0].querySelector('ha-entity-picker') as StubElement;
    picker.value = '';
    pick(picker, '');
    expect(events).toHaveLength(1);
    await settle(editor);
    expect(picker.value).toBe('sensor.a');
    pick(rows(editor)[0].querySelector('ha-entity-picker') as HTMLElement, 'sensor.z');
    expect(events.at(-1)!.entities![0]).toBe('sensor.z');
  });

  it('reordering entities emits the new order and keeps overrides', async () => {
    const { editor, events } = await mount(raw);
    await settle(editor);
    const r = rows(editor);
    expect((r[0].querySelector('ha-icon-button.up') as StubElement).disabled).toBe(true);
    expect((r[1].querySelector('ha-icon-button.down') as StubElement).disabled).toBe(true);
    (r[1].querySelector('ha-icon-button.up') as HTMLElement).click();
    expect(events.at(-1)).toEqual({ ...raw, entities: [{ entity: 'sensor.b', name: 'B' }, 'sensor.a'] });
    await settle(editor);
    (rows(editor)[0].querySelector('ha-icon-button.down') as HTMLElement).click();
    expect(events.at(-1)).toEqual(raw);
  });

  it('setting a per-entity max entity converts the shorthand and round-trips', async () => {
    const { editor, events } = await mount(raw);
    await settle(editor);
    expect(rows(editor)[0].querySelector('.overrides')).toBeNull();
    (rows(editor)[0].querySelector('ha-icon-button.expand') as HTMLElement).click();
    await settle(editor);
    const overrides = rows(editor)[0].querySelector('.overrides')!;
    const limits = [...overrides.querySelectorAll('cd-limit-field')] as StubElement[];
    expect(limits).toHaveLength(3);
    const max = limits[1];
    pick(deep(max, 'ha-selector[data-role="mode"]'), 'entity');
    await settle(editor);
    pick(deep(max, 'ha-selector[data-role="entity"]'), 'sensor.cap');
    const set = events.at(-1)!;
    expect(set.entities![0]).toEqual({ entity: 'sensor.a', max: 'sensor.cap' });
    expect(set.entities![1]).toEqual({ entity: 'sensor.b', name: 'B' });
    await settle(editor);
    pick(deep(max, 'ha-selector[data-role="mode"]'), 'default');
    expect(events.at(-1)).toEqual(raw);
  });

  it('per-entity name, icon, severity and actions write to that entity only', async () => {
    const { editor, events } = await mount(raw);
    await settle(editor);
    (rows(editor)[1].querySelector('ha-icon-button.expand') as HTMLElement).click();
    await settle(editor);
    const row = rows(editor)[1];
    const textForm = row.querySelector('ha-form[data-section="entity-text"]') as StubElement;
    expect(textForm.data).toEqual({ name: 'B' });
    change(textForm, { ...(textForm.data as Record<string, unknown>) });
    expect(events).toHaveLength(0);
    change(textForm, { name: 'B', decimals: 2 });
    expect(events.at(-1)!.entities![1]).toEqual({ entity: 'sensor.b', name: 'B', decimals: 2 });
    await settle(editor);
    pick(rows(editor)[1].querySelector('ha-icon-picker') as HTMLElement, 'mdi:battery');
    expect(events.at(-1)!.entities![1]).toMatchObject({ icon: 'mdi:battery' });
    await settle(editor);
    const bandsEl = rows(editor)[1].querySelector('cd-bands-editor') as StubElement;
    pick(deep(bandsEl, 'ha-selector[data-role="preset"]'), 'battery');
    expect(events.at(-1)!.entities![1]).toMatchObject({ severity: BAND_PRESETS.battery });
    await settle(editor);
    const actions = rows(editor)[1].querySelector('ha-form[data-section="entity-actions"]') as StubElement;
    change(actions, { tap_action: { action: 'toggle' } });
    expect(events.at(-1)!.entities![1]).toMatchObject({ tap_action: { action: 'toggle' } });
    expect(events.at(-1)!.entities![0]).toBe('sensor.a');
    expect(events.at(-1)!.tap_action).toBeUndefined();
  });

  it('inner value-changed events do not leak out of the editor', async () => {
    const { editor } = await mount(raw);
    await settle(editor);
    const leaked: Event[] = [];
    document.body.addEventListener('value-changed', (e) => leaked.push(e));
    pick(deep(list(editor), 'ha-entity-picker.add'), 'sensor.c');
    const fields = editor.shadowRoot!.querySelectorAll('.section-limits cd-limit-field');
    pick(deep(fields[0], 'ha-selector[data-role="mode"]'), 'number');
    expect(leaked).toHaveLength(0);
  });
});

describe('editor: optional fields', () => {
  /** Every element matching `sel` in `root` and all shadow roots below it. */
  function walk(root: Element | ShadowRoot, sel: string, out: Element[] = []): Element[] {
    root.querySelectorAll(sel).forEach((e) => out.push(e));
    root.querySelectorAll('*').forEach((e) => {
      if (e.shadowRoot) walk(e.shadowRoot, sel, out);
    });
    return out;
  }
  function schemaItems(schema: unknown): Record<string, unknown>[] {
    if (!Array.isArray(schema)) return [];
    return schema.flatMap((item: Record<string, unknown>) => [item, ...schemaItems(item.schema)]);
  }

  it('marks only the always-filled dropdowns required, so optional fields show no asterisk', async () => {
    // ha-selector defaults to required. Limit mode, band colour and band preset always hold a
    // value (and a non-required HA select grows a clear button that does nothing here), so they
    // stay required; everything else is optional.
    const REQUIRED = ['mode', 'color', 'preset'];
    const { editor } = await mount({
      ...raw,
      severity: [
        { from: 0, color: 'red', label: 'Low' },
        { from: 50, color: '#123456' },
      ],
    });
    const expand = deepAll(editor, 'cd-entities-editor', '.expand')[0];
    expand.click();
    await settle(editor);
    const selectors = walk(editor.shadowRoot!, 'ha-selector') as StubElement[];
    const roles = selectors.map((s) => s.dataset.role).filter(Boolean);
    for (const role of ['mode', 'preset', 'from', 'color', 'label', 'custom-color']) expect(roles).toContain(role);
    for (const s of selectors) {
      const role = String(s.dataset.role);
      expect(s.required, `ha-selector[data-role=${role}]`).toBe(REQUIRED.includes(role));
    }
    const forms = walk(editor.shadowRoot!, 'ha-form') as StubElement[];
    expect(forms.length).toBeGreaterThanOrEqual(4);
    for (const f of forms) {
      for (const item of schemaItems(f.schema)) expect(item.required, String(item.name)).not.toBe(true);
    }
  });
});

describe('editor: schemas', () => {
  it('memoises ha-form schemas per language', async () => {
    const { editor } = await mount(raw);
    const first = form(editor, 'display').schema;
    editor.hass = makeHass({ 'sensor.a': '2' });
    await settle(editor);
    expect(form(editor, 'display').schema).toBe(first);
    expect(form(editor, 'actions').schema).toBe(form(editor, 'actions').schema);
    editor.hass = makeHass({ 'sensor.a': '2' }, { locale: { language: 'de' } });
    await settle(editor);
    expect(form(editor, 'display').schema).not.toBe(first);
  });
});

describe('loadHaComponents', () => {
  it('does nothing without loadCardHelpers', async () => {
    const { loadHaComponents } = await import('../src/editor/chartdeck-card-editor');
    await expect(loadHaComponents()).resolves.toBeUndefined();
  });

  it('asks a core card for its editor so HA loads ha-form and the pickers', async () => {
    const { loadHaComponents } = await import('../src/editor/chartdeck-card-editor');
    const calls: string[] = [];
    const realGet = customElements.get.bind(customElements);
    const get = vi
      .spyOn(customElements, 'get')
      .mockImplementation((name: string) => (name === 'ha-entity-picker' ? undefined : realGet(name)));
    class FakeCard extends HTMLElement {
      static async getConfigElement() {
        calls.push('getConfigElement');
      }
    }
    const w = window as unknown as { loadCardHelpers?: unknown };
    w.loadCardHelpers = async () => ({
      createCardElement: async (c: { type: string }) => {
        calls.push(`create:${c.type}`);
        return Object.create(FakeCard.prototype);
      },
    });
    try {
      await loadHaComponents();
    } finally {
      delete w.loadCardHelpers;
      get.mockRestore();
    }
    expect(calls).toEqual(['create:entities', 'getConfigElement']);
  });
});
