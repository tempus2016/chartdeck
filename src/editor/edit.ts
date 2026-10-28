import type { CardConfig, EntityConfig } from '../types';

type Path = (string | number)[];
type Container = Record<string | number, unknown> | unknown[];

function isEmptyValue(value: unknown): boolean {
  return value === undefined || value === null || value === '';
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function clone(value: unknown, nextKey: string | number): Container {
  if (Array.isArray(value)) return [...value];
  if (isPlainObject(value)) return { ...value };
  return typeof nextKey === 'number' ? [] : {};
}

/** Copy `node` with `path` set (or removed); an object emptied by a removal is reported as undefined. */
function setIn(node: unknown, path: Path, value: unknown): unknown {
  const [key, ...rest] = path;
  const next = clone(node, key);
  const child = rest.length ? setIn((next as Record<string | number, unknown>)[key], rest, value) : value;
  if (isEmptyValue(child)) {
    if (Array.isArray(next) && typeof key === 'number') next.splice(key, 1);
    else delete (next as Record<string | number, unknown>)[key];
    if (isPlainObject(next) && Object.keys(next).length === 0) return undefined;
  } else {
    (next as Record<string | number, unknown>)[key] = child;
  }
  return next;
}

/**
 * Return a copy of `config` with the option at `path` set. `undefined`, `''` and `null` remove the
 * key, and a nested object (such as `show`) left empty by the removal is removed too.
 */
export function setOption(config: CardConfig, path: Path, value: unknown): CardConfig {
  if (path.length === 0) return config;
  return (setIn(config, path, value) as CardConfig | undefined) ?? ({ type: config.type } as CardConfig);
}

export function entityId(item: string | EntityConfig): string {
  return typeof item === 'string' ? item : item.entity;
}

/**
 * Set an option on one entity. A shorthand string becomes `{ entity }` when an override is set,
 * and an object left with only `entity` goes back to the shorthand string.
 */
export function setEntityOption(config: CardConfig, index: number, key: string, value: unknown): CardConfig {
  const entities = [...(config.entities ?? [])];
  const item = entities[index];
  if (item === undefined) return config;
  const obj: Record<string, unknown> = typeof item === 'string' ? { entity: item } : { ...item };
  if (isEmptyValue(value)) delete obj[key];
  else obj[key] = value;
  const keys = Object.keys(obj);
  entities[index] =
    keys.length === 1 && keys[0] === 'entity' && typeof obj.entity === 'string'
      ? obj.entity
      : (obj as unknown as EntityConfig);
  return { ...config, entities };
}

export function addEntity(config: CardConfig, id: string): CardConfig {
  return { ...config, entities: [...(config.entities ?? []), id] };
}

export function removeEntity(config: CardConfig, index: number): CardConfig {
  const entities = [...(config.entities ?? [])];
  if (index < 0 || index >= entities.length) return config;
  entities.splice(index, 1);
  return { ...config, entities };
}

export function moveEntity(config: CardConfig, from: number, to: number): CardConfig {
  const entities = [...(config.entities ?? [])];
  if (from < 0 || from >= entities.length || from === to) return config;
  const [item] = entities.splice(from, 1);
  entities.splice(Math.max(0, Math.min(to, entities.length)), 0, item);
  return { ...config, entities };
}

/** Tell Home Assistant's card editor that the config changed. */
export function fireConfigChanged(el: HTMLElement, config: CardConfig): void {
  el.dispatchEvent(new CustomEvent('config-changed', { bubbles: true, composed: true, detail: { config } }));
}
