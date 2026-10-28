import { LitElement, css, html, nothing } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { BAND_PRESETS, PALETTE, baseColor } from '../bands';
import { languageOf, localize } from '../localize';
import type { Band, HomeAssistant } from '../types';
import { deepEqual } from './schemas';

export type PresetName = keyof typeof BAND_PRESETS;

const PRESET_NAMES = Object.keys(BAND_PRESETS) as PresetName[];
const COLOR_NAMES = Object.keys(PALETTE);
const CUSTOM = 'custom';
const DELETE_ICON = 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z';
const TEXT_SELECTOR = { text: {} };

/** The preset whose bands match exactly, `none` for no bands, otherwise `custom`. */
export function presetFor(bands: Band[] | undefined): PresetName | 'custom' {
  if (bands === undefined) return 'none';
  return PRESET_NAMES.find((name) => BAND_PRESETS[name] && deepEqual(BAND_PRESETS[name], bands)) ?? 'custom';
}

function isPaletteColor(color: string): boolean {
  return COLOR_NAMES.includes(color);
}

/** Severity bands: a preset picker, then one editable row per band. */
export class CdBandsEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    bands: { attribute: false },
    unit: { attribute: false },
  };

  static styles = css`
    :host {
      display: block;
    }
    .band {
      display: grid;
      grid-template-columns: 20px minmax(0, 1fr) minmax(0, 1.2fr) minmax(0, 1fr) auto;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }
    .swatch {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--swatch);
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      box-sizing: border-box;
    }
    .custom {
      grid-column: 2 / -1;
    }
    .add-band {
      margin-top: 8px;
      padding: 6px 12px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      border-radius: 8px;
      background: none;
      color: var(--primary-color);
      font: inherit;
      cursor: pointer;
    }
    .add-band:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }
  `;

  declare hass?: HomeAssistant;
  declare bands?: Band[];
  declare unit?: string;

  private _selectors?: { key: string; preset: unknown; presetCustom: unknown; color: unknown; from: unknown };

  private _t(key: string): string {
    return localize(this.hass, key);
  }

  /** Selector objects, rebuilt only when the language or unit changes. */
  private _getSelectors() {
    const key = `${languageOf(this.hass)}|${this.unit ?? ''}`;
    if (this._selectors?.key === key) return this._selectors;
    const presetOptions = PRESET_NAMES.map((value) => ({ value, label: this._t(`editor_preset_${value}`) }));
    const select = (options: { value: string; label: string }[]) => ({ select: { mode: 'dropdown', options } });
    this._selectors = {
      key,
      preset: select(presetOptions),
      presetCustom: select([...presetOptions, { value: CUSTOM, label: this._t('editor_preset_custom') }]),
      color: select([...COLOR_NAMES, CUSTOM].map((value) => ({ value, label: this._t(`editor_color_${value}`) }))),
      from: { number: { mode: 'box', step: 'any', ...(this.unit ? { unit_of_measurement: this.unit } : {}) } },
    };
    return this._selectors;
  }

  private _emit(bands: Band[] | undefined): void {
    this.dispatchEvent(
      new CustomEvent('value-changed', { detail: { value: bands && bands.length ? bands : undefined } }),
    );
  }

  private _presetChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    const name = ev.detail?.value as string | undefined;
    if (!name || name === CUSTOM || !PRESET_NAMES.includes(name as PresetName)) return;
    if (name === presetFor(this.bands)) return;
    const bands = BAND_PRESETS[name as PresetName];
    this._emit(bands ? structuredClone(bands) : undefined);
  }

  private _updateBand(index: number, key: keyof Band, value: unknown): void {
    const bands = [...(this.bands ?? [])];
    const band: Record<string, unknown> = { ...bands[index] };
    if (value === undefined || value === null || value === '') delete band[key];
    else band[key] = value;
    bands[index] = band as unknown as Band;
    this._emit(bands);
  }

  private _fromChanged(index: number, ev: CustomEvent): void {
    ev.stopPropagation();
    const n = Number(ev.detail?.value);
    if (ev.detail?.value === '' || ev.detail?.value == null || !Number.isFinite(n)) return;
    this._updateBand(index, 'from', n);
  }

  private _colorChanged(index: number, ev: CustomEvent): void {
    ev.stopPropagation();
    const choice = ev.detail?.value as string | undefined;
    const current = this.bands?.[index]?.color ?? 'primary';
    if (!choice) return;
    if (choice === CUSTOM) {
      // Start the custom field from the colour already shown, so nothing visibly changes.
      if (isPaletteColor(current)) this._updateBand(index, 'color', baseColor(current));
      return;
    }
    if (choice !== current) this._updateBand(index, 'color', choice);
  }

  private _customColorChanged(index: number, ev: CustomEvent): void {
    ev.stopPropagation();
    const value = typeof ev.detail?.value === 'string' ? ev.detail.value.trim() : '';
    if (value) this._updateBand(index, 'color', value);
  }

  private _labelChanged(index: number, ev: CustomEvent): void {
    ev.stopPropagation();
    this._updateBand(index, 'label', ev.detail?.value);
  }

  private _removeBand(index: number): void {
    const bands = [...(this.bands ?? [])];
    bands.splice(index, 1);
    this._emit(bands);
  }

  private _addBand(): void {
    const bands = [...(this.bands ?? [])];
    // YAML may hold the threshold as text ("20"); the card reads it as a number, so do the same
    // (but a blank or non-numeric value starts again at 0).
    const raw: unknown = bands[bands.length - 1]?.from;
    const last = typeof raw === 'number' ? raw : typeof raw === 'string' && raw.trim() !== '' ? Number(raw) : NaN;
    bands.push({ from: Number.isFinite(last) ? last + 10 : 0, color: 'primary' });
    this._emit(bands);
  }

  private _renderBand(band: Band, index: number, selectors: ReturnType<CdBandsEditor['_getSelectors']>) {
    const custom = !isPaletteColor(band.color);
    return html`<div class="band">
      <span class="swatch" style=${styleMap({ '--swatch': baseColor(band.color) })}></span>
      <ha-selector
        .required=${false}
        data-role="from"
        .hass=${this.hass}
        .label=${this._t('editor_band_from')}
        .selector=${selectors.from}
        .value=${band.from}
        @value-changed=${(ev: CustomEvent) => this._fromChanged(index, ev)}
      ></ha-selector>
      <ha-selector
        .required=${true}
        data-role="color"
        .hass=${this.hass}
        .label=${this._t('editor_band_color')}
        .selector=${selectors.color}
        .value=${custom ? CUSTOM : band.color}
        @value-changed=${(ev: CustomEvent) => this._colorChanged(index, ev)}
      ></ha-selector>
      <ha-selector
        .required=${false}
        data-role="label"
        .hass=${this.hass}
        .label=${this._t('editor_band_label')}
        .selector=${TEXT_SELECTOR}
        .value=${band.label ?? ''}
        @value-changed=${(ev: CustomEvent) => this._labelChanged(index, ev)}
      ></ha-selector>
      <ha-icon-button
        class="remove"
        .path=${DELETE_ICON}
        .label=${this._t('editor_remove_band')}
        @click=${() => this._removeBand(index)}
      ></ha-icon-button>
      ${
        custom
          ? html`<ha-selector
              .required=${false}
              class="custom"
              data-role="custom-color"
              .hass=${this.hass}
              .label=${this._t('editor_band_custom_color')}
              .selector=${TEXT_SELECTOR}
              .value=${band.color}
              @value-changed=${(ev: CustomEvent) => this._customColorChanged(index, ev)}
            ></ha-selector>`
          : nothing
      }
    </div>`;
  }

  render() {
    const selectors = this._getSelectors();
    const preset = presetFor(this.bands);
    return html`<ha-selector
        .required=${true}
        data-role="preset"
        .hass=${this.hass}
        .label=${this._t('editor_preset')}
        .selector=${preset === CUSTOM ? selectors.presetCustom : selectors.preset}
        .value=${preset}
        @value-changed=${this._presetChanged}
      ></ha-selector>
      ${(this.bands ?? []).map((band, i) => this._renderBand(band, i, selectors))}
      <button type="button" class="add-band" @click=${this._addBand}>${this._t('editor_add_band')}</button>`;
  }
}

if (!customElements.get('cd-bands-editor')) {
  customElements.define('cd-bands-editor', CdBandsEditor);
}
