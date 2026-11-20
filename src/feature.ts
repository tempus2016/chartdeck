import { LitElement, css, html, nothing, svg } from 'lit';
import type { PropertyValues, TemplateResult } from 'lit';
import { attachActions, isInteractive } from './actions';
import { baseColor, colorStops } from './bands';
import type { ChartSeries } from './chart/frame';
import { normalizeConfig } from './config';
import './editor/feature-editor';
import { key } from './history/fetch';
import { AGGREGATES } from './history/group';
import type { Aggregate } from './history/group';
import { pauseStore, storeFor } from './history/store';
import type { Point } from './history/types';
import { LanguageController } from './language-controller';
import { localize } from './localize';
import { resolveEntities } from './resolve';
import type { ResolvedEntity } from './resolve';
import { columnPoints, sparkline } from './styles/sparkline';
import type { CardConfig, EntityConfig, HassEntity, HomeAssistant, NormalizedConfig } from './types';

/*
 * A Chartdeck tile card feature (Home Assistant 2024.8 and later): `type: custom:chartdeck-feature`
 * under a tile card's `features:`, drawn in the strip HA gives a feature (`--feature-height`, 42 px,
 * rounded with `--feature-border-radius`). It reads the tile's entity unless it names its own
 * (a switch's tile can show its plug's power), through the card's own config code, so min, max,
 * target, colour bands, unit and actions mean what they mean on the card. Three looks:
 *
 * - sparkline: the last `hours` (24) of history as a line, filled below unless `fill: false`.
 * - column: the same history in columns per hour (two days or less) or per day, averaged, or the
 *   rise per column for a meter (`aggregate`).
 * - bar: the current value between min and max, with the target as a mark.
 *
 * The drawing is the sparkline style's (`sparkline()`, `columnPoints()`), stretched to the strip.
 */

export const FEATURE_STYLES = ['sparkline', 'column', 'bar'] as const;
export type FeatureStyle = (typeof FEATURE_STYLES)[number];
/** What a column holds: `auto` is the rise for a meter, else the mean. */
export const FEATURE_AGGREGATES = ['auto', ...AGGREGATES] as const;

export interface FeatureConfig extends Partial<EntityConfig> {
  type: string;
  style?: FeatureStyle;
  /** Hours of history in the sparkline or columns (default 24, at most a week). */
  hours?: number;
  /** Sparkline: fill below the line (default true). */
  fill?: boolean;
  aggregate?: (typeof FEATURE_AGGREGATES)[number];
  /** A colour when there are no bands (palette name or CSS colour); default the tile's. */
  color?: string;
}

/** What HA tells a feature about its card: the tile's entity (HA 2025.2 and later). */
export interface FeatureContext {
  entity_id?: string;
  area_id?: string;
}

export interface Options {
  style: FeatureStyle;
  hours: number;
  fill: boolean;
  aggregate: (typeof FEATURE_AGGREGATES)[number];
}

const DEFAULT_HOURS = 24;
const MAX_HOURS = 168;
const HOUR = 3_600_000;
/** The sparkline style's drawing box, stretched to the strip. */
const W = 100;
const H = 24;
const LINE_WIDTH = 2;
/** Stands in for the entity while a config without one is checked (it comes from the tile). */
const PLACEHOLDER = 'sensor.chartdeck_feature';

/** Attributes a tile's entity may carry a number in, best first. */
const NUMERIC_ATTRIBUTES = [
  'current_temperature',
  'current_humidity',
  'current_position',
  'percentage',
  'brightness',
  'temperature',
  'humidity',
  'volume_level',
  'battery_level',
];
/** Entities that are on or off, and often sit beside a sensor (a plug's power). */
const ON_OFF = ['switch', 'light', 'fan', 'input_boolean', 'binary_sensor'];

const isNumber = (v: unknown): boolean =>
  typeof v === 'number' ? Number.isFinite(v) : typeof v === 'string' && v.trim() !== '' && Number.isFinite(Number(v));

/** A state that is, or is meant to be, a number: numeric now, or with a unit or state class. */
function numericEntity(s: HassEntity): boolean {
  return isNumber(s.state) || !!s.attributes?.unit_of_measurement || !!s.attributes?.state_class;
}

function numericAttribute(s: HassEntity): string | undefined {
  return NUMERIC_ATTRIBUTES.find((a) => isNumber(s.attributes?.[a]));
}

/**
 * What a feature on this entity's tile should read: the entity itself (`{}`), one of its numeric
 * attributes, or a numeric sensor on the same device (power first, then energy, then any), as a
 * plug's switch has. Undefined when there is nothing to draw.
 */
export function featureSource(
  hass: HomeAssistant | undefined,
  entityId: string | undefined,
): { entity?: string; attribute?: string } | undefined {
  const s = entityId ? hass?.states?.[entityId] : undefined;
  if (!s) return undefined;
  if (numericEntity(s)) return {};
  const attribute = numericAttribute(s);
  if (attribute) return { attribute };
  const device = hass?.entities?.[s.entity_id]?.device_id;
  if (!device) return undefined;
  const siblings = Object.values(hass!.entities!)
    .filter((e) => e.device_id === device && e.entity_id !== s.entity_id && e.entity_id.startsWith('sensor.'))
    .map((e) => hass!.states[e.entity_id])
    .filter((x): x is HassEntity => !!x && numericEntity(x))
    .sort((a, b) => a.entity_id.localeCompare(b.entity_id));
  const rank = (x: HassEntity) => {
    const i = ['power', 'energy'].indexOf(String(x.attributes?.device_class ?? ''));
    return i < 0 ? 2 : i;
  };
  siblings.sort((a, b) => rank(a) - rank(b));
  return siblings[0] ? { entity: siblings[0].entity_id } : undefined;
}

/** HA before 2025.2 asks with the tile's state only: numbers, numeric attributes, on/off entities. */
export function supportedState(stateObj: HassEntity | undefined): boolean {
  if (!stateObj) return false;
  return numericEntity(stateObj) || !!numericAttribute(stateObj) || ON_OFF.includes(stateObj.entity_id.split('.')[0]);
}

/** Check a feature config. Throws a readable Error. */
export function featureOptions(raw: FeatureConfig): Options {
  if (!raw || typeof raw !== 'object') throw new Error('Invalid configuration');
  const style = raw.style ?? 'sparkline';
  if (!FEATURE_STYLES.includes(style)) throw new Error(`"style" must be one of: ${FEATURE_STYLES.join(', ')}`);
  const hours = raw.hours ?? DEFAULT_HOURS;
  if (typeof hours !== 'number' || !Number.isFinite(hours) || hours <= 0 || hours > MAX_HOURS) {
    throw new Error(`"hours" must be a number of hours from 1 to ${MAX_HOURS}`);
  }
  if (raw.fill !== undefined && typeof raw.fill !== 'boolean') throw new Error('"fill" must be true or false');
  const aggregate = raw.aggregate ?? 'auto';
  if (!FEATURE_AGGREGATES.includes(aggregate)) {
    throw new Error(`"aggregate" must be one of: ${FEATURE_AGGREGATES.join(', ')}`);
  }
  if (raw.entity !== undefined && (typeof raw.entity !== 'string' || !raw.entity)) {
    throw new Error('"entity" must be an entity id');
  }
  if (raw.color !== undefined && typeof raw.color !== 'string') throw new Error('"color" must be a colour');
  return { style, hours, fill: raw.fill !== false, aggregate };
}

/** The feature as a card of one entity, through the card's own checks (limits, bands, actions). */
export function featureCard(raw: FeatureConfig, entity: string): NormalizedConfig {
  const { type: _t, style: _s, hours: _h, fill: _f, aggregate: _a, entity: _e, attribute, color: _c, ...rest } = raw;
  void [_t, _s, _h, _f, _a, _e, _c];
  const card: CardConfig = {
    ...rest,
    type: 'custom:chartdeck-card',
    entities: [attribute ? { entity, attribute } : entity],
  };
  return normalizeConfig(card);
}

/** The column aggregate: a meter (`total_increasing`/`total`) rises per column, anything else is averaged. */
export function columnAggregate(choice: Options['aggregate'], stateObj: HassEntity | undefined): Aggregate {
  if (choice !== 'auto') return choice;
  const cls = stateObj?.attributes?.state_class;
  return cls === 'total_increasing' || cls === 'total' ? 'change' : 'mean';
}

/** The feature's colour: its own, else its band's when it has bands, else the tile's, else primary. */
export function featureColor(e: ResolvedEntity, raw: FeatureConfig, tileColor?: unknown): string {
  if (raw.color) return baseColor(raw.color);
  if (Array.isArray(raw.severity) && raw.severity.length) return baseColor(e.band.color);
  if (typeof tileColor === 'string' && tileColor && tileColor !== 'state' && tileColor !== 'none') return tileColor;
  return 'var(--tile-color, var(--primary-color, #03a9f4))';
}

/** A share (0–1) as a percentage to a tenth. */
const pct = (share: number): number => Math.round(share * 1000) / 10;

/** A sensor holds its last reading until it changes: carry it on to `now`. */
export function carryToNow(points: Point[], now: number): Point[] {
  const last = points[points.length - 1];
  return last && last.v !== null && last.t < now ? [...points, { t: now, v: last.v }] : points;
}

export class ChartdeckFeature extends LitElement {
  protected readonly languageController = new LanguageController(this);

  static properties = {
    hass: { attribute: false },
    context: { attribute: false },
    stateObj: { attribute: false },
    color: { attribute: false },
    _raw: { state: true },
  };

  declare hass?: HomeAssistant;
  /** The tile's entity (HA 2025.2 and later). */
  declare context?: FeatureContext;
  /** The tile's state (HA before 2025.2). */
  declare stateObj?: HassEntity;
  /** The tile's colour, when it passes one. */
  declare color?: string;
  declare _raw?: FeatureConfig;
  private _options: Options = { style: 'sparkline', hours: DEFAULT_HOURS, fill: true, aggregate: 'auto' };
  private _card?: { id: string; config: NormalizedConfig };
  private _item?: ResolvedEntity;
  private _detach?: () => void;
  private _detachedFrom?: HTMLElement;

  static getConfigElement(): HTMLElement {
    return document.createElement('chartdeck-feature-editor');
  }

  /** A sparkline of what the tile's entity has to draw (see `featureSource`). */
  static getStubConfig(hass?: HomeAssistant, context?: FeatureContext): FeatureConfig {
    return { type: 'custom:chartdeck-feature', style: 'sparkline', ...featureSource(hass, context?.entity_id) };
  }

  setConfig(raw: FeatureConfig): void {
    const options = featureOptions(raw);
    featureCard(raw, raw.entity ?? PLACEHOLDER);
    this._options = options;
    this._card = undefined;
    this._raw = raw;
  }

  /** The entity drawn: the feature's own, else the tile's. */
  get entityId(): string | undefined {
    return this._raw?.entity ?? this.context?.entity_id ?? this.stateObj?.entity_id;
  }

  private _config(id: string): NormalizedConfig {
    if (this._card?.id !== id) this._card = { id, config: featureCard(this._raw!, id) };
    return this._card.config;
  }

  protected shouldUpdate(changed: PropertyValues): boolean {
    if (changed.size === 0 || !changed.has('hass') || changed.size > 1) return true;
    const prev = changed.get('hass') as HomeAssistant | undefined;
    const next = this.hass;
    const id = this.entityId;
    if (!prev || !next || !id) return true;
    const ids = [id];
    for (const limit of [this._raw?.min, this._raw?.max, this._raw?.target]) {
      if (typeof limit === 'string') ids.push(limit);
    }
    for (const band of this._raw?.severity ?? []) if (typeof band.from === 'string') ids.push(band.from);
    if (ids.some((x) => prev.states[x] !== next.states[x])) return true;
    return prev.themes?.darkMode !== next.themes?.darkMode || prev.locale !== next.locale;
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (this.hasUpdated) this.requestUpdate();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    pauseStore(this);
    this._detach?.();
    this._detach = undefined;
  }

  protected updated(): void {
    const el = this.shadowRoot?.querySelector<HTMLElement>('.feature');
    if (el !== this._detachedFrom) {
      this._detach?.();
      this._detach = undefined;
    }
    if (el && !this._detach) {
      this._detach = attachActions(el, () => this._item!.config);
      this._detachedFrom = el;
    }
  }

  private _history(e: ResolvedEntity, color: string): TemplateResult {
    const { style, hours, fill, aggregate } = this._options;
    const now = Date.now();
    const range = { start: now - hours * HOUR, end: now };
    const request = { entity: e.entityId, attribute: e.config.attribute };
    const loaded = storeFor(this, () => this.requestUpdate()).get(this.hass!, [request], range, 'history');
    let points = carryToNow(loaded.data.get(key(request)) ?? [], now);
    if (style === 'column') {
      const raw = {
        type: 'x',
        period: { last: hours, unit: 'hour' },
        aggregate: columnAggregate(aggregate, e.stateObj),
      } as CardConfig;
      points = columnPoints(points, raw, range, this.hass);
    }
    const series: ChartSeries = { index: 0, entity: e, points, color, curve: 'smooth', dash: false };
    const drawn =
      loaded.status === 'ready'
        ? sparkline(series, style === 'column' ? 'column' : fill ? 'area' : 'line', range, LINE_WIDTH)
        : nothing;
    const empty = loaded.status !== 'ready' || !points.some((p) => p.v !== null);
    return html`<svg
      class="chart ${loaded.status}"
      viewBox="0 0 ${W} ${H}"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      ${empty ? svg`<line class="empty" x1="0" x2=${W} y1=${H / 2} y2=${H / 2}></line>` : drawn}
    </svg>`;
  }

  private _bar(e: ResolvedEntity, color: string): TemplateResult {
    const stops = Array.isArray(this._raw?.severity) && this._raw!.severity.length ? colorStops(e.band.color) : null;
    const start = stops?.start ?? color;
    const end = stops?.end ?? color;
    const [from, to] = e.available ? e.span : [0, 0];
    return html`<div class="track" aria-hidden="true">
      ${
        to > from
          ? html`<div
              class="fill"
              style="left:${pct(from)}%;width:${pct(to - from)}%;background:${start};background-image:linear-gradient(90deg, ${start}, ${end})"
            ></div>`
          : nothing
      }
      ${e.targetPosition !== null && e.available ? html`<div class="target" style="--target:${e.targetPosition}"></div>` : nothing}
    </div>`;
  }

  render() {
    const hass = this.hass;
    const id = this.entityId;
    if (!this._raw || !hass || !id) return nothing;
    const e = resolveEntities(this._config(id), hass)[0];
    this._item = e;
    const color = featureColor(e, this._raw, this.color);
    const interactive = isInteractive(e.config);
    const { style, hours } = this._options;
    const label = style === 'bar' ? e.label : localize(hass, 'feature_aria', { name: e.name, hours, value: e.display });
    return html`<div
      class="feature style-${style} ${interactive ? 'interactive' : ''} ${e.available ? '' : 'unavailable'}"
      style="--cd-feature-color:${color}"
      role=${interactive ? 'button' : 'img'}
      tabindex=${interactive ? 0 : nothing}
      aria-label=${label}
      title=${label}
    >
      ${style === 'bar' ? this._bar(e, color) : this._history(e, color)}
    </div>`;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: var(--feature-height, 42px);
      --cd-feature-radius: var(--feature-border-radius, 12px);
    }
    .feature {
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      border-radius: var(--cd-feature-radius);
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      --cd-feature-track: color-mix(in srgb, var(--cd-feature-color) 20%, transparent);
    }
    .feature.interactive {
      cursor: pointer;
    }
    .feature:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
    }
    /* A line along the top or bottom keeps half its stroke inside the strip. */
    .style-sparkline,
    .style-column {
      padding: 2px 0;
    }
    .chart {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
    }
    /* The first column starts on the hour before the span: show only its part inside it. */
    .style-column .chart {
      overflow: hidden;
    }
    .chart path {
      vector-effect: non-scaling-stroke;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .chart .spark-fill {
      fill-opacity: 0.22;
    }
    .chart .empty {
      stroke: var(--cd-feature-track);
      stroke-width: 1.5px;
      stroke-dasharray: 3 4;
      vector-effect: non-scaling-stroke;
    }
    @supports not (color: color-mix(in srgb, red 50%, white)) {
      .feature {
        --cd-feature-track: var(--divider-color, rgba(127, 127, 127, 0.2));
      }
    }
    .unavailable .chart path {
      opacity: 0.5;
    }
    /* The bar fills the strip like HA's own slider features. */
    .track {
      position: relative;
      height: 100%;
      border-radius: var(--cd-feature-radius);
      overflow: hidden;
      background: var(--cd-feature-track);
    }
    .fill {
      position: absolute;
      top: 0;
      bottom: 0;
    }
    .target {
      position: absolute;
      top: 6px;
      bottom: 6px;
      width: 3px;
      border-radius: 2px;
      left: calc(var(--target) * (100% - 3px));
      background: var(--primary-text-color, #212121);
    }
  `;
}

if (!customElements.get('chartdeck-feature')) {
  customElements.define('chartdeck-feature', ChartdeckFeature);
}

interface CustomFeatureEntry {
  type: string;
  name: string;
  configurable?: boolean;
  supported?: (stateObj: HassEntity) => boolean;
  isSupported?: (hass: HomeAssistant, context: FeatureContext) => boolean;
}
const features = ((window as unknown as { customCardFeatures?: CustomFeatureEntry[] }).customCardFeatures ??= []);
if (!features.some((f) => f.type === 'chartdeck-feature')) {
  features.push({
    type: 'chartdeck-feature',
    name: 'Chartdeck chart',
    configurable: true,
    supported: supportedState,
    isSupported: (hass, context) => featureSource(hass, context?.entity_id) !== undefined,
  });
}
