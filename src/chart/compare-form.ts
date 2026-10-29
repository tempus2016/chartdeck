import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { applyFormData, formData } from '../editor/schemas';
import type { FieldBinding } from '../editor/schemas';
import { languageOf, localize } from '../localize';
import type { ChartEditorContext } from '../styles/index';
import type { HomeAssistant } from '../types';

/*
 * Editor helpers for the comparison charts. They match `choice`, `cachedSchema` and `chartForm`
 * in the line chart's `src/editor/chart-editors.ts`, which these branches don't have yet; once both
 * are on main, imports can move there and this file can go.
 */

/** A dropdown of fixed values, labelled from `editor_<prefix>_<value>`. */
export function choice(hass: HomeAssistant | undefined, prefix: string, values: readonly string[]) {
  return {
    select: {
      mode: 'dropdown',
      options: values.map((value) => ({ value, label: localize(hass, `editor_${prefix}_${value}`) })),
    },
  };
}

const cache = new Map<string, unknown[]>();

/** Build a schema once per language (and per id), so ha-form isn't handed a new one each render. */
export function cachedSchema(id: string, hass: HomeAssistant | undefined, build: () => unknown[]): unknown[] {
  const k = `${id}|${languageOf(hass)}`;
  let schema = cache.get(k);
  if (!schema) {
    schema = build();
    cache.set(k, schema);
  }
  return schema;
}

/** An ha-form bound to card-config paths; a value set back to its default removes the key. */
export function chartForm(
  ctx: ChartEditorContext,
  section: string,
  schema: unknown[],
  fields: FieldBinding[],
): TemplateResult {
  return html`<ha-form
    data-section=${section}
    .hass=${ctx.hass}
    .data=${formData(ctx.config, fields)}
    .schema=${schema}
    .computeLabel=${(s: { name: string }) => localize(ctx.hass, `editor_${s.name}`)}
    @value-changed=${(ev: CustomEvent) => {
      ev.stopPropagation();
      const next = applyFormData(ctx.config, fields, (ev.detail?.value ?? {}) as Record<string, unknown>);
      if (next !== ctx.config) ctx.commit(next);
    }}
  ></ha-form>`;
}
