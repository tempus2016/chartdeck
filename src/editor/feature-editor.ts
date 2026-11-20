import { LitElement, css, html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { LanguageController } from '../language-controller';
import { languageOf, localize } from '../localize';
import type { Band, CardConfig, HomeAssistant, Limit } from '../types';
import './bands-editor';
import './limit-field';
import { setOption } from './edit';
import { loadHaComponents } from './chartdeck-card-editor';
import { choice } from './chart-editors';
import { applyFormData, formData } from './schemas';
import type { FieldBinding } from './schemas';
import { computeHelper } from './helper';

/*
 * The tile feature's visual editor, shown by HA's tile card editor when the feature is opened:
 * look and entity first, then hours, fill or what a column holds, then min, max and target (the
 * card's limit field), colour bands (the card's band editor) and actions. Every option the
 * feature reads is here. Labels the badge already has (look, attribute, hours, limits, actions)
 * are the badge's strings; the rest are `editor_feature_<field>`.
 */

const STYLES = ['sparkline', 'column', 'bar'] as const;
const AGGREGATES = ['auto', 'mean', 'sum', 'min', 'max', 'first', 'last', 'change'] as const;

export const FEATURE_FIELDS: FieldBinding[] = [
  { name: 'style', path: ['style'], default: 'sparkline' },
  { name: 'entity', path: ['entity'] },
  { name: 'attribute', path: ['attribute'] },
  { name: 'hours', path: ['hours'], default: 24 },
  { name: 'fill', path: ['fill'], default: true },
  { name: 'aggregate', path: ['aggregate'], default: 'auto' },
  { name: 'unit', path: ['unit'] },
  { name: 'decimals', path: ['decimals'] },
  { name: 'color', path: ['color'] },
];

export const FEATURE_ACTION_FIELDS: FieldBinding[] = [
  { name: 'tap_action', path: ['tap_action'], default: { action: 'more-info' } },
  { name: 'hold_action', path: ['hold_action'], default: { action: 'none' } },
  { name: 'double_tap_action', path: ['double_tap_action'], default: { action: 'none' } },
];

/** The key a field's label is read from: the badge's where it says the same thing. */
const LABELS: Record<string, string> = {
  style: 'editor_badge_style',
  attribute: 'editor_badge_attribute',
  hours: 'editor_badge_hours',
  color: 'editor_badge_color',
  style_sparkline: 'editor_badge_style_sparkline',
  unit: 'editor_badge_unit',
  decimals: 'editor_badge_decimals',
  min: 'editor_badge_min',
  max: 'editor_badge_max',
  target: 'editor_target',
  aggregate: 'editor_aggregate',
  bands: 'editor_badge_bands',
  actions: 'editor_badge_actions',
  tap_action: 'editor_badge_tap_action',
  hold_action: 'editor_badge_hold_action',
  double_tap_action: 'editor_badge_double_tap_action',
};
export const featureLabelKey = (name: string): string => LABELS[name] ?? `editor_feature_${name}`;

/** Min, max and target, with the card's defaults; target only on the bar. */
export function featureLimits(hass: HomeAssistant | undefined, style: string): ['min' | 'max' | 'target', string][] {
  const target: ['target', string][] = style === 'bar' ? [['target', localize(hass, 'editor_none')]] : [];
  return [['min', '0'], ['max', '100'], ...target];
}

const schemas = new Map<string, unknown[]>();

/**
 * The form: hours on the history looks, fill on the sparkline, what a column holds on columns,
 * the attribute picker for the entity drawn (the feature's own, else the tile's).
 */
export function featureSchema(hass: HomeAssistant | undefined, config: CardConfig, tileEntity?: string): unknown[] {
  const style = (config.style as string | undefined) ?? 'sparkline';
  const entity = (typeof config.entity === 'string' && config.entity) || tileEntity || '';
  const cacheKey = `${languageOf(hass)}|${style}|${entity}`;
  let schema = schemas.get(cacheKey);
  if (!schema) {
    const history = style !== 'bar';
    schema = [
      {
        name: 'style',
        selector: {
          select: {
            mode: 'dropdown',
            options: STYLES.map((value) => ({ value, label: localize(hass, featureLabelKey(`style_${value}`)) })),
          },
        },
      },
      { name: 'entity', selector: { entity: {} } },
      ...(entity ? [{ name: 'attribute', selector: { attribute: { entity_id: entity } } }] : []),
      ...(history
        ? [
            {
              type: 'grid',
              name: '',
              schema: [
                { name: 'hours', selector: { number: { min: 1, max: 168, mode: 'box', unit_of_measurement: 'h' } } },
                style === 'column'
                  ? { name: 'aggregate', selector: choice(hass, 'aggregate', AGGREGATES) }
                  : { name: 'fill', selector: { boolean: {} } },
              ],
            },
          ]
        : []),
      {
        type: 'grid',
        name: '',
        schema: [
          { name: 'unit', selector: { text: {} } },
          { name: 'decimals', selector: { number: { min: 0, max: 20, mode: 'box' } } },
        ],
      },
      { name: 'color', selector: { text: {} } },
    ];
    schemas.set(cacheKey, schema);
  }
  return schema;
}

const ACTIONS_SCHEMA = ['tap_action', 'hold_action', 'double_tap_action'].map((name) => ({
  name,
  selector: { ui_action: {} },
}));

export class ChartdeckFeatureEditor extends LitElement {
  protected readonly languageController = new LanguageController(this);

  static properties = {
    hass: { attribute: false },
    context: { attribute: false },
    _config: { state: true },
  };

  declare hass?: HomeAssistant;
  declare context?: { entity_id?: string };
  declare _config?: CardConfig;

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  connectedCallback(): void {
    super.connectedCallback();
    void loadHaComponents();
  }

  private _label = (schema: { name: string }): string => localize(this.hass, featureLabelKey(schema.name));

  private _commit(config: CardConfig): void {
    this._config = config;
    this.dispatchEvent(new CustomEvent('config-changed', { bubbles: true, composed: true, detail: { config } }));
  }

  private _formChanged(fields: FieldBinding[], ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) return;
    this._commit(applyFormData(this._config, fields, ev.detail.value as Record<string, unknown>));
  }

  private _optionChanged(key: string, ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) return;
    this._commit(setOption(this._config, [key], ev.detail.value));
  }

  private _form(section: string, schema: unknown[], fields: FieldBinding[]): TemplateResult {
    return html`<ha-form
      data-section=${section}
      .hass=${this.hass}
      .data=${formData(this._config!, fields)}
      .schema=${schema}
      .computeLabel=${this._label}
      .computeHelper=${(s: { name: string }) => computeHelper(this.hass, featureLabelKey(s.name))}
      @value-changed=${(ev: CustomEvent) => this._formChanged(fields, ev)}
    ></ha-form>`;
  }

  render() {
    if (!this._config) return nothing;
    const style = (this._config.style as string | undefined) ?? 'sparkline';
    const entity = (this._config.entity as string | undefined) || this.context?.entity_id;
    const unit =
      (this._config.unit as string | undefined) ?? this.hass?.states[entity ?? '']?.attributes?.unit_of_measurement;
    return html`${this._form('feature', featureSchema(this.hass, this._config, this.context?.entity_id), FEATURE_FIELDS)}
      <div class="limits">
        ${featureLimits(this.hass, style).map(
          ([key, defaultLabel]) =>
            html`<cd-limit-field
              data-limit=${key}
              .hass=${this.hass}
              .label=${localize(this.hass, featureLabelKey(key))}
              .value=${this._config?.[key] as Limit | undefined}
              .defaultLabel=${defaultLabel}
              @value-changed=${(ev: CustomEvent) => this._optionChanged(key, ev)}
            ></cd-limit-field>`,
        )}
      </div>
      <div class="heading">${localize(this.hass, featureLabelKey('bands'))}</div>
      <p class="help">${localize(this.hass, 'editor_feature_bands_help')}</p>
      <cd-bands-editor
        .hass=${this.hass}
        .bands=${this._config.severity as Band[] | undefined}
        .unit=${unit}
        @value-changed=${(ev: CustomEvent) => this._optionChanged('severity', ev)}
      ></cd-bands-editor>
      <div class="heading">${localize(this.hass, featureLabelKey('actions'))}</div>
      ${this._form('actions', ACTIONS_SCHEMA, FEATURE_ACTION_FIELDS)}`;
  }

  static styles = css`
    :host {
      display: block;
    }
    .limits {
      display: grid;
      gap: 8px;
      margin-top: 16px;
    }
    .heading {
      margin-top: 24px;
      font-weight: 500;
    }
    .help {
      margin: 4px 0 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
  `;
}

if (!customElements.get('chartdeck-feature-editor')) {
  customElements.define('chartdeck-feature-editor', ChartdeckFeatureEditor);
}
