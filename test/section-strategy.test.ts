import { describe, expect, it } from 'vitest';
import '../src/chartdeck-card';
import { areaSection } from '../src/section';
import type { AreaSectionConfig } from '../src/section';
import type { HomeAssistant } from '../src/types';
import { kitchenHass } from './helpers/areas';

interface StrategyClass {
  generate(config: AreaSectionConfig, hass: HomeAssistant): Promise<unknown>;
  getStubConfig(hass: HomeAssistant): AreaSectionConfig;
  getConfigElement(): HTMLElement;
}
type Editor = HTMLElement & {
  hass?: HomeAssistant;
  setConfig(c: AreaSectionConfig): void;
  updateComplete: Promise<boolean>;
};
type Form = HTMLElement & { schema: unknown; data: unknown; computeLabel: (s: { name: string }) => string };

const hass = kitchenHass();
const kitchen = { type: 'custom:chartdeck-area', area: 'kitchen' };
const strategy = () => customElements.get('ll-strategy-section-chartdeck-area') as unknown as StrategyClass;

describe('area section strategy', () => {
  it('registers once as a section strategy', () => {
    const all = (window as unknown as { customStrategies?: { type: string }[] }).customStrategies ?? [];
    expect(all.filter((s) => s.type === 'chartdeck-area')).toEqual([
      expect.objectContaining({ strategyType: 'section', name: 'Chartdeck area' }),
    ]);
  });

  it('generates from the pure function', async () => {
    expect(await strategy().generate(kitchen, hass)).toEqual(areaSection(kitchen, hass));
  });

  it('stubs with the first area', () => {
    expect(strategy().getStubConfig(hass)).toEqual(kitchen);
  });

  it('edits the area with ha-form and reports the change', async () => {
    const ed = strategy().getConfigElement() as Editor;
    expect(ed.tagName.toLowerCase()).toBe('chartdeck-section-editor');
    ed.hass = hass;
    ed.setConfig(kitchen);
    document.body.append(ed);
    await ed.updateComplete;
    const form = ed.shadowRoot!.querySelector('ha-form') as Form;
    expect(form.schema).toEqual([{ name: 'area', selector: { area: {} } }]);
    expect(form.data).toEqual(kitchen);
    expect(form.computeLabel({ name: 'area' })).toBe('Area');
    const seen: unknown[] = [];
    ed.addEventListener('config-changed', (e) => seen.push((e as CustomEvent).detail.config));
    form.dispatchEvent(new CustomEvent('value-changed', { detail: { value: { ...kitchen, area: 'loft' } } }));
    expect(seen).toEqual([{ type: 'custom:chartdeck-area', area: 'loft' }]);
    ed.remove();
  });
});
