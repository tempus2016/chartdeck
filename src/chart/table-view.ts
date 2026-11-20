import { css, html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import type { FieldBinding } from '../editor/schemas';
import { formatNumber, withUnit } from '../format';
import { shownValue } from '../history/energy';
import type { Aggregate, GroupUnit } from '../history/group';
import { localize } from '../localize';
import type { ChartContext } from '../styles/index';
import type { CardConfig, HomeAssistant } from '../types';
import { formatDateTime } from './axes';
import { columnTable } from './columns';
import { periodLabel } from './frame';
import type { HistoryFrame } from './frame';
import type { ChartLayout } from './layout';
import { configHash } from './legend-toggle';

/*
 * Table view (`table_toggle: true`): a Chart | Table switch in a history chart's header. The table
 * lists the same readings the chart draws: one row per group (or per reading when ungrouped), the
 * time, each series' value, and how far each value sits from that series' average over the span
 * (`table_change`, on by default). It is a real <table> with a caption and header cells, scrolls
 * inside the chart's own height, and formats numbers and times the way the rest of the card does.
 * The choice is kept on the card and in the browser's localStorage under a key made from the
 * card's config, as the legend toggles' hidden series are.
 */

export const TABLE_MODES = ['chart', 'table'] as const;
export type TableMode = (typeof TABLE_MODES)[number];

/** Rows kept in the table: the latest ones, so a long ungrouped history stays quick to draw. */
export const MAX_TABLE_ROWS = 250;

const STORAGE_PREFIX = 'chartdeck-table-';

/** Totals: a group still running ("today so far") isn't comparable with whole ones. */
const TOTALS: readonly Aggregate[] = ['sum', 'change'];

export const TABLE_VIEW_FIELDS: FieldBinding[] = [
  { name: 'table_toggle', path: ['table_toggle'], default: false },
  { name: 'table_change', path: ['table_change'], default: true },
];

/** The table fields; the change column's switch shows once the toggle is on (cache under `tableVariant`). */
export function tableViewSchema(config: CardConfig | undefined) {
  return [
    { name: 'table_toggle', selector: { boolean: {} } },
    ...(config?.table_toggle === true ? [{ name: 'table_change', selector: { boolean: {} } }] : []),
  ];
}

export const tableVariant = (config: CardConfig | undefined) => (config?.table_toggle === true ? 'table' : '');

export function validateTableView(raw: CardConfig): void {
  for (const k of ['table_toggle', 'table_change']) {
    if (raw[k] !== undefined && typeof raw[k] !== 'boolean') throw new Error(`"${k}" must be true or false`);
  }
}

// ---------------------------------------------------------------------------------------------
// Pure maths.

/**
 * The average of a series' values, each weighted by `weights[i]` when given (ungrouped readings:
 * how long each was held), else every value counting once (one group each). Gaps and the rows in
 * `skip` are left out; null when nothing is left.
 */
export function tableAverage(
  values: readonly (number | null)[],
  weights?: readonly number[],
  skip: ReadonlySet<number> = new Set(),
): number | null {
  let sum = 0;
  let total = 0;
  values.forEach((v, i) => {
    if (v === null || !Number.isFinite(v) || skip.has(i)) return;
    const w = weights ? weights[i] : 1;
    if (!(w > 0)) return;
    sum += v * w;
    total += w;
  });
  return total > 0 ? sum / total : null;
}

/** How far `v` sits from `average`, in percent of the average's size; null with no average or one of zero. */
export function changeFromAverage(v: number | null, average: number | null): number | null {
  if (v === null || average === null || average === 0) return null;
  return ((v - average) / Math.abs(average)) * 100;
}

/** A change as "+9 %", "−4 %" or "0 %": whole percent, signed, in the user's number format. */
export function formatChange(change: number, hass?: HomeAssistant): string {
  const rounded = Math.round(change);
  const text = formatNumber(Math.abs(rounded), 0, hass);
  const sign = rounded > 0 ? '+' : rounded < 0 ? '−' : '';
  return withUnit(`${sign}${text}`, '%');
}

/** The rows kept from `count`: the latest `max`, as a start index. */
export function firstKept(count: number, max = MAX_TABLE_ROWS): number {
  return Math.max(0, count - max);
}

// ---------------------------------------------------------------------------------------------
// The chosen view, per card.

interface CardTable {
  storageKey: string;
  mode: TableMode;
}

const cards = new WeakMap<HTMLElement, CardTable>();

function storage(): Storage | undefined {
  try {
    return globalThis.localStorage ?? undefined;
  } catch {
    return undefined;
  }
}

function load(storageKey: string): TableMode {
  try {
    return storage()?.getItem(storageKey) === 'table' ? 'table' : 'chart';
  } catch {
    return 'chart';
  }
}

function save(state: CardTable): void {
  try {
    const store = storage();
    if (!store) return;
    if (state.mode === 'chart') store.removeItem(state.storageKey);
    else store.setItem(state.storageKey, state.mode);
  } catch {
    // Private windows and full storage: the choice still holds on the card until the page reloads.
  }
}

function stateFor(ctx: Pick<ChartContext, 'raw' | 'host'>): CardTable {
  const storageKey = STORAGE_PREFIX + configHash(ctx.raw);
  let state = cards.get(ctx.host);
  if (!state || state.storageKey !== storageKey) {
    state = { storageKey, mode: load(storageKey) };
    cards.set(ctx.host, state);
  }
  return state;
}

/** What this card shows: its chart, or (with `table_toggle`) the table when chosen. */
export function tableMode(ctx: Pick<ChartContext, 'raw' | 'host'>): TableMode {
  return ctx.raw.table_toggle === true ? stateFor(ctx).mode : 'chart';
}

function setMode(ctx: ChartContext, mode: TableMode): void {
  const state = stateFor(ctx);
  if (state.mode === mode) return;
  state.mode = mode;
  save(state);
  ctx.requestUpdate();
}

// ---------------------------------------------------------------------------------------------
// The switch and the header it sits in.

function modeSwitch(ctx: ChartContext, mode: TableMode): TemplateResult {
  const t = (k: string) => localize(ctx.hass, k);
  const button = (value: TableMode, key: string) =>
    html`<button
      type="button"
      class="table-switch-option ${mode === value ? 'on' : ''}"
      aria-pressed=${mode === value ? 'true' : 'false'}
      @click=${(ev: Event) => {
        ev.stopPropagation();
        setMode(ctx, value);
      }}
    >
      ${t(key)}
    </button>`;
  return html`<div
    class="table-switch"
    role="group"
    aria-label=${t('table_toggle_group')}
    @pointerdown=${(ev: Event) => ev.stopPropagation()}
  >
    ${button('chart', 'table_toggle_chart')}${button('table', 'table_toggle_table')}
  </div>`;
}

export interface TableView {
  /** The layout to draw with: the header comes above the plot while the table shows, and always has the switch. */
  layout: ChartLayout;
  /** The chart's header with the switch at its end. */
  header: TemplateResult | typeof nothing;
  /** Draw the table in place of the plot. */
  table: boolean;
}

/**
 * The chart's header and layout with the Chart | Table switch, when the card asks for it. A hidden
 * header still keeps a row for the switch, so the chart can always be brought back. While the
 * table shows, a header laid over the plot sits above it instead.
 */
export function tableView(ctx: ChartContext, layout: ChartLayout, header: TemplateResult | typeof nothing): TableView {
  if (ctx.raw.table_toggle !== true) return { layout, header, table: false };
  const mode = tableMode(ctx);
  const table = mode === 'table';
  const hidden = layout.header === 'hidden';
  const place = hidden || (table && layout.header === 'over') ? 'above' : layout.header;
  return {
    layout: { ...layout, header: place },
    header: html`<div class="table-head">
      <div class="table-head-main">${hidden ? nothing : header}</div>
      ${modeSwitch(ctx, mode)}
    </div>`,
    table,
  };
}

// ---------------------------------------------------------------------------------------------
// The table.

export interface TableOptions {
  /** A group's full name ("Tue 29 Oct"), from the chart that groups. Ungrouped rows use their date and time. */
  heading?: (start: number, end: number, unit: GroupUnit, hass: HomeAssistant | undefined) => string;
  now?: number;
}

const TIME_HEADERS: Record<GroupUnit, string> = {
  hour: 'table_hour',
  day: 'table_day',
  week: 'table_week',
  month: 'table_month',
};

/** The frame's readings as a table: a row per group (or reading), a column per series, and their change from average. */
export function dataTable(ctx: ChartContext, frame: HistoryFrame, options: TableOptions = {}): TemplateResult {
  const { hass } = ctx;
  const now = options.now ?? Date.now();
  const group = frame.group;
  const series = frame.series;
  const rows = columnTable(
    series.map((s) => s.points),
    group ? Infinity : frame.range.end,
  );
  // Energy drawn below the axis (grid export, battery charging) reads positive, as in the tooltip.
  const values = series.map((s, k) => rows.values[k].map((v) => (v === null ? null : shownValue(s.entity, v))));
  const showChange = ctx.raw.table_change !== false;
  // A total for a group still running (today so far) is left out of the average and not compared.
  const running = new Set<number>();
  if (group && TOTALS.includes(group.aggregate)) {
    rows.ends.forEach((end, i) => {
      if (end > now) running.add(i);
    });
  }
  // Ungrouped, each reading counts for as long as it was held; grouped, each group counts once.
  const weights = group ? undefined : rows.times.map((t, i) => rows.ends[i] - t);
  const averages = values.map((v) => tableAverage(v, weights, running));
  const first = firstKept(rows.times.length);
  const heading = (i: number) =>
    group && options.heading
      ? options.heading(rows.times[i], rows.ends[i], group.unit, hass)
      : formatDateTime(rows.times[i], hass);
  const period = periodLabel(frame.period, frame.range, frame.back, frame.zone, hass);
  const caption =
    first > 0
      ? localize(hass, 'table_caption_latest', {
          period,
          shown: rows.times.length - first,
          total: rows.times.length,
        })
      : period;
  const t = (k: string, vars?: Record<string, string>) => localize(hass, k, vars);
  const cell = (k: number, i: number) => {
    const s = series[k];
    const v = values[k][i];
    const value = v === null ? '—' : formatNumber(v, s.entity.decimals, hass);
    if (!showChange) return html`<td class="n">${value}</td>`;
    let change = '—';
    if (running.has(i)) change = t('table_so_far');
    else {
      const c = changeFromAverage(v, averages[k]);
      if (c !== null) change = formatChange(c, hass);
    }
    return html`<td class="n">${value}</td>
      <td class="n change">${change}</td>`;
  };
  const indexes = rows.times.map((_, i) => i).slice(first);
  return html`<div class="data-table-wrap" tabindex="0" role="region" aria-label=${caption}>
    <table class="data-table">
      <caption>
        ${caption}
      </caption>
      <thead>
        <tr>
          <th scope="col">${t(group ? TIME_HEADERS[group.unit] : 'table_time')}</th>
          ${series.map(
            (s) =>
              html`<th scope="col" class="n">
                  <span class="table-series"
                    ><span class="swatch" style="background:${s.color}"></span>${s.entity.name}</span
                  >${s.entity.unit ? html` <span class="table-unit">${s.entity.unit}</span>` : nothing}
                </th>
                ${
                  showChange
                    ? html`<th
                        scope="col"
                        class="n change"
                        aria-label=${t('table_vs_average_of', { name: s.entity.name })}
                        title=${t('table_vs_average_of', { name: s.entity.name })}
                      >
                        ${t('table_vs_average')}
                      </th>`
                    : nothing
                }`,
          )}
        </tr>
      </thead>
      <tbody>
        ${indexes.map(
          (i) =>
            html`<tr>
              <th scope="row">${heading(i)}</th>
              ${series.map((_, k) => cell(k, i))}
            </tr>`,
        )}
      </tbody>
    </table>
  </div>`;
}

export const tableViewStyles = css`
  .table-head {
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }
  .table-head-main {
    flex: 1;
    min-width: 0;
  }
  .table-switch {
    flex: none;
    display: inline-flex;
    margin-bottom: 4px;
    padding: 2px;
    border-radius: 14px;
    background: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
  }
  .table-switch-option {
    font: inherit;
    font-size: 0.75em;
    line-height: 1;
    color: var(--secondary-text-color);
    background: none;
    border: none;
    border-radius: 12px;
    padding: 5px 10px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }
  .table-switch-option.on {
    color: var(--primary-text-color);
    background: var(--card-background-color, #fff);
    box-shadow: 0 1px 2px color-mix(in srgb, #000 20%, transparent);
    font-weight: 500;
  }
  .table-switch-option:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }
  .header-over .table-switch {
    margin: 2px 0;
  }
  .data-table-wrap {
    height: 180px;
    overflow: auto;
    border-radius: 4px;
  }
  .frame.compact .data-table-wrap {
    height: 110px;
  }
  .data-table-wrap:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 1px;
  }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.8125em;
    font-variant-numeric: tabular-nums;
  }
  .data-table caption {
    caption-side: top;
    text-align: start;
    padding: 0 6px 4px;
    font-size: 0.875em;
    color: var(--secondary-text-color);
  }
  .data-table th,
  .data-table td {
    padding: 4px 6px;
    text-align: start;
    white-space: nowrap;
    border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2));
  }
  .data-table thead th {
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    color: var(--secondary-text-color);
    font-weight: 500;
    font-size: 0.9em;
  }
  /* On a narrow card a long time wraps, and stays in view while the values scroll sideways. */
  .data-table tbody th {
    font-weight: normal;
    color: var(--primary-text-color);
    white-space: normal;
    min-width: 9em;
  }
  .data-table tbody th,
  .data-table thead th:first-child {
    position: sticky;
    inset-inline-start: 0;
    background: var(--ha-card-background, var(--card-background-color, #fff));
  }
  .data-table tbody th {
    z-index: 1;
  }
  .data-table thead th:first-child {
    z-index: 2;
  }
  .data-table .n {
    text-align: end;
  }
  .data-table td.change {
    color: var(--secondary-text-color);
  }
  .table-series {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .table-series .swatch {
    width: 8px;
    height: 8px;
  }
  .table-unit {
    font-weight: normal;
    opacity: 0.8;
  }
`;
