export default function CTASection() {
  return (
    <section className="mt-20" id="cta">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-center md:p-10">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Ready to be discovered?
        </h2>
        <h3 className="mt-3 text-2xl font-semibold text-slate-50 md:text-3xl">
          Your factory deserves more than word-of-mouth.
        </h3>
        <p className="mt-3 text-sm text-slate-300 md:text-base">
          Join Madevize and turn your capabilities into a digital identity that buyers can actually find, understand and trust.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
          >
            Create My Factory Profile
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 hover:border-slate-500"
          >
            Talk to the Team
          </a>
        </div>
      </div>
    </section>
  );
}
