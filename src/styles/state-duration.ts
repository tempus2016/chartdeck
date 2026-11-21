import { css, html, nothing, svg } from 'lit';
import type { TemplateResult } from 'lit';
import { formatDateTime, timeLabel, validateAxisOptions } from '../chart/axes';
import type { TimeUnit } from '../chart/axes';
import { COLUMN_PERIOD, autoGroupUnit, columnBox, labelEvery } from '../chart/columns';
import { VIEW_H, VIEW_W, disconnectHistory, frameMessage, frameStyles, historyFrame, periodNav } from '../chart/frame';
import type { ChartSeries } from '../chart/frame';
import { chartArea, gridStyles, plotAxes, plotWidth, stopChartWidth } from '../chart/grid';
import type { PlotAxes } from '../chart/grid';
import { chartFrame, chartLayout, headerOver, layoutStyles, validateLayout } from '../chart/layout';
import {
  DURATION_GROUPS,
  DURATION_STACKS,
  axisTop,
  quietMix,
  durationValue,
  stackOrder,
  stateDurations,
} from '../chart/state-duration';
import type { DurationStack, GroupDurations } from '../chart/state-duration';
import { formatDuration, isMeasurement, stateColor, stateSpans } from '../chart/timeline';
import type { StateColor } from '../chart/timeline';
import {
  hoverHandlers,
  hoverTime,
  stopHover,
  tooltipEnabled,
  tooltipLayer,
  tooltipStyles,
  validateTooltipOptions,
} from '../chart/tooltip';
import {
  AXES_FIELDS,
  HISTORY_FIELDS,
  LAYOUT_FIELDS,
  axesSchema,
  cachedSchema,
  chartForm,
  choice,
  historySchema,
  historyVariant,
  layoutSchema,
} from '../editor/chart-editors';
import type { FieldBinding } from '../editor/schemas';
import { stateColorsEditor } from '../editor/timeline-editor';
import { formatNumber } from '../format';
import type { GroupUnit } from '../history/group';
import { parsePeriod } from '../history/period';
import { boundaries } from '../history/timezone';
import type { Point } from '../history/types';
import { localize } from '../localize';
import type { CardConfig } from '../types';
import { columnStyles, fullPeriod, groupHeading } from './column';
import { checkColors, ownColors, stateText } from './timeline';
import type { ChartContext, ChartEditorContext, ChartStyleModule } from './index';

/** Room each group label needs under the chart, in px: clock times are the widest. */
const GROUP_LABEL_PX: Record<GroupUnit, number> = { hour: 66, day: 52, week: 52, month: 60 };
/** The time unit whose labels name a group: a week is named by its first day. */
const LABEL_UNIT: Record<GroupUnit, TimeUnit> = { hour: 'hour', day: 'day', week: 'day', month: 'month' };
/** Round steps up the value axis for the units that have one: quarter hours, quarter days. */
const TICK_STEP: Partial<Record<GroupUnit, number>> = { hour: 15, day: 6 };
/** A slice needs this much room (px) for its label. */
const LABEL_H_PX = 14;
const LABEL_W_PX = 26;
/** Plot height in px (normal, compact), as set in frame.ts and layout.ts. */
const PLOT_PX = { normal: 180, compact: 110 };
const RADIUS_PX = 4;

const isGroup = (v: unknown) => DURATION_GROUPS.includes(v as (typeof DURATION_GROUPS)[number]);

function validate(raw: CardConfig): void {
  parsePeriod(raw.period as CardConfig['period']);
  if (raw.source !== undefined && raw.source !== 'history') {
    throw new Error(
      '"source" must be history: time in each state is worked out from states, which statistics don\'t keep',
    );
  }
  if (raw.group_by !== undefined && !isGroup(raw.group_by)) {
    throw new Error(`"group_by" must be one of: ${DURATION_GROUPS.join(', ')}`);
  }
  if (raw.stack !== undefined && !DURATION_STACKS.includes(raw.stack as DurationStack)) {
    throw new Error(`"stack" must be one of: ${DURATION_STACKS.join(', ')}`);
  }
  const states = raw.states as unknown;
  if (
    states !== undefined &&
    (!Array.isArray(states) || states.some((s) => typeof s !== 'string' || s.trim() === ''))
  ) {
    throw new Error('"states" must be a list of states, like [heating, idle, off]');
  }
  if (raw.labels !== undefined && typeof raw.labels !== 'boolean') throw new Error('"labels" must be true or false');
  checkColors(raw.state_colors, '"state_colors"');
  validateAxisOptions(raw);
  validateTooltipOptions(raw);
  validateLayout(raw);
}

/** The group unit for the card: its own, or the one that reads best for the span. */
export function durationGroup(raw: CardConfig): GroupUnit {
  const g = raw.group_by as string | undefined;
  if (g !== undefined && g !== 'auto') return g as GroupUnit;
  return autoGroupUnit(parsePeriod((raw.period ?? COLUMN_PERIOD) as CardConfig['period']));
}

/** The states listed in `states`, trimmed, or undefined for every state seen. */
function includeOf(raw: CardConfig): string[] | undefined {
  const v = raw.states as unknown;
  return Array.isArray(v) && v.length ? v.map((s) => String(s).trim()) : undefined;
}

interface Row {
  series: ChartSeries;
  domain: string;
  groups: GroupDurations[];
}

const pct = (n: number, of: number) => `${Math.round((n / of) * 10000) / 100}%`;

/** A slice's label: "4.3 h", "25 min", "18 %". */
function sliceText(v: number, mode: DurationStack, unit: GroupUnit, ctx: ChartContext): string {
  if (mode === 'percent') return `${formatNumber(v, 0, ctx.hass)} %`;
  if (unit === 'hour') return `${formatNumber(v, 0, ctx.hass)} min`;
  return `${formatNumber(v, 1, ctx.hass)} h`;
}

/** The value axis's label text: "6 h", "30 min", "50 %". */
function tickText(v: number, mode: DurationStack, unit: GroupUnit, decimals: number, ctx: ChartContext): string {
  const n = formatNumber(v, decimals, ctx.hass);
  if (mode === 'percent') return `${n} %`;
  return unit === 'hour' ? `${n} min` : `${n} h`;
}

function legend(order: string[], rows: Row[], ctx: ChartContext, fillOf: (state: string) => string) {
  if (!order.length) return nothing;
  return html`<div class="sd-legend">
    ${order.map((state) => {
      return html`<span class="sd-key"
        ><span class="swatch" style="background:${fillOf(state)}"></span>${stateText(
          ctx.hass,
          rows[0].series,
          state,
        )}</span
      >`;
    })}
  </div>`;
}

function render(ctx0: ChartContext): TemplateResult {
  // The chart's defaults filled in for the shared frame: 7 days, grouped to fit, states as words.
  const unit = durationGroup(ctx0.raw);
  const raw: CardConfig = { ...ctx0.raw, period: ctx0.raw.period ?? { ...COLUMN_PERIOD }, group_by: unit };
  delete raw.aggregate;
  const ctx: ChartContext = { ...ctx0, raw };
  const now = Date.now();
  const frame = historyFrame(ctx, now, { text: true });
  const layout = chartLayout(raw);
  const nav = periodNav(frame, ctx);
  const above = layout.header === 'over' ? { ...layout, header: 'above' as const } : layout;
  if (frame.status !== 'ready') return chartFrame(above, nav, frameMessage(frame, ctx)!);

  const mode = (raw.stack as DurationStack | undefined) ?? 'normal';
  const until = Math.min(frame.range.end, now);
  const bounds = boundaries(unit, frame.range.start, frame.range.end, frame.zone);
  const rows: Row[] = [];
  let measured = false;
  for (const series of frame.series) {
    const spans = stateSpans(series.readings ?? [], until);
    // A temperature isn't a set of states: say so instead of a slice per reading.
    if (isMeasurement(spans)) {
      measured = true;
      continue;
    }
    rows.push({ series, domain: series.entity.entityId.split('.')[0], groups: stateDurations(spans, bounds) });
  }
  const own = ownColors(raw);
  const colorOf = (state: string, row = rows[0]) => stateColor(state, row.domain, own);
  const include = includeOf(raw);
  const order = rows.length
    ? stackOrder(
        rows.map((r) => r.groups),
        include,
        (s) => colorOf(s).quiet,
      )
    : [];
  const mix = quietMix(order, (s) => colorOf(s).quiet);
  // A quiet state drawn faint, each one fainter than the quiet state under it.
  const fillOf = (color: StateColor, state: string) =>
    mix.has(state) ? `color-mix(in srgb, ${color.color} ${mix.get(state)}%, transparent)` : color.color;
  const anything = rows.some((r) => r.groups.some((g) => order.some((s) => (g.time.get(s) ?? 0) > 0)));
  if (!anything) {
    const key = measured && rows.length === 0 ? 'timeline_measurement' : 'timeline_no_states';
    return chartFrame(above, nav, html`<div class="chart-message">${localize(ctx.hass, key)}</div>`);
  }

  const header = html`${nav}${layout.header === 'hidden' ? nothing : legend(order, rows, ctx, (s) => fillOf(colorOf(s), s))}`;
  const times = bounds.slice(0, -1);
  const ends = bounds.slice(1);
  const xRange = { start: bounds[0], end: bounds[bounds.length - 1] };
  const top = axisTop(rows[0].groups, mode, unit);
  let axes: PlotAxes = plotAxes({ ...ctx, raw: { y_min: 0, y_max: top, ...raw } }, xRange, [0, top]);
  const step = mode === 'normal' ? TICK_STEP[unit] : undefined;
  if (step && raw.y_min === undefined && raw.y_max === undefined) {
    const ticks = Array.from({ length: Math.floor(top / step) + 1 }, (_, i) => i * step);
    axes = { ...axes, value: { ...axes.value, ticks, decimals: 0 } };
  }
  const { scales } = axes;
  const centres = times.map((t, i) => (t + ends[i]) / 2);
  const slotOf = new Map(centres.map((c, i) => [c, i]));
  const every = labelEvery(centres.length, plotWidth(ctx) / GROUP_LABEL_PX[unit]);
  const span = unit === 'day' && centres.length <= 8 ? 7 * 86_400_000 : xRange.end - xRange.start;
  axes = {
    ...axes,
    unit: LABEL_UNIT[unit],
    times: centres.filter((_, i) => i % every === 0),
    label: (c) => timeLabel(times[slotOf.get(c)!], LABEL_UNIT[unit], span, ctx.hass),
  };

  const pxX = plotWidth(ctx) / VIEW_W;
  const pxY = PLOT_PX[layout.compact ? 'compact' : 'normal'] / VIEW_H;
  const labels = raw.labels === true;
  const n = rows.length;
  const columns: TemplateResult[] = [];
  const texts: TemplateResult[] = [];
  const clampY = (y: number) => Math.min(VIEW_H, Math.max(0, y));
  times.forEach((t, i) => {
    const x0 = scales.x(t);
    const x1 = scales.x(ends[i]);
    rows.forEach((row, k) => {
      const group = row.groups[i];
      const [left, width] = columnBox(x0, x1, k, n);
      const slices = order
        .map((state) => ({ state, v: durationValue(group.time.get(state) ?? 0, group, mode, unit) }))
        .filter((s) => s.v > 0);
      let base = 0;
      slices.forEach(({ state, v }, j) => {
        const color = colorOf(state, row);
        const y0 = clampY(scales.y(base));
        const y1 = clampY(scales.y(base + v));
        base += v;
        if (y0 - y1 <= 0) return;
        const fill = fillOf(color, state);
        columns.push(
          html`<div
            class="col sd-slice ${j === slices.length - 1 ? 'cap-top' : ''}"
            data-series=${k}
            style="left:${pct(left, VIEW_W)};width:${pct(width, VIEW_W)};top:${pct(y1, VIEW_H)};height:${pct(
              y0 - y1,
              VIEW_H,
            )};background:${fill}"
          ></div>`,
        );
        if (labels && (y0 - y1) * pxY >= LABEL_H_PX && width * pxX >= LABEL_W_PX) {
          texts.push(
            html`<span
              class="sd-label text-${color.text}"
              style="left:${pct(left + width / 2, VIEW_W)};top:${pct((y0 + y1) / 2, VIEW_H)}"
              >${sliceText(v, mode, unit, ctx)}</span
            >`,
          );
        }
      });
      // A tap on the column opens its entity, as the names do on other charts.
      columns.push(
        html`<div
          class="entity sd-hit"
          data-index=${row.series.index}
          style="left:${pct(left, VIEW_W)};width:${pct(width, VIEW_W)}"
        ></div>`,
      );
    });
  });

  // The tooltip: one row per entity and state, read at the middle of each slot.
  const many = rows.length > 1;
  const rowOf = new Map<ChartSeries, { row: Row }>();
  const shown: ChartSeries[] = [];
  for (const row of rows) {
    for (const state of order) {
      if (!row.groups.some((g) => (g.time.get(state) ?? 0) > 0)) continue;
      const label = stateText(ctx.hass, row.series, state);
      const color = colorOf(state, row);
      const s: ChartSeries = {
        ...row.series,
        entity: { ...row.series.entity, name: many ? `${row.series.entity.name} · ${label}` : label },
        color: fillOf(color, state),
        points: centres.map((c, i): Point => ({ t: c, v: row.groups[i].time.get(state) ?? 0 })),
      };
      rowOf.set(s, { row });
      shown.push(s);
    }
  }
  const tooltip = tooltipEnabled(raw);
  const hovered = tooltip ? hoverTime(ctx.host) : undefined;
  const at = hovered === undefined ? undefined : slotOf.get(hovered);
  const highlight =
    at === undefined
      ? nothing
      : html`<div
          class="slot-hover"
          style="left:${pct(scales.x(times[at]), VIEW_W)};width:${pct(scales.x(ends[at]) - scales.x(times[at]), VIEW_W)}"
        ></div>`;
  const tip = {
    dotY: () => null,
    heading: (c: number) => {
      const i = slotOf.get(c);
      return i === undefined ? formatDateTime(c, ctx.hass) : groupHeading(times[i], ends[i], unit, ctx.hass);
    },
    text: (s: ChartSeries, p: Point | undefined) => {
      if (!p || !p.v) return '—';
      const time = formatDuration(p.v);
      if (mode !== 'percent') return time;
      const group = rowOf.get(s)!.row.groups[slotOf.get(p.t) ?? -1];
      return group ? `${sliceText(durationValue(p.v, group, mode, unit), mode, unit, ctx)} · ${time}` : time;
    },
  };
  const label = localize(ctx.hass, 'chart_aria', {
    style: localize(ctx.hass, 'editor_style_state_duration'),
    names: rows.map((r) => r.series.entity.name).join(', '),
  });
  return chartFrame(
    layout,
    header,
    chartArea({
      axes,
      ctx,
      content: svg``,
      label,
      yLabel: (v) => tickText(v, mode, unit, axes.value.decimals, ctx),
      overlay: html`<div class="columns" style="--r:${RADIUS_PX}px">${highlight}${columns}</div>
        <div class="point-labels">${texts}</div>
        ${layout.header === 'over' ? headerOver(header) : nothing}
        ${tooltip ? tooltipLayer(ctx, shown, scales, hovered, plotWidth(ctx), tip) : nothing}`,
      hover: tooltip
        ? hoverHandlers(
            ctx,
            xRange,
            shown.map((s) => s.points),
          )
        : undefined,
    }),
  );
}

/* ------------------------------------------------------------------ editor ------------------------------------------------------------------ */

/** Statistics keep no states, and the slices are times, not an average: no source or aggregate. */
const NOT_HERE = new Set(['source', 'energy_flows', 'group_by', 'aggregate']);

const FIELDS: FieldBinding[] = [
  ...HISTORY_FIELDS.filter((f) => !NOT_HERE.has(f.name)).map((f) => {
    if (f.name === 'period_last') return { ...f, default: COLUMN_PERIOD.last };
    if (f.name === 'period_unit') return { ...f, default: COLUMN_PERIOD.unit };
    return f;
  }),
  { name: 'group_by', path: ['group_by'], default: 'auto' },
  { name: 'state_duration_states', path: ['states'] },
  { name: 'stack', path: ['stack'], default: 'normal' },
  { name: 'column_labels', path: ['labels'], default: false },
  ...AXES_FIELDS,
  ...LAYOUT_FIELDS,
];

export function stateDurationEditor(ctx: ChartEditorContext): TemplateResult {
  type Item = { name?: string; schema?: Item[] };
  const period = { ...ctx.config, group_by: undefined };
  const schema = cachedSchema(`state_duration|${historyVariant(period)}`, ctx.hass, () => [
    ...(historySchema(ctx.hass, period) as Item[]).filter(
      (row) => !NOT_HERE.has(row.name ?? '') && !(row.schema ?? []).some((s) => NOT_HERE.has(s.name ?? '')),
    ),
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'group_by', selector: choice(ctx.hass, 'group_by', DURATION_GROUPS) },
        { name: 'stack', selector: choice(ctx.hass, 'stack', DURATION_STACKS) },
      ],
    },
    { name: 'state_duration_states', selector: { text: { multiple: true } } },
    { name: 'column_labels', selector: { boolean: {} } },
    ...axesSchema(ctx.hass),
    ...layoutSchema(ctx.hass, false),
  ]);
  return html`${chartForm({ ...ctx, commit: (c) => ctx.commit(withStates(fullPeriod(c))) }, 'chart', schema, FIELDS)}
  ${stateColorsEditor(ctx)}`;
}

/** An emptied states list (every text field cleared) removes the key: every state is drawn again. */
export function withStates(config: CardConfig): CardConfig {
  const v = config.states as unknown;
  if (!Array.isArray(v)) return config;
  const kept = v.map((s) => String(s ?? '').trim()).filter((s) => s !== '');
  const next = { ...config };
  if (kept.length) next.states = kept;
  else delete next.states;
  return next;
}

/* ------------------------------------------------------------------ style ------------------------------------------------------------------ */

export const stateDuration: ChartStyleModule = {
  layout: 'chart',
  group: 'history',
  height: 240,
  styles: css`
    ${frameStyles}
    ${gridStyles}
    ${tooltipStyles}
    ${layoutStyles}
    ${columnStyles}
    .sd-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 14px;
      padding: 4px 0 8px;
      font-size: 0.875em;
      color: var(--secondary-text-color);
    }
    .sd-key {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }
    /* A hairline of card colour between slices, so two greys never run together. */
    .sd-slice {
      box-shadow: inset 0 1px 0 var(--card-background-color, #fff);
    }
    .sd-hit {
      position: absolute;
      top: 0;
      bottom: 0;
      pointer-events: auto;
      cursor: pointer;
      border-radius: 4px;
    }
    .sd-hit:focus-visible {
      outline: 2px solid var(--primary-color);
    }
    .sd-label {
      position: absolute;
      transform: translate(-50%, -50%);
      font-size: 10px;
      font-weight: 500;
      line-height: 1;
      white-space: nowrap;
      pointer-events: none;
    }
    .sd-label.text-dark {
      color: #1c1c1c;
    }
    .sd-label.text-light {
      color: #fff;
    }
    .sd-label.text-theme {
      color: var(--primary-text-color);
    }
    .frame.compact .sd-legend {
      padding: 0 0 4px;
      font-size: 0.8em;
    }
  `,
  thumbnail: () => svg`
    <rect x="6" y="22" width="9" height="14" fill="var(--warning-color, #f59e0b)" />
    <rect x="6" y="12" width="9" height="10" fill="var(--primary-color, #03a9f4)" />
    <rect x="6" y="6" width="9" height="6" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.35" />
    <rect x="20" y="26" width="9" height="10" fill="var(--warning-color, #f59e0b)" />
    <rect x="20" y="13" width="9" height="13" fill="var(--primary-color, #03a9f4)" />
    <rect x="20" y="6" width="9" height="7" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.35" />
    <rect x="34" y="18" width="9" height="18" fill="var(--warning-color, #f59e0b)" />
    <rect x="34" y="10" width="9" height="8" fill="var(--primary-color, #03a9f4)" />
    <rect x="34" y="6" width="9" height="4" rx="2" fill="var(--secondary-text-color, #888)" opacity="0.35" />
    <rect x="48" y="28" width="9" height="8" fill="var(--warning-color, #f59e0b)" />
    <rect x="48" y="20" width="9" height="8" rx="2" fill="var(--primary-color, #03a9f4)" />
    <path d="M3 36.5 H61" stroke="var(--secondary-text-color, #888)" stroke-width="1" />`,
  validate,
  editor: stateDurationEditor,
  disconnect(host) {
    disconnectHistory(host);
    stopChartWidth(host);
    stopHover(host);
  },
  render,
};
