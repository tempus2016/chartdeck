import { STYLE_NAMES } from './types';
import type {
  ActionConfig,
  Band,
  CardConfig,
  EntityConfig,
  EntityOptions,
  Limit,
  MergedEntity,
  NormalizedConfig,
  ShowOptions,
  SortMode,
} from './types';

export const DEFAULT_BANDS: Band[] = [{ from: -Infinity, color: 'primary' }];

const SORT_MODES: SortMode[] = ['none', 'ascending', 'descending'];

function toNumber(value: unknown): number | undefined {
  if (typeof value === 'number') return Number.isFinite(value) ? value : undefined;
  if (typeof value === 'string' && value.trim() !== '') {
    const n = Number(value);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
}

/** A numeric (or numeric-string) value becomes a number; any other string is an entity id. */
function toLimit(value: unknown, field: string): Limit | undefined {
  if (value === undefined || value === null || value === '') return undefined;
  const n = toNumber(value);
  if (n !== undefined) return n;
  if (typeof value === 'string') return value;
  throw new Error(`"${field}" must be a number or an entity id`);
}

/** A whole number in [min, max] (numeric strings allowed); anything else throws a readable error. */
function toInteger(value: unknown, field: string, min: number, max = Infinity): number | undefined {
  if (value === undefined || value === null || value === '') return undefined;
  const n = toNumber(value);
  if (n === undefined || !Number.isInteger(n) || n < min || n > max) {
    const range = max === Infinity ? `of at least ${min}` : `from ${min} to ${max}`;
    throw new Error(`"${field}" must be a whole number ${range}`);
  }
  return n;
}

function normalizeBands(raw: unknown): Band[] | undefined {
  if (raw === undefined || raw === null) return undefined;
  if (!Array.isArray(raw)) throw new Error('"severity" must be a list of bands');
  if (raw.length === 0) return undefined;
  const bands = raw.map((b, i) => {
    const from = toNumber(b?.from);
    if (from === undefined) throw new Error(`Severity band ${i + 1}: "from" must be a number`);
    if (typeof b.color !== 'string' || !b.color) {
      throw new Error(`Severity band ${i + 1}: "color" is required`);
    }
    const band: Band = { ...b, from };
    return band;
  });
  return bands.sort((a, b) => a.from - b.from);
}

function normalizeAction(raw: unknown, fallback: string, field: string): ActionConfig {
  if (raw === undefined || raw === null) return { action: fallback };
  if (typeof raw !== 'object' || typeof (raw as ActionConfig).action !== 'string') {
    throw new Error(`"${field}" must have an "action"`);
  }
  return raw as ActionConfig;
}

function pick<T>(own: T | undefined, card: T | undefined): T | undefined {
  return own !== undefined ? own : card;
}

function mergeEntity(raw: string | EntityConfig, card: EntityOptions, index: number): MergedEntity {
  const own: EntityConfig = typeof raw === 'string' ? { entity: raw } : raw;
  if (!own || typeof own !== 'object' || typeof own.entity !== 'string' || !own.entity) {
    throw new Error(`Entity ${index + 1} needs an "entity" id`);
  }
  const min = pick(toLimit(own.min, 'min'), toLimit(card.min, 'min')) ?? 0;
  const max = pick(toLimit(own.max, 'max'), toLimit(card.max, 'max')) ?? 100;
  if (typeof min === 'number' && typeof max === 'number' && min >= max) {
    throw new Error(`"max" (${max}) must be greater than "min" (${min})`);
  }
  const merged: MergedEntity = {
    ...own,
    entity: own.entity,
    min,
    max,
    severity: normalizeBands(own.severity) ?? normalizeBands(card.severity) ?? DEFAULT_BANDS,
    tap_action: normalizeAction(pick(own.tap_action, card.tap_action), 'more-info', 'tap_action'),
    hold_action: normalizeAction(pick(own.hold_action, card.hold_action), 'none', 'hold_action'),
    double_tap_action: normalizeAction(
      pick(own.double_tap_action, card.double_tap_action),
      'none',
      'double_tap_action',
    ),
  };
  const name = pick(own.name, card.name);
  const icon = pick(own.icon, card.icon);
  const unit = pick(own.unit, card.unit);
  const target = pick(toLimit(own.target, 'target'), toLimit(card.target, 'target'));
  const decimals = pick(toInteger(own.decimals, 'decimals', 0, 20), toInteger(card.decimals, 'decimals', 0, 20));
  if (name !== undefined) merged.name = name;
  if (icon !== undefined) merged.icon = icon;
  if (unit !== undefined) merged.unit = unit;
  if (target !== undefined) merged.target = target;
  if (decimals !== undefined) merged.decimals = decimals;
  return merged;
}

/** Validate a raw card config and fill in defaults. Throws an Error with a readable message. */
export function normalizeConfig(raw: CardConfig): NormalizedConfig {
  if (!raw || typeof raw !== 'object') throw new Error('Invalid configuration');
  const style = raw.style ?? 'bar';
  if (!STYLE_NAMES.includes(style)) {
    throw new Error(`Unknown style "${String(style)}". Use one of: ${STYLE_NAMES.join(', ')}`);
  }
  const sort = raw.sort ?? 'none';
  if (!SORT_MODES.includes(sort)) {
    throw new Error(`Unknown sort "${String(sort)}". Use one of: ${SORT_MODES.join(', ')}`);
  }
  if (raw.entities !== undefined && !Array.isArray(raw.entities)) {
    throw new Error('"entities" must be a list');
  }
  const entities = (raw.entities ?? []).map((e, i) => mergeEntity(e, raw, i));
  const show: ShowOptions = {
    name: true,
    value: true,
    icon: true,
    target: true,
    legend: false,
    ...raw.show,
  };
  const columns = toInteger(raw.columns, 'columns', 1);
  const config: NormalizedConfig = {
    style,
    entities,
    show,
    sort,
    animate: raw.animate !== false,
    legendBands: normalizeBands(raw.severity) ?? DEFAULT_BANDS,
  };
  if (raw.title !== undefined) config.title = raw.title;
  if (columns !== undefined) config.columns = columns;
  return config;
}
