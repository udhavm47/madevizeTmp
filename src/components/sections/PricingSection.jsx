export default function PricingSection() {
  return (
    <section className="mt-20" id="pricing">
      <div className="rounded-3xl border border-emerald-500/40 bg-emerald-500/10 p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Early access</h2>
            <h3 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              Free for the first 500 factories.
            </h3>
            <p className="mt-3 max-w-xl text-sm text-emerald-100 md:text-base">
              Get full access to your factory profile, vendor search, RFQs and priority placement at no cost during the early-access
              phase. Help shape the platform that represents India&apos;s manufacturing backbone.
            </p>
          </div>
          <div className="shrink-0">
            <div className="rounded-2xl border border-emerald-400/60 bg-slate-950/80 px-6 py-4 text-sm text-emerald-50">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Founding factory offer</p>
              <p className="mt-2 text-lg font-semibold text-slate-50">₹0 / month</p>
              <p className="mt-1 text-xs text-emerald-100">for early adopters · no hidden fees</p>
              <ul className="mt-3 space-y-1 text-xs text-emerald-100">
                <li>• Featured placement in relevant searches</li>
                <li>• Direct feedback channel with the product team</li>
                <li>• Locked-in discounts for future premium plans</li>
              </ul>
              <a
                href="#cta"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                Claim My Free Spot
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
