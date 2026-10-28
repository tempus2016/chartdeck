import { localize } from '../localize';
import type { CardConfig, HomeAssistant } from '../types';
import { setOption } from './edit';

/** One ha-form field and where it lives in the card config. */
export interface FieldBinding {
  name: string;
  path: string[];
  /** The value the card uses when the key is absent; setting it removes the key. */
  default?: unknown;
}

export const TITLE_FIELDS: FieldBinding[] = [{ name: 'title', path: ['title'] }];

export const DISPLAY_FIELDS: FieldBinding[] = [
  { name: 'show_name', path: ['show', 'name'], default: true },
  { name: 'show_value', path: ['show', 'value'], default: true },
  { name: 'show_icon', path: ['show', 'icon'], default: true },
  { name: 'show_target', path: ['show', 'target'], default: true },
  { name: 'show_legend', path: ['show', 'legend'], default: false },
  { name: 'columns', path: ['columns'] },
  { name: 'sort', path: ['sort'], default: 'none' },
  { name: 'decimals', path: ['decimals'] },
  { name: 'unit', path: ['unit'] },
  { name: 'animate', path: ['animate'], default: true },
];

export const ACTION_FIELDS: FieldBinding[] = [
  { name: 'tap_action', path: ['tap_action'], default: { action: 'more-info' } },
  { name: 'hold_action', path: ['hold_action'], default: { action: 'none' } },
  { name: 'double_tap_action', path: ['double_tap_action'], default: { action: 'none' } },
];

export function titleSchema() {
  return [{ name: 'title', selector: { text: {} } }];
}

export function displaySchema(hass?: HomeAssistant) {
  const toggle = (name: string) => ({ name, selector: { boolean: {} } });
  return [
    {
      type: 'grid',
      name: '',
      schema: ['show_name', 'show_value', 'show_icon', 'show_target', 'show_legend'].map(toggle),
    },
    {
      type: 'grid',
      name: '',
      schema: [
        { name: 'columns', selector: { number: { min: 1, max: 6, mode: 'box' } } },
        {
          name: 'sort',
          selector: {
            select: {
              mode: 'dropdown',
              options: ['none', 'ascending', 'descending'].map((value) => ({
                value,
                label: localize(hass, `editor_sort_${value}`),
              })),
            },
          },
        },
        { name: 'decimals', selector: { number: { min: 0, max: 6, mode: 'box' } } },
        { name: 'unit', selector: { text: {} } },
      ],
    },
    toggle('animate'),
  ];
}

export function actionsSchema() {
  return ACTION_FIELDS.map(({ name }) => ({ name, selector: { ui_action: {} } }));
}

function getIn(config: CardConfig, path: string[]): unknown {
  let node: unknown = config;
  for (const key of path) {
    if (typeof node !== 'object' || node === null) return undefined;
    node = (node as Record<string, unknown>)[key];
  }
  return node;
}

function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  return ka.every((k) => deepEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k]));
}

/** ha-form data for `fields`: the raw value, or the default so toggles show the effective value. */
export function formData(config: CardConfig, fields: FieldBinding[]): Record<string, unknown> {
  const data: Record<string, unknown> = {};
  for (const field of fields) {
    const value = getIn(config, field.path) ?? field.default;
    if (value !== undefined) data[field.name] = value;
  }
  return data;
}

/**
 * Apply an ha-form value to `config`. Only fields whose value actually changed are written, so an
 * untouched config round-trips exactly; a value equal to its default removes the key.
 */
export function applyFormData(config: CardConfig, fields: FieldBinding[], value: Record<string, unknown>): CardConfig {
  const before = formData(config, fields);
  let next = config;
  for (const field of fields) {
    const v = value[field.name];
    if (deepEqual(before[field.name], v)) continue;
    next = setOption(next, field.path, field.default !== undefined && deepEqual(v, field.default) ? undefined : v);
  }
  return next;
}
