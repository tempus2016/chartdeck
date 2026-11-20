import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { COST_STYLES } from '../history/cost';
import type { CostConfig, TariffPeriod } from '../history/cost';
import { languageOf, localize } from '../localize';
import type { ChartEditorContext, EntityFields } from '../styles/index';
import type { CardConfig, HomeAssistant } from '../types';
import { computeHelper } from './helper';
import { ICON_DELETE } from './icons';

/*
 * The Cost part of the line, area and column editors: a switch, the price (an entity or a
 * number), the currency, and the tariff's periods, one form each with a remove button. Each
 * entity's options get "Count its cost" and its own price entity while any cost is set.
 */

const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

/** The card's cost as an object ({} for `cost: true`), or undefined when it has none. */
function cardCost(config: CardConfig): CostConfig | undefined {
  if (config.cost === undefined || config.cost === false) return undefined;
  return isObject(config.cost) ? (config.cost as CostConfig) : {};
}

/** The form's values from the card's `cost`. */
export function costFormData(config: CardConfig): Record<string, unknown> {
  const cost = cardCost(config);
  if (!cost) return { cost_on: false };
  const data: Record<string, unknown> = { cost_on: true, cost_split: cost.split === true };
  if (typeof cost.price === 'string') data.cost_price_entity = cost.price;
  if (typeof cost.price === 'number') data.cost_price = cost.price;
  if (cost.currency) data.cost_currency = cost.currency;
  return data;
}

/** The card config with the cost form's values applied; untouched values are left as written. */
export function withCostForm(config: CardConfig, data: Record<string, unknown>): CardConfig {
  const next = { ...config };
  if (data.cost_on !== true) {
    delete next.cost;
    return next;
  }
  const before = costFormData(config);
  const cost: Record<string, unknown> = { ...(cardCost(config) ?? {}) };
  const entity = typeof data.cost_price_entity === 'string' ? data.cost_price_entity.trim() : '';
  const number = typeof data.cost_price === 'number' && Number.isFinite(data.cost_price) ? data.cost_price : undefined;
  // The field that changed sets the price: an entity, or a number; clearing it leaves the other.
  let price: unknown = cost.price;
  if (entity !== (before.cost_price_entity ?? '')) price = entity || number;
  else if (number !== before.cost_price) price = number ?? (entity || undefined);
  if (price === undefined || price === '') delete cost.price;
  else cost.price = price;
  const currency = typeof data.cost_currency === 'string' ? data.cost_currency.trim().toUpperCase() : '';
  if (currency) cost.currency = currency;
  else delete cost.currency;
  if (data.cost_split === true) cost.split = true;
  else delete cost.split;
  next.cost = cost;
  return next;
}

/** A time as Home Assistant's picker writes it ("05:30:00"), kept as "05:30". */
export function shortClock(v: unknown): string {
  const s = typeof v === 'string' ? v.trim() : '';
  const m = /^(\d{1,2}):(\d{2})(?::00)?$/.exec(s);
  return m ? `${m[1].padStart(2, '0')}:${m[2]}` : s;
}

/** A tariff period from its form: times shortened, blank name and colour left out. */
export function periodFromData(data: Record<string, unknown>, before: TariffPeriod): TariffPeriod {
  const out: TariffPeriod = {
    from: data.from === undefined ? before.from : shortClock(data.from),
    to: data.to === undefined ? before.to : shortClock(data.to),
    price: typeof data.price === 'number' && Number.isFinite(data.price) ? data.price : before.price,
  };
  for (const k of ['name', 'color'] as const) {
    const v = typeof data[k] === 'string' ? (data[k] as string).trim() : '';
    if (v) out[k] = v;
  }
  return out;
}

/** The card config with its tariff replaced (the key gone once it is empty). */
export function withTariff(config: CardConfig, tariff: TariffPeriod[]): CardConfig {
  const cost: Record<string, unknown> = { ...(cardCost(config) ?? {}) };
  if (tariff.length) cost.tariff = tariff;
  else delete cost.tariff;
  return { ...config, cost };
}

const costSchemas = new Map<string, unknown[]>();

/** Built once per language and variant (not with chart-editors' cache, which imports this file). */
function costSchema(hass: HomeAssistant | undefined, on: boolean, column: boolean, tariff: boolean) {
  const k = `${languageOf(hass)}|${on}|${column}|${tariff}`;
  const known = costSchemas.get(k);
  if (known) return known;
  const schema = [
    { name: 'cost_on', selector: { boolean: {} } },
    ...(on
      ? [
          { name: 'cost_price_entity', selector: { entity: { domain: ['sensor', 'input_number', 'number'] } } },
          {
            type: 'grid',
            name: '',
            schema: [
              { name: 'cost_price', selector: { number: { mode: 'box', step: 'any' } } },
              { name: 'cost_currency', selector: { text: {} } },
            ],
          },
          ...(column && tariff ? [{ name: 'cost_split', selector: { boolean: {} } }] : []),
        ]
      : []),
  ];
  costSchemas.set(k, schema);
  return schema;
}

const periodSchemas = new Map<string, unknown[]>();

function periodSchema(hass: HomeAssistant | undefined) {
  const k = languageOf(hass);
  let schema = periodSchemas.get(k);
  if (!schema) {
    schema = [
      {
        type: 'grid',
        name: '',
        schema: [
          { name: 'from', selector: { time: {} } },
          { name: 'to', selector: { time: {} } },
        ],
      },
      {
        type: 'grid',
        name: '',
        schema: [
          { name: 'price', selector: { number: { mode: 'box', step: 'any' } } },
          { name: 'name', selector: { text: {} } },
          { name: 'color', selector: { text: {} } },
        ],
      },
    ];
    periodSchemas.set(k, schema);
  }
  return schema;
}

/**
 * The Cost section: on/off, the price and currency, then the tariff's periods with a button to
 * add one. `column` offers stacking each column by band once the tariff has periods.
 */
export function costEditor(ctx: ChartEditorContext, column = false): TemplateResult {
  const t = (k: string) => localize(ctx.hass, k);
  const cost = cardCost(ctx.config);
  const tariff = Array.isArray(cost?.tariff) ? (cost!.tariff as TariffPeriod[]) : [];
  const schema = costSchema(ctx.hass, cost !== undefined, column, tariff.length > 0);
  const replace = (i: number, p?: TariffPeriod) => {
    const next = [...tariff];
    if (p) next[i] = p;
    else next.splice(i, 1);
    ctx.commit(withTariff(ctx.config, next));
  };
  return html`<style>
      .cost-title {
        font-weight: 500;
        margin: 16px 0 4px;
      }
      .cost-period {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 4px;
        align-items: start;
        padding: 8px 0;
        border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
      }
      .cost-add {
        margin-top: 8px;
        padding: 4px 10px;
        border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
        border-radius: 8px;
        background: none;
        color: var(--primary-color);
        font: inherit;
        cursor: pointer;
      }
      .cost-add:focus-visible {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: 2px;
      }
    </style>
    <div class="cost" data-section="cost">
      <div class="cost-title">${t('editor_cost')}</div>
      <ha-form
        data-section="cost-options"
        .hass=${ctx.hass}
        .data=${costFormData(ctx.config)}
        .schema=${schema}
        .computeLabel=${(s: { name: string }) => t(`editor_${s.name}`)}
        .computeHelper=${(s: { name: string }) => computeHelper(ctx.hass, `editor_${s.name}`)}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          ctx.commit(withCostForm(ctx.config, (ev.detail?.value ?? {}) as Record<string, unknown>));
        }}
      ></ha-form>
      ${
        cost
          ? html`<div class="cost-title">${t('editor_cost_tariff')}</div>
              ${tariff.map(
                (p, i) =>
                  html`<div class="cost-period" data-index=${i}>
                    <ha-form
                      data-section="cost-period"
                      .hass=${ctx.hass}
                      .data=${{ ...p }}
                      .schema=${periodSchema(ctx.hass)}
                      .computeLabel=${(s: { name: string }) => t(`editor_cost_period_${s.name}`)}
                      @value-changed=${(ev: CustomEvent) => {
                        ev.stopPropagation();
                        replace(i, periodFromData((ev.detail?.value ?? {}) as Record<string, unknown>, p));
                      }}
                    ></ha-form>
                    <ha-icon-button
                      class="remove"
                      .path=${ICON_DELETE}
                      .label=${t('editor_cost_period_remove')}
                      @click=${() => replace(i)}
                    ></ha-icon-button>
                  </div>`,
              )}
              <button
                type="button"
                class="cost-add"
                @click=${() =>
                  ctx.commit(withTariff(ctx.config, [...tariff, { from: '00:00', to: '07:00', price: 0 }]))}
              >
                + ${t('editor_cost_period_add')}
              </button>`
          : nothing
      }
    </div>`;
}

/** Any cost is set: on the card, or on an entity. */
function anyCost(config: CardConfig): boolean {
  if (config.cost !== undefined && config.cost !== false) return true;
  return (config.entities ?? []).some((e) => isObject(e) && e.cost !== undefined && e.cost !== false);
}

const fieldCache = new WeakMap<object, WeakMap<object, Map<string, EntityFields>>>();
const EMPTY: EntityFields = { schema: [], fields: [] };

/**
 * Each entity's cost fields, added to the others while any cost is set: whether it counts (on by
 * default when the card has a cost) and a price entity of its own.
 */
export function withCostFields(
  style: string,
  hass: HomeAssistant | undefined,
  config: CardConfig,
  base: EntityFields | undefined,
): EntityFields | undefined {
  if (!COST_STYLES.includes(style) || !anyCost(config)) return base;
  const from = base ?? EMPTY;
  const card = config.cost !== undefined && config.cost !== false;
  const key = `${languageOf(hass)}|${card}`;
  let bySchema = fieldCache.get(from.schema);
  if (!bySchema) {
    bySchema = new WeakMap();
    fieldCache.set(from.schema, bySchema);
  }
  let byKey = bySchema.get(from.fields);
  if (!byKey) {
    byKey = new Map();
    bySchema.set(from.fields, byKey);
  }
  const cached = byKey.get(key);
  if (cached) return cached;
  const out: EntityFields = {
    schema: [
      ...from.schema,
      {
        type: 'grid',
        name: '',
        schema: [
          { name: 'cost_entity_on', selector: { boolean: {} } },
          { name: 'cost_entity_price', selector: { entity: { domain: ['sensor', 'input_number', 'number'] } } },
        ],
      },
    ],
    fields: [
      ...from.fields,
      { name: 'cost_entity_on', path: ['cost'], default: card },
      { name: 'cost_entity_price', path: ['cost', 'price'] },
    ],
  };
  byKey.set(key, out);
  return out;
}
