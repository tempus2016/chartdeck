import { css, html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { baseColor } from '../bands';
import { formatNumber, withUnit } from '../format';
import type { CostPart } from '../history/cost';
import type { Point } from '../history/types';
import type { ChartContext } from '../styles/index';
import type { ChartSeries } from './frame';

/*
 * A column chart's cost split by tariff band (`cost.split`): each column is stacked from its
 * bands' shares, the bands are named in a key under the header, and the tooltip lists each band's
 * share of the hovered column. See history/cost.ts for the sums.
 */

/** Each band's share of the group starting at `t` (missing or unknown shares are 0). */
export function partsAt(parts: readonly CostPart[], t: number): { name: string; color: string; v: number }[] {
  return parts.map((p) => ({ name: p.name, color: p.color, v: valueAt(p.points, t) ?? 0 }));
}

function valueAt(points: readonly Point[], t: number): number | null {
  for (const p of points) if (p.t === t) return p.v;
  return null;
}

/** The key of tariff bands under the header, once for every split series (they share bands). */
export function costLegend(series: readonly ChartSeries[]): TemplateResult | typeof nothing {
  const seen = new Map<string, string>();
  for (const s of series) for (const p of s.costParts ?? []) if (!seen.has(p.name)) seen.set(p.name, p.color);
  if (!seen.size) return nothing;
  return html`<div class="cost-legend">
    ${[...seen].map(
      ([name, color]) =>
        html`<span class="cost-band"><span class="swatch" style="background:${baseColor(color)}"></span>${name}</span>`,
    )}
  </div>`;
}

/** The tooltip's rows for the bands of each split series at the hovered column. */
export function costPartRows(
  ctx: ChartContext,
  rows: { s: ChartSeries; p: Point | undefined }[],
  groupStart: (t: number) => number | undefined,
): TemplateResult | typeof nothing {
  const out: TemplateResult[] = [];
  for (const { s, p } of rows) {
    if (!s.costParts || !p || p.v === null) continue;
    const start = groupStart(p.t);
    if (start === undefined) continue;
    for (const part of partsAt(s.costParts, start)) {
      if (part.v === 0) continue;
      out.push(
        html`<div class="tooltip-row cost-part">
          <span class="swatch" style="background:${baseColor(part.color)}"></span>
          <span class="tooltip-name">${part.name}</span>
          <span class="tooltip-value"
            >${withUnit(formatNumber(part.v, s.entity.decimals, ctx.hass), s.entity.unit)}</span
          >
        </div>`,
      );
    }
  }
  return out.length ? html`${out}` : nothing;
}

export const costPartStyles = css`
  .cost-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 2px 12px;
    padding: 0 0 6px;
    font-size: 0.8125em;
    color: var(--secondary-text-color);
  }
  .cost-band {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .cost-band .swatch {
    width: 8px;
    height: 8px;
  }
  .tooltip-row.cost-part .tooltip-name {
    padding-left: 10px;
  }
`;
