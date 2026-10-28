import type { HomeAssistant } from './types';

const STRINGS: Record<string, Record<string, string>> = {
  en: {
    entity_not_found: 'Entity not found',
    unavailable: 'Unavailable',
    no_entities: 'Add an entity in the editor to get started.',
    editor_section_entities: 'Entities',
    editor_section_style: 'Style',
    editor_section_limits: 'Limits',
    editor_section_colours: 'Colours',
    editor_section_display: 'Display',
    editor_section_actions: 'Actions',
    editor_title: 'Title',
    editor_style_bar: 'Bar',
    editor_style_thin: 'Thin',
    editor_style_segmented: 'Segmented',
    editor_style_tank: 'Tank',
    editor_style_ring: 'Ring',
    editor_style_needle: 'Needle',
    editor_style_arc: 'Arc',
    editor_show_name: 'Show name',
    editor_show_value: 'Show value',
    editor_show_icon: 'Show icon',
    editor_show_target: 'Show target',
    editor_show_legend: 'Show legend',
    editor_columns: 'Columns',
    editor_sort: 'Sort',
    editor_sort_none: 'As listed',
    editor_sort_ascending: 'Lowest first',
    editor_sort_descending: 'Highest first',
    editor_decimals: 'Decimals',
    editor_unit: 'Unit',
    editor_animate: 'Animate',
    editor_tap_action: 'Tap action',
    editor_hold_action: 'Hold action',
    editor_double_tap_action: 'Double tap action',
  },
};

/** Look up a string for the user's language, falling back to English, then to the key. */
export function localize(hass: HomeAssistant | undefined, key: string, vars?: Record<string, string | number>): string {
  const lang = (hass?.locale?.language ?? hass?.language ?? 'en').split('-')[0];
  const template = STRINGS[lang]?.[key] ?? STRINGS.en[key] ?? key;
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (m, name: string) => (name in vars ? String(vars[name]) : m));
}
