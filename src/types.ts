import type { Rule } from './fill';
export type StyleName = 'bar' | 'thin' | 'segmented' | 'tank' | 'ring' | 'needle' | 'arc' | 'line';
export const STYLE_NAMES: StyleName[] = ['bar', 'thin', 'segmented', 'tank', 'ring', 'needle', 'arc', 'line'];
export type SortMode = 'none' | 'ascending' | 'descending';
/** A number, or a string naming an entity whose state supplies the number. */
export type Limit = number | string;
export interface Band {
  /** Where the band starts: a number, or an entity whose state supplies it. */
  from: Limit;
  color: string;
  label?: string;
  /** Icon shown while the value is in this band. */
  icon?: string;
}
/** A band with its start read: what the card draws with. */
export interface ResolvedBand extends Band {
  from: number;
}
export interface ActionConfig {
  action: string;
  [key: string]: unknown;
}
export interface EntityOptions {
  name?: string;
  icon?: string;
  min?: Limit;
  max?: Limit;
  target?: Limit;
  unit?: string;
  decimals?: number;
  severity?: Band[];
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}
export interface EntityConfig extends EntityOptions {
  entity: string;
  /** Read this attribute as the value instead of the state. */
  attribute?: string;
  /** Charts: this series' colour (a palette name or any CSS colour). */
  color?: string;
  /** Line and area charts: smooth, straight or step. */
  curve?: string;
  /** Line charts: draw this series dashed. */
  dash?: boolean;
}
export interface ShowOptions {
  name: boolean;
  value: boolean;
  icon: boolean;
  target: boolean;
  legend: boolean;
}
export interface CardConfig extends EntityOptions {
  type: string;
  /** Also show every entity matching these. */
  include?: Record<string, string | string[]>;
  /** Leave out matched entities matching any of these. */
  exclude?: Record<string, string | string[]>;
  hide_unavailable?: boolean;
  /** Show at most this many, after sorting. */
  limit?: number;
  title?: string;
  style?: StyleName;
  entities?: (string | EntityConfig)[];
  show?: Partial<ShowOptions>;
  sort?: SortMode;
  columns?: number;
  animate?: boolean;
  /** Colour each icon with its current band's colour. */
  color_icon?: boolean;
  [key: string]: unknown;
}
/** Card-level options overlaid by the entity's own. */
export interface MergedEntity extends EntityOptions {
  entity: string;
  attribute?: string;
  min: Limit;
  max: Limit;
  severity: Band[];
  tap_action: ActionConfig;
  hold_action: ActionConfig;
  double_tap_action: ActionConfig;
}
export interface NormalizedConfig {
  title?: string;
  include?: Rule;
  exclude?: Rule;
  hideUnavailable: boolean;
  limit?: number;
  /** The card's own options, which matched entities inherit. */
  cardOptions: EntityOptions;
  style: StyleName;
  entities: MergedEntity[];
  show: ShowOptions;
  sort: SortMode;
  columns?: number;
  animate: boolean;
  colorIcon: boolean;
  /** Card-level bands, for the legend. */
  legendBands: Band[];
}
export interface HassEntity {
  entity_id: string;
  state: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributes: Record<string, any>;
  last_changed?: string;
  last_updated?: string;
}
export interface HomeAssistant {
  states: Record<string, HassEntity>;
  entities?: Record<
    string,
    {
      entity_id: string;
      display_precision?: number;
      icon?: string;
      device_id?: string | null;
      area_id?: string | null;
      labels?: string[];
      hidden?: boolean;
    }
  >;
  devices?: Record<string, { id: string; area_id?: string | null; labels?: string[] }>;
  areas?: Record<string, { area_id: string; floor_id?: string | null }>;
  locale?: { language: string; number_format?: string };
  language?: string;
  themes?: { darkMode?: boolean; theme?: string };
  formatEntityState?(stateObj: HassEntity, state?: string): string;
  /** Home Assistant's websocket call; charts load history and statistics with it. */
  callWS?<T>(msg: Record<string, unknown>): Promise<T>;
  config?: { time_zone?: string };
  formatEntityAttributeValue?(stateObj: HassEntity, attribute: string, value?: unknown): string;
}
