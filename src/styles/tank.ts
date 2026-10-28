import { css, html, nothing } from 'lit';
import type { StyleModule } from './index';

/** Vertical tank: a 40 x 140 tube that fills from the bottom. */
export const tank: StyleModule = {
  layout: 'tiles',
  height: 200,
  tilesPerRow: 4,
  styles: css`
    .style-tank .entity {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
      padding: 6px 0;
    }
    .style-tank .layout-tiles {
      justify-content: space-around;
      align-items: flex-end;
    }
    .style-tank .icon {
      color: var(--state-icon-color, var(--secondary-text-color));
      --mdc-icon-size: 22px;
    }
    .style-tank .value {
      font-size: 13px;
      color: var(--primary-text-color);
    }
    .style-tank .tube {
      position: relative;
      width: 40px;
      height: 140px;
      border-radius: 10px;
      overflow: hidden;
      background: var(--cd-track);
    }
    .style-tank .fill {
      position: absolute;
      left: 0;
      right: 0;
      bottom: calc(var(--start) * 100%);
      height: calc((var(--end) - var(--start)) * 100%);
      border-radius: 10px;
      background: linear-gradient(0deg, var(--c-start), var(--c-end));
      transition:
        bottom var(--cd-duration) var(--cd-easing),
        height var(--cd-duration) var(--cd-easing);
    }
    .style-tank .target {
      position: absolute;
      left: 0;
      right: 0;
      height: 3px;
      bottom: calc(var(--target) * (100% - 3px));
      background: var(--primary-text-color);
      transition: bottom var(--cd-duration) var(--cd-easing);
    }
    .style-tank .name {
      max-width: 72px;
      font-size: 12px;
      color: var(--secondary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
  render(e, { show, hass }) {
    return html`
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
      ${show.value ? html`<span class="value">${e.display}</span>` : nothing}
      <div class="tube">
        <div class="fill"></div>
        ${show.target && e.targetPosition !== null && e.available ? html`<div class="target"></div>` : nothing}
      </div>
      ${show.name ? html`<span class="name">${e.name}</span>` : nothing}
    `;
  },
};
