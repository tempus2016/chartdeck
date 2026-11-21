import { html, nothing } from 'lit';
import type { TemplateResult } from 'lit';
import { formulaVars, parseFormula, readFormula } from '../formula';
import { languageOf, localize } from '../localize';
import type { EntityConfig, HomeAssistant } from '../types';
import { computeHelper } from './helper';

/**
 * The formula fields in an entity's options: the formula as text, then an entity picker for each
 * name it uses ("a - b" gives pickers for a and b), so `vars` always matches the formula. While
 * the formula doesn't read (half typed), the pickers already set stay, and the reason shows under it.
 */

const NAMES = /[A-Za-z_][A-Za-z0-9_]*/g;
const FUNCTIONS = new Set(['min', 'max', 'abs', 'round']);

/** The variable names in a formula; for one that doesn't read yet, every name in it that isn't a function. */
export function formulaNames(text: string | undefined): string[] {
  if (!text) return [];
  try {
    return formulaVars(parseFormula(text));
  } catch {
    return [...new Set((text.match(NAMES) ?? []).filter((n) => !FUNCTIONS.has(n)))];
  }
}

/** Why a formula and its variables don't work, or undefined when they do (or there is none). */
export function formulaProblem(own: EntityConfig): string | undefined {
  try {
    readFormula(own);
    return undefined;
  } catch (err) {
    return (err as Error).message;
  }
}

/**
 * The entity with the form's values: the formula, and `vars` for the names it uses (names it no
 * longer uses are dropped; an emptied formula drops `vars` too).
 */
export function applyFormulaForm(own: EntityConfig, value: Record<string, unknown>): EntityConfig {
  const next: Record<string, unknown> = { ...own };
  const text = typeof value.formula === 'string' ? value.formula : '';
  if (text.trim() === '') {
    delete next.formula;
    delete next.vars;
    return next as unknown as EntityConfig;
  }
  next.formula = text;
  const vars: Record<string, string> = {};
  for (const name of formulaNames(text)) {
    const id = value[`var_${name}`];
    if (typeof id === 'string' && id) vars[name] = id;
  }
  if (Object.keys(vars).length) next.vars = vars;
  else delete next.vars;
  return next as unknown as EntityConfig;
}

const schemas = new Map<string, unknown[]>();

function schemaFor(names: string[], hass: HomeAssistant | undefined): unknown[] {
  const key = `${languageOf(hass)}|${names.join(',')}`;
  let schema = schemas.get(key);
  if (!schema) {
    schema = [
      { name: 'formula', selector: { text: {} } },
      ...names.map((name) => ({ name: `var_${name}`, selector: { entity: {} } })),
    ];
    if (schemas.size > 100) schemas.clear();
    schemas.set(key, schema);
  }
  return schema;
}

/** The formula section of an entity's options; `onChange` gets the entity with the new values. */
export function formulaForm(
  hass: HomeAssistant | undefined,
  own: EntityConfig,
  index: number,
  onChange: (next: EntityConfig) => void,
): TemplateResult {
  const names = formulaNames(own.formula);
  const data: Record<string, unknown> = { formula: own.formula ?? '' };
  for (const name of names) data[`var_${name}`] = own.vars?.[name] ?? '';
  const label = (s: { name: string }) =>
    s.name === 'formula'
      ? localize(hass, 'editor_formula')
      : localize(hass, 'editor_formula_var', { name: s.name.slice(4) });
  const helper = (s: { name: string }) => (s.name === 'formula' ? computeHelper(hass, 'editor_formula') : undefined);
  const problem = own.formula ? formulaProblem(own) : undefined;
  return html`<div role="group" aria-labelledby="formula-${index}">
    <div class="sub-heading" id="formula-${index}">${localize(hass, 'editor_formula_heading')}</div>
    <ha-form
      data-section="entity-formula"
      .hass=${hass}
      .data=${data}
      .schema=${schemaFor(names, hass)}
      .computeLabel=${label}
      .computeHelper=${helper}
      @value-changed=${(ev: CustomEvent) => {
        ev.stopPropagation();
        const next = applyFormulaForm(own, (ev.detail?.value ?? {}) as Record<string, unknown>);
        if (next.formula !== own.formula || JSON.stringify(next.vars) !== JSON.stringify(own.vars)) onChange(next);
      }}
    ></ha-form>
    ${
      problem
        ? html`<ha-alert class="warning" data-warning="formula" alert-type="warning">${problem}</ha-alert>`
        : nothing
    }
  </div>`;
}
