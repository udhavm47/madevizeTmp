import TestimonialCard from "../cards/TestimonialCard";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Buyers who never knew we existed started reaching out. For the first time, we feel visible beyond our local network.",
      name: "Rohit Sharma",
      role: "Owner, Precision CNC Works",
      location: "Ludhiana",
    },
    {
      quote: "We found two new raw material suppliers in three days. Earlier this took weeks of calls and follow ups.",
      name: "Kartik Metals",
      role: "Fabrication & Machining",
      location: "Rajkot",
    },
    {
      quote: "Explaining our capabilities is now as easy as sharing a link. Buyers understand our machines, tolerances and strengths fast.",
      name: "Sigma Tech Industries",
      role: "Job Shop",
      location: "Coimbatore",
    },
  ];

  return (
    <section className="mt-20">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">What manufacturers are saying</h2>
      <h3 className="mt-3 max-w-xl text-2xl font-semibold text-slate-50 md:text-3xl">
        Built for real factories, not just for presentations.
      </h3>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
