import type { Point } from './history/types';
import type { HomeAssistant } from './types';

/*
 * Formula series (`formula: "a - b"` with `vars: {a: sensor.x, b: sensor.y}` on an entity): the
 * series is worked out from other entities instead of read from one. Indoor less outdoor, power
 * times price, the larger of two sensors.
 *
 * The formula is read by a small parser of its own: numbers, variable names, + − × ÷ and ^,
 * brackets, unary minus, and the functions min, max, abs and round. Nothing else: no eval, no
 * Function, no templates, so a formula can only ever be arithmetic on the variables' numbers.
 *
 * - The current value comes from each variable's current state. A variable that is unavailable,
 *   unknown or not a number makes the whole value unavailable; so does dividing by zero.
 * - History joins the variables' histories on time. Each variable keeps its last reading until it
 *   changes (a sensor reports on change), so at each change of any of them the formula is worked
 *   out again with the others' last readings. A gap in any variable is a gap in the series.
 * - Long-term statistics join the same way, row by row (an hour's mean of a − b is the mean of a
 *   less the mean of b; for a product it is close, not exact).
 */

/** The functions a formula can call, with how many arguments each takes. */
const FUNCTIONS: Record<string, { max: number }> = {
  min: { max: Infinity },
  max: { max: Infinity },
  abs: { max: 1 },
  round: { max: 2 },
};

/** How long a formula may be, so a mistyped wall of text can't stall the card. */
export const MAX_FORMULA_LENGTH = 500;
const MAX_VARS = 10;

export type Expr =
  | { k: 'num'; v: number }
  | { k: 'var'; name: string }
  | { k: 'neg'; a: Expr }
  | { k: 'op'; op: '+' | '-' | '*' | '/' | '^'; a: Expr; b: Expr }
  | { k: 'call'; fn: string; args: Expr[] };

type Token = { t: 'num'; v: number } | { t: 'id'; v: string } | { t: 'sym'; v: string };

const NAME = /^[A-Za-z_][A-Za-z0-9_]*$/;
const own = (o: object, k: string) => Object.prototype.hasOwnProperty.call(o, k);
const isFunction = (name: string) => own(FUNCTIONS, name);

function tokenize(text: string): Token[] {
  const out: Token[] = [];
  let i = 0;
  while (i < text.length) {
    const c = text[i];
    if (/\s/.test(c)) {
      i++;
      continue;
    }
    const num = /^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/.exec(text.slice(i));
    if (num) {
      out.push({ t: 'num', v: Number(num[0]) });
      i += num[0].length;
      continue;
    }
    const id = /^[A-Za-z_][A-Za-z0-9_]*/.exec(text.slice(i));
    if (id) {
      out.push({ t: 'id', v: id[0] });
      i += id[0].length;
      continue;
    }
    // × and ÷ (and the minus sign) as people write them, as well as the keyboard's.
    const sym = ({ '×': '*', '÷': '/', '−': '-' } as Record<string, string>)[c] ?? c;
    if ('+-*/^(),'.includes(sym)) {
      out.push({ t: 'sym', v: sym });
      i++;
      continue;
    }
    throw new Error(`Formula: "${c}" is not allowed (use numbers, names, + - * / ^, brackets, min, max, abs, round)`);
  }
  return out;
}

/**
 * Read a formula into a tree. Usual precedence: brackets, then ^ (right to left), then unary
 * minus, then * and /, then + and -. `-a^2` is −(a²), as in maths. Throws a readable error.
 */
export function parseFormula(text: string): Expr {
  if (typeof text !== 'string' || text.trim() === '') throw new Error('Formula: write one, like "a - b"');
  if (text.length > MAX_FORMULA_LENGTH) throw new Error(`Formula: keep it under ${MAX_FORMULA_LENGTH} characters`);
  const tokens = tokenize(text);
  let pos = 0;
  const peek = () => tokens[pos];
  const isSym = (v: string) => peek()?.t === 'sym' && peek().v === v;
  const expect = (v: string) => {
    if (!isSym(v))
      throw new Error(`Formula: expected "${v}"${peek() ? ` before "${String(peek().v)}"` : ' at the end'}`);
    pos++;
  };

  function sum(): Expr {
    let left = product();
    while (isSym('+') || isSym('-')) {
      const op = tokens[pos++].v as '+' | '-';
      left = { k: 'op', op, a: left, b: product() };
    }
    return left;
  }
  function product(): Expr {
    let left = unary();
    while (isSym('*') || isSym('/')) {
      const op = tokens[pos++].v as '*' | '/';
      left = { k: 'op', op, a: left, b: unary() };
    }
    return left;
  }
  function unary(): Expr {
    if (isSym('-')) {
      pos++;
      return { k: 'neg', a: unary() };
    }
    if (isSym('+')) {
      pos++;
      return unary();
    }
    return power();
  }
  function power(): Expr {
    const base = atom();
    if (isSym('^')) {
      pos++;
      // Right to left (2^3^2 is 2^9), and the exponent may carry its own sign (a^-1).
      return { k: 'op', op: '^', a: base, b: unary() };
    }
    return base;
  }
  function atom(): Expr {
    const tok = peek();
    if (!tok) throw new Error('Formula: it ends too soon');
    if (tok.t === 'num') {
      pos++;
      return { k: 'num', v: tok.v };
    }
    if (tok.t === 'id') {
      pos++;
      if (isSym('(')) {
        const fn = isFunction(tok.v) ? FUNCTIONS[tok.v] : undefined;
        if (!fn) throw new Error(`Formula: "${tok.v}" is not a function (use min, max, abs or round)`);
        pos++;
        const args: Expr[] = [];
        if (!isSym(')')) {
          args.push(sum());
          while (isSym(',')) {
            pos++;
            args.push(sum());
          }
        }
        expect(')');
        if (args.length < 1 || args.length > fn.max) {
          const takes = fn.max === 1 ? '1 value' : fn.max === Infinity ? '1 or more values' : `1 or ${fn.max} values`;
          throw new Error(`Formula: ${tok.v}() takes ${takes}`);
        }
        return { k: 'call', fn: tok.v, args };
      }
      if (isFunction(tok.v)) throw new Error(`Formula: "${tok.v}" is a function; write ${tok.v}(…)`);
      return { k: 'var', name: tok.v };
    }
    if (tok.v === '(') {
      pos++;
      const inner = sum();
      expect(')');
      return inner;
    }
    throw new Error(`Formula: "${tok.v}" is out of place`);
  }

  const tree = sum();
  if (pos < tokens.length) throw new Error(`Formula: "${String(tokens[pos].v)}" is out of place`);
  return tree;
}

/** The variable names a formula uses, in the order they first appear. */
export function formulaVars(expr: Expr): string[] {
  const out: string[] = [];
  const walk = (e: Expr) => {
    if (e.k === 'var') {
      if (!out.includes(e.name)) out.push(e.name);
    } else if (e.k === 'neg') walk(e.a);
    else if (e.k === 'op') {
      walk(e.a);
      walk(e.b);
    } else if (e.k === 'call') e.args.forEach(walk);
  };
  walk(expr);
  return out;
}

/**
 * The formula's value with these variables, or null when it has none: a variable without a
 * number, a division by zero, or anything else that isn't a finite number (0^-1, a huge power).
 */
export function evaluate(expr: Expr, vars: Record<string, number | null | undefined>): number | null {
  const run = (e: Expr): number => {
    switch (e.k) {
      case 'num':
        return e.v;
      case 'var': {
        const v = own(vars, e.name) ? vars[e.name] : undefined;
        return typeof v === 'number' ? v : NaN;
      }
      case 'neg':
        return -run(e.a);
      case 'op': {
        const a = run(e.a);
        const b = run(e.b);
        if (e.op === '+') return a + b;
        if (e.op === '-') return a - b;
        if (e.op === '*') return a * b;
        if (e.op === '/') return b === 0 ? NaN : a / b;
        return a ** b;
      }
      case 'call': {
        const args = e.args.map(run);
        if (e.fn === 'min') return Math.min(...args);
        if (e.fn === 'max') return Math.max(...args);
        if (e.fn === 'abs') return Math.abs(args[0]);
        const places = args.length > 1 ? Math.round(args[1]) : 0;
        const scale = 10 ** places;
        return Math.round(args[0] * scale) / scale;
      }
    }
  };
  const out = run(expr);
  return Number.isFinite(out) ? out : null;
}

/** What a formula entity carries in its config. */
export interface FormulaConfig {
  formula?: unknown;
  vars?: unknown;
}

/** A formula entity's parsed formula and its variables (name to entity id). */
export interface Formula {
  text: string;
  expr: Expr;
  vars: Record<string, string>;
}

const parsed = new Map<string, Expr>();

/** Parse once per formula text: the card redraws often. */
function cachedParse(text: string): Expr {
  let expr = parsed.get(text);
  if (!expr) {
    expr = parseFormula(text);
    if (parsed.size > 200) parsed.clear();
    parsed.set(text, expr);
  }
  return expr;
}

/**
 * Check an entity's `formula` and `vars`: the formula reads, every variable it uses names an
 * entity, and each name is a plain name. Throws a readable error; returns the formula, or
 * undefined when the entity has none.
 */
export function readFormula(config: FormulaConfig): Formula | undefined {
  if (config.formula === undefined || config.formula === null || config.formula === '') return undefined;
  if (typeof config.formula !== 'string') throw new Error('"formula" must be text, like "a - b"');
  const expr = cachedParse(config.formula);
  const raw = config.vars ?? {};
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    throw new Error('"vars" must map each name in the formula to an entity, like a: sensor.indoor');
  }
  const vars: Record<string, string> = {};
  for (const [name, id] of Object.entries(raw as Record<string, unknown>)) {
    if (!NAME.test(name) || isFunction(name) || name === '__proto__')
      throw new Error(`"vars": "${name}" can't be a variable name`);
    if (id === undefined || id === null || id === '') continue;
    if (typeof id !== 'string') throw new Error(`"vars": "${name}" must be an entity id`);
    vars[name] = id;
  }
  if (Object.keys(vars).length > MAX_VARS) throw new Error(`"vars": at most ${MAX_VARS} variables`);
  const used = formulaVars(expr);
  const missing = used.find((name) => !own(vars, name));
  if (missing) throw new Error(`Formula uses "${missing}": add it to "vars" with the entity it reads`);
  // Only the variables the formula uses are read: a name left in `vars` from an earlier formula isn't.
  return { text: config.formula, expr, vars: Object.fromEntries(used.map((name) => [name, vars[name]])) };
}

/** Like `readFormula`, but undefined instead of an error (the config was checked already). */
export function formulaOf(config: FormulaConfig): Formula | undefined {
  try {
    return readFormula(config);
  } catch {
    return undefined;
  }
}

/** The entity ids a formula reads, in the order of its variables. */
export function formulaEntities(f: Formula): string[] {
  return [...new Set(Object.values(f.vars))];
}

/** The unit every variable shares ('' when they differ or have none): a − b of two °C is °C. */
export function sharedUnit(f: Formula, hass: HomeAssistant): string {
  const units = new Set(
    formulaEntities(f).map((id) => {
      const u = hass.states[id]?.attributes?.unit_of_measurement;
      return typeof u === 'string' ? u : '';
    }),
  );
  return units.size === 1 ? [...units][0] : '';
}

/**
 * Join the variables' readings on time and work the formula out at each change. Each variable
 * holds its last reading until its next (step-hold). Nothing is drawn until every variable has a
 * reading; after that a variable's gap is a gap. A point is `carried` (the value from before the
 * span, see `trim`) only when every reading it was worked out from was. Readings at the same time
 * give one point.
 */
export function combineSeries(expr: Expr, series: Record<string, Point[]>): Point[] {
  const names = Object.keys(series);
  const times = [...new Set(names.flatMap((n) => series[n].map((p) => p.t)))].sort((a, b) => a - b);
  const at = Object.fromEntries(names.map((n) => [n, -1])) as Record<string, number>;
  const out: Point[] = [];
  for (const t of times) {
    for (const n of names) {
      const list = series[n];
      while (at[n] + 1 < list.length && list[at[n] + 1].t <= t) at[n]++;
    }
    if (names.some((n) => at[n] < 0)) continue;
    const vars: Record<string, number | null> = {};
    let carried = true;
    for (const n of names) {
      const p = series[n][at[n]];
      vars[n] = p.v;
      if (!p.carried) carried = false;
    }
    const v = evaluate(expr, vars);
    const last = out[out.length - 1];
    // Two gaps in a row are one gap.
    if (v === null && last && last.v === null) continue;
    out.push(carried ? { t, v, carried: true } : { t, v });
  }
  return out;
}

/** The part of a history request that makes it a formula series ({} for an entity without one). */
export function formulaRequest(config: FormulaConfig): { formula?: string; vars?: Record<string, string> } {
  const f = formulaOf(config);
  return f ? { formula: f.text, vars: f.vars } : {};
}
