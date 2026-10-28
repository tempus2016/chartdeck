import { css, html, nothing, svg } from 'lit';
import { solidColor } from '../bands';
import { arcPath, polar, sweepAngles } from '../geometry';
import type { StyleModule } from './index';

let counter = 0;
const ids = new WeakMap<object, string>();

/** A gradient id that is unique per document and stable across re-renders of the same entity. */
export function gradientId(owner: object): string {
  let id = ids.get(owner);
  if (!id) {
    id = `cd-g-${++counter}`;
    ids.set(owner, id);
  }
  return id;
}

const CX = 60;
const CY = 60;
const R = 46;
const STROKE = 11;

/** A short plain number for inline style (no float noise, no -0). */
const num = (x: number) => String(Math.round(x * 1000) / 1000 + 0);

/**
 * Centre value size: 22 when it fits, smaller for long numbers. At about half an em per
 * character this keeps the text within ~62 units, inside the 68-unit disc.
 */
function valueFontSize(text: string): number {
  return Math.min(22, Math.floor(124 / Math.max(1, text.length)));
}

/** Ring (360) and three-quarter arc (270) gauges share one drawing. */
export function radialStyle(sweep: 360 | 270): StyleModule {
  const [a0, a1] = sweepAngles(sweep, [0, 1]);
  const trackD = arcPath(CX, CY, R, a0, a1);
  // The arc's open bottom is empty: crop the drawing just below its round end caps (~98).
  const cropped = sweep < 360;
  return {
    layout: 'tiles',
    height: cropped ? 135 : 155,
    styles: css`
      .radial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        padding: 6px 0;
      }
      /* The dial is 124 px wide, smaller only when its tile is narrower; positions inside it
         are in cqw (1 % of the dial's width) so they scale with it. */
      .radial .dial {
        position: relative;
        container-type: inline-size;
        width: min(124px, 100%);
        aspect-ratio: 124 / 120;
      }
      .radial svg {
        display: block;
        width: 100%;
        height: 100%;
        overflow: visible;
      }
      .radial.cropped .dial {
        aspect-ratio: 124 / 100;
      }
      .radial .track {
        fill: none;
        stroke: var(--cd-track);
        stroke-width: 11px;
        stroke-linecap: round;
      }
      .radial .disc {
        fill: var(--cd-track);
        opacity: 0.5;
      }
      .radial .value-arc {
        fill: none;
        stroke-width: 11px;
        stroke-linecap: round;
        transition:
          stroke-dasharray var(--cd-duration) var(--cd-easing),
          stroke-dashoffset var(--cd-duration) var(--cd-easing);
      }
      :host(:not([ready])) .radial .value-arc {
        stroke-dasharray: 0 100 !important;
        stroke-dashoffset: 0 !important;
      }
      .radial .value-arc.empty {
        opacity: 0;
      }
      .radial .stop-start {
        stop-color: var(--c-start);
      }
      .radial .stop-end {
        stop-color: var(--c-end);
      }
      .radial .tick {
        stroke: var(--primary-text-color);
        stroke-width: 2.5px;
      }
      .radial .value {
        font-size: 22px;
        font-weight: 500;
        fill: var(--primary-text-color);
      }
      .radial .unit {
        font-size: 11px;
        fill: var(--secondary-text-color);
      }
      .radial .na {
        font-size: 12px;
        fill: var(--secondary-text-color);
      }
      .radial .icon {
        position: absolute;
        left: 50%;
        top: 25cqw;
        transform: translateX(-50%);
        color: var(--state-icon-color, var(--secondary-text-color));
        --mdc-icon-size: 14.52cqw;
      }
      /* With the value hidden, the icon is all that sits in the hollow, so it moves to the
         dial centre (y 60, also on the cropped arc) and grows to fill it. */
      .radial .icon.centre {
        top: 48.39cqw;
        transform: translate(-50%, -50%);
        --mdc-icon-size: 22.58cqw;
      }
      .radial .name {
        max-width: 124px;
        font-size: 12px;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `,
    render(e, { show, hass }) {
      const id = gradientId(e.config);
      const empty = e.span[1] - e.span[0] <= 0;
      // Plain numbers (pathLength 100), not calc() on custom properties, so every engine draws them.
      const dash = `stroke-dasharray: ${num((e.span[1] - e.span[0]) * 100)} 100; stroke-dashoffset: ${num(-e.span[0] * 100)}`;
      const solid = solidColor(e.band.color);
      const shift = show.icon ? 6 : 0;
      const size = valueFontSize(e.valueText);
      let tick = nothing as unknown;
      if (show.target && e.targetPosition !== null && e.available) {
        const deg = sweepAngles(sweep, [e.targetPosition, e.targetPosition])[0];
        const [x1, y1] = polar(CX, CY, R - STROKE / 2 - 1, deg);
        const [x2, y2] = polar(CX, CY, R + STROKE / 2 + 1, deg);
        tick = svg`<line class="tick" x1=${x1.toFixed(2)} y1=${y1.toFixed(2)} x2=${x2.toFixed(2)} y2=${y2.toFixed(2)}></line>`;
      }
      return html`<div class="radial ${cropped ? 'cropped' : ''}">
        <div class="dial">
          <svg viewBox="0 0 120 ${cropped ? 100 : 120}" aria-hidden="true">
            <defs>
              <linearGradient id=${id} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0" stop-color=${solid}></stop>
                <stop class="stop-end" offset="1" stop-color=${solid}></stop>
              </linearGradient>
            </defs>
            <circle class="disc" cx=${CX} cy=${CY} r="34"></circle>
            <path class="track" d=${trackD}></path>
            ${
              e.available
                ? svg`<path
                  class="value-arc ${empty ? 'empty' : ''}"
                  d=${trackD}
                  pathLength="100"
                  style=${dash}
                  stroke="url(#${id})"
                ></path>`
                : nothing
            }
            ${tick}
            ${
              e.available
                ? svg`${
                    show.value
                      ? svg`<text
                        class="value"
                        x=${CX}
                        y=${CY + 4 + shift}
                        text-anchor="middle"
                        style=${size < 22 ? `font-size: ${size}px` : nothing}
                      >${e.valueText}</text>
                      <text class="unit" x=${CX} y=${CY + 20 + shift} text-anchor="middle">${e.unit}</text>`
                      : nothing
                  }`
                : svg`<text class="na" x=${CX} y=${CY + 4} text-anchor="middle">${e.display}</text>`
            }
          </svg>
          ${
            show.icon && e.available
              ? html`<ha-state-icon
                  class="icon ${show.value ? '' : 'centre'}"
                  .hass=${hass}
                  .stateObj=${e.stateObj}
                  .icon=${e.config.icon}
                ></ha-state-icon>`
              : nothing
          }
        </div>
        ${show.name ? html`<span class="name">${e.name}</span>` : nothing}
      </div>`;
    },
  };
}

export const ring = radialStyle(360);
export const arc = radialStyle(270);
