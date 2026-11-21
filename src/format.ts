import type { HomeAssistant } from './types';

export function defaultDecimals(hass: HomeAssistant | undefined, entityId: string, unit: string): number {
  const precision = hass?.entities?.[entityId]?.display_precision;
  if (typeof precision === 'number') return precision;
  return unit === '%' ? 0 : 1;
}

function localeOptions(hass?: HomeAssistant): { locale: string | undefined; grouping: boolean } {
  const language = hass?.locale?.language ?? 'en';
  switch (hass?.locale?.number_format) {
    case 'system':
      return { locale: undefined, grouping: true };
    case 'comma_decimal':
      return { locale: 'en-US', grouping: true };
    case 'decimal_comma':
      return { locale: 'de', grouping: true };
    case 'space_comma':
      return { locale: 'fr', grouping: true };
    case 'none':
      return { locale: 'en-US', grouping: false };
    default:
      return { locale: language, grouping: true };
  }
}

export function formatNumber(value: number, decimals: number, hass?: HomeAssistant): string {
  const { locale, grouping } = localeOptions(hass);
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: grouping,
  });
  let text = formatter.format(value === 0 ? 0 : value);
  // Rounding a tiny negative (e.g. -0.04 at 1 decimal) yields "-0.0"; drop the sign.
  if (Number(value.toFixed(decimals)) === 0) text = formatter.format(0);
  return text;
}

/** Money units made by `moneyUnit`: the symbol before and after the number, as the language writes it. */
const MONEY = new Map<string, { prefix: string; suffix: string }>();

/** Ends a money unit, so it can't be taken for a sensor's own unit (an invisible word joiner). */
const MONEY_MARK = '\u2060';

/**
 * A unit that formats as money: `withUnit('4.82', unit)` gives "£4.82" in English, "4,82 €" in
 * German. The unit itself reads as the currency code ("GBP") wherever it is shown on its own.
 * `decimals` is the currency's usual number of decimals (2, or 0 for yen).
 */
export function moneyUnit(currency: string, hass?: HomeAssistant): { unit: string; decimals: number } {
  const code = currency.toUpperCase();
  const { locale } = localeOptions(hass);
  let format: Intl.NumberFormat;
  try {
    format = new Intl.NumberFormat(locale, { style: 'currency', currency: code });
  } catch {
    format = new Intl.NumberFormat('en', { style: 'currency', currency: code });
  }
  const parts = format.formatToParts(1);
  const first = parts.findIndex((p) => p.type === 'integer');
  let last = -1;
  parts.forEach((p, i) => {
    if (p.type === 'integer' || p.type === 'decimal' || p.type === 'fraction' || p.type === 'group') last = i;
  });
  const text = (list: Intl.NumberFormatPart[]) => list.map((p) => p.value).join('');
  const unit = `${code}${MONEY_MARK}`;
  MONEY.set(unit, { prefix: text(parts.slice(0, first)), suffix: text(parts.slice(last + 1)) });
  return { unit, decimals: format.resolvedOptions().maximumFractionDigits ?? 2 };
}

export function withUnit(text: string, unit: string): string {
  const money = MONEY.get(unit);
  if (money) {
    // The minus goes before the symbol: "-£1.20", not "£-1.20".
    const sign = /^[-\u2212]/.test(text) ? text[0] : '';
    return `${sign}${money.prefix}${sign ? text.slice(1) : text}${money.suffix}`;
  }
  return unit ? `${text} ${unit}` : text;
}
