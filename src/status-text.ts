/** Rough advance of one character, in em, for the card's sans-serif text. */
const CHAR_EM = 0.58;

/**
 * Fit a status line (Unavailable, Entity not found, or a translated state) into `width` units:
 * longer than 11 characters, it splits on the space that best balances two lines; then the
 * font shrinks from `max` towards `min` until the longest line fits.
 */
export function fitStatusText(text: string, width = 76, max = 12, min = 8): { lines: string[]; size: number } {
  let lines = [text];
  if (text.length > 11) {
    let best = text.length;
    for (let i = text.indexOf(' '); i > 0; i = text.indexOf(' ', i + 1)) {
      const longest = Math.max(i, text.length - i - 1);
      if (longest < best) {
        best = longest;
        lines = [text.slice(0, i), text.slice(i + 1)];
      }
    }
  }
  const longest = Math.max(...lines.map((l) => l.length));
  const size = Math.max(min, Math.min(max, Math.floor(width / (CHAR_EM * Math.max(1, longest)))));
  return { lines, size };
}
