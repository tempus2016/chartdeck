import type { CSSResult, TemplateResult } from 'lit';
import type { ResolvedEntity } from '../resolve';
import type { HomeAssistant, ShowOptions, StyleName } from '../types';
import { bar } from './bar';
import { segmented } from './segmented';
import { thin } from './thin';

export interface RenderContext {
  show: ShowOptions;
  hass: HomeAssistant;
}

export interface StyleModule {
  layout: 'rows' | 'tiles';
  styles: CSSResult;
  /** The inside of one entity only; the card supplies the `.entity` wrapper. */
  render(e: ResolvedEntity, ctx: RenderContext): TemplateResult;
  /** Pixels per row (rows layout) or per tile (tiles layout), for sizing. */
  height: number;
  /** Tiles layout: tiles per row when `columns` is unset (default 3). */
  tilesPerRow?: number;
}

export const STYLES: Record<StyleName, StyleModule> = {
  bar,
  thin,
  segmented,
} as Record<StyleName, StyleModule>;
