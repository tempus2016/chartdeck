import { localize } from '../localize';
import type { HomeAssistant } from '../types';

/** ha-form's helper line under a field: the label key's `_helper` text, when the language has one. */
export function computeHelper(hass: HomeAssistant | undefined, key: string): string | undefined {
  const helper = localize(hass, `${key}_helper`);
  return helper && helper !== `${key}_helper` ? helper : undefined;
}
