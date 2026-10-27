import { LitElement, html, css } from 'lit';
import { VERSION } from './version';

// Placeholder so the repository builds, tests and validates end to end. The real card
// replaces this once the design is agreed.

console.info(`%c CHARTDECK %c ${VERSION} `, 'color:#fff;background:#3b8bff;font-weight:700', 'color:#3b8bff');

export class ChartdeckCard extends LitElement {
  static styles = css`
    .placeholder {
      padding: 16px;
      color: var(--secondary-text-color);
    }
  `;

  setConfig(config: Record<string, unknown>): void {
    if (!config) throw new Error('Invalid configuration');
  }

  getCardSize(): number {
    return 1;
  }

  render() {
    return html`<ha-card header="Chartdeck"><div class="placeholder">In development (${VERSION})</div></ha-card>`;
  }
}

if (!customElements.get('chartdeck-card')) {
  customElements.define('chartdeck-card', ChartdeckCard);
}

interface CustomCardEntry {
  type: string;
  name: string;
  description: string;
  preview?: boolean;
  documentationURL?: string;
}
const registry = ((window as unknown as { customCards?: CustomCardEntry[] }).customCards ??= []);
if (!registry.some((card) => card.type === 'chartdeck-card')) {
  registry.push({
    type: 'chartdeck-card',
    name: 'Chartdeck',
    description: 'Bars, gauges and charts, set up entirely from the visual editor.',
    preview: true,
    documentationURL: 'https://tempus2016.github.io/chartdeck/',
  });
}
