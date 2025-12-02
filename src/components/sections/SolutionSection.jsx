import FeatureCard from "../cards/FeatureCard";

export default function SolutionSection() {
  const features = [
    {
      title: "Factory business profile",
      body: "Show your machines, capacities, tolerances, materials, certifications and clients in one powerful profile.",
    },
    {
      title: "Get found by buyers",
      body: "OEMs, exporters, assemblers and traders can discover you using filters like process, material, location and industry.",
    },
    {
      title: "Vendor discovery",
      body: "Find suppliers for castings, forgings, plating, machining, fabrication and more in a few clicks.",
    },
    {
      title: "RFQs & quotes",
      body: "Post requirements, receive multiple quotations and choose vendors based on capability, quality and trust.",
    },
    {
      title: "Updates & proof of work",
      body: "Show new machines, upgrades, shopfloor improvements and achievements to build credibility over time.",
    },
    {
      title: "Verified & structured data",
      body: "Profiles are structured for search so you show up when buyers look for your exact capabilities.",
    },
  ];

  return (
    <section className="mt-16" id="solution">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            The Madevize platform
          </h2>
          <h3 className="mt-3 max-w-xl text-2xl font-semibold text-slate-50 md:text-3xl">
            Your digital manufacturing identity — built in minutes.
          </h3>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} body={feature.body} />
        ))}
      </div>
    </section>
  );
}
