import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { AXIS_LABELS, DEFAULT_AXES } from '../chart/axes';
import { HEADER_PLACES } from '../chart/layout';
import { CURVES } from '../chart/paths';
import { DEFAULT_LINE_WIDTH } from '../chart/series-style';
import { SOURCES } from '../chart/frame';
import { AGGREGATES, GROUP_UNITS } from '../history/group';
import { CALENDAR_SPANS, PERIOD_UNITS, PERIOD_UNTIL } from '../history/period';
import { languageOf, localize, registerStrings } from '../localize';
import type { ChartEditorContext } from '../styles/index';
import type { CardConfig, HomeAssistant } from '../types';
import { annotationsEditor } from './annotations-editor';
import { LINE_WIDTH_SELECTOR, applyFormData, formData } from './schemas';
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

registerStrings('en', {
  editor_period_calendar: 'Period',
  editor_period_calendar_rolling: 'The last…',
  editor_period_calendar_day: 'Today',
  editor_period_calendar_week: 'This week',
  editor_period_calendar_month: 'This month',
  editor_period_calendar_year: 'This year',
  editor_period_offset: 'Periods back (0 is the current one)',
  editor_period_until: 'Draw up to',
  editor_period_until_now: 'Now',
  editor_period_until_end: 'The end of the period',
  editor_period_navigate: 'Show previous and next buttons',
  editor_group_by: 'Group readings by',
  editor_group_by_none: "Don't group",
  editor_group_by_hour: 'Hour',
  editor_group_by_day: 'Day',
  editor_group_by_week: 'Week',
  editor_group_by_month: 'Month',
  editor_aggregate: 'Combine with',
  editor_aggregate_mean: 'Average',
  editor_aggregate_sum: 'Sum',
  editor_aggregate_min: 'Lowest',
  editor_aggregate_max: 'Highest',
  editor_aggregate_first: 'First',
  editor_aggregate_last: 'Last',
  editor_aggregate_change: 'Change (meters that count up)',
});

/** Fields every history chart shows first: what span it covers, and where the readings come from. */
export const HISTORY_FIELDS: FieldBinding[] = [
  { name: 'period_calendar', path: ['period', 'calendar'], default: 'rolling' },
  { name: 'period_last', path: ['period', 'last'], default: 24 },
  { name: 'period_unit', path: ['period', 'unit'], default: 'hour' },
  { name: 'period_offset', path: ['period', 'offset'], default: 0 },
  { name: 'period_until', path: ['period', 'until'], default: 'now' },
  { name: 'period_navigate', path: ['period', 'navigate'], default: false },
  { name: 'source', path: ['source'], default: 'history' },
  { name: 'group_by', path: ['group_by'], default: 'none' },
  { name: 'aggregate', path: ['aggregate'], default: 'mean' },
];

/** Which history fields apply to this config; part of a chart editor's schema cache key. */
export function historyVariant(config: CardConfig | undefined): string {
  const period = config?.period as { calendar?: unknown } | undefined;
  return `${period?.calendar ? 'calendar' : 'rolling'}${config?.group_by ? '|grouped' : ''}`;
}

/**
 * The history fields as ha-form schema: a rolling span asks how far back, a calendar one whether
 * to draw to now or to its end, and grouped readings how to combine them. Cache it under
 * `historyVariant(config)`.
 */
export function historySchema(hass?: HomeAssistant, config?: CardConfig) {
  const [span, grouped] = historyVariant(config).split('|');
  const calendar = span === 'calendar';
  return [
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'period_calendar', selector: choice(hass, 'period_calendar', ['rolling', ...CALENDAR_SPANS]) },
        ...(calendar
          ? [{ name: 'period_until', selector: choice(hass, 'period_until', PERIOD_UNTIL) }]
          : [
              { name: 'period_last', selector: { number: { min: 1, mode: 'box' } } },
              { name: 'period_unit', selector: choice(hass, 'period_unit', PERIOD_UNITS) },
            ]),
        { name: 'period_offset', selector: { number: { min: 0, mode: 'box' } } },
      ],
    },
    { name: 'period_navigate', selector: { boolean: {} } },
    { name: 'source', selector: choice(hass, 'source', SOURCES) },
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'group_by', selector: choice(hass, 'group_by', ['none', ...GROUP_UNITS]) },
        ...(grouped ? [{ name: 'aggregate', selector: choice(hass, 'aggregate', AGGREGATES) }] : []),
      ],
    },
  ];
}

/** History fields for charts that only read a rolling span (how far back, and from where). */
export const ROLLING_HISTORY_FIELDS: FieldBinding[] = HISTORY_FIELDS.filter((f) =>
  ['period_last', 'period_unit', 'source'].includes(f.name),
);

/** `historySchema` for those charts: no calendar spans, offset, buttons or grouping. */
export function rollingHistorySchema(hass?: HomeAssistant) {
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
  editor_line_width: 'Line width (px)',
  editor_dots: 'Dot at each reading',
  editor_on_top: 'Draw above the other lines',
  editor_compact: 'Compact',
  editor_header: 'Names and values',
  editor_header_above: 'Above the chart',
  editor_header_over: 'Over the chart',
  editor_header_hidden: 'Hidden',
});

/** Spacing and where the names and current values go, shared by every history chart. */
export const LAYOUT_FIELDS: FieldBinding[] = [
  { name: 'header', path: ['header'], default: 'above' },
  { name: 'compact', path: ['compact'], default: false },
];

export function layoutSchema(hass?: HomeAssistant) {
  return [
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'header', selector: choice(hass, 'header', HEADER_PLACES) },
        { name: 'compact', selector: { boolean: {} } },
      ],
    },
  ];
}

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

/** Zoom gestures and the overview strip, shared by every history chart. */
export const ZOOM_FIELDS: FieldBinding[] = [
  { name: 'zoom', path: ['zoom'], default: false },
  { name: 'overview', path: ['overview'], default: false },
];

export const ZOOM_SCHEMA = [
  {
    type: 'grid',
    name: '',
    schema: [
      { name: 'zoom', selector: { boolean: {} } },
      { name: 'overview', selector: { boolean: {} } },
    ],
  },
];
/** Shading the severity bands behind a history chart; the annotation list has its own editor. */
export const ANNOTATION_FIELDS: FieldBinding[] = [{ name: 'zones', path: ['zones'], default: false }];
export const ANNOTATION_SCHEMA = [{ name: 'zones', selector: { boolean: {} } }];

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
  { name: 'line_width', path: ['line_width'], default: DEFAULT_LINE_WIDTH },
  { name: 'dots', path: ['dots'], default: false },
  ...AXES_FIELDS,
  ...ZOOM_FIELDS,
  ...ANNOTATION_FIELDS,
  ...LAYOUT_FIELDS,
];

export function lineEditor(ctx: ChartEditorContext): TemplateResult {
  const schema = cachedSchema(`line|${historyVariant(ctx.config)}`, ctx.hass, () => [
    ...historySchema(ctx.hass, ctx.config),
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'curve', selector: choice(ctx.hass, 'curve', CURVES) },
        { name: 'color_by', selector: choice(ctx.hass, 'color_by', ['series', 'bands']) },
      ],
    },
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'line_width', selector: LINE_WIDTH_SELECTOR },
        { name: 'dots', selector: { boolean: {} } },
      ],
    },
    { name: 'labels', selector: { boolean: {} } },
    ...axesSchema(ctx.hass),
    ...ZOOM_SCHEMA,
    ...ANNOTATION_SCHEMA,
    ...layoutSchema(ctx.hass),
  ]);
  return html`${chartForm(ctx, 'chart', schema, LINE_FIELDS)}${annotationsEditor(ctx)}`;
}
