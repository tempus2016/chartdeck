import { beforeEach, describe, expect, it, vi } from 'vitest';
import { normalizeConfig } from '../src/config';
import { resetLimitWarnings, resolveEntities, sortEntities, watchedEntityIds } from '../src/resolve';
import { makeHass } from './helpers/hass';

const cfg = (entities: unknown[], extra: Record<string, unknown> = {}) =>
  normalizeConfig({ type: 'custom:chartdeck-card', entities, ...extra } as never);

describe('resolve', () => {
  beforeEach(() => {
    resetLimitWarnings();
    vi.restoreAllMocks();
  });

  it('resolves a numeric entity', () => {
    const hass = makeHass({ 'sensor.a': ['42.25', { unit_of_measurement: 'W', friendly_name: 'Load' }] });
    const [r] = resolveEntities(cfg(['sensor.a']), hass);
    expect(r.available).toBe(true);
    expect(r.value).toBe(42.25);
    expect(r.name).toBe('Load');
    expect(r.unit).toBe('W');
    expect(r.valueText).toBe('42.3');
    expect(r.display).toBe('42.3 W');
    expect(r.label).toBe('Load, 42.3 W');
    expect(r.position).toBeCloseTo(0.4225);
    expect(r.band.from).toBe(-Infinity);
    expect(r.targetPosition).toBeNull();
  });

  it('reads min/max/target from entities and watches them', () => {
    const hass = makeHass({ 'sensor.a': '100', 'sensor.cap': '200', 'sensor.goal': '150' });
    const config = cfg([{ entity: 'sensor.a', max: 'sensor.cap', target: 'sensor.goal' }]);
    const [r] = resolveEntities(config, hass);
    expect(r.max).toBe(200);
    expect(r.target).toBe(150);
    expect(r.position).toBe(0.5);
    expect(r.targetPosition).toBe(0.75);
    expect(watchedEntityIds(config)).toEqual(new Set(['sensor.a', 'sensor.cap', 'sensor.goal']));
  });

  it('falls back and warns once when a limit entity is unavailable', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const hass = makeHass({ 'sensor.a': '50', 'sensor.cap': 'unavailable' });
    const config = cfg([{ entity: 'sensor.a', max: 'sensor.cap' }]);
    expect(resolveEntities(config, hass)[0].max).toBe(100);
    expect(resolveEntities(config, hass)[0].max).toBe(100);
    expect(warn).toHaveBeenCalledTimes(1);
  });

  it('handles crossed limits from entities without NaN', () => {
    const hass = makeHass({ 'sensor.a': ['50', { unit_of_measurement: '%' }], 'sensor.lo': '80', 'sensor.hi': '20' });
    const [r] = resolveEntities(cfg([{ entity: 'sensor.a', min: 'sensor.lo', max: 'sensor.hi' }]), hass);
    expect(r.position).toBe(0);
    expect(r.span).toEqual([0, 0]);
    expect(r.display).toBe('50 %');
  });

  it('shows the state for non-numeric and "Entity not found" for missing', () => {
    const hass = makeHass({ 'sensor.u': 'unavailable' });
    const [u, gone] = resolveEntities(cfg(['sensor.u', 'sensor.gone']), hass);
    expect(u.available).toBe(false);
    expect(u.value).toBeNull();
    expect(u.display).toBe('Unavailable');
    expect(u.valueText).toBe('');
    expect(u.span).toEqual([0, 0]);
    expect(gone.available).toBe(false);
    expect(gone.display).toBe('Entity not found');
    expect(gone.label).toBe('sensor.gone, Entity not found');
  });

  it('treats empty-string decimals and target as unset', () => {
    const hass = makeHass({ 'sensor.a': '12.34' });
    const [r] = resolveEntities(cfg([{ entity: 'sensor.a', decimals: '', target: '' }]), hass);
    expect(r.decimals).toBe(1);
    expect(r.target).toBeNull();
    expect(watchedEntityIds(cfg([{ entity: 'sensor.a', target: '' }]))).toEqual(new Set(['sensor.a']));
  });

  it('sorts by fill, unavailable last, stable ties', () => {
    const hass = makeHass({ 'sensor.a': '50', 'sensor.b': '5', 'sensor.c': 'unavailable', 'sensor.d': '10' });
    const config = cfg([
      { entity: 'sensor.a' },
      { entity: 'sensor.b', max: 10 },
      { entity: 'sensor.c' },
      { entity: 'sensor.d' },
    ]);
    const list = resolveEntities(config, hass);
    const ids = (mode: 'none' | 'ascending' | 'descending') => sortEntities(list, mode).map((r) => r.entityId);
    expect(ids('ascending')).toEqual(['sensor.d', 'sensor.a', 'sensor.b', 'sensor.c']);
    expect(ids('descending')).toEqual(['sensor.a', 'sensor.b', 'sensor.d', 'sensor.c']);
    expect(ids('none')).toEqual(['sensor.a', 'sensor.b', 'sensor.c', 'sensor.d']);
    expect(sortEntities(list, 'none')).not.toBe(list);
  });

  it('zero-centres negative ranges', () => {
    const hass = makeHass({ 'sensor.a': '-50' });
    const [r] = resolveEntities(cfg([{ entity: 'sensor.a', min: -100, max: 100 }]), hass);
    expect(r.span).toEqual([0.25, 0.5]);
  });

  describe('value from an attribute', () => {
    const climate = {
      'climate.lounge': ['heat', { current_temperature: 20.5, temperature: 21, friendly_name: 'Lounge' }] as [
        string,
        Record<string, unknown>,
      ],
      'sensor.t': ['19', { unit_of_measurement: '°C' }] as [string, Record<string, unknown>],
    };

    it('reads a numeric attribute with the decimals it was reported with', () => {
      const hass = makeHass(climate);
      const [r] = resolveEntities(cfg([{ entity: 'climate.lounge', attribute: 'current_temperature', max: 30 }]), hass);
      expect(r.available).toBe(true);
      expect(r.value).toBe(20.5);
      expect(r.decimals).toBe(1);
      expect(r.display).toBe('20.5');
      expect(r.position).toBeCloseTo(20.5 / 30);
      expect(r.name).toBe('Lounge');
    });

    it('reads numeric strings, and caps reported decimals at 2', () => {
      const hass = makeHass({ 'media_player.k': ['playing', { volume_level: 0.123456, level: '42' }] });
      const [vol, level] = resolveEntities(
        cfg([
          { entity: 'media_player.k', attribute: 'volume_level', max: 1 },
          { entity: 'media_player.k', attribute: 'level' },
        ]),
        hass,
      );
      expect(vol.display).toBe('0.12');
      expect(level.value).toBe(42);
      expect(level.display).toBe('42');
    });

    it("ignores the state's unit but keeps a configured unit and decimals", () => {
      const hass = makeHass({ 'sensor.t': ['19', { unit_of_measurement: '°C', setpoint: 21 }] });
      const [plain, set] = resolveEntities(
        cfg([
          { entity: 'sensor.t', attribute: 'setpoint' },
          { entity: 'sensor.t', attribute: 'setpoint', unit: '°C', decimals: 1 },
        ]),
        hass,
      );
      expect(plain.unit).toBe('');
      expect(plain.display).toBe('21');
      expect(set.display).toBe('21.0 °C');
    });

    it("shows the entity's state when the attribute is missing, and an attribute's own text", () => {
      const hass = makeHass({ 'media_player.k': ['off', { mode: 'eco' }] });
      const [missing, text] = resolveEntities(
        cfg([
          { entity: 'media_player.k', attribute: 'volume_level' },
          { entity: 'media_player.k', attribute: 'mode' },
        ]),
        hass,
      );
      expect(missing.available).toBe(false);
      expect(missing.display).toBe('off');
      expect(text.available).toBe(false);
      expect(text.display).toBe('eco');
      hass.formatEntityAttributeValue = (_s, attr) => `${attr}: Eco`;
      expect(resolveEntities(cfg([{ entity: 'media_player.k', attribute: 'mode' }]), hass)[0].display).toBe(
        'mode: Eco',
      );
    });

    it('treats an empty attribute as the state', () => {
      const hass = makeHass(climate);
      const config = cfg([{ entity: 'sensor.t', attribute: '' }]);
      expect(config.entities[0].attribute).toBeUndefined();
      expect(resolveEntities(config, hass)[0].display).toBe('19.0 °C');
    });
  });
});
