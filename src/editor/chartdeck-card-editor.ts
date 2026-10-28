import { LitElement, css, html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { live } from 'lit/directives/live.js';
import { localize } from '../localize';
import { STYLE_NAMES } from '../types';
import type { Band, CardConfig, HomeAssistant, Limit, StyleName } from '../types';
import { fireConfigChanged, setOption } from './edit';
import {
  ACTION_FIELDS,
  DISPLAY_FIELDS,
  DISPLAY_TOGGLE_FIELDS,
  TITLE_FIELDS,
  actionsSchema,
  applyFormData,
  displaySchema,
  formData,
  titleSchema,
} from './schemas';
import type { FieldBinding } from './schemas';
import { thumbnail } from './thumbnails';
import { sensorUnit } from './entities-editor';
import './bands-editor';
import './entities-editor';
import './limit-field';

interface CardHelpers {
  createCardElement(config: Record<string, unknown>): Promise<HTMLElement>;
}

declare global {
  interface Window {
    loadCardHelpers?: () => Promise<CardHelpers>;
  }
}

/** Make Home Assistant load its lazily-loaded form and pickers by asking a core card for its editor. */
export async function loadHaComponents(): Promise<void> {
  if (customElements.get('ha-entity-picker')) return;
  if (typeof window.loadCardHelpers !== 'function') return;
  try {
    const helpers = await window.loadCardHelpers();
    const card = await helpers.createCardElement({ type: 'entities', entities: [] });
    const ctor = card?.constructor as { getConfigElement?: () => Promise<unknown> } | undefined;
    await ctor?.getConfigElement?.();
  } catch {
    // Not running inside Home Assistant's frontend; nothing to load.
  }
}

export class ChartdeckCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
  };

  static styles = css`
    :host {
      display: block;
    }
    .title {
      display: block;
      margin-bottom: 16px;
    }
    ha-expansion-panel {
      display: block;
      margin-bottom: 8px;
    }
    .panel {
      padding: 8px 0;
    }
    .toggles {
      margin-bottom: 16px;
    }
    .toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      min-height: 48px;
    }
    .toggle span {
      flex: 1;
      cursor: pointer;
    }
    .section-limits {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .styles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
      gap: 8px;
    }
    .style {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 8px 4px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      border-radius: 8px;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      font-size: 0.875em;
      cursor: pointer;
    }
    .style:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }
    .style[aria-pressed='true'] {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -1px;
      border-color: transparent;
    }
  `;

  declare hass?: HomeAssistant;
  declare _config?: CardConfig;

  /** Store the raw config as written, so keys the editor doesn't show are never lost. */
  setConfig(config: CardConfig): void {
    this._config = config;
  }

  connectedCallback(): void {
    super.connectedCallback();
    void loadHaComponents();
  }

  private _label = (key: string): string => localize(this.hass, key);

  private _computeLabel = (schema: { name: string }): string => localize(this.hass, `editor_${schema.name}`);

  private _commit(config: CardConfig): void {
    this._config = config;
    fireConfigChanged(this, config);
  }

  private _formChanged(fields: FieldBinding[], ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) return;
    const value = (ev.detail?.value ?? {}) as Record<string, unknown>;
    this._commit(applyFormData(this._config, fields, value));
  }

  private _form(section: string, schema: unknown[], fields: FieldBinding[]): TemplateResult {
    return html`<ha-form
      data-section=${section}
      .hass=${this.hass}
      .data=${formData(this._config!, fields)}
      .schema=${schema}
      .computeLabel=${this._computeLabel}
      @value-changed=${(ev: CustomEvent) => this._formChanged(fields, ev)}
    ></ha-form>`;
  }

  private _panel(key: string, content: unknown): TemplateResult {
    return html`<ha-expansion-panel .header=${this._label(`editor_section_${key}`)} outlined>
      <div class="panel section-${key}">${content}</div>
    </ha-expansion-panel>`;
  }

  /** Commit a sub-editor's `value-changed` to `path`, keeping it from reaching HA's dialog. */
  private _subChanged(path: string[], ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) return;
    this._commit(setOption(this._config, path, ev.detail?.value));
  }

  /** Entity list, pickers and per-entity overrides. */
  protected renderEntities(): unknown {
    return html`<cd-entities-editor
      .hass=${this.hass}
      .entities=${this._config?.entities ?? []}
      .unit=${this._config?.unit}
      @value-changed=${(ev: CustomEvent) => this._subChanged(['entities'], ev)}
    ></cd-entities-editor>`;
  }

  /** Card-level min, max and target. */
  protected renderLimits(): unknown {
    const fields: ['min' | 'max' | 'target', string][] = [
      ['min', '0'],
      ['max', '100'],
      ['target', this._label('editor_none')],
    ];
    return fields.map(
      ([key, defaultLabel]) =>
        html`<cd-limit-field
          data-limit=${key}
          .hass=${this.hass}
          .label=${this._label(`editor_${key}`)}
          .value=${this._config?.[key] as Limit | undefined}
          .defaultLabel=${defaultLabel}
          @value-changed=${(ev: CustomEvent) => this._subChanged([key], ev)}
        ></cd-limit-field>`,
    );
  }

  /** Severity bands. */
  protected renderColours(): unknown {
    return html`<cd-bands-editor
      .hass=${this.hass}
      .bands=${this._config?.severity as Band[] | undefined}
      .unit=${this._config?.unit ?? this._firstEntityUnit()}
      @value-changed=${(ev: CustomEvent) => this._subChanged(['severity'], ev)}
    ></cd-bands-editor>`;
  }

  /** The legend and card-wide bands use the first entity's unit when the card sets none:
   *  its own override, else its sensor's. */
  private _firstEntityUnit(): string | undefined {
    const first = this._config?.entities?.[0];
    if (typeof first === 'string') return sensorUnit(this.hass, first);
    return first?.unit ?? sensorUnit(this.hass, first?.entity);
  }

  private _selectStyle(style: StyleName): void {
    if (!this._config) return;
    this._commit(setOption(this._config, ['style'], style === 'bar' ? undefined : style));
  }

  protected renderStyle(): TemplateResult {
    const current = this._config?.style ?? 'bar';
    return html`<div class="styles">
      ${STYLE_NAMES.map(
        (style) =>
          html`<button
            type="button"
            class="style"
            data-style=${style}
            aria-pressed=${current === style ? 'true' : 'false'}
            @click=${() => this._selectStyle(style)}
          >
            ${thumbnail(style)}<span>${this._label(`editor_style_${style}`)}</span>
          </button>`,
      )}
    </div>`;
  }

  protected renderDisplay(): TemplateResult {
    // ha-form spaces every field 24 px apart, which turns six switches into a tall column, so
    // they are compact label + switch rows here and only the inputs go through ha-form.
    const data = formData(this._config!, DISPLAY_TOGGLE_FIELDS);
    return html`<div class="toggles">
        ${DISPLAY_TOGGLE_FIELDS.map(({ name }) => {
          const label = this._label(`editor_${name}`);
          const on = data[name] === true;
          // ha-switch isn't labelable, so it carries its own name and the text toggles it too.
          return html`<div class="toggle">
            <span @click=${() => this._toggle(name, !on)}>${label}</span
            ><ha-switch
              data-name=${name}
              aria-label=${label}
              .checked=${live(on)}
              @change=${(ev: Event) => this._toggle(name, (ev.target as HTMLInputElement).checked)}
            ></ha-switch>
          </div>`;
        })}
      </div>
      ${this._form('display', displaySchema(this.hass), DISPLAY_FIELDS)}`;
  }

  private _toggle(name: string, checked: boolean): void {
    if (!this._config) return;
    const data = formData(this._config, DISPLAY_TOGGLE_FIELDS);
    this._commit(applyFormData(this._config, DISPLAY_TOGGLE_FIELDS, { ...data, [name]: checked }));
  }

  protected renderActions(): TemplateResult {
    return this._form('actions', actionsSchema(), ACTION_FIELDS);
  }

  render() {
    if (!this._config) return nothing;
    return html`<div class="title">${this._form('title', titleSchema(), TITLE_FIELDS)}</div>
      ${this._panel('entities', this.renderEntities())} ${this._panel('style', this.renderStyle())}
      ${this._panel('limits', this.renderLimits())} ${this._panel('colours', this.renderColours())}
      ${this._panel('display', this.renderDisplay())} ${this._panel('actions', this.renderActions())}`;
  }
}

if (!customElements.get('chartdeck-card-editor')) {
  customElements.define('chartdeck-card-editor', ChartdeckCardEditor);
}
