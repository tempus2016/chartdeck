import { LitElement, css, html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { live } from 'lit/directives/live.js';
import { localize } from '../localize';
import { STYLE_NAMES } from '../types';
import type { Band, CardConfig, HomeAssistant, Limit, StyleName } from '../types';
import { fireConfigChanged, setOption } from './edit';
import {
  ACTION_FIELDS,
  COLOUR_TOGGLE_FIELDS,
  DISPLAY_FIELDS,
  DISPLAY_TOGGLE_FIELDS,
  GAUGE_FIELDS,
  TITLE_FIELDS,
  actionsSchema,
  applyFormData,
  deepEqual,
  displaySchema,
  formData,
  gaugeSchema,
  RULE_FIELDS,
  ruleSchema,
  titleSchema,
} from './schemas';
import type { FieldBinding } from './schemas';

/** The export menu's switch, in the Display section of chart styles. */
const EXPORT_FIELDS: FieldBinding[] = [{ name: 'export', path: ['export'], default: false }];

import { thumbnail } from './thumbnails';
import { cardConditionFields, conditionFields } from './condition-fields';
import { STYLES, STYLE_GROUPS, isChart } from '../styles/index';
import { sensorUnit } from './entities-editor';
import './bands-editor';
import './entities-editor';
import './limit-field';
import { GROUP_LEVELS } from '../chart/hierarchy';
import { LanguageController } from '../language-controller';
import { withCumulativeFields } from '../history/transform-cumulative';
import { withDerivativeFields } from '../history/transform-derivative';
import { computeHelper } from './helper';
import { presetFor } from './bands-editor';
import { limitMode } from './limit-field';

/** Styles whose `group_by` groups entities by place rather than readings by time. */
const HIERARCHY_STYLES: StyleName[] = ['treemap', 'sunburst', 'icicle', 'radar', 'marimekko'];
/** Styles with the gauge options (angles, centre text, tick labels). */
const GAUGE_STYLES: StyleName[] = ['ring', 'arc', 'needle'];

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
  // Draws again once the user's language arrives.
  protected readonly languageController = new LanguageController(this);

  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _notice: { state: true },
    _focusStyle: { state: true },
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
    .rules-heading {
      margin: 16px 0 4px;
      font-weight: 500;
    }
    .rules-help,
    .gauge-help {
      margin: 0 0 8px;
      color: var(--secondary-text-color);
      font-size: 0.875em;
    }
    .section-limits {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .style-purpose {
      margin: 0 0 12px;
      color: var(--secondary-text-color);
      font-size: 0.875em;
    }
    .style-purpose strong {
      color: var(--primary-text-color);
      font-weight: 500;
    }
    .notice,
    .warning {
      display: block;
      margin: 0 0 12px;
    }
    .style-group {
      margin: 16px 0 6px;
      font-size: 0.875em;
      font-weight: 500;
      color: var(--secondary-text-color);
    }
    .style-groups > [role='group']:first-child .style-group {
      margin-top: 0;
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
    .style[aria-checked='true'] {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -1px;
      border-color: transparent;
    }
    .style[aria-checked='true']:focus-visible {
      outline-offset: 2px;
    }
  `;

  declare hass?: HomeAssistant;
  declare _config?: CardConfig;
  /** What the last style change did on its own (a grouping dropped, a sort set), until the next. */
  declare _notice?: string;
  /** The style the arrow keys have moved to in the picker (the selected one until they move). */
  declare _focusStyle?: StyleName;
  /** A card with no entities opens on the Entities section; decided once, from the first config. */
  private _openEntities?: boolean;

  /** Store the raw config as written, so keys the editor doesn't show are never lost. */
  setConfig(config: CardConfig): void {
    if (this._openEntities === undefined) this._openEntities = !config?.entities?.length;
    this._config = config;
  }

  connectedCallback(): void {
    super.connectedCallback();
    void loadHaComponents();
  }

  private _label = (key: string): string => localize(this.hass, key);

  private _computeLabel = (schema: { name: string }): string => localize(this.hass, `editor_${schema.name}`);

  private _computeHelper = (schema: { name: string }): string | undefined =>
    computeHelper(this.hass, `editor_${schema.name}`);

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
      .computeHelper=${this._computeHelper}
      @value-changed=${(ev: CustomEvent) => this._formChanged(fields, ev)}
    ></ha-form>`;
  }

  private _panel(key: string, content: unknown, summary?: string): TemplateResult {
    return html`<ha-expansion-panel
      data-panel=${key}
      .header=${this._label(`editor_section_${key}`)}
      .secondary=${summary ?? ''}
      .expanded=${key === 'entities' && this._openEntities === true}
      outlined
    >
      <div class="panel section-${key}">${content}</div>
    </ha-expansion-panel>`;
  }

  /** One line under a section's name saying what it's set to, so a closed section still tells. */
  private _summary(key: 'entities' | 'style' | 'limits' | 'colours'): string | undefined {
    const config = this._config;
    if (!config) return undefined;
    switch (key) {
      case 'entities': {
        const count = config.entities?.length ?? 0;
        const rules = config.include ? ` · ${this._label('editor_summary_matching')}` : '';
        if (count === 0 && !rules) return this._label('editor_summary_no_entities');
        const text =
          count === 1
            ? this._label('editor_summary_entity_one')
            : localize(this.hass, 'editor_summary_entities', { count });
        return `${text}${rules}`;
      }
      case 'style':
        return this._label(`editor_style_${config.style ?? 'bar'}`);
      case 'limits': {
        const show = (key: 'min' | 'max' | 'target', fallback: string) => {
          const value = config[key] as Limit | undefined;
          return limitMode(value) === 'default' ? fallback : String(value);
        };
        const range = localize(this.hass, 'editor_summary_limits', { min: show('min', '0'), max: show('max', '100') });
        const target = show('target', '');
        return target ? `${range} · ${localize(this.hass, 'editor_summary_target', { target })}` : range;
      }
      case 'colours': {
        const bands = config.severity as Band[] | undefined;
        const preset = presetFor(bands);
        if (preset === 'none') return this._label('editor_summary_no_bands');
        if (preset === 'custom') {
          const count = bands?.length ?? 0;
          return count === 1
            ? this._label('editor_summary_band_one')
            : localize(this.hass, 'editor_summary_bands', { count });
        }
        return this._label(`editor_preset_${preset}`);
      }
    }
  }

  /** Commit a sub-editor's `value-changed` to `path`, keeping it from reaching HA's dialog. */
  private _subChanged(path: string[], ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) return;
    this._commit(setOption(this._config, path, ev.detail?.value));
  }

  /** The current chart style's per-entity options, if it has any. */
  private _chartFields() {
    const module = STYLES[(this._config?.style ?? 'bar') as StyleName];
    return module && isChart(module) && this._config ? module.entityFields?.(this.hass, this._config) : undefined;
  }

  /** The history transforms each entity can take, on charts that draw history as numbers. */
  private _transformFields() {
    if (!this._config) return undefined;
    const style = this._config.style ?? 'bar';
    return withDerivativeFields(
      style,
      this.hass,
      this._config,
      withCumulativeFields(style, this.hass, this._config, undefined),
    );
  }

  /** Entity list, pickers and per-entity overrides, then the rules that add more. */
  protected renderEntities(): unknown {
    return html`<cd-entities-editor
        .hass=${this.hass}
        .entities=${this._config?.entities ?? []}
        .unit=${this._config?.unit}
        .chartFields=${this._chartFields()}
        .transformFields=${this._transformFields()}
        .conditionFields=${conditionFields(this._config?.style)}
        .numeric=${!isChart(STYLES[(this._config?.style ?? 'bar') as StyleName] ?? STYLES.bar)}
        @value-changed=${(ev: CustomEvent) => this._subChanged(['entities'], ev)}
      ></cd-entities-editor>
      ${this._ruleForm('include')} ${this._ruleForm('exclude')}`;
  }

  /** ha-form data for a rule: each key as a list, since the pickers are all multiple. */
  private _ruleData(field: 'include' | 'exclude'): Record<string, string[]> {
    const rule = this._config?.[field];
    const data: Record<string, string[]> = {};
    if (!rule || typeof rule !== 'object') return data;
    for (const [key, value] of Object.entries(rule)) {
      data[`${field}_${key}`] = Array.isArray(value) ? value : [value];
    }
    return data;
  }

  private _ruleChanged(field: 'include' | 'exclude', ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) return;
    const value = (ev.detail?.value ?? {}) as Record<string, unknown>;
    const before = this._ruleData(field);
    let next = this._config;
    for (const key of RULE_FIELDS[field]) {
      const name = `${field}_${key}`;
      const list = Array.isArray(value[name]) ? (value[name] as string[]) : [];
      if (deepEqual(before[name] ?? [], list)) continue;
      next = setOption(next, [field, key], list.length ? list : undefined);
    }
    if (next !== this._config) this._commit(next);
  }

  /** Include and exclude carry the same pickers, so each sits in a group named by its heading. */
  private _ruleForm(field: 'include' | 'exclude'): TemplateResult {
    return html`<div role="group" aria-labelledby="rules-${field}" aria-describedby="rules-${field}-help">
      <div class="rules-heading" id="rules-${field}">${this._label(`editor_${field}_heading`)}</div>
      <p class="rules-help" id="rules-${field}-help">${this._label(`editor_${field}_help`)}</p>
      <ha-form
        data-section=${field}
        .hass=${this.hass}
        .data=${this._ruleData(field)}
        .schema=${ruleSchema(field, this.hass)}
        .computeLabel=${this._computeRuleLabel}
        @value-changed=${(ev: CustomEvent) => this._ruleChanged(field, ev)}
      ></ha-form>
    </div>`;
  }

  private _computeRuleLabel = (schema: { name: string }): string =>
    localize(this.hass, `editor_rule_${schema.name.slice(schema.name.indexOf('_') + 1)}`);

  /** Card-level min, max and target. */
  protected renderLimits(): unknown {
    const fields: ['min' | 'max' | 'target', string][] = [
      ['min', '0'],
      ['max', '100'],
      ['target', this._label('editor_none')],
    ];
    return html`${this._limitsWarning()}
    ${fields.map(
      ([key, defaultLabel]) =>
        html`<cd-limit-field
          data-limit=${key}
          .hass=${this.hass}
          .label=${this._label(`editor_${key}`)}
          .value=${this._config?.[key] as Limit | undefined}
          .defaultLabel=${defaultLabel}
          @value-changed=${(ev: CustomEvent) => this._subChanged([key], ev)}
        ></cd-limit-field>`,
    )}`;
  }

  /** A minimum at or above the maximum leaves nothing to fill: say so where it's set. */
  private _limitsWarning(): TemplateResult | typeof nothing {
    const number = (key: 'min' | 'max', fallback: number) => {
      const value = this._config?.[key] as Limit | undefined;
      const mode = limitMode(value);
      return mode === 'default' ? fallback : mode === 'number' ? Number(value) : undefined;
    };
    const min = number('min', 0);
    const max = number('max', 100);
    if (min === undefined || max === undefined || min < max) return nothing;
    return html`<ha-alert class="warning" data-warning="limits" alert-type="warning"
      >${localize(this.hass, 'editor_warn_min_max', { min, max })}</ha-alert
    >`;
  }

  /** The icon-colour switch, then the severity bands. */
  protected renderColours(): unknown {
    return html`${this._toggles(COLOUR_TOGGLE_FIELDS)}<cd-bands-editor
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
    return first?.unit ?? sensorUnit(this.hass, first?.entity, first?.attribute);
  }

  private _selectStyle(style: StyleName): void {
    if (!this._config) return;
    if (style === (this._config.style ?? 'bar')) return;
    let next = setOption(this._config, ['style'], style === 'bar' ? undefined : style);
    const notices: string[] = [];
    const name = this._label(`editor_style_${style}`);
    // `group_by` means places (floor, area…) on the hierarchy charts and times (hour, day…) on the
    // history charts: one the new style can't read is dropped rather than left to fail, and said.
    const levels = ([] as unknown[]).concat(next.group_by ?? []);
    const places = levels.length > 0 && levels.every((l) => (GROUP_LEVELS as readonly unknown[]).includes(l));
    if (levels.length > 0 && places !== HIERARCHY_STYLES.includes(style)) {
      const by = levels.map((l) => this._label(`editor_group_by_${String(l)}`)).join(', ');
      notices.push(localize(this.hass, 'editor_notice_group_by', { by, style: name }));
      next = setOption(next, ['group_by'], undefined);
    }
    // The battery grid reads best with the emptiest first, so picking it sorts lowest first
    // unless a sort is already set (YAML without one keeps the order listed, like every style).
    if (style === 'battery' && next.sort === undefined) {
      notices.push(this._label('editor_notice_sorted'));
      next = setOption(next, ['sort'], 'ascending');
    }
    this._notice = notices.length ? notices.join(' ') : undefined;
    this._focusStyle = style;
    this._commit(next);
  }

  /** The picker's styles in on-screen order, which the arrow keys walk. */
  private _styleOrder(): StyleName[] {
    return STYLE_GROUPS.flatMap((group) => STYLE_NAMES.filter((name) => STYLES[name].group === group));
  }

  /** Arrow keys move between styles (one Tab stop for the whole picker); Enter or Space picks. */
  private _styleKey(ev: KeyboardEvent): void {
    const order = this._styleOrder();
    const from = order.indexOf((ev.target as HTMLElement).dataset?.style as StyleName);
    if (from < 0) return;
    const rtl = getComputedStyle(this).direction === 'rtl';
    const step: Record<string, number> = {
      ArrowDown: 1,
      ArrowUp: -1,
      ArrowRight: rtl ? -1 : 1,
      ArrowLeft: rtl ? 1 : -1,
    };
    let to: number;
    if (ev.key in step) to = (from + step[ev.key] + order.length) % order.length;
    else if (ev.key === 'Home') to = 0;
    else if (ev.key === 'End') to = order.length - 1;
    else return;
    ev.preventDefault();
    this._focusStyle = order[to];
    void this.updateComplete.then(() =>
      this.shadowRoot?.querySelector<HTMLElement>(`.style[data-style="${order[to]}"]`)?.focus(),
    );
  }

  /**
   * The style picker: what the chosen style is for, then one group of thumbnails per kind of style
   * (bars, gauges, charts…) as a single radio group, each thumbnail saying what it's for on hover.
   */
  protected renderStyle(): TemplateResult {
    const current = (this._config?.style ?? 'bar') as StyleName;
    const order = this._styleOrder();
    const focusable = this._focusStyle && order.includes(this._focusStyle) ? this._focusStyle : current;
    return html`<p class="style-purpose" aria-live="polite">
        <strong>${this._label(`editor_style_${current}`)}</strong> · ${this._label(`editor_style_purpose_${current}`)}
      </p>
      ${
        this._notice ? html`<ha-alert class="notice" data-notice alert-type="info">${this._notice}</ha-alert>` : nothing
      }
      <div
        class="style-groups"
        role="radiogroup"
        aria-label=${this._label('editor_section_style')}
        @keydown=${this._styleKey}
      >
        ${STYLE_GROUPS.map((group) => {
          const names = STYLE_NAMES.filter((name) => STYLES[name].group === group);
          if (!names.length) return nothing;
          return html`<div role="group" aria-labelledby="style-group-${group}">
            <div class="style-group" id="style-group-${group}">${this._label(`editor_group_${group}`)}</div>
            <div class="styles" data-group=${group}>
              ${names.map((style) => {
                const module = STYLES[style];
                const picture = isChart(module)
                  ? html`<svg class="thumbnail" viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
                      ${module.thumbnail()}
                    </svg>`
                  : thumbnail(style);
                const purpose = this._label(`editor_style_purpose_${style}`);
                return html`<button
                  type="button"
                  class="style"
                  role="radio"
                  data-style=${style}
                  title=${purpose}
                  aria-description=${purpose}
                  aria-checked=${current === style ? 'true' : 'false'}
                  tabindex=${focusable === style ? '0' : '-1'}
                  @click=${() => this._selectStyle(style)}
                >
                  ${picture}<span>${this._label(`editor_style_${style}`)}</span>
                </button>`;
              })}
            </div>
          </div>`;
        })}
      </div>
      ${
        GAUGE_STYLES.includes(current as StyleName)
          ? html`<p class="gauge-help">${this._label('editor_gauge_help')}</p>
              ${this._form('gauge', gaugeSchema(this.hass, current as StyleName, this._config?.center), GAUGE_FIELDS)}`
          : nothing
      }`;
  }

  /** The current chart style's own options, when it has any. */
  protected renderChart(): TemplateResult | typeof nothing {
    const module = STYLES[(this._config?.style ?? 'bar') as StyleName];
    if (!module || !isChart(module) || !module.editor || !this._config) return nothing;
    // History charts: the card's `when`, for every series without its own, in a form of its own.
    const when = cardConditionFields(this._config.style);
    return this._panel(
      'chart',
      html`${module.editor({ hass: this.hass, config: this._config, commit: (config) => this._commit(config) })}
      ${
        when
          ? html`<div role="group" aria-labelledby="when-card" aria-describedby="when-card-help">
              <div class="rules-heading" id="when-card">${this._label('editor_when_card_heading')}</div>
              <p class="rules-help" id="when-card-help">${this._label('editor_when_card_help')}</p>
              ${this._form('card-condition', when.schema, when.fields)}
            </div>`
          : nothing
      }`,
    );
  }

  protected renderDisplay(): TemplateResult {
    // Charts can carry the export menu (save a picture, copy the values or the YAML).
    const chart = isChart(STYLES[(this._config?.style ?? 'bar') as StyleName] ?? STYLES.bar);
    return html`${this._toggles(chart ? [...DISPLAY_TOGGLE_FIELDS, ...EXPORT_FIELDS] : DISPLAY_TOGGLE_FIELDS)}
    ${this._form('display', displaySchema(this.hass), DISPLAY_FIELDS)}`;
  }

  /**
   * On/off options as compact label + switch rows: ha-form spaces every field 24 px apart, which
   * turns a few switches into a tall column, so only inputs go through ha-form.
   */
  private _toggles(fields: FieldBinding[]): TemplateResult {
    const data = formData(this._config!, fields);
    return html`<div class="toggles">
      ${fields.map(({ name }) => {
        const label = this._label(`editor_${name}`);
        const on = data[name] === true;
        // ha-switch isn't labelable, so it carries its own name and the text toggles it too.
        return html`<div class="toggle">
          <span @click=${() => this._toggle(fields, name, !on)}>${label}</span
          ><ha-switch
            data-name=${name}
            aria-label=${label}
            .checked=${live(on)}
            @change=${(ev: Event) => this._toggle(fields, name, (ev.target as HTMLInputElement).checked)}
          ></ha-switch>
        </div>`;
      })}
    </div>`;
  }

  private _toggle(fields: FieldBinding[], name: string, checked: boolean): void {
    if (!this._config) return;
    const data = formData(this._config, fields);
    this._commit(applyFormData(this._config, fields, { ...data, [name]: checked }));
  }

  protected renderActions(): TemplateResult {
    return this._form('actions', actionsSchema(), ACTION_FIELDS);
  }

  render() {
    if (!this._config) return nothing;
    return html`<div class="title">${this._form('title', titleSchema(), TITLE_FIELDS)}</div>
      ${this._panel('entities', this.renderEntities(), this._summary('entities'))}
      ${this._panel('style', this.renderStyle(), this._summary('style'))} ${this.renderChart()}
      ${this._panel('limits', this.renderLimits(), this._summary('limits'))}
      ${this._panel('colours', this.renderColours(), this._summary('colours'))}
      ${this._panel('display', this.renderDisplay())} ${this._panel('actions', this.renderActions())}`;
  }
}

if (!customElements.get('chartdeck-card-editor')) {
  customElements.define('chartdeck-card-editor', ChartdeckCardEditor);
}
