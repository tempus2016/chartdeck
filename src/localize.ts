import type { HomeAssistant } from './types';

const STRINGS: Record<string, Record<string, string>> = {
  en: {
    entity_not_found: 'Entity not found',
    unavailable: 'Unavailable',
    no_entities: 'Add an entity in the editor to get started.',
  },
};

/** Look up a string for the user's language, falling back to English, then to the key. */
export function localize(hass: HomeAssistant | undefined, key: string, vars?: Record<string, string | number>): string {
  const lang = (hass?.locale?.language ?? hass?.language ?? 'en').split('-')[0];
  const template = STRINGS[lang]?.[key] ?? STRINGS.en[key] ?? key;
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (m, name: string) => (name in vars ? String(vars[name]) : m));
}
