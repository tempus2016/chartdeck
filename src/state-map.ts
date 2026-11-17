/** Words a state can take ("heating", "idle") and the number each one is drawn as. */
export type StateMap = Record<string, number>;

/**
 * A `state_map` from YAML or the editor: each state's number, written as a number or as numeric
 * text. Blank states and blank numbers (a row still being typed) are dropped; no entries is no map.
 */
export function normalizeStateMap(raw: unknown, index: number): StateMap | undefined {
  if (raw === undefined || raw === null) return undefined;
  if (typeof raw !== 'object' || Array.isArray(raw)) {
    throw new Error(`Entity ${index + 1}: "state_map" must list states and their numbers, such as "heating: 100"`);
  }
  const map: StateMap = {};
  for (const [state, value] of Object.entries(raw as Record<string, unknown>)) {
    if (state.trim() === '' || value === undefined || value === null || value === '') continue;
    const n = typeof value === 'number' ? value : typeof value === 'string' ? Number(value) : NaN;
    if (!Number.isFinite(n)) {
      throw new Error(`Entity ${index + 1}: "state_map" needs a number for "${state}"`);
    }
    map[state] = n;
  }
  return Object.keys(map).length ? map : undefined;
}

/** The number a state is mapped to: an exact match first, then one ignoring case and spaces. */
export function mapState(raw: unknown, map: StateMap | undefined): number | undefined {
  if (!map || typeof raw !== 'string') return undefined;
  if (Object.prototype.hasOwnProperty.call(map, raw)) return map[raw];
  const wanted = raw.trim().toLowerCase();
  for (const [state, n] of Object.entries(map)) {
    if (state.trim().toLowerCase() === wanted) return n;
  }
  return undefined;
}

/** The part of a history request that carries an entity's map, so its states load as numbers. */
export function stateMapRequest(map: StateMap | undefined): { stateMap?: StateMap } {
  return map ? { stateMap: map } : {};
}

/** A map as stable text, the same whatever order its states were written in (for cache keys). */
export function stateMapKey(map: StateMap): string {
  return JSON.stringify(Object.entries(map).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
}
