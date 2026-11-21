import { css, html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { formatNumber, withUnit } from '../format';
import { shownValue } from '../history/energy';
import type { Point, Range } from '../history/types';
import { localize } from '../localize';
import type { ChartContext } from '../styles/index';
import type { CardConfig, HomeAssistant } from '../types';
import type { FieldBinding } from '../editor/schemas';
import { formatDateTime, formatTime } from './axes';
import type { ChartSeries } from './frame';
import { valueAt } from './stack';
import { formatDuration } from './timeline';

/*
 * A plain-language summary of a history chart, for screen readers and, when asked, printed under
 * the plot: "Rose from 18.1 to 22.0 °C over 6 h. Peak 23.1 °C at 14:10. Now falling." Worked out
 * from what was drawn, in the card's language. `summary: auto` (the default) writes it, `off`
 * leaves it out, any other text is used as it is; `show_summary: true` shows it under the chart.
 */

/** A change smaller than this share of the series' spread reads as "about the same". */
const LEVEL_SHARE = 0.1;
/** "Now" looks back this share of the span to see which way the series is heading. */
const RECENT_SHARE = 0.1;

/** How long the chart covers: hours up to two days ("24 h", "36 h"), then "7 d", "30 d". */
export function spanText(ms: number): string {
  return ms > 0 && ms <= 48 * 3_600_000 && ms % 3_600_000 === 0 ? `${ms / 3_600_000} h` : formatDuration(ms);
}

export type Direction = 'rising' | 'falling' | 'steady';

/** What a summary says about one series, before it is put into words. */
export interface SeriesFacts {
  first: number;
  last: number;
  min: number;
  minAt: number;
  max: number;
  maxAt: number;
  /** Over the whole span. */
  overall: Direction;
  /** Over the last tenth of it. */
  recent: Direction;
}

function direction(from: number, to: number, spread: number): Direction {
  const change = to - from;
  if (spread <= 0 || Math.abs(change) < spread * LEVEL_SHARE) return 'steady';
  return change > 0 ? 'rising' : 'falling';
}

/**
 * The facts about one series' points (gaps skipped): where it started and ended, its highest
 * and lowest and when, and which way it went overall and lately. Undefined when nothing was
 * recorded. Ties keep the first time a peak or low was reached.
 */
export function seriesFacts(points: readonly Point[]): SeriesFacts | undefined {
  const known = points.filter((p): p is Point & { v: number } => p.v !== null && Number.isFinite(p.v));
  if (known.length === 0) return undefined;
  let min = known[0];
  let max = known[0];
  for (const p of known) {
    if (p.v < min.v) min = p;
    if (p.v > max.v) max = p;
  }
  const first = known[0];
  const last = known[known.length - 1];
  const spread = max.v - min.v;
  const back = last.t - (last.t - first.t) * RECENT_SHARE;
  const before = valueAt(known, back) ?? first.v;
  return {
    first: first.v,
    last: last.v,
    min: min.v,
    minAt: min.t,
    max: max.v,
    maxAt: max.t,
    overall: direction(first.v, last.v, spread),
    recent: direction(before, last.v, spread),
  };
}

export const SUMMARY_FIELDS: FieldBinding[] = [
  { name: 'summary_text', path: ['summary'] },
  { name: 'summary_show', path: ['show_summary'], default: false },
];

export function summarySchema() {
  return [
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'summary_text', selector: { text: {} } },
        { name: 'summary_show', selector: { boolean: {} } },
      ],
    },
  ];
}

export function validateSummary(raw: CardConfig): void {
  if (raw.summary !== undefined && typeof raw.summary !== 'string') {
    throw new Error('"summary" must be auto, off, or your own text');
  }
  if (raw.show_summary !== undefined && typeof raw.show_summary !== 'boolean') {
    throw new Error('"show_summary" must be true or false');
  }
}

export interface SummaryOptions {
  /** The span the chart covers. */
  range: Range;
  /** The span reaches the present, so "now" means something. */
  live: boolean;
  /**
   * How to name the time of a peak or low; default a clock time for a day or less, else a date
   * and time. A chart of columns names the column ("Tue 18 Nov").
   */
  when?: (t: number) => string;
}

/** One series' sentences, in the card's language. */
export function describeSeries(
  facts: SeriesFacts,
  s: Pick<ChartSeries, 'entity'>,
  options: SummaryOptions,
  hass: HomeAssistant | undefined,
): string {
  const value = (v: number) => withUnit(formatNumber(shownValue(s.entity, v), s.entity.decimals, hass), s.entity.unit);
  const span = options.range.end - options.range.start;
  const when = options.when ?? ((t: number) => (span <= 86_400_000 ? formatTime(t, hass) : formatDateTime(t, hass)));
  const t = (k: string, vars: Record<string, string>) => localize(hass, k, vars);
  const over = spanText(span);
  const parts: string[] = [];
  if (facts.overall === 'steady') parts.push(t('summary_level', { value: value(facts.last), span: over }));
  else {
    parts.push(
      t(facts.overall === 'rising' ? 'summary_rose' : 'summary_fell', {
        from: value(facts.first),
        to: value(facts.last),
        span: over,
      }),
    );
  }
  // A peak or low only when it isn't where the series started or ended.
  if (facts.max > Math.max(facts.first, facts.last)) {
    parts.push(t('summary_peak', { value: value(facts.max), time: when(facts.maxAt) }));
  }
  if (facts.min < Math.min(facts.first, facts.last)) {
    parts.push(t('summary_low', { value: value(facts.min), time: when(facts.minAt) }));
  }
  if (options.live) parts.push(t(`summary_now_${facts.recent}`, {}));
  return parts.join(' ');
}

/**
 * The chart's summary: the card's own text, nothing when it is `off`, or one series' sentences
 * after another (each named when there are several). Undefined when there is nothing to say.
 */
export function summaryText(
  raw: CardConfig,
  series: readonly Pick<ChartSeries, 'entity' | 'points'>[],
  options: SummaryOptions,
  hass: HomeAssistant | undefined,
): string | undefined {
  const own = typeof raw.summary === 'string' ? raw.summary.trim() : '';
  if (own === 'off') return undefined;
  if (own !== '' && own !== 'auto') return own;
  const texts = series.flatMap((s) => {
    const facts = seriesFacts(s.points);
    if (!facts) return [];
    const text = describeSeries(facts, s, options, hass);
    return [series.length > 1 ? localize(hass, 'summary_series', { name: s.entity.name, text }) : text];
  });
  return texts.length ? texts.join(' ') : undefined;
}

/** The id the plot's `aria-describedby` points at. One chart per card, inside its shadow root. */
export const SUMMARY_ID = 'cd-summary';

/** What `chartArea` needs to describe the plot: the text, and whether it shows. */
export interface ChartSummary {
  text: string;
  show: boolean;
}

/** The summary for a chart, ready for `chartArea`, or undefined when there is none. */
export function chartSummary(
  ctx: Pick<ChartContext, 'raw' | 'hass'>,
  series: readonly Pick<ChartSeries, 'entity' | 'points'>[],
  options: SummaryOptions,
): ChartSummary | undefined {
  const text = summaryText(ctx.raw, series, options, ctx.hass);
  return text ? { text, show: ctx.raw.show_summary === true } : undefined;
}

/** The summary's paragraph: under the chart, or kept for screen readers only. */
export function summaryBlock(summary: ChartSummary | undefined): TemplateResult | typeof nothing {
  if (!summary) return nothing;
  return html`<p id=${SUMMARY_ID} class="chart-summary ${summary.show ? '' : 'sr-only'}">${summary.text}</p>`;
}

export const summaryStyles = css`
  .chart-summary {
    margin: 8px 0 0;
    font-size: 0.875em;
    line-height: 1.4;
    color: var(--secondary-text-color);
  }
  .frame.compact .chart-summary {
    margin-top: 4px;
    font-size: 0.8em;
  }
  .chart-summary.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }
`;
