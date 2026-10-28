import { afterEach, describe, expect, it } from 'vitest';
import { makeHass } from './helpers/hass';
import type { CardConfig } from '../src/types';

class StubElement extends HTMLElement {
  [key: string]: unknown;
}
for (const tag of ['ha-form', 'ha-expansion-panel']) {
  if (!customElements.get(tag)) customElements.define(tag, class extends StubElement {});
}

await import('../src/editor/chartdeck-card-editor');
await import('../src/chartdeck-card');

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

describe('loadHaComponents', () => {
  it('does nothing without loadCardHelpers', async () => {
    const { loadHaComponents } = await import('../src/editor/chartdeck-card-editor');
    await expect(loadHaComponents()).resolves.toBeUndefined();
  });

  it('asks a core card for its editor so HA loads ha-form and the pickers', async () => {
    const { loadHaComponents } = await import('../src/editor/chartdeck-card-editor');
    const calls: string[] = [];
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
    }
    expect(calls).toEqual(['create:entities', 'getConfigElement']);
  });
});
