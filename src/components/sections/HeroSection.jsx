export default function HeroSection() {
  return (
    <section className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]" id="top">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          For factories, job shops & suppliers in India
        </div>
        <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          Digitizing India&apos;s factories
          <span className="block text-emerald-400">so they can be discovered, trusted & chosen.</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
          Madevize gives every manufacturing business a powerful digital identity—so buyers can find you, trust you, and
          start working with you. One profile, endless opportunities.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
          >
            Create My Factory Profile (Free)
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 hover:border-slate-500"
          >
            View How It Works
          </a>
        </div>

        <p className="mt-3 text-xs text-slate-400">
          100% free for early factories · No spam · You control what&apos;s visible
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <span className="font-medium text-slate-300">Early interest from factories in:</span>
          <span>Rajkot</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>Coimbatore</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>Ludhiana</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>Faridabad</span>
          <span className="h-1 w-1 rounded-full bg-slate-600" />
          <span>Pune</span>
        </div>
      </div>

      <div className="relative">
        <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4 shadow-2xl shadow-emerald-500/10">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
            <span>Sample Factory Profile</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-1 text-[10px] text-emerald-300">
              • Verified factory
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
            <div className="h-32 bg-gradient-to-tr from-emerald-500/20 via-slate-900 to-sky-500/20" />
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-sm font-semibold">
                  PC
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-50">Precision Components India</p>
                  <p className="text-xs text-slate-400">Rajkot · CNC, VMC, Turning · Auto + Industrial</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">Machines</p>
                  <p>5× CNC Turning
                    <br />3× VMC
                    <br />2× Conventional lathes
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">Materials</p>
                  <p>MS · EN8 · SS304
                    <br />Aluminium · Brass
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">Tolerances</p>
                  <p>Up to ±10 microns</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">Serving</p>
                  <p>Tier-2 OEMs · Export houses</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-[11px]">
                <span className="text-slate-400">"Looking for new CNC job work buyers"</span>
                <button className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400">
                  Send RFQ
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl" />
      </div>
    </section>
  );
}
