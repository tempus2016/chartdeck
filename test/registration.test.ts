import { describe, expect, it } from 'vitest';
import '../src/chartdeck-card';

describe('registration', () => {
  it('defines the custom element', () => {
    expect(customElements.get('chartdeck-card')).toBeDefined();
  });

  it('appears in the card picker exactly once', () => {
    const cards = (window as unknown as { customCards: { type: string }[] }).customCards;
    expect(cards.filter((card) => card.type === 'chartdeck-card')).toHaveLength(1);
  });

  it('rejects a missing configuration', () => {
    const card = document.createElement('chartdeck-card') as HTMLElement & { setConfig(c: unknown): void };
    expect(() => card.setConfig(undefined)).toThrow();
  });

  it('renders and reports a size', async () => {
    const card = document.createElement('chartdeck-card') as HTMLElement & {
      setConfig(c: unknown): void;
      getCardSize(): number;
      updateComplete: Promise<boolean>;
    };
    card.setConfig({ type: 'custom:chartdeck-card' });
    document.body.appendChild(card);
    await card.updateComplete;
    expect(card.shadowRoot?.textContent).toContain('In development');
    expect(card.getCardSize()).toBe(1);
    card.remove();
  });
});
