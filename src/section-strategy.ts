import './editor/section-editor';
import { areaSection, firstArea } from './section';
import type { AreaSectionConfig, SectionConfig } from './section';
import type { HomeAssistant } from './types';

/**
 * "Chartdeck area" in the dashboard editor's community sections (Home Assistant 2026.11+):
 * a section of Chartdeck cards for every sensor type in one area.
 */
class ChartdeckAreaSectionStrategy extends HTMLElement {
  static async generate(config: AreaSectionConfig, hass: HomeAssistant): Promise<SectionConfig> {
    return areaSection(config, hass);
  }

  static getStubConfig(hass: HomeAssistant): AreaSectionConfig {
    const area = firstArea(hass);
    return area ? { type: 'custom:chartdeck-area', area } : { type: 'custom:chartdeck-area' };
  }

  static getConfigElement(): HTMLElement {
    return document.createElement('chartdeck-section-editor');
  }
}

if (!customElements.get('ll-strategy-section-chartdeck-area')) {
  customElements.define('ll-strategy-section-chartdeck-area', ChartdeckAreaSectionStrategy);
}

interface CustomStrategyEntry {
  type: string;
  strategyType: string;
  name: string;
  description: string;
  documentationURL?: string;
}
const strategies = ((window as unknown as { customStrategies?: CustomStrategyEntry[] }).customStrategies ??= []);
if (!strategies.some((s) => s.type === 'chartdeck-area' && s.strategyType === 'section')) {
  strategies.push({
    type: 'chartdeck-area',
    strategyType: 'section',
    name: 'Chartdeck area',
    description: 'Chartdeck cards for every sensor type in an area.',
    documentationURL: 'https://tempus2016.github.io/chartdeck/',
  });
}
