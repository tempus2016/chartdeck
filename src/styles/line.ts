import { css, html, nothing, svg } from 'lit';
import type { SVGTemplateResult } from 'lit';
import { baseColor } from '../bands';
import { downsample } from '../chart/downsample';
import { validateAxisOptions } from '../chart/axes';
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
import type { ChartSeries, HistoryFrame } from '../chart/frame';
import { chartArea, gridStyles, plotAxes, plotWidth, stopChartWidth } from '../chart/grid';
import type { PlotScales } from '../chart/grid';
import { chartFrame, chartLayout, headerOver, layoutStyles, validateLayout } from '../chart/layout';
import { runPath, runs } from '../chart/paths';
import { MAX_DOTS, dotSize, dotsPath, drawOrder, seriesStyle, validateSeriesStyle } from '../chart/series-style';
import {
  hoverHandlers,
  hoverTime,
  stopHover,
  tooltipEnabled,
  tooltipLayer,
  tooltipStyles,
  validateTooltipOptions,
} from '../chart/tooltip';
import { extent } from '../chart/scale';
import {
  overviewLines,
  overviewStrip,
  stopZoom,
  validateZoomOptions,
  visiblePoints,
  zoomBusy,
  zoomGestures,
  zoomLayer,
  zoomStyles,
  zoomView,
} from '../chart/zoom';
import {
  annotationEntities,
  annotationLayers,
  annotationStyles,
  annotationValues,
  stopAnnotations,
  validateAnnotations,
} from '../chart/annotations';
import { dataLabelStyles, dataLabels, labelOptions, validateLabelOptions } from '../chart/data-labels';
import { stopSync, syncChart, validateSyncOptions } from '../chart/sync';
import { lineEditor } from '../editor/chart-editors';
import { entitySeriesFields, entitySeriesSchema } from '../editor/schemas';
import { localize, registerStrings } from '../localize';
import type { ChartStyleModule } from './index';
import type { Range } from '../history/types';
import type { CardConfig, ResolvedBand } from '../types';

/** Points kept per series after thinning: about two per pixel on a wide card. */
const MAX_POINTS = 500;

const COLOR_BY = ['series', 'bands'] as const;

registerStrings('en', {
  editor_style_line: 'Line',
  chart_loading: 'Loading history…',
  chart_error: "Couldn't load history: {error}",
  chart_no_data: 'No readings in this period.',
  chart_aria: '{style} chart of {names}',
});

/**
 * A vertical gradient with a hard stop at each band's start, in plot coordinates, so a line
 * changes colour where it crosses a threshold.
 */
function bandGradient(id: string, bands: ResolvedBand[], scales: PlotScales): SVGTemplateResult {
  const [lo, hi] = scales.domain;
  const stop = (v: number) => Math.min(1, Math.max(0, (v - lo) / (hi - lo)));
  const stops: SVGTemplateResult[] = [];
  bands.forEach((band, i) => {
    const from = Number.isFinite(band.from) ? stop(band.from) : 0;
    const to = i + 1 < bands.length ? stop(bands[i + 1].from) : 1;
    const color = baseColor(band.color);
    stops.push(svg`<stop offset=${from} stop-color=${color}></stop><stop offset=${to} stop-color=${color}></stop>`);
  });
  return svg`<linearGradient id=${id} gradientUnits="userSpaceOnUse" x1="0" x2="0" y1=${VIEW_H} y2="0">
    ${stops}
  </linearGradient>`;
}

/** One series' line (and dots), for the line chart and the combined chart. */
export function seriesPath(s: ChartSeries, scales: PlotScales, stroke: string, range: Range, raw: CardConfig) {
  const style = seriesStyle(s.entity.config, raw);
  const thinned = downsample(s.points, MAX_POINTS);
  const d = runs(thinned)
    .map((run) =>
      runPath(
        run.map((p) => [scales.x(p.t), scales.y(p.v as number)]),
        s.curve,
      ),
    )
    .join('');
  // Dots mark real readings: not the carried value at the edges, and not on a crowded series.
  const readings = style.dots ? thinned.filter((p) => p.v !== null && p.t !== range.start && p.t !== range.end) : [];
  const dots =
    readings.length > 0 && readings.length <= MAX_DOTS
      ? svg`<path
          class="dots"
          d=${dotsPath(readings.map((p) => [scales.x(p.t), scales.y(p.v as number)]))}
          fill="none"
          stroke=${stroke}
          style="stroke-width:${dotSize(style.width)}px"
        ></path>`
      : nothing;
  return svg`<g class="series" data-series=${s.index}>
    <path
      class="line ${s.dash ? 'dashed' : ''}"
      d=${d}
      fill="none"
      stroke=${stroke}
      style="stroke-width:${style.width}px"
    ></path>
    ${dots}
  </g>`;
}

/** Value labels on the line's readings, kept clear of each other. */
function pointLabels(
  frame: HistoryFrame,
  series: ChartSeries[],
  view: Range,
  scales: PlotScales,
  options: NonNullable<ReturnType<typeof labelOptions>>,
  compact: boolean,
  ctx: Parameters<ChartStyleModule['render']>[0],
) {
  const { range } = frame;
  return dataLabels(
    series.map((s) => ({
      points: s.points.filter((p) => p.t >= view.start && p.t <= view.end),
      decimals: s.entity.decimals,
      color: s.color,
    })),
    options,
    {
      at: (p) => [scales.x(p.t) / VIEW_W, scales.y(p.v as number) / VIEW_H],
      width: plotWidth(ctx),
      // The plot's height less its time labels, roughly.
      height: compact ? 96 : 162,
      // The points at either edge are carried readings, not new ones (groups are all real).
      skip: (p) => frame.group === undefined && (p.t === range.start || p.t === range.end),
    },
    ctx.hass,
  );
}

export const line: ChartStyleModule = {
  layout: 'chart',
  group: 'history',
  height: 240,
  styles: css`
    ${frameStyles}
    ${gridStyles}
    ${tooltipStyles}
    ${layoutStyles}
    ${zoomStyles}
    ${annotationStyles}
    ${dataLabelStyles}
    .style-line .line {
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .style-line .dots {
      stroke-linecap: round;
    }
    .style-line .line.dashed {
      stroke-dasharray: 6 5;
    }
  `,
  thumbnail: () => svg`
    <path d="M4 30 C14 28 16 14 26 16 S40 26 46 18 S56 8 60 10" fill="none"
      stroke="var(--primary-color, #03a9f4)" stroke-width="3" stroke-linecap="round" />
    <path d="M4 34 C16 33 22 26 32 28 S50 30 60 24" fill="none" stroke="var(--warning-color, #f59e0b)"
      stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 3" />`,
  validate(raw: CardConfig) {
    validateHistoryOptions(raw);
    validateAxisOptions(raw);
    validateTooltipOptions(raw);
    validateSeriesStyle(raw);
    validateLayout(raw);
    validateZoomOptions(raw);
    validateAnnotations(raw);
    validateLabelOptions(raw);
    validateSyncOptions(raw);
    if (raw.color_by !== undefined && !COLOR_BY.includes(raw.color_by as (typeof COLOR_BY)[number])) {
      throw new Error(`"color_by" must be one of: ${COLOR_BY.join(', ')}`);
    }
  },
  editor: lineEditor,
  entityFields: (hass, config) => ({
    schema: entitySeriesSchema(hass),
    fields: entitySeriesFields(config.dots === true),
  }),
  watch: annotationEntities,
  disconnect(host) {
    disconnectHistory(host);
    stopChartWidth(host);
    stopHover(host);
    stopZoom(host);
    stopAnnotations(host);
    stopSync(host);
  },
  render(ctx) {
    const frame = historyFrame(ctx);
    // Charts in a sync group share the pointer's time: another chart's shows here too.
    const own = hoverTime(ctx.host);
    const shared = syncChart(ctx, frame, own);
    const nav = periodNav(frame, ctx);
    const names = seriesHeader(frame, ctx);
    const header = nav === nothing && names === nothing ? nothing : html`${nav}${names}`;
    const message = frameMessage(frame, ctx);
    const layout = chartLayout(ctx.raw);
    if (message) return chartFrame(layout.header === 'over' ? { ...layout, header: 'above' } : layout, header, message);
    // Zoomed, the chart draws the readings in its window (and one either side), fitted to them.
    const zoom = zoomView(ctx, frame);
    const view = zoom.range;
    const shown = zoom.zoomed
      ? frame.series.map((s) => ({ ...s, points: visiblePoints(s.points, view) }))
      : frame.series;
    // Threshold lines widen the value axis, so a target off the readings' range still shows.
    const marks = annotationValues(ctx.raw, ctx.hass).map((v) => ({ t: view.start, v }));
    const axes = plotAxes(ctx, view, extent([...shown.map((s) => s.points), marks]));
    const { scales } = axes;
    const tooltip = tooltipEnabled(ctx.raw) && !zoomBusy(ctx.host);
    const byBands = ctx.raw.color_by === 'bands';
    const defs = byBands
      ? svg`${shown.map((s) => bandGradient(`cd-bands-${s.index}`, s.entity.bands, scales))}`
      : nothing;
    // Listed order, last on top, with any series marked "on top" drawn after the rest.
    const ordered = drawOrder(shown, (s) => seriesStyle(s.entity.config, ctx.raw).onTop);
    const lines = svg`${ordered.map((s) =>
      seriesPath(s, scales, byBands ? `url(#cd-bands-${s.index})` : s.color, frame.range, ctx.raw),
    )}`;
    const hover = tooltipEnabled(ctx.raw)
      ? hoverHandlers(
          ctx,
          view,
          shown.map((s) => s.points),
        )
      : undefined;
    const notes = annotationLayers(ctx, frame, scales, plotWidth(ctx));
    const labels = labelOptions(ctx.raw);
    const label = localize(ctx.hass, 'chart_aria', {
      style: localize(ctx.hass, 'editor_style_line'),
      names: frame.series.map((s) => s.entity.name).join(', '),
    });
    return chartFrame(
      layout,
      header,
      chartArea({
        axes,
        ctx,
        content: svg`${notes.behind}${lines}${notes.front}`,
        label,
        defs,
        overlay: html`${layout.header === 'over' ? headerOver(header) : nothing}
        ${labels ? pointLabels(frame, shown, view, scales, labels, layout.compact, ctx) : nothing}
        ${zoomLayer(ctx, zoom)} ${notes.overlay}
        ${tooltip ? tooltipLayer(ctx, shown, scales, own ?? shared, plotWidth(ctx)) : nothing}`,
        hover,
        gestures: zoom.options.zoom ? zoomGestures(ctx, zoom, hover) : undefined,
        classes: zoom.options.zoom ? `zoomable ${zoom.zoomed ? 'zoomed' : ''}` : '',
        below: zoom.options.overview
          ? overviewStrip(ctx, zoom, frame.range, overviewLines(frame.series, frame.range))
          : nothing,
      }),
    );
  },
};
