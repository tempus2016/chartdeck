import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { AXIS_LABELS, DEFAULT_AXES } from '../chart/axes';
import { CURVES } from '../chart/paths';
import { SOURCES } from '../chart/frame';
import { PERIOD_UNITS } from '../history/period';
import { languageOf, localize, registerStrings } from '../localize';
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

registerStrings('en', {
  editor_x_axis: 'Time labels',
  editor_y_axis: 'Value labels',
  editor_axis_labels: 'Axis labels',
  editor_axis_labels_outside: 'Beside the chart',
  editor_axis_labels_inside: 'Over the chart',
  editor_grid_horizontal: 'Lines across',
  editor_grid_vertical: 'Lines down',
  editor_y_min: 'Lowest value shown',
  editor_y_max: 'Highest value shown',
  editor_tooltip: 'Show values on hover or touch',
});

/** Axis labels, gridlines, the value range and the hover tooltip, shared by every history chart. Empty min/max fit the readings. */
export const AXES_FIELDS: FieldBinding[] = [
  { name: 'x_axis', path: ['x_axis'], default: DEFAULT_AXES.x },
  { name: 'y_axis', path: ['y_axis'], default: DEFAULT_AXES.y },
  { name: 'axis_labels', path: ['axis_labels'], default: DEFAULT_AXES.labels },
  { name: 'grid_horizontal', path: ['gridlines', 'horizontal'], default: DEFAULT_AXES.horizontal },
  { name: 'grid_vertical', path: ['gridlines', 'vertical'], default: DEFAULT_AXES.vertical },
  { name: 'y_min', path: ['y_min'] },
  { name: 'y_max', path: ['y_max'] },
  { name: 'tooltip', path: ['tooltip'], default: true },
];

export function axesSchema(hass?: HomeAssistant) {
  return [
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'x_axis', selector: { boolean: {} } },
        { name: 'y_axis', selector: { boolean: {} } },
        { name: 'grid_horizontal', selector: { boolean: {} } },
        { name: 'grid_vertical', selector: { boolean: {} } },
      ],
    },
    { name: 'axis_labels', selector: choice(hass, 'axis_labels', AXIS_LABELS) },
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'y_min', selector: { number: { mode: 'box', step: 'any' } } },
        { name: 'y_max', selector: { number: { mode: 'box', step: 'any' } } },
      ],
    },
    { name: 'tooltip', selector: { boolean: {} } },
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
  ...AXES_FIELDS,
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
    ...axesSchema(ctx.hass),
  ]);
  return chartForm(ctx, 'chart', schema, LINE_FIELDS);
}
