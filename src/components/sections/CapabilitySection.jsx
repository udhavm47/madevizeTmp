export default function CapabilitySection() {
  return (
    <section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Show your real capability
          </h2>
          <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
            For the first time, your factory floor can speak for itself.
          </h3>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Upload photos of your machines, inspection setups and parts you&apos;ve produced. Highlight your quality checks, surface
            finishes and tolerances. Let buyers see what makes your shop different from the rest.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• CNC, VMC, turning, grinding, fabrication, casting, forging — all supported.</li>
            <li>• Promote specific capabilities: thin-wall machining, complex profiles, tight-tolerance bores and more.</li>
            <li>• Build trust before the first call even happens.</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="h-32 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 md:h-40" />
          <div className="h-32 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 md:h-40" />
          <div className="h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 md:h-32" />
          <div className="h-24 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 md:h-32" />
        </div>
      </div>
    </section>
  );
}
