import StepCard from "../cards/StepCard";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Create your profile",
      body: "Tell us what you do: machines, processes, materials, industries served and tolerances. We format it for you.",
    },
    {
      step: "02",
      title: "Get discovered by buyers",
      body: "Your profile appears in relevant searches made by OEMs, traders and factories nearby and across India.",
    },
    {
      step: "03",
      title: "Post requirements",
      body: "Need a vendor for machining, laser cutting, casting or treatment? Post an RFQ and receive quotes.",
    },
    {
      step: "04",
      title: "Convert into long-term work",
      body: "Start with small jobs, prove quality, and grow lasting relationships — all starting from your Madevize presence.",
    },
  ];

  return (
    <section className="mt-20" id="how">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">How it works</h2>
      <h3 className="mt-3 max-w-xl text-2xl font-semibold text-slate-50 md:text-3xl">
        From invisible to discoverable in four simple steps.
      </h3>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {steps.map((step) => (
          <StepCard key={step.step} step={step.step} title={step.title} body={step.body} />
        ))}
      </div>
    </section>
  );
}
