import { css, html, nothing, svg } from 'lit';
import { baseColor } from '../bands';
import { arcPath, needlePath, polar } from '../geometry';
import { fitStatusText } from '../status-text';
import type { Band } from '../types';
import type { StyleModule } from './index';

const CX = 65;
const CY = 66;
const R = 50;
const GAP = 1;

/** A short plain number for inline style (no float noise, no -0). */
const num = (x: number) => String(Math.round(x * 1000) / 1000 + 0);

/**
 * Each band's [from, nextFrom) clipped to [min, max] and mapped to 0..1; empty segments are dropped.
 * The first band also covers everything below its `from`, matching bandFor().
 */
export function bandSegments(bands: Band[], min: number, max: number): { from: number; to: number; color: string }[] {
  const range = max - min;
  const out: { from: number; to: number; color: string }[] = [];
  if (!(range > 0)) return out;
  bands.forEach((band, i) => {
    const lo = i === 0 ? min : Math.max(band.from, min);
    const hi = Math.min(i + 1 < bands.length ? bands[i + 1].from : Infinity, max);
    if (!(hi > lo)) return;
    out.push({ from: (lo - min) / range, to: (hi - min) / range, color: band.color });
  });
  return out;
}

/**
 * Status text inside the dial, above the hub, for a compact gauge: one or two lines, shrunk to
 * fit between the ticks, the last line's baseline at y 55 (just above the hub).
 */
function statusInDial(text: string) {
  const { lines, size } = fitStatusText(text, 58, 11, 7);
  const top = 55 - (lines.length - 1) * 1.2 * size;
  return svg`<text class="na" text-anchor="middle" style="font-size: ${size}px">${lines.map(
    (line, i) => svg`<tspan x=${CX} y=${num(top + i * 1.2 * size)}>${line}</tspan>`,
  )}</text>`;
}

/** Half-circle gauge: banded arc, ticks, and a needle that overshoots into place. */
export const needle: StyleModule = {
  layout: 'tiles',
  height: 140,
  styles: css`
    .needle-gauge {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      padding: 6px 0;
    }
    .needle-gauge svg {
      display: block;
      width: 130px;
      height: 104px;
      overflow: visible;
    }
    .needle-gauge svg.compact {
      height: 82px;
    }
    .needle-gauge .seg {
      fill: none;
      stroke-width: 12px;
      stroke-linecap: round;
    }
    .needle-gauge .tickmark {
      stroke: var(--secondary-text-color);
      stroke-width: 1.2px;
    }
    .needle-gauge .needle {
      fill: var(--primary-text-color);
      transform-box: view-box;
      transform-origin: 65px 66px;
      transition: transform 0.9s cubic-bezier(0.22, 1.4, 0.36, 1);
    }
    :host(:not([ready])) .needle-gauge .needle {
      transform: rotate(-90deg) !important;
    }
    .needle-gauge .hub {
      fill: var(--primary-text-color);
    }
    .needle-gauge .hub-dot {
      fill: var(--card-background-color, var(--ha-card-background));
    }
    .needle-gauge .target-mark {
      fill: var(--primary-text-color);
    }
    .needle-gauge .value {
      font-size: 15px;
      font-weight: 500;
      fill: var(--primary-text-color);
    }
    .needle-gauge .na {
      font-size: 12px;
      fill: var(--secondary-text-color);
    }
    .needle-gauge .icon {
      color: var(--state-icon-color, var(--secondary-text-color));
      --mdc-icon-size: 18px;
    }
    .needle-gauge .name {
      display: flex;
      align-items: center;
      gap: 4px;
      max-width: 130px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .needle-gauge .name span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
  render(e, { show, hass }) {
    const segs = bandSegments(e.config.severity, e.min, e.max);
    const arcs = segs.map((s, i) => {
      const a0 = -90 + 180 * s.from + (i > 0 ? GAP : 0);
      const a1 = -90 + 180 * s.to - (i < segs.length - 1 ? GAP : 0);
      if (!(a1 > a0)) return nothing;
      return svg`<path class="seg" d=${arcPath(CX, CY, R, a0, a1)} stroke=${baseColor(s.color)}></path>`;
    });
    const ticks = Array.from({ length: 11 }, (_, i) => {
      const [x1, y1] = polar(CX, CY, 36, -90 + 18 * i);
      const [x2, y2] = polar(CX, CY, 40, -90 + 18 * i);
      return svg`<line class="tickmark" x1=${x1.toFixed(2)} y1=${y1.toFixed(2)} x2=${x2.toFixed(2)} y2=${y2.toFixed(2)}></line>`;
    });
    let mark: unknown = nothing;
    if (show.target && e.targetPosition !== null && e.available) {
      const deg = -90 + 180 * e.targetPosition;
      const [tx, ty] = polar(CX, CY, R + 7, deg);
      const [lx, ly] = polar(CX, CY, R + 14, deg - 3);
      const [rx, ry] = polar(CX, CY, R + 14, deg + 3);
      mark = svg`<polygon class="target-mark" points="${tx.toFixed(2)},${ty.toFixed(2)} ${lx.toFixed(2)},${ly.toFixed(2)} ${rx.toFixed(2)},${ry.toFixed(2)}"></polygon>`;
    }
    // Without a value line under the hub, the drawing ends at the hub and the name moves up.
    const compact = !show.value;
    return html`<div class="needle-gauge">
      <svg class=${compact ? 'compact' : ''} viewBox="0 0 130 ${compact ? 82 : 104}" aria-hidden="true">
        ${arcs} ${ticks} ${mark}
        ${
          e.available
            ? svg`<g class="needle" style="transform: rotate(${num(-90 + 180 * e.position)}deg)"><path d=${needlePath(CX, CY, 42, 3)}></path></g>`
            : nothing
        }
        <circle class="hub" cx=${CX} cy=${CY} r="6"></circle>
        <circle class="hub-dot" cx=${CX} cy=${CY} r="2.5"></circle>
        ${
          e.available
            ? show.value
              ? svg`<text class="value" x=${CX} y="94" text-anchor="middle">${e.display}</text>`
              : nothing
            : compact
              ? statusInDial(e.display)
              : svg`<text class="na" x=${CX} y="94" text-anchor="middle">${e.display}</text>`
        }
      </svg>
      ${
        show.name || show.icon
          ? html`<div class="name">
              ${
                show.icon
                  ? html`<ha-state-icon
                      class="icon"
                      .hass=${hass}
                      .stateObj=${e.stateObj}
                      .icon=${e.config.icon}
                    ></ha-state-icon>`
                  : nothing
              }
              ${show.name ? html`<span class="name-text">${e.name}</span>` : nothing}
            </div>`
          : nothing
      }
    </div>`;
  },
};
