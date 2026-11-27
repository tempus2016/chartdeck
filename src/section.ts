import { matchEntities } from './fill';
import { localize } from './localize';
import type { HassEntity, HomeAssistant, StyleName } from './types';

/** The `strategy` block of a Chartdeck area section. */
export interface AreaSectionConfig {
  type: string;
  area?: string;
}

type CardConfig = Record<string, unknown>;

export interface SectionConfig {
  type: 'grid';
  cards: CardConfig[];
}

/** Sensor types shown first, in this order; any other type follows alphabetically. */
const LEADING = ['temperature', 'humidity', 'power', 'battery'];

const STYLE_FOR: Record<string, StyleName> = {
  battery: 'battery',
  temperature: 'line',
  humidity: 'line',
  power: 'sparkline',
};

/** The card style a sensor type gets in an area section. */
export function styleFor(deviceClass: string): StyleName {
  return STYLE_FOR[deviceClass] ?? 'bar';
}

/** A sensor that has, or is meant to have, a number: numeric now, or with a unit or state class. */
function measures(state: HassEntity): boolean {
  const n = state.state.trim();
  return (
    (n !== '' && Number.isFinite(Number(n))) ||
    !!state.attributes?.unit_of_measurement ||
    !!state.attributes?.state_class
  );
}

/**
 * The area's sensors (the ones a card's include rule would find), by device class. `classes` are
 * the types with a sensor that measures something, which get a card; `others` are the types
 * that don't (a date that is "unknown" today), which the no-type card must leave out.
 */
function sensorClasses(
  area: string,
  hass: HomeAssistant,
): { classes: string[]; others: string[]; unclassified: boolean } {
  const measured = new Set<string>();
  const seen = new Set<string>();
  let unclassified = false;
  for (const id of matchEntities({ area: [area], domain: ['sensor'] }, undefined, hass)) {
    const state = hass.states[id];
    const cls = state?.attributes?.device_class;
    const counts = !!state && measures(state);
    if (typeof cls === 'string' && cls) {
      seen.add(cls);
      if (counts) measured.add(cls);
    } else if (counts) unclassified = true;
  }
  const rank = (c: string) => (LEADING.includes(c) ? LEADING.indexOf(c) : LEADING.length);
  const classes = [...measured].sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
  const others = [...seen].filter((c) => !measured.has(c)).sort((a, b) => a.localeCompare(b));
  return { classes, others, unclassified };
}

/**
 * A grid section for one area: its name as a heading, then a Chartdeck card per sensor type.
 * Each card finds its own sensors with an include rule, so ones added later appear by themselves.
 * Never throws: a missing area or an empty one gets a message card instead.
 */
export function areaSection(config: AreaSectionConfig, hass: HomeAssistant): SectionConfig {
  const area = config.area;
  const entry = area ? hass.areas?.[area] : undefined;
  if (!area || !entry) {
    return { type: 'grid', cards: [{ type: 'markdown', content: localize(hass, 'section_no_area') }] };
  }
  const name = entry.name || area;
  const heading: CardConfig = { type: 'heading', heading: name };
  const { classes, others, unclassified } = sensorClasses(area, hass);
  if (!classes.length && !unclassified) {
    return {
      type: 'grid',
      cards: [heading, { type: 'markdown', content: localize(hass, 'section_empty', { area: name }) }],
    };
  }
  const cards: CardConfig[] = classes.map((cls) => ({
    type: 'custom:chartdeck-card',
    style: styleFor(cls),
    include: { area: [area], domain: ['sensor'], device_class: [cls] },
  }));
  if (unclassified) {
    const card: CardConfig = {
      type: 'custom:chartdeck-card',
      style: 'bar',
      include: { area: [area], domain: ['sensor'] },
    };
    const leaveOut = [...classes, ...others];
    if (leaveOut.length) card.exclude = { device_class: leaveOut };
    cards.push(card);
  }
  return { type: 'grid', cards: [heading, ...cards] };
}

/** The first area, by name, with a numeric sensor in it: what a new section starts with. */
export function firstArea(hass: HomeAssistant): string | undefined {
  const areas = Object.values(hass.areas ?? {}).sort((a, b) =>
    (a.name || a.area_id).localeCompare(b.name || b.area_id),
  );
  return areas.find((a) => {
    const { classes, unclassified } = sensorClasses(a.area_id, hass);
    return classes.length > 0 || unclassified;
  })?.area_id;
}
