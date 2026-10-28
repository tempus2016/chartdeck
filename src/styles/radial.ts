import { css, html, nothing, svg } from 'lit';
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

/** Ring (360) and three-quarter arc (270) gauges share one drawing. */
export function radialStyle(sweep: 360 | 270): StyleModule {
  const [a0, a1] = sweepAngles(sweep, [0, 1]);
  const trackD = arcPath(CX, CY, R, a0, a1);
  return {
    layout: 'tiles',
    height: 150,
    styles: css`
      .radial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        padding: 6px 0;
      }
      .radial .dial {
        position: relative;
        width: 124px;
        height: 120px;
      }
      .radial svg {
        display: block;
        width: 124px;
        height: 120px;
        overflow: visible;
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
        stroke-dasharray: calc((var(--end) - var(--start)) * 100) 100;
        stroke-dashoffset: calc(var(--start) * -100);
        transition:
          stroke-dasharray var(--cd-duration) var(--cd-easing),
          stroke-dashoffset var(--cd-duration) var(--cd-easing);
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
        top: 31px;
        transform: translateX(-50%);
        color: var(--state-icon-color, var(--secondary-text-color));
        --mdc-icon-size: 18px;
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
      const shift = show.icon ? 6 : 0;
      let tick = nothing as unknown;
      if (show.target && e.targetPosition !== null && e.available) {
        const deg = sweepAngles(sweep, [e.targetPosition, e.targetPosition])[0];
        const [x1, y1] = polar(CX, CY, R - STROKE / 2 - 1, deg);
        const [x2, y2] = polar(CX, CY, R + STROKE / 2 + 1, deg);
        tick = svg`<line class="tick" x1=${x1.toFixed(2)} y1=${y1.toFixed(2)} x2=${x2.toFixed(2)} y2=${y2.toFixed(2)}></line>`;
      }
      return html`<div class="radial">
        <div class="dial">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <linearGradient id=${id} x1="0" y1="1" x2="1" y2="0">
                <stop class="stop-start" offset="0"></stop>
                <stop class="stop-end" offset="1"></stop>
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
                  stroke="url(#${id})"
                ></path>`
                : nothing
            }
            ${tick}
            ${
              e.available
                ? svg`${
                    show.value
                      ? svg`<text class="value" x=${CX} y=${CY + 4 + shift} text-anchor="middle">${e.valueText}</text>
                      <text class="unit" x=${CX} y=${CY + 20 + shift} text-anchor="middle">${e.unit}</text>`
                      : nothing
                  }`
                : svg`<text class="na" x=${CX} y=${CY + 4} text-anchor="middle">${e.display}</text>`
            }
          </svg>
          ${
            show.icon && e.available
              ? html`<ha-state-icon
                  class="icon"
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
