import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from 'lit';
import '../src/chartdeck-card';
import { annotationEntities, validateAnnotations } from '../src/chart/annotations';
import {
  calendarPath,
  calendarTooltipRows,
  eventTime,
  eventWhen,
  eventsAt,
  eventsIn,
  isSpanEvent,
  matchesEvent,
  parseEvents,
} from '../src/chart/calendar-marks';
import type { CalendarEvent } from '../src/chart/calendar-marks';
import { annotationData, annotationFromData, annotationSchema } from '../src/editor/annotations-editor';
import type { CardConfig, HomeAssistant } from '../src/types';
import { makeHass } from './helpers/hass';
import { pointAt } from './helpers/chart';

const zone = { timeZone: 'Europe/London', firstDay: 1 };
const H = 3_600_000;

describe('calendar annotation options', () => {
  const check = (annotations: unknown) => () => validateAnnotations({ type: 'x', annotations } as CardConfig);
  it('needs a calendar entity and text for the filter', () => {
    expect(check([{ type: 'calendar', entity: 'calendar.bins', match: 'bin, recycling', shade: true }])).not.toThrow();
    expect(check([{ type: 'calendar' }])).toThrow('"annotations[0].entity" must be a calendar entity');
    expect(check([{ type: 'calendar', entity: 'sensor.x' }])).toThrow('must be a calendar entity');
    expect(check([{ type: 'calendar', entity: 'calendar.x', match: 3 }])).toThrow(
      '"annotations[0].match" must be text',
    );
  });

  it('watches the calendar so its changes redraw the card', () => {
    expect(annotationEntities({ type: 'x', annotations: [{ type: 'calendar', entity: 'calendar.bins' }] })).toEqual([
      'calendar.bins',
    ]);
  });
});

describe('calendar events', () => {
  it('reads dates as all-day midnights in the zone and date-times as instants', () => {
    // 1 July: London is on summer time, so midnight is 23:00 UTC the day before.
    expect(eventTime({ date: '2026-07-01' }, zone)).toEqual({ t: Date.UTC(2026, 5, 30, 23), allDay: true });
    expect(eventTime({ dateTime: '2026-07-01T09:30:00+01:00' }, zone)).toEqual({
      t: Date.UTC(2026, 6, 1, 8, 30),
      allDay: false,
    });
    expect(eventTime('2026-12-01', zone)).toEqual({ t: Date.UTC(2026, 11, 1), allDay: true });
    expect(eventTime({}, zone)).toBeUndefined();
    expect(eventTime({ dateTime: 'soon' }, zone)).toBeUndefined();
    expect(eventTime(undefined, zone)).toBeUndefined();
  });

  it('parses the API rows, sorted, dropping rows with no start and fixing ends before starts', () => {
    const events = parseEvents(
      [
        {
          summary: ' Dentist ',
          start: { dateTime: '2026-11-20T15:00:00Z' },
          end: { dateTime: '2026-11-20T16:00:00Z' },
        },
        { summary: 'Bins', start: { date: '2026-11-19' }, end: { date: '2026-11-20' }, location: ' Kerb ' },
        { summary: 'Broken', end: { date: '2026-11-20' } },
        { start: { dateTime: '2026-11-21T10:00:00Z' }, end: { dateTime: '2026-11-21T09:00:00Z' } },
        null,
      ],
      zone,
    );
    expect(events.map((e) => e.summary)).toEqual(['Bins', 'Dentist', '']);
    expect(events[0]).toMatchObject({ allDay: true, location: 'Kerb', end: events[0].start + 24 * H });
    expect(events[2].end).toBe(events[2].start);
    expect(parseEvents({ not: 'a list' }, zone)).toEqual([]);
  });

  it('filters by words in the title, any case, any of a comma list', () => {
    expect(matchesEvent('Bin day: Recycling', 'recycling')).toBe(true);
    expect(matchesEvent('Bin day', 'garden, BIN')).toBe(true);
    expect(matchesEvent('Dentist', 'bin')).toBe(false);
    expect(matchesEvent('Anything', undefined)).toBe(true);
    expect(matchesEvent('Anything', ' , ')).toBe(true);
  });

  const ev = (start: number, end: number, summary = 'E', allDay = false): CalendarEvent => ({
    start,
    end,
    summary,
    allDay,
  });

  it('draws all-day and day-long events as spans, the rest as lines', () => {
    expect(isSpanEvent(ev(0, H, 'a', true))).toBe(true);
    expect(isSpanEvent(ev(0, 24 * H))).toBe(true);
    expect(isSpanEvent(ev(0, 23 * H))).toBe(false);
  });

  it('keeps the events touching the span, and finds those going on at a time', () => {
    const list = [ev(0, H, 'a'), ev(5 * H, 5 * H, 'b'), ev(9 * H, 12 * H, 'bin c'), ev(20 * H, 21 * H, 'd')];
    expect(eventsIn(list, { start: 30 * 60_000, end: 10 * H }).map((e) => e.summary)).toEqual(['a', 'b', 'bin c']);
    expect(eventsIn(list, { start: 0, end: 30 * H }, 'bin').map((e) => e.summary)).toEqual(['bin c']);
    expect(eventsAt(list, 30 * 60_000, 0).map((e) => e.summary)).toEqual(['a']);
    expect(eventsAt(list, H, 0)).toEqual([]);
    // A moment-long event is found near its line.
    expect(eventsAt(list, 5 * H + 60_000, 120_000).map((e) => e.summary)).toEqual(['b']);
    expect(eventsAt(list, 5 * H + 600_000, 120_000)).toEqual([]);
  });

  it('builds the API path with the span', () => {
    expect(calendarPath('calendar.bins', Date.UTC(2026, 10, 20), Date.UTC(2026, 10, 21))).toBe(
      'calendars/calendar.bins?start=2026-11-20T00%3A00%3A00.000Z&end=2026-11-21T00%3A00%3A00.000Z',
    );
  });

  it('says when an event happens', () => {
    const h = makeHass(
      {},
      {
        config: { time_zone: 'UTC' },
        locale: { language: 'en', number_format: 'language', time_zone: 'server', time_format: '24' },
      },
    );
    const t = Date.UTC(2026, 10, 20, 9);
    expect(eventWhen(ev(t, t + 24 * H, 'a', true), h)).toBe('All day');
    expect(eventWhen(ev(t, t), h)).toBe('09:00');
    expect(eventWhen(ev(t, t + 90 * 60_000), h)).toBe('09:00 – 10:30');
    expect(eventWhen(ev(t, t + 72 * H, 'a', true), h)).toMatch(/20.*09:00 – .*23.*09:00/);
  });

  it('lists at most three events in the tooltip, then a count', () => {
    const div = document.createElement('div');
    render(
      calendarTooltipRows(
        undefined,
        [0, 1, 2, 3, 4].map((i) => ({ event: ev(0, H, i === 1 ? '' : `E${i}`), color: 'red' })),
      ),
      div,
    );
    const names = [...div.querySelectorAll('.tooltip-event .tooltip-name')].map((e) => e.textContent!.trim());
    expect(names).toEqual(['E0', 'Event', 'E2']);
    expect(div.querySelector('.tooltip-event-more')!.textContent!.trim()).toBe('+2 more');
    const empty = document.createElement('div');
    render(calendarTooltipRows(undefined, []), empty);
    expect(empty.querySelector('.tooltip-events')).toBeNull();
  });
});

// ---------------------------------------------------------------- on the line chart

type Card = HTMLElement & { setConfig(c: CardConfig): void; hass?: HomeAssistant; updateComplete: Promise<boolean> };
const now = Date.now();
const sec = (ago: number) => (now - ago) / 1000;
const iso = (ago: number) => new Date(now - ago).toISOString();

function hass(calendar: (path: string) => unknown = defaultEvents) {
  const h = makeHass({
    'sensor.in': ['21', { friendly_name: 'Inside', unit_of_measurement: '°C' }],
    'calendar.home': ['off', { friendly_name: 'Home' }],
  });
  h.callWS = vi.fn(async () => ({
    'sensor.in': [
      { s: '20', lu: sec(40 * H) },
      { s: '19', lu: sec(20 * H) },
      { s: '23', lu: sec(12 * H) },
      { s: '21', lu: sec(2 * H) },
    ],
  })) as HomeAssistant['callWS'];
  h.callApi = vi.fn(async (_method: string, path: string) => calendar(path)) as HomeAssistant['callApi'];
  return h;
}

function defaultEvents(): unknown {
  return [
    { summary: 'Dentist', start: { dateTime: iso(10 * H) }, end: { dateTime: iso(9 * H) } },
    { summary: 'Bin day', start: { dateTime: iso(5 * H) }, end: { dateTime: iso(5 * H) } },
    { summary: 'Away', start: { dateTime: iso(40 * H) }, end: { dateTime: iso(15 * H) } },
  ];
}

async function mount(extra: Record<string, unknown>, h = hass()) {
  const card = document.createElement('chartdeck-card') as Card;
  card.setConfig({ type: 'custom:chartdeck-card', style: 'line', entities: ['sensor.in'], ...extra } as CardConfig);
  card.hass = h;
  document.body.appendChild(card);
  for (let i = 0; i < 4; i++) {
    await card.updateComplete;
    await new Promise((r) => setTimeout(r, 0));
  }
  await card.updateComplete;
  return card;
}

const qa = (card: Card, sel: string) => [...card.shadowRoot!.querySelectorAll(sel)] as HTMLElement[];
const text = (card: Card, sel: string) => qa(card, sel).map((e) => e.textContent!.replace(/\s+/g, ' ').trim());

afterEach(() => {
  document.body.innerHTML = '';
});

describe('calendar marks on the line chart', () => {
  it('loads the span once and marks timed events with a line and their title, long ones with a span', async () => {
    const card = await mount({ annotations: [{ type: 'calendar', entity: 'calendar.home' }] });
    const api = card.hass!.callApi as unknown as ReturnType<typeof vi.fn>;
    expect(api).toHaveBeenCalledTimes(1);
    expect(api.mock.calls[0][0]).toBe('GET');
    expect(api.mock.calls[0][1]).toMatch(/^calendars\/calendar\.home\?start=.+&end=.+$/);
    expect(qa(card, 'line.mark-line.calendar')).toHaveLength(2);
    // "Away" started before the chart and runs on a day: a shaded span from the left edge.
    const spans = qa(card, 'rect.calendar-shade');
    expect(spans).toHaveLength(1);
    expect(Number(spans[0].getAttribute('x'))).toBe(0);
    expect(spans[0].getAttribute('fill')).toContain('--purple-color');
    expect(text(card, '.annotation-label.mark').sort()).toEqual(['Away', 'Bin day', 'Dentist']);
    // Drawing again does not load again.
    card.requestUpdate();
    await card.updateComplete;
    expect(api).toHaveBeenCalledTimes(1);
  });

  it('filters by title, takes a fixed label and colour, and shades timed events when asked', async () => {
    const card = await mount({
      annotations: [
        { type: 'calendar', entity: 'calendar.home', match: 'dent', label: 'Out', color: 'green', shade: true },
      ],
    });
    expect(qa(card, 'line.mark-line.calendar')).toHaveLength(1);
    expect(qa(card, 'rect.calendar-shade')).toHaveLength(1);
    expect(qa(card, 'line.mark-line.calendar')[0].getAttribute('stroke')).toContain('--success-color');
    expect(text(card, '.annotation-label.mark')).toEqual(['Out']);
  });

  it('draws the chart without the marks when the calendar cannot be loaded or there is no REST call', async () => {
    const failing = hass(() => {
      throw new Error('nope');
    });
    const card = await mount({ annotations: [{ type: 'calendar', entity: 'calendar.home' }] }, failing);
    expect(qa(card, 'path.line')).toHaveLength(1);
    expect(qa(card, 'line.mark-line')).toHaveLength(0);
    const bare = hass();
    delete bare.callApi;
    const other = await mount({ annotations: [{ type: 'calendar', entity: 'calendar.home' }] }, bare);
    expect(qa(other, 'path.line')).toHaveLength(1);
    expect(qa(other, 'line.mark-line')).toHaveLength(0);
  });

  it('ignores rows that are not events', async () => {
    const card = await mount(
      { annotations: [{ type: 'calendar', entity: 'calendar.home' }] },
      hass(() => 'not a list'),
    );
    expect(qa(card, 'line.mark-line')).toHaveLength(0);
  });

  it('lists the events going on at the hovered time in the tooltip', async () => {
    const card = await mount({ annotations: [{ type: 'calendar', entity: 'calendar.home' }] });
    // 24 h chart; the reading 20 h ago sits inside "Away".
    pointAt(card.shadowRoot!.querySelector('.plot-area')!, 'pointermove', 4 / 24);
    await card.updateComplete;
    expect(text(card, '.tooltip-event .tooltip-name')).toEqual(['Away']);
    expect(text(card, '.tooltip-event .tooltip-value')[0]).toMatch(/–/);
  });

  it('loads again when the span moves to earlier days', async () => {
    const card = await mount({
      period: { calendar: 'day', navigate: true },
      annotations: [{ type: 'calendar', entity: 'calendar.home' }],
    });
    const api = card.hass!.callApi as unknown as ReturnType<typeof vi.fn>;
    const before = api.mock.calls.length;
    (card.shadowRoot!.querySelector('.period-prev') as HTMLElement).click();
    for (let i = 0; i < 8; i++) {
      await card.updateComplete;
      await new Promise((r) => setTimeout(r, 0));
    }
    expect(api.mock.calls.length).toBe(before + 1);
  });
});

// ---------------------------------------------------------------- editor

class Stub extends HTMLElement {
  [key: string]: unknown;
}
for (const tag of [
  'ha-form',
  'ha-expansion-panel',
  'ha-selector',
  'ha-entity-picker',
  'ha-icon-picker',
  'ha-icon-button',
  'ha-switch',
]) {
  if (!customElements.get(tag)) customElements.define(tag, class extends Stub {});
}

describe('calendar marks in the editor', () => {
  it('shows a calendar picker, filter and shade, and writes them back to their keys', () => {
    const schema = annotationSchema('calendar', undefined, []) as { name: string; selector?: unknown }[];
    expect(schema.map((s) => s.name)).toEqual(['type', 'calendar', 'calendar_match', 'calendar_shade', '']);
    expect(schema[1].selector).toEqual({ entity: { domain: 'calendar' } });
    expect(annotationData({ type: 'calendar', entity: 'calendar.home', match: 'bin' })).toEqual({
      type: 'calendar',
      calendar: 'calendar.home',
      calendar_match: 'bin',
      calendar_shade: false,
      label: undefined,
      color: undefined,
    });
    expect(
      annotationFromData(
        { type: 'calendar', calendar: 'calendar.work', calendar_match: ' ', calendar_shade: true, label: 'W' },
        { type: 'calendar', entity: 'calendar.home' },
      ),
    ).toEqual({ type: 'calendar', entity: 'calendar.work', shade: true, label: 'W' });
  });

  it('adds a calendar annotation on the first calendar Home Assistant has', async () => {
    await import('../src/editor/chartdeck-card-editor');
    const add = async (states: Record<string, string>) => {
      const ed = document.createElement('chartdeck-card-editor') as HTMLElement & {
        setConfig(c: CardConfig): void;
        hass?: unknown;
        updateComplete: Promise<boolean>;
      };
      const events: CardConfig[] = [];
      ed.addEventListener('config-changed', (e) => events.push((e as CustomEvent).detail.config));
      ed.hass = makeHass(states);
      ed.setConfig({ type: 'custom:chartdeck-card', style: 'line', entities: ['sensor.in'] } as CardConfig);
      document.body.appendChild(ed);
      await ed.updateComplete;
      (ed.shadowRoot!.querySelector('.annotation-add button[data-type="calendar"]') as HTMLElement).click();
      return (events.at(-1)!.annotations as { entity: string }[])[0];
    };
    expect(await add({ 'sensor.in': '1', 'calendar.family': 'off' })).toEqual({
      type: 'calendar',
      entity: 'calendar.family',
    });
    expect(await add({ 'sensor.in': '1' })).toEqual({ type: 'calendar', entity: 'calendar.example' });
  });
});
