import { bandFor } from './bands';
import { defaultDecimals, formatNumber, withUnit } from './format';
import { localize } from './localize';
import { fillSpan, position } from './scale';
import type { Band, HassEntity, HomeAssistant, MergedEntity, NormalizedConfig, SortMode } from './types';

export interface ResolvedEntity {
  entityId: string;
  config: MergedEntity;
  stateObj?: HassEntity;
  /** Numeric state present. */
  available: boolean;
  value: number | null;
  min: number;
  max: number;
  target: number | null;
  name: string;
  unit: string;
  decimals: number;
  position: number;
  span: [number, number];
  targetPosition: number | null;
  band: Band;
  /** Number only, no unit; '' when unavailable. */
  valueText: string;
  /** Number with unit, or the localised state / "Entity not found". */
  display: string;
  /** Aria label: "<name>, <display>". */
  label: string;
}

const warned = new Set<string>();

/** The icon override: the configured one, or a placeholder for a missing entity so its row keeps its icon slot. */
export function iconOverride(e: ResolvedEntity): string | undefined {
  return e.config.icon ?? (e.stateObj ? undefined : 'mdi:help-circle-outline');
}

export function resetLimitWarnings(): void {
  warned.clear();
}

function isUnset(v: unknown): boolean {
  return v === undefined || v === null || v === '';
}

function parseNumber(state: string | undefined): number | null {
  if (state === undefined || state.trim() === '') return null;
  const n = Number(state);
  return Number.isFinite(n) ? n : null;
}

/** Decimals an attribute was reported with, up to 2: attributes have no display precision. */
function reportedDecimals(raw: unknown): number {
  const text = String(raw);
  const dot = text.indexOf('.');
  return dot === -1 || /e/i.test(text) ? 0 : Math.min(2, text.length - dot - 1);
}

/** The raw value an entity is drawn from: its state, or the configured attribute. */
function rawValue(entity: MergedEntity, stateObj: HassEntity | undefined): unknown {
  if (!stateObj) return undefined;
  return entity.attribute ? stateObj.attributes?.[entity.attribute] : stateObj.state;
}

function toValue(raw: unknown): number | null {
  if (typeof raw === 'number') return Number.isFinite(raw) ? raw : null;
  return typeof raw === 'string' ? parseNumber(raw) : null;
}

/** What to show when there is no number: the attribute's text, else the entity's state. */
function statusText(entity: MergedEntity, stateObj: HassEntity, raw: unknown, hass: HomeAssistant): string {
  const attribute = entity.attribute;
  if (attribute && typeof raw === 'string' && raw.trim() !== '') {
    return hass.formatEntityAttributeValue?.(stateObj, attribute) ?? raw;
  }
  return hass.formatEntityState?.(stateObj) ?? localize(hass, 'unavailable');
}

function resolveLimit(limit: unknown, hass: HomeAssistant): number | null {
  if (isUnset(limit)) return null;
  if (typeof limit === 'number') return Number.isFinite(limit) ? limit : null;
  const id = String(limit);
  const n = parseNumber(hass.states[id]?.state);
  if (n === null && !warned.has(id)) {
    warned.add(id);
    console.warn(`Chartdeck: limit entity "${id}" is missing or not numeric; using the default.`);
  }
  return n;
}

function resolveOne(entity: MergedEntity, hass: HomeAssistant): ResolvedEntity {
  const entityId = entity.entity;
  const stateObj = hass.states[entityId];
  const name = entity.name ?? stateObj?.attributes?.friendly_name ?? entityId;
  // The sensor's unit and display precision describe its state, not its attributes.
  const unit = entity.unit ?? (entity.attribute ? '' : (stateObj?.attributes?.unit_of_measurement ?? ''));
  const raw = rawValue(entity, stateObj);
  const value = toValue(raw);
  const available = value !== null;
  let decimals: number;
  if (!isUnset(entity.decimals)) decimals = entity.decimals as number;
  else if (entity.attribute) decimals = available ? reportedDecimals(raw) : 0;
  else decimals = defaultDecimals(hass, entityId, unit);
  const min = resolveLimit(entity.min, hass) ?? 0;
  const max = resolveLimit(entity.max, hass) ?? 100;
  const target = resolveLimit(entity.target, hass);

  let valueText = '';
  let display: string;
  if (available) {
    valueText = formatNumber(value, decimals, hass);
    display = withUnit(valueText, unit);
  } else if (!stateObj) {
    display = localize(hass, 'entity_not_found');
  } else {
    display = statusText(entity, stateObj, raw, hass);
  }

  return {
    entityId,
    config: entity,
    stateObj,
    available,
    value,
    min,
    max,
    target,
    name,
    unit,
    decimals,
    position: available ? position(value, min, max) : 0,
    span: available ? fillSpan(value, min, max) : [0, 0],
    targetPosition: target === null ? null : position(target, min, max),
    band: bandFor(available ? value : -Infinity, entity.severity),
    valueText,
    display,
    label: `${name}, ${display}`,
  };
}

export function resolveEntities(config: NormalizedConfig, hass: HomeAssistant): ResolvedEntity[] {
  return config.entities.map((e) => resolveOne(e, hass));
}

export function sortEntities(list: ResolvedEntity[], mode: SortMode): ResolvedEntity[] {
  if (mode === 'none') return [...list];
  const dir = mode === 'ascending' ? 1 : -1;
  return list
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      if (a.item.available !== b.item.available) return a.item.available ? -1 : 1;
      if (a.item.available) {
        const diff = (a.item.position - b.item.position) * dir;
        if (diff !== 0) return diff;
      }
      return a.index - b.index;
    })
    .map((x) => x.item);
}

export function watchedEntityIds(config: NormalizedConfig): Set<string> {
  const ids = new Set<string>();
  for (const e of config.entities) {
    ids.add(e.entity);
    for (const limit of [e.min, e.max, e.target]) {
      if (typeof limit === 'string' && limit !== '') ids.add(limit);
    }
  }
  return ids;
}
