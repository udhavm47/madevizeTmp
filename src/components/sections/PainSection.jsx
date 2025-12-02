export default function PainSection() {
  return (
    <section className="mt-20 space-y-6 border-y border-slate-800/60 py-12">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        The reality today
      </h2>
      <h3 className="max-w-2xl text-2xl font-semibold text-slate-50 md:text-3xl">
        Manufacturers lose business every day — not because of quality, but because they are invisible.
      </h3>
      <div className="mt-4 grid gap-4 text-sm text-slate-300 md:grid-cols-2">
        <ul className="space-y-2">
          <li>• No proper digital presence: buyers can&apos;t discover you beyond references.</li>
          <li>• 90% of work comes from the same 2–3 customers you&apos;ve always had.</li>
          <li>• It&apos;s hard to show your true capability: machines, tolerances, quality checks.</li>
        </ul>
        <ul className="space-y-2">
          <li>• Finding new vendors for castings, machining, treatments takes weeks.</li>
          <li>• Generic portals don&apos;t understand manufacturing — you become "just another listing".</li>
          <li>• Younger buyers and OEMs search online first. If you&apos;re not there, you&apos;re not considered.</li>
        </ul>
      </div>
      <p className="mt-4 text-sm font-medium text-emerald-300">
        This is exactly what Madevize fixes.
      </p>
    </section>
  );
}
