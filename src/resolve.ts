import { bandFor } from './bands';
import { mergeEntity } from './config';
import { matchEntities } from './fill';
import { defaultDecimals, formatNumber, withUnit } from './format';
import { localize } from './localize';
import { fillSpan, position } from './scale';
import { DEFAULT_BANDS } from './config';
import type { Band, HassEntity, HomeAssistant, MergedEntity, NormalizedConfig, ResolvedBand, SortMode } from './types';

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
  band: ResolvedBand;
  /** The entity's bands with entity starts read and sorted. */
  bands: ResolvedBand[];
  /** Number only, no unit; '' when unavailable. */
  valueText: string;
  /** Number with unit, or the localised state / "Entity not found". */
  display: string;
  /** Aria label: "<name>, <display>". */
  label: string;
}

const warned = new Set<string>();

/**
 * The icon override: the current band's icon (only while there is a real value), else the
 * configured one, else a placeholder for a missing entity so its row keeps its icon slot.
 */
export function iconOverride(e: ResolvedEntity): string | undefined {
  const band = e.available ? e.band.icon : undefined;
  return band ?? e.config.icon ?? (e.stateObj ? undefined : 'mdi:help-circle-outline');
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

function resolveLimit(limit: unknown, hass: HomeAssistant, what = 'limit'): number | null {
  if (isUnset(limit)) return null;
  if (typeof limit === 'number') return Number.isFinite(limit) ? limit : null;
  const id = String(limit);
  const n = parseNumber(hass.states[id]?.state);
  if (n === null && !warned.has(id)) {
    warned.add(id);
    const fallback = what === 'limit' ? 'using the default' : 'leaving that colour band out';
    console.warn(`Chartdeck: ${what} entity "${id}" is missing or not numeric; ${fallback}.`);
  }
  return n;
}

/**
 * Bands with every entity start read, sorted ascending. A band whose entity is missing or not
 * numeric is left out (with one warning), so the band below it carries on; with none left, the
 * default colour.
 */
export function resolveBands(bands: Band[], hass: HomeAssistant | undefined): ResolvedBand[] {
  if (bands.every((b) => typeof b.from === 'number')) return bands as ResolvedBand[];
  const read: ResolvedBand[] = [];
  for (const band of bands) {
    const from = hass ? resolveLimit(band.from, hass, 'band start') : null;
    if (from !== null) read.push({ ...band, from });
  }
  return read.length ? read.sort((a, b) => a.from - b.from) : DEFAULT_BANDS;
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
  const bands = resolveBands(entity.severity, hass);

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
    band: bandFor(available ? value : -Infinity, bands),
    bands,
    valueText,
    display,
    label: `${name}, ${display}`,
  };
}

/** Ids the card's include rule adds, leaving out ones already listed. */
export function matchedIds(config: NormalizedConfig, hass: HomeAssistant): string[] {
  if (!config.include) return [];
  const listed = new Set(config.entities.map((e) => e.entity));
  return matchEntities(config.include, config.exclude, hass).filter((id) => !listed.has(id));
}

/** The listed entities, then matched ones with the card's options, less unavailable ones if hidden. */
export function resolveEntities(config: NormalizedConfig, hass: HomeAssistant): ResolvedEntity[] {
  const matched = matchedIds(config, hass).map((id, i) => mergeEntity(id, config.cardOptions, i));
  const resolved = [...config.entities, ...matched].map((e) => resolveOne(e, hass));
  return config.hideUnavailable ? resolved.filter((e) => e.available) : resolved;
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
    for (const limit of [e.min, e.max, e.target, ...e.severity.map((b) => b.from)]) {
      if (typeof limit === 'string' && limit !== '') ids.add(limit);
    }
  }
  for (const band of config.legendBands) if (typeof band.from === 'string') ids.add(band.from);
  return ids;
}
