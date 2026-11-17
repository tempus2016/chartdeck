import { LitElement, css, html } from 'lit';
import { localize } from '../localize';
import type { HomeAssistant } from '../types';
import { LanguageController } from '../language-controller';
import { ICON_DELETE } from './icons';
import { deepEqual } from './schemas';

type Row = { state: string; value: number | '' };

const TEXT_SELECTOR = { text: {} };
const NUMBER_SELECTOR = { number: { mode: 'box', step: 'any' } };

/** What a climate entity's `hvac_action` can read, which Home Assistant doesn't list on the entity. */
const HVAC_ACTIONS = ['off', 'preheating', 'heating', 'cooling', 'drying', 'fan', 'idle', 'defrosting'];

/**
 * States the entity is known to take, for the state picker: its current one, then the ones it
 * lists (an enum sensor's options, a climate's modes or actions).
 */
export function knownStates(hass: HomeAssistant | undefined, id: string | undefined, attribute?: string): string[] {
  const stateObj = id ? hass?.states[id] : undefined;
  if (!stateObj) return [];
  const listed: unknown[] = [];
  if (attribute === 'hvac_action') listed.push(...HVAC_ACTIONS);
  else if (attribute === 'preset_mode') listed.push(...((stateObj.attributes.preset_modes as unknown[]) ?? []));
  else if (attribute === 'fan_mode') listed.push(...((stateObj.attributes.fan_modes as unknown[]) ?? []));
  else if (!attribute) {
    listed.push(...((stateObj.attributes.options as unknown[]) ?? []));
    listed.push(...((stateObj.attributes.hvac_modes as unknown[]) ?? []));
  }
  const current = attribute ? stateObj.attributes[attribute] : stateObj.state;
  const words = [current, ...listed].filter(
    (w): w is string => typeof w === 'string' && w.trim() !== '' && !Number.isFinite(Number(w)),
  );
  return [...new Set(words)].filter((w) => w !== 'unavailable' && w !== 'unknown');
}

/** Rows as a config map: blank states left out, a repeated state taking its last number. */
export function rowsToMap(rows: Row[]): Record<string, number | ''> | undefined {
  const map: Record<string, number | ''> = {};
  for (const row of rows) if (row.state.trim() !== '') map[row.state] = row.value;
  return Object.keys(map).length ? map : undefined;
}

/** An entity's `state_map`: one row per state, with the number it is drawn as. */
export class CdStateMapEditor extends LitElement {
  // Draws again once the user's language arrives.
  protected readonly languageController = new LanguageController(this);

  static properties = {
    hass: { attribute: false },
    map: { attribute: false },
    entityId: { attribute: false },
    attribute: { attribute: false },
    _rows: { state: true },
  };

  static styles = css`
    :host {
      display: block;
      container-type: inline-size;
    }
    .help {
      margin: 0 0 4px;
      color: var(--secondary-text-color);
    }
    .row {
      display: grid;
      grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) auto;
      gap: 8px;
      align-items: center;
      margin-top: 8px;
    }
    @container (max-width: 300px) {
      .row {
        grid-template-columns: minmax(0, 1fr) auto;
      }
      [data-role='number'] {
        grid-column: 1;
      }
    }
    .add-state {
      margin-top: 8px;
      padding: 6px 12px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      border-radius: 8px;
      background: none;
      color: var(--primary-color);
      font: inherit;
      cursor: pointer;
    }
    .add-state:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }
  `;

  declare hass?: HomeAssistant;
  declare map?: Record<string, number | ''>;
  declare entityId?: string;
  declare attribute?: string;
  declare _rows: Row[];
  /** The map this editor last sent, so its own change doesn't rebuild the rows mid-typing. */
  private _sent?: Record<string, number | ''>;

  constructor() {
    super();
    this._rows = [];
  }

  protected willUpdate(changed: Map<string, unknown>): void {
    if (changed.has('map') && !deepEqual(this.map ?? null, this._sent ?? null)) {
      this._rows = Object.entries(this.map ?? {}).map(([state, value]) => ({ state, value }));
    }
  }

  private _t(key: string): string {
    return localize(this.hass, key);
  }

  private _emit(rows: Row[]): void {
    this._rows = rows;
    this._sent = rowsToMap(rows);
    this.dispatchEvent(new CustomEvent('value-changed', { detail: { value: this._sent } }));
  }

  private _change(index: number, patch: Partial<Row>): void {
    this._emit(this._rows.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  }

  private _add = (): void => {
    const used = new Set(this._rows.map((r) => r.state));
    const state = knownStates(this.hass, this.entityId, this.attribute).find((s) => !used.has(s)) ?? '';
    const numbers = this._rows.map((r) => r.value).filter((v): v is number => typeof v === 'number');
    // The first state at 0, the next at 100, then on in steps of 100: a two-state pair reads as a percentage.
    const value = numbers.length ? Math.max(...numbers) + 100 : 0;
    this._emit([...this._rows, { state, value }]);
  };

  private _stateSelector(): unknown {
    const options = knownStates(this.hass, this.entityId, this.attribute);
    return options.length ? { select: { options, custom_value: true, mode: 'dropdown' } } : TEXT_SELECTOR;
  }

  render() {
    const stateSelector = this._stateSelector();
    return html`<p class="help">${this._t('editor_state_map_help')}</p>
      ${this._rows.map(
        (row, i) =>
          html`<div class="row">
            <ha-selector
              data-role="state"
              .hass=${this.hass}
              .label=${this._t('editor_state_map_state')}
              .selector=${stateSelector}
              .value=${row.state}
              .required=${false}
              @value-changed=${(ev: CustomEvent) => {
                ev.stopPropagation();
                this._change(i, { state: String(ev.detail?.value ?? '') });
              }}
            ></ha-selector>
            <ha-selector
              data-role="number"
              .hass=${this.hass}
              .label=${this._t('editor_state_map_number')}
              .selector=${NUMBER_SELECTOR}
              .value=${row.value}
              .required=${false}
              @value-changed=${(ev: CustomEvent) => {
                ev.stopPropagation();
                const v = ev.detail?.value;
                this._change(i, { value: typeof v === 'number' && Number.isFinite(v) ? v : '' });
              }}
            ></ha-selector>
            <ha-icon-button
              class="remove"
              .path=${ICON_DELETE}
              .label=${this._t('editor_state_map_remove')}
              @click=${() => this._emit(this._rows.filter((_, j) => j !== i))}
            ></ha-icon-button>
          </div>`,
      )}
      <button type="button" class="add-state" @click=${this._add}>${this._t('editor_state_map_add')}</button>`;
  }
}

if (!customElements.get('cd-state-map-editor')) {
  customElements.define('cd-state-map-editor', CdStateMapEditor);
}
