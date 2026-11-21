import { describe, expect, it } from 'vitest';
import { normalizeConfig } from '../src/config';
import { key, parseHistory, readerFor } from '../src/history/fetch';
import { resolveEntities } from '../src/resolve';
import { mapState, normalizeStateMap, stateMapRequest } from '../src/state-map';
import { makeHass } from './helpers/hass';

const cfg = (entities: unknown[]) => normalizeConfig({ type: 'custom:chartdeck-card', entities } as never);

describe('normalizeStateMap', () => {
  it('keeps numbers and numeric text, drops blank keys and values', () => {
    expect(normalizeStateMap({ heating: 100, idle: '0', '': 5, off: '' }, 0)).toEqual({ heating: 100, idle: 0 });
  });

  it('is undefined when unset or empty', () => {
    expect(normalizeStateMap(undefined, 0)).toBeUndefined();
    expect(normalizeStateMap(null, 0)).toBeUndefined();
    expect(normalizeStateMap({}, 0)).toBeUndefined();
  });

  it('rejects a list or a value that is not a number', () => {
    expect(() => normalizeStateMap(['heating'], 1)).toThrow('Entity 2: "state_map"');
    expect(() => normalizeStateMap({ heating: 'hot' }, 0)).toThrow('"heating"');
  });
});

describe('mapState', () => {
  const map = { heating: 100, Idle: 0 };
  it('matches exactly, then ignoring case and spaces', () => {
    expect(mapState('heating', map)).toBe(100);
    expect(mapState(' HEATING ', map)).toBe(100);
    expect(mapState('idle', map)).toBe(0);
  });

  it('is undefined for an unmapped state or no map', () => {
    expect(mapState('cooling', map)).toBeUndefined();
    expect(mapState('heating', undefined)).toBeUndefined();
    expect(mapState(5, map)).toBeUndefined();
  });
});

describe('history with a state map', () => {
  const request = { entity: 'climate.a', attribute: 'hvac_action', ...stateMapRequest({ heating: 100, idle: 0 }) };

  it('reads mapped states and leaves numbers and on/off as they were', () => {
    const read = readerFor(request);
    expect(read('heating')).toBe(100);
    expect(read('idle')).toBe(0);
    expect(read('cooling')).toBeNull();
    expect(read('21.5')).toBe(21.5);
    expect(read('on')).toBe(1);
  });

  it('parses history rows through the map', () => {
    const rows = [
      { lu: 1, a: { hvac_action: 'idle' } },
      { lu: 2, a: { hvac_action: 'heating' } },
    ];
    expect(parseHistory(rows, 'hvac_action', false, readerFor(request))).toEqual([
      { t: 1000, v: 0 },
      { t: 2000, v: 100 },
    ]);
  });

  it('keys a mapped series apart from the plain one, the same whatever the order', () => {
    const plain = { entity: 'climate.a', attribute: 'hvac_action' };
    expect(key(request)).not.toBe(key(plain));
    const reordered = { ...plain, ...stateMapRequest({ idle: 0, heating: 100 }) };
    expect(key(reordered)).toBe(key(request));
  });

  it('adds nothing without a map', () => {
    expect(stateMapRequest(undefined)).toEqual({});
  });
});

describe('resolving a mapped entity', () => {
  it('places the bar by the mapped number and shows the state word', () => {
    const hass = makeHass({ 'climate.a': ['heat', { hvac_action: 'heating', friendly_name: 'Lounge' }] });
    const [r] = resolveEntities(
      cfg([{ entity: 'climate.a', attribute: 'hvac_action', state_map: { heating: 100, idle: 0 } }]),
      hass,
    );
    expect(r.available).toBe(true);
    expect(r.value).toBe(100);
    expect(r.position).toBe(1);
    expect(r.display).toBe('heating');
    expect(r.valueText).toBe('heating');
  });

  it('maps the state itself, and an unmapped word is still unavailable', () => {
    const config = cfg([{ entity: 'sensor.mode', state_map: { eco: 25 } }]);
    expect(resolveEntities(config, makeHass({ 'sensor.mode': 'eco' }))[0].value).toBe(25);
    const [r] = resolveEntities(config, makeHass({ 'sensor.mode': 'boost' }));
    expect(r.available).toBe(false);
    expect(r.display).toBe('boost');
  });

  it('rejects a bad map in the config', () => {
    expect(() => cfg([{ entity: 'sensor.mode', state_map: { eco: 'low' } }])).toThrow('state_map');
  });
});
