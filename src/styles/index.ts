import type { CSSResult, TemplateResult } from 'lit';
import type { ResolvedEntity } from '../resolve';
import type { HomeAssistant, ShowOptions, StyleName } from '../types';
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

export interface StyleModule {
  layout: 'rows' | 'tiles';
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

export const STYLES: Record<StyleName, StyleModule> = {
  bar,
  thin,
  segmented,
  tank,
  ring,
  needle,
  arc,
};
