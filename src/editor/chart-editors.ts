import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { CURVES } from '../chart/paths';
import { SOURCES } from '../chart/frame';
import { PERIOD_UNITS } from '../history/period';
import { languageOf, localize } from '../localize';
import type { ChartEditorContext } from '../styles/index';
import type { HomeAssistant } from '../types';
import { applyFormData, formData } from './schemas';
import type { FieldBinding } from './schemas';

/** A dropdown of fixed values, labelled from `editor_<prefix>_<value>`. */
export function choice(hass: HomeAssistant | undefined, prefix: string, values: readonly string[]) {
  return {
    select: {
      mode: 'dropdown',
      options: values.map((value) => ({ value, label: localize(hass, `editor_${prefix}_${value}`) })),
    },
  };
}

/** Fields every history chart shows first: how far back, and where the readings come from. */
export const HISTORY_FIELDS: FieldBinding[] = [
  { name: 'period_last', path: ['period', 'last'], default: 24 },
  { name: 'period_unit', path: ['period', 'unit'], default: 'hour' },
  { name: 'source', path: ['source'], default: 'history' },
];

export function historySchema(hass?: HomeAssistant) {
  return [
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'period_last', selector: { number: { min: 1, mode: 'box' } } },
        { name: 'period_unit', selector: choice(hass, 'period_unit', PERIOD_UNITS) },
      ],
    },
    { name: 'source', selector: choice(hass, 'source', SOURCES) },
  ];
}

const cache = new Map<string, unknown[]>();

/** Build a schema once per language (and per style), so ha-form isn't handed a new one each render. */
export function cachedSchema(id: string, hass: HomeAssistant | undefined, build: () => unknown[]): unknown[] {
  const k = `${id}|${languageOf(hass)}`;
  let schema = cache.get(k);
  if (!schema) {
    schema = build();
    cache.set(k, schema);
  }
  return schema;
}

/** An ha-form bound to card-config paths; a value set back to its default removes the key. */
export function chartForm(
  ctx: ChartEditorContext,
  section: string,
  schema: unknown[],
  fields: FieldBinding[],
): TemplateResult {
  return html`<ha-form
    data-section=${section}
    .hass=${ctx.hass}
    .data=${formData(ctx.config, fields)}
    .schema=${schema}
    .computeLabel=${(s: { name: string }) => localize(ctx.hass, `editor_${s.name}`)}
    @value-changed=${(ev: CustomEvent) => {
      ev.stopPropagation();
      const next = applyFormData(ctx.config, fields, (ev.detail?.value ?? {}) as Record<string, unknown>);
      if (next !== ctx.config) ctx.commit(next);
    }}
  ></ha-form>`;
}

const LINE_FIELDS: FieldBinding[] = [
  ...HISTORY_FIELDS,
  { name: 'curve', path: ['curve'], default: 'smooth' },
  { name: 'color_by', path: ['color_by'], default: 'series' },
  { name: 'labels', path: ['labels'], default: false },
];

export function lineEditor(ctx: ChartEditorContext): TemplateResult {
  const schema = cachedSchema('line', ctx.hass, () => [
    ...historySchema(ctx.hass),
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'curve', selector: choice(ctx.hass, 'curve', CURVES) },
        { name: 'color_by', selector: choice(ctx.hass, 'color_by', ['series', 'bands']) },
      ],
    },
    { name: 'labels', selector: { boolean: {} } },
  ]);
  return chartForm(ctx, 'chart', schema, LINE_FIELDS);
}
