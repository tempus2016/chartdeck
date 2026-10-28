import type { Band } from './types';

export type PaletteName = 'primary' | 'green' | 'amber' | 'red' | 'blue' | 'purple' | 'grey';

export const PALETTE: Record<PaletteName, { variable: string; fallback: string }> = {
  primary: { variable: '--primary-color', fallback: '#2f6fe4' },
  green: { variable: '--success-color', fallback: '#1fae7a' },
  amber: { variable: '--warning-color', fallback: '#f59e0b' },
  red: { variable: '--error-color', fallback: '#ef3b5a' },
  blue: { variable: '--info-color', fallback: '#2f6fe4' },
  purple: { variable: '--purple-color', fallback: '#8b6cff' },
  grey: { variable: '--grey-color', fallback: '#8e919a' },
};

export function baseColor(color: string): string {
  if (Object.prototype.hasOwnProperty.call(PALETTE, color)) {
    const { variable, fallback } = PALETTE[color as PaletteName];
    return `var(${variable}, ${fallback})`;
  }
  return color;
}

/** A plain colour for places that can't take var(): a palette name's fallback, or the colour itself. */
export function solidColor(color: string): string {
  return Object.prototype.hasOwnProperty.call(PALETTE, color) ? PALETTE[color as PaletteName].fallback : color;
}

export function colorStops(color: string): { start: string; end: string } {
  const start = baseColor(color);
  return { start, end: `color-mix(in srgb, ${start} 65%, #fff)` };
}

/** Last band with from <= value; below the first band, the first. Bands are sorted ascending. */
export function bandFor(value: number, bands: Band[]): Band {
  let found = bands[0];
  for (const band of bands) {
    if (band.from <= value) found = band;
    else break;
  }
  return found;
}

export function legendItems(
  bands: Band[],
  format: (n: number) => string,
  unit: string,
): { color: string; text: string }[] {
  const u = unit ? ` ${unit}` : '';
  const items: { color: string; text: string }[] = [];
  bands.forEach((band, i) => {
    const next = bands[i + 1];
    const color = baseColor(band.color);
    if (band.label) {
      items.push({ color, text: band.label });
    } else if (!Number.isFinite(band.from)) {
      if (next) items.push({ color, text: `< ${format(next.from)}${u}` });
    } else if (next) {
      items.push({ color, text: `${format(band.from)}–${format(next.from)}${u}` });
    } else {
      items.push({ color, text: `${format(band.from)}${u}+` });
    }
  });
  return items;
}

export const BAND_PRESETS: Record<'battery' | 'usage' | 'temperature' | 'none', Band[] | undefined> = {
  battery: [
    { from: 0, color: 'red', label: 'Low' },
    { from: 20, color: 'amber' },
    { from: 50, color: 'green' },
  ],
  usage: [
    { from: 0, color: 'green' },
    { from: 60, color: 'amber' },
    { from: 85, color: 'red', label: 'High' },
  ],
  temperature: [
    { from: -50, color: 'blue', label: 'Cold' },
    { from: 16, color: 'green' },
    { from: 24, color: 'amber' },
    { from: 28, color: 'red', label: 'Hot' },
  ],
  none: undefined,
};
