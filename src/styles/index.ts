import type { CSSResult, SVGTemplateResult, TemplateResult } from 'lit';
import type { ResolvedEntity } from '../resolve';
import type { CardConfig, HomeAssistant, NormalizedConfig, ShowOptions, StyleName } from '../types';
import { bar } from './bar';
import { needle } from './needle';
import { arc, ring } from './radial';
import { segmented } from './segmented';
import { tank } from './tank';
import { thin } from './thin';

export interface RenderContext {
  show: ShowOptions;
  hass: HomeAssistant;
}

/** Where a style sits in the editor's style picker. */
export type StyleGroup = 'bars' | 'gauges' | 'history' | 'totals' | 'compare' | 'distribution';
export const STYLE_GROUPS: StyleGroup[] = ['bars', 'gauges', 'history', 'totals', 'compare', 'distribution'];

/** A style that draws each entity in its own row or tile. */
export interface ValueStyleModule {
  layout: 'rows' | 'tiles';
  group: StyleGroup;
  styles: CSSResult;
  /** The inside of one entity only; the card supplies the `.entity` wrapper. */
  render(e: ResolvedEntity, ctx: RenderContext): TemplateResult;
  /** Pixels per row (rows layout) or per tile (tiles layout), for sizing. */
  height: number;
  /** Tiles layout: tiles per row when `columns` is unset (default 3). */
  tilesPerRow?: number;
  /** Narrowest a column may get (px) before a set `columns` count drops to fewer. */
  minColumnWidth?: number;
}

/** What a whole-card style draws from. */
export interface ChartContext {
  /** The card's entities, resolved, sorted and limited, as for the value styles. */
  items: ResolvedEntity[];
  config: NormalizedConfig;
  /** The card's YAML, for options only this style reads. */
  raw: CardConfig;
  hass: HomeAssistant;
  /** Ask the card to draw again (after loading data, or on a pointer move). */
  requestUpdate(): void;
  /** The card element, for styles that measure or listen. */
  host: HTMLElement;
}

/** Extras for a style's own editor section. */
export interface ChartEditorContext {
  hass?: HomeAssistant;
  config: CardConfig;
  /** Replace the card config (the editor fires config-changed). */
  commit(config: CardConfig): void;
}

/**
 * A style that draws all the card's entities together, as one chart. Options only it reads stay
 * in the raw config: it checks them in `validate` and edits them in `editor`, so adding a chart
 * touches this registry and little else.
 */
export interface ChartStyleModule {
  layout: 'chart';
  group: StyleGroup;
  styles: CSSResult;
  render(ctx: ChartContext): TemplateResult;
  /** Estimated height in px, for masonry sizing. */
  height: number;
  /** A 64 × 40 picture for the style picker, in theme colours. */
  thumbnail(): SVGTemplateResult;
  /** Throw a readable Error for an invalid option this style reads. */
  validate?(raw: CardConfig): void;
  /** The editor's Chart section for this style. */
  editor?(ctx: ChartEditorContext): TemplateResult;
  /** Entity ids, other than the card's own, whose changes should redraw it. */
  watch?(raw: CardConfig): string[];
  /** Called when the card leaves the page: stop subscriptions and timers. */
  disconnect?(host: HTMLElement): void;
}

export type StyleModule = ValueStyleModule | ChartStyleModule;

export function isChart(style: StyleModule): style is ChartStyleModule {
  return style.layout === 'chart';
}

export const STYLES: Record<StyleName, StyleModule> = {
  bar,
  thin,
  segmented,
  tank,
  ring,
  needle,
  arc,
};
