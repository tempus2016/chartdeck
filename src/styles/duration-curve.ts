import { css, html, nothing, svg } from 'lit';
import type { TemplateResult } from 'lit';
import { validateAxisOptions } from '../chart/axes';
import { curvePoints, durationSteps, parseMarkers, shareAbove, valueAtShare } from '../chart/duration-curve';
import type { CurveStep } from '../chart/duration-curve';
import {
  VIEW_H,
  VIEW_W,
  disconnectHistory,
  frameMessage,
  frameStyles,
  historyFrame,
  periodNav,
  seriesHeader,
  validateHistoryOptions,
} from '../chart/frame';
import type { ChartSeries } from '../chart/frame';
import { chartArea, gridStyles, plotWidth, stopChartWidth } from '../chart/grid';
import { pointWeights } from '../chart/histogram';
import { chartFrame, chartLayout, headerOver, layoutStyles, validateLayout } from '../chart/layout';
import { tooltipEnabled, tooltipStyles, validateTooltipOptions } from '../chart/tooltip';
import { pickHandlers, pickStyles, pickTooltip, pickedIndex, stopPick, valueAxes } from '../chart/xy';
import {
  AXES_FIELDS,
  HISTORY_FIELDS,
  LAYOUT_FIELDS,
  axesSchema,
  cachedSchema,
  chartForm,
  historySchema,
  historyVariant,
  layoutSchema,
} from '../editor/chart-editors';
import type { FieldBinding } from '../editor/schemas';
import { formatNumber, withUnit } from '../format';
import { localize } from '../localize';
import type { CardConfig, HomeAssistant } from '../types';
import type { ChartContext, ChartEditorContext, ChartStyleModule } from './index';

/**
 * Duration curve: each series' readings sorted from highest to lowest, as wide as the time each
 * held, so the bottom runs from 0 to 100% of the time and the curve's height at 14% is the value
 * the sensor was at or above for 14% of it. Markers label how long it spent above a value.
 *
 *   style: duration_curve
 *   markers: [2]       # values to label: "Above 2 kW for 14% of the time"
 *   skip_zero: false   # true leaves readings of exactly 0 out of the time (a solar panel at night)
 */

/** Shares the tooltip can pick: every whole percent. */
const PICKS = 100;

const pct = (n: number) => `${Math.round(n * 10000) / 100}%`;

interface Curve {
  series: ChartSeries;
  steps: CurveStep[];
}

function options(raw: CardConfig) {
  return { markers: parseMarkers(raw.markers) ?? [], skipZero: raw.skip_zero === true };
}

/** "14%": a share of time (0 to 1), whole percents unless it is under 1%. */
function shareText(share: number, hass: HomeAssistant): string {
  const p = share * 100;
  return `${formatNumber(p, p > 0 && p < 1 ? 1 : 0, hass)}%`;
}

const valueText = (v: number, s: ChartSeries, hass: HomeAssistant) =>
  withUnit(formatNumber(v, s.entity.decimals, hass), s.entity.unit);

/** Decimals a typed marker value has (2 → 0, 1.25 → 2), so it prints as it was written. */
export function typedDecimals(v: number): number {
  const text = String(v);
  if (text.includes('e')) return 0;
  const dot = text.indexOf('.');
  return dot < 0 ? 0 : Math.min(6, text.length - dot - 1);
}

/** Room a marker sentence needs beside its dot, in px. */
const LABEL_PX = 190;

/** Whether a sentence by a dot `fx` across a plot `width` px wide goes to its left: no room right, more left. */
export function flipLabel(fx: number, width: number): boolean {
  const w = width > 0 ? width : 500;
  return fx * w + LABEL_PX > w && fx > 0.5;
}

/** "Above 2 kW for 14% of the time", with the series' name first when there are several. */
function markerText(m: number, c: Curve, hass: HomeAssistant, named: boolean): string {
  const text = localize(hass, 'duration_marker', {
    value: withUnit(formatNumber(m, typedDecimals(m), hass), c.series.entity.unit),
    share: shareText(shareAbove(c.steps, m), hass),
  });
  return named ? `${c.series.entity.name}: ${text}` : text;
}

function render(ctx: ChartContext): TemplateResult {
  const now = Date.now();
  const opts = options(ctx.raw);
  const frame = historyFrame(ctx, now);
  const nav = periodNav(frame, ctx);
  const names = seriesHeader(frame, ctx);
  const header = nav === nothing && names === nothing ? nothing : html`${nav}${names}`;
  const layout = chartLayout(ctx.raw);
  const until = Math.min(frame.range.end, now);
  const curves: Curve[] = frame.series.map((s) => ({
    series: s,
    steps: durationSteps(
      s.points,
      pointWeights(s.points, { mode: 'time', until, statistics: frame.source === 'statistics' }),
      opts.skipZero,
    ),
  }));
  const drawn = curves.filter((c) => c.steps.length > 0);
  const message =
    frameMessage(frame, ctx) ?? (drawn.length === 0 ? frameMessage({ ...frame, series: [] }, ctx) : undefined);
  if (message) return chartFrame(layout.header === 'over' ? { ...layout, header: 'above' } : layout, header, message);

  const values = drawn.flatMap((c) => c.steps.map((st) => st.v));
  const lo = Math.min(...values);
  const hi = Math.max(...values);
  const axes = valueAxes(ctx, [0, 100], [lo, hi], { x: { min: 0, max: 100 }, yFloor: lo >= 0 ? 0 : undefined });
  const { scales } = axes;
  const [d0, d1] = scales.domain;
  const base = scales.y(Math.min(d1, Math.max(d0, 0)));
  const inRange = (v: number) => v >= Math.min(d0, d1) && v <= Math.max(d0, d1);

  const content = svg`${drawn.map((c) => {
    const pts = curvePoints(c.steps).map(([s, v]) => [scales.x(s * 100), scales.y(v)] as const);
    const line = pts
      .map(([x, y], i) => `${i ? 'L' : 'M'}${Math.round(x * 100) / 100},${Math.round(y * 100) / 100}`)
      .join('');
    const fill = `${line}L${VIEW_W},${base}L0,${base}Z`;
    return svg`<g class="series" data-series=${c.series.index}>
      <path class="curve-fill" d=${fill} fill=${c.series.color}></path>
      <path class="curve" d=${line} stroke=${c.series.color}></path>
    </g>`;
  })}${opts.markers.filter(inRange).map((m) => {
    const shares = drawn.map((c) => shareAbove(c.steps, m));
    const far = Math.max(...shares);
    const y = scales.y(m);
    return svg`<g class="marker">
      <line x1="0" x2=${scales.x(far * 100)} y1=${y} y2=${y}></line>
      ${shares.map((s) => (s > 0 ? svg`<line x1=${scales.x(s * 100)} x2=${scales.x(s * 100)} y1=${y} y2=${base}></line>` : nothing))}
    </g>`;
  })}`;

  // Dots stay round and labels stay sharp in HTML over the stretched plot.
  // In the plot only for one curve, and not under a header drawn over the plot.
  const single = drawn.length === 1 && layout.header !== 'over';
  const markerDots = opts.markers.filter(inRange).flatMap((m) =>
    drawn.map((c) => {
      const s = shareAbove(c.steps, m);
      const fx = scales.x(s * 100) / VIEW_W;
      const fy = scales.y(m) / VIEW_H;
      return html`<span class="marker-dot" style="left:${pct(fx)};top:${pct(fy)};background:${c.series.color}"
        >${
          single
            ? html`<span class="marker-label ${flipLabel(fx, plotWidth(ctx)) ? 'end' : ''}"
                >${markerText(m, c, ctx.hass, false)}</span
              >`
            : nothing
        }</span
      >`;
    }),
  );
  // With several curves, a header over the plot, or a marker off the chart, the sentences go
  // under it, curve by curve.
  const listed = single ? opts.markers.filter((m) => !inRange(m)) : opts.markers;
  const named = drawn.length > 1;
  const list = listed.length
    ? html`<div class="marker-list">
        ${drawn.flatMap((c) => listed.map((m) => html`<span>${markerText(m, c, ctx.hass, named)}</span>`))}
      </div>`
    : nothing;

  const tooltip = tooltipEnabled(ctx.raw);
  const picked = tooltip ? pickedIndex(ctx.host) : undefined;
  let pick: TemplateResult | typeof nothing = nothing;
  if (picked !== undefined) {
    const share = picked / PICKS;
    const first = valueAtShare(drawn[0].steps, share)!;
    pick = pickTooltip({
      x: share,
      y: scales.y(first) / VIEW_H,
      plotWidth: plotWidth(ctx),
      title: localize(ctx.hass, 'duration_tooltip', { share: shareText(share, ctx.hass) }),
      dot: drawn[0].series.color,
      rows: drawn.map((c) => ({
        color: c.series.color,
        name: c.series.entity.name,
        value: valueText(valueAtShare(c.steps, share)!, c.series, ctx.hass),
      })),
    });
  }

  const label = [
    localize(ctx.hass, 'chart_aria', {
      style: localize(ctx.hass, 'editor_style_duration_curve'),
      names: frame.series.map((s) => s.entity.name).join(', '),
    }),
    ...drawn.flatMap((c) => opts.markers.map((m) => markerText(m, c, ctx.hass, named))),
  ].join('. ');

  return chartFrame(
    layout,
    header,
    html`${chartArea({
      axes,
      ctx,
      content,
      label,
      xLabel: (v) => `${formatNumber(v, 0, ctx.hass)}%`,
      overlay: html`${layout.header === 'over' ? headerOver(header) : nothing}
        <div class="marker-layer" aria-hidden="true">${markerDots}</div>
        ${pick}`,
      hover: tooltip ? pickHandlers(ctx, (fx) => Math.round(fx * PICKS)) : undefined,
    })}
    ${list}`,
  );
}

const DC_AXES_FIELDS: FieldBinding[] = AXES_FIELDS.map((f) => (f.name === 'x_axis' ? { ...f, name: 'xy_x_axis' } : f));

const FIELDS: FieldBinding[] = [
  ...HISTORY_FIELDS,
  { name: 'duration_markers', path: ['markers'] },
  { name: 'duration_skip_zero', path: ['skip_zero'], default: false },
  ...DC_AXES_FIELDS,
  ...LAYOUT_FIELDS,
];

function editor(ctx: ChartEditorContext): TemplateResult {
  const hass = ctx.hass;
  const schema = cachedSchema(`duration_curve|${historyVariant(ctx.config)}`, hass, () => [
    ...historySchema(hass, ctx.config),
    { name: 'duration_markers', selector: { text: {} } },
    { name: 'duration_skip_zero', selector: { boolean: {} } },
    ...axesSchema(hass).map((part) =>
      (part as { type?: string }).type === 'grid'
        ? {
            ...(part as object),
            schema: (part as { schema: { name: string }[] }).schema.map((f) =>
              f.name === 'x_axis' ? { ...f, name: 'xy_x_axis' } : f,
            ),
          }
        : part,
    ),
    ...layoutSchema(hass),
  ]);
  return chartForm(ctx, 'chart', schema, FIELDS);
}

const ENTITY_FIELDS: FieldBinding[] = [{ name: 'series_color', path: ['color'] }];
const ENTITY_SCHEMA = [{ name: 'series_color', selector: { text: {} } }];

export const durationCurve: ChartStyleModule = {
  layout: 'chart',
  group: 'distribution',
  height: 240,
  styles: css`
    ${frameStyles}
    ${gridStyles}
    ${tooltipStyles}
    ${layoutStyles}
    ${pickStyles}
    .plot .curve {
      fill: none;
      stroke-width: 2px;
      stroke-linejoin: round;
    }
    .plot .curve-fill {
      fill-opacity: 0.15;
      stroke: none;
    }
    .plot .marker line {
      stroke: var(--primary-text-color);
      stroke-opacity: 0.55;
      stroke-dasharray: 3 3;
      stroke-width: 1px;
    }
    .marker-layer {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }
    .marker-dot {
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--card-background-color, #fff);
      transform: translate(-50%, -50%);
    }
    .marker-label {
      position: absolute;
      left: 100%;
      bottom: 100%;
      margin-left: 4px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.2;
      white-space: nowrap;
      color: var(--primary-text-color);
      text-shadow: 0 0 3px var(--card-background-color, #fff);
    }
    .marker-label.end {
      left: auto;
      right: 100%;
      margin-left: 0;
      margin-right: 4px;
    }
    .marker-list {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding-top: 6px;
      font-size: 0.8125em;
      color: var(--secondary-text-color);
    }
    .frame.compact .marker-list {
      padding-top: 2px;
    }
  `,
  thumbnail: () => svg`
    <path d="M6 6 C14 8 18 14 24 22 S36 34 58 35 V36 H6 Z" fill="var(--primary-color, #03a9f4)" fill-opacity="0.2" />
    <path d="M6 6 C14 8 18 14 24 22 S36 34 58 35" fill="none" stroke="var(--primary-color, #03a9f4)" stroke-width="2" />
    <path d="M6 22 H24 V36" fill="none" stroke="var(--secondary-text-color, #727272)" stroke-width="1" stroke-dasharray="2 2" />
    <path d="M4 37 H60" stroke="var(--secondary-text-color, #727272)" stroke-width="1" />`,
  validate(raw: CardConfig) {
    validateHistoryOptions(raw);
    validateAxisOptions(raw);
    validateTooltipOptions(raw);
    validateLayout(raw);
    if (parseMarkers(raw.markers) === undefined) {
      throw new Error('"markers" must be a number or a list of numbers');
    }
    if (raw.skip_zero !== undefined && typeof raw.skip_zero !== 'boolean') {
      throw new Error('"skip_zero" must be true or false');
    }
  },
  editor,
  entityFields: () => ({ schema: ENTITY_SCHEMA, fields: ENTITY_FIELDS }),
  disconnect(host) {
    disconnectHistory(host);
    stopChartWidth(host);
    stopPick(host);
  },
  render,
};
