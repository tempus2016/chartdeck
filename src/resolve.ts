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
  const unit = entity.unit ?? stateObj?.attributes?.unit_of_measurement ?? '';
  const decimals = isUnset(entity.decimals) ? defaultDecimals(hass, entityId, unit) : (entity.decimals as number);
  const min = resolveLimit(entity.min, hass) ?? 0;
  const max = resolveLimit(entity.max, hass) ?? 100;
  const target = resolveLimit(entity.target, hass);
  const value = parseNumber(stateObj?.state);
  const available = value !== null;

  let valueText = '';
  let display: string;
  if (available) {
    valueText = formatNumber(value, decimals, hass);
    display = withUnit(valueText, unit);
  } else if (!stateObj) {
    display = localize(hass, 'entity_not_found');
  } else {
    display = hass.formatEntityState?.(stateObj) ?? localize(hass, 'unavailable');
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
