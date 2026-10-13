// Native <details>: works before JS loads, keyboard accessible, no client bundle.
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line rounded-xl border-2 border-line bg-paper">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
            <h3 className="text-lg font-bold">{f.q}</h3>
            <span aria-hidden="true" className="text-2xl font-normal text-frost-deep transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="px-4 pb-4 text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
