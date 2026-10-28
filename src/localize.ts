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
    editor_attribute: 'Attribute (instead of the state)',
    editor_name: 'Name',
    editor_icon: 'Icon',
    editor_min: 'Minimum',
    editor_max: 'Maximum',
    editor_target: 'Target',
    editor_none: 'None',
    editor_card_setting: 'card setting',
    editor_limit_default: 'Default ({value})',
    editor_limit_number: 'Number',
    editor_limit_entity: 'Entity',
    editor_preset: 'Preset',
    editor_preset_battery: 'Battery (low is bad)',
    editor_preset_usage: 'Usage (high is bad)',
    editor_preset_temperature: 'Temperature',
    editor_preset_none: 'None',
    editor_preset_custom: 'Custom',
    editor_band_from: 'From',
    editor_band_from_entity: 'Start from an entity',
    editor_band_from_number: 'Start from a number',
    editor_band_from_entity_label: 'Starts at this entity',
    editor_band_color: 'Colour',
    editor_band_custom_color: 'CSS colour',
    editor_band_label: 'Label',
    editor_color_primary: 'Primary',
    editor_color_green: 'Green',
    editor_color_amber: 'Amber',
    editor_color_red: 'Red',
    editor_color_blue: 'Blue',
    editor_color_purple: 'Purple',
    editor_color_grey: 'Grey',
    editor_color_custom: 'Custom…',
    editor_add_band: 'Add band',
    editor_remove_band: 'Remove band',
    editor_add_entity: 'Add entity',
    editor_move_up: 'Move up',
    editor_move_down: 'Move down',
    editor_remove_entity: 'Remove entity',
    editor_show_options: 'Show options',
    editor_hide_options: 'Hide options',
    editor_not_found: '{entity} (not found)',
    editor_severity: 'Colours',
  },
};

/** The user's language code, e.g. `en`. */
export function languageOf(hass: HomeAssistant | undefined): string {
  return (hass?.locale?.language ?? hass?.language ?? 'en').split('-')[0];
}

/** Look up a string for the user's language, falling back to English, then to the key. */
export function localize(hass: HomeAssistant | undefined, key: string, vars?: Record<string, string | number>): string {
  const lang = languageOf(hass);
  const template = STRINGS[lang]?.[key] ?? STRINGS.en[key] ?? key;
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (m, name: string) => (name in vars ? String(vars[name]) : m));
}
