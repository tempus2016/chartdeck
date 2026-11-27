import { LitElement, html, nothing } from 'lit';
import { LanguageController } from '../language-controller';
import { localize } from '../localize';
import type { AreaSectionConfig } from '../section';
import type { HomeAssistant } from '../types';
import { loadHaComponents } from './chartdeck-card-editor';

/** One field: the area. Kept as one object so ha-form is handed the same schema every render. */
const SCHEMA = [{ name: 'area', selector: { area: {} } }];

/** The visual editor for a Chartdeck area section. */
export class ChartdeckSectionEditor extends LitElement {
  protected readonly languageController = new LanguageController(this);

  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  declare hass?: HomeAssistant;
  declare _config?: AreaSectionConfig;

  setConfig(config: AreaSectionConfig): void {
    this._config = config;
  }

  connectedCallback(): void {
    super.connectedCallback();
    void loadHaComponents();
  }

  private _label = (schema: { name: string }): string => localize(this.hass, `editor_section_${schema.name}`);

  private _changed(ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) return;
    const area = (ev.detail.value as { area?: string }).area;
    const config: AreaSectionConfig = { ...this._config, area: area || undefined };
    if (!config.area) delete config.area;
    this._config = config;
    this.dispatchEvent(new CustomEvent('config-changed', { bubbles: true, composed: true, detail: { config } }));
  }

  render() {
    if (!this._config) return nothing;
    return html`<ha-form
      .hass=${this.hass}
      .data=${this._config}
      .schema=${SCHEMA}
      .computeLabel=${this._label}
      @value-changed=${this._changed}
    ></ha-form>`;
  }
}

if (!customElements.get('chartdeck-section-editor')) {
  customElements.define('chartdeck-section-editor', ChartdeckSectionEditor);
}
