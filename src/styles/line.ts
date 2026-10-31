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
  seriesHeader,
  validateHistoryOptions,
} from '../chart/frame';
import type { ChartSeries, HistoryFrame } from '../chart/frame';
import { chartArea, gridStyles, plotAxes, plotWidth, stopChartWidth } from '../chart/grid';
import type { PlotScales } from '../chart/grid';
import { runPath, runs } from '../chart/paths';
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
import { lineEditor } from '../editor/chart-editors';
import { formatNumber } from '../format';
import { localize, registerStrings } from '../localize';
import type { ChartStyleModule } from './index';
import type { CardConfig, ResolvedBand } from '../types';

/** Points kept per series after thinning: about two per pixel on a wide card. */
const MAX_POINTS = 500;
/** Above this many points a series gets no value labels: they would overlap. */
const MAX_LABELS = 40;

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

function seriesPath(s: ChartSeries, scales: PlotScales, stroke: string): SVGTemplateResult {
  const thinned = downsample(s.points, MAX_POINTS);
  const d = runs(thinned)
    .map((run) =>
      runPath(
        run.map((p) => [scales.x(p.t), scales.y(p.v as number)]),
        s.curve,
      ),
    )
    .join('');
  return svg`<path
    class="line ${s.dash ? 'dashed' : ''}"
    d=${d}
    fill="none"
    stroke=${stroke}
  ></path>`;
}

function valueLabels(frame: HistoryFrame, scales: PlotScales, ctx: Parameters<ChartStyleModule['render']>[0]) {
  return html`<div class="point-labels">
    ${frame.series.flatMap((s) => {
      // The points at either edge are carried readings, not new ones: no label.
      const readings = s.points.filter((p) => p.v !== null && p.t !== frame.range.start && p.t !== frame.range.end);
      if (readings.length > MAX_LABELS) return [];
      return readings.map(
        (p) =>
          html`<span
            class="point-label"
            style="left:${(scales.x(p.t) / VIEW_W) * 100}%;top:${(scales.y(p.v as number) / VIEW_H) * 100}%"
            >${formatNumber(p.v as number, s.entity.decimals, ctx.hass)}</span
          >`,
      );
    })}
  </div>`;
}

export const line: ChartStyleModule = {
  layout: 'chart',
  group: 'history',
  height: 240,
  styles: css`
    ${frameStyles}
    ${gridStyles}
    ${tooltipStyles}
    .style-line .line {
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
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
    if (raw.color_by !== undefined && !COLOR_BY.includes(raw.color_by as (typeof COLOR_BY)[number])) {
      throw new Error(`"color_by" must be one of: ${COLOR_BY.join(', ')}`);
    }
  },
  editor: lineEditor,
  disconnect(host) {
    disconnectHistory(host);
    stopChartWidth(host);
    stopHover(host);
  },
  render(ctx) {
    const frame = historyFrame(ctx);
    const header = seriesHeader(frame, ctx);
    const message = frameMessage(frame, ctx);
    if (message) return html`${header}${message}`;
    const axes = plotAxes(ctx, frame.range, extent(frame.series.map((s) => s.points)));
    const { scales } = axes;
    const tooltip = tooltipEnabled(ctx.raw);
    const byBands = ctx.raw.color_by === 'bands';
    const defs = byBands
      ? svg`${frame.series.map((s) => bandGradient(`cd-bands-${s.index}`, s.entity.bands, scales))}`
      : nothing;
    const lines = svg`${frame.series.map((s) =>
      seriesPath(s, scales, byBands ? `url(#cd-bands-${s.index})` : s.color),
    )}`;
    const label = localize(ctx.hass, 'chart_aria', {
      style: localize(ctx.hass, 'editor_style_line'),
      names: frame.series.map((s) => s.entity.name).join(', '),
    });
    return html`${header}
    ${chartArea({
      axes,
      ctx,
      content: lines,
      label,
      defs,
      overlay: html`${ctx.raw.labels === true ? valueLabels(frame, scales, ctx) : nothing}
      ${tooltip ? tooltipLayer(ctx, frame.series, scales, hoverTime(ctx.host), plotWidth(ctx)) : nothing}`,
      hover: tooltip
        ? hoverHandlers(
            ctx,
            frame.range,
            frame.series.map((s) => s.points),
          )
        : undefined,
    })}`;
  },
};
