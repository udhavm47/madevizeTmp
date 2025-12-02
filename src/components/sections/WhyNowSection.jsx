export default function WhyNowSection() {
  return (
    <section className="mt-20" id="why">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Why now</h2>
      <h3 className="mt-3 max-w-xl text-2xl font-semibold text-slate-50 md:text-3xl">
        India&apos;s supply chain is getting upgraded. Your digital presence has to keep up.
      </h3>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-sm text-slate-300 md:text-base">
          <p>
            Buyers, OEMs and exporters now search online before they pick up the phone. If your factory doesn&apos;t appear when they
            search, you don&apos;t even get considered.
          </p>
          <p>
            Government initiatives, global supply-chain shifts and &quot;China+1&quot; strategies are pushing more work towards India.
            The factories that are discoverable and trustworthy will capture this opportunity.
          </p>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>• Younger purchase managers behave like digital natives — they expect to research vendors online.</li>
          <li>• MSMEs who digitize their presence see significantly higher inbound inquiries and RFQs.</li>
          <li>• A strong digital identity is becoming as important as your GST, Udyam and ISO certificates.</li>
        </ul>
      </div>
    </section>
  );
}
