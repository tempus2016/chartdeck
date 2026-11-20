import { html } from 'lit';
import type { TemplateResult } from 'lit';
import { GOAL_DIRECTIONS, GOAL_PERIODS, GOAL_PROJECTIONS } from '../chart/goal';
import { languageOf, localize } from '../localize';
import type { ChartEditorContext } from '../styles/index';
import type { CardConfig, HomeAssistant } from '../types';
import { computeHelper } from './helper';

/*
 * The Goal part of the line chart's editor: a switch, then the target (a number or an entity),
 * the period, which side of the target is good, and how the end is projected.
 */

const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

const DEFAULTS: Record<string, string> = { period: 'month', direction: 'below', project: 'linear' };

/** The form's values from the card's `goal`. */
export function goalFormData(config: CardConfig): Record<string, unknown> {
  const g = config.goal;
  if (!isObject(g)) return { goal_on: false };
  const data: Record<string, unknown> = { goal_on: true };
  if (typeof g.target === 'number') data.goal_target = g.target;
  if (typeof g.target === 'string') data.goal_target_entity = g.target;
  for (const k of Object.keys(DEFAULTS)) data[`goal_${k}`] = g[k] ?? DEFAULTS[k];
  return data;
}

/** The card config with the goal form applied; defaults are left out of the YAML. */
export function withGoalForm(config: CardConfig, data: Record<string, unknown>): CardConfig {
  const next = { ...config };
  if (data.goal_on !== true) {
    delete next.goal;
    return next;
  }
  const before = goalFormData(config);
  const goal: Record<string, unknown> = { ...(isObject(config.goal) ? config.goal : {}) };
  const entity = typeof data.goal_target_entity === 'string' ? data.goal_target_entity.trim() : '';
  const number =
    typeof data.goal_target === 'number' && Number.isFinite(data.goal_target) ? data.goal_target : undefined;
  // The field that changed sets the target: an entity, or a number; clearing it leaves the other.
  let target: unknown = goal.target;
  if (entity !== (before.goal_target_entity ?? '')) target = entity || number;
  else if (number !== before.goal_target) target = number ?? (entity || undefined);
  if (target === undefined || target === '') delete goal.target;
  else goal.target = target;
  for (const k of Object.keys(DEFAULTS)) {
    const v = data[`goal_${k}`];
    if (v === undefined || v === DEFAULTS[k]) delete goal[k];
    else goal[k] = v;
  }
  next.goal = goal;
  return next;
}

const select = (hass: HomeAssistant | undefined, prefix: string, values: readonly string[]) => ({
  select: {
    mode: 'dropdown',
    options: values.map((value) => ({ value, label: localize(hass, `editor_goal_${prefix}_${value}`) })),
  },
});

const schemas = new Map<string, unknown[]>();

/** Built once per language and switch position, so ha-form keeps its schema. */
export function goalSchema(hass: HomeAssistant | undefined, on: boolean): unknown[] {
  const k = `${languageOf(hass)}|${on}`;
  let schema = schemas.get(k);
  if (!schema) {
    schema = [
      { name: 'goal_on', selector: { boolean: {} } },
      ...(on
        ? [
            {
              type: 'grid',
              name: '',
              schema: [
                { name: 'goal_target', selector: { number: { mode: 'box', step: 'any' } } },
                { name: 'goal_target_entity', selector: { entity: { domain: ['sensor', 'input_number', 'number'] } } },
              ],
            },
            {
              type: 'grid',
              name: '',
              schema: [
                { name: 'goal_period', selector: select(hass, 'period', GOAL_PERIODS) },
                { name: 'goal_direction', selector: select(hass, 'direction', GOAL_DIRECTIONS) },
                { name: 'goal_project', selector: select(hass, 'project', GOAL_PROJECTIONS) },
              ],
            },
          ]
        : []),
    ];
    schemas.set(k, schema);
  }
  return schema;
}

/** The Goal section under the line chart's options. */
export function goalEditor(ctx: ChartEditorContext): TemplateResult {
  const t = (k: string) => localize(ctx.hass, k);
  return html`<div class="goal" data-section="goal">
    <div style="font-weight: 500; margin: 16px 0 4px">${t('editor_goal')}</div>
    <ha-form
      data-section="goal-options"
      .hass=${ctx.hass}
      .data=${goalFormData(ctx.config)}
      .schema=${goalSchema(ctx.hass, isObject(ctx.config.goal))}
      .computeLabel=${(s: { name: string }) => t(`editor_${s.name}`)}
      .computeHelper=${(s: { name: string }) => computeHelper(ctx.hass, `editor_${s.name}`)}
      @value-changed=${(ev: CustomEvent) => {
        ev.stopPropagation();
        ctx.commit(withGoalForm(ctx.config, (ev.detail?.value ?? {}) as Record<string, unknown>));
      }}
    ></ha-form>
  </div>`;
}
