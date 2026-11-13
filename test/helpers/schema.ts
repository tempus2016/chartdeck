/** A chart form's schema with its folding sections opened out, so tests see the fields in order. */
export function unfold<T = { name: string; schema?: { name: string }[] }>(schema: unknown): T[] {
  return (schema as { type?: string; schema?: unknown[] }[]).flatMap((item) =>
    item.type === 'expandable' ? unfold<T>(item.schema) : [item as T],
  );
}
