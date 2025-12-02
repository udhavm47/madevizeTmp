import Footer from "../layout/Footer";

export default function ContactSection() {
  return (
    <section className="mt-20" id="contact">
      <div className="grid gap-10 border-t border-slate-800/60 py-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Contact</h2>
          <h3 className="mt-3 text-xl font-semibold text-slate-50 md:text-2xl">
            Let&apos;s see how Madevize can work for your factory.
          </h3>
          <p className="mt-3 text-sm text-slate-300 md:text-base">
            Share a few details and we&apos;ll get in touch with a quick call or demo tailored to your capabilities and goals.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-300">
            <p>
              Email: <span className="font-medium text-emerald-300">[add-your-email]@madevize.com</span>
            </p>
            <p>
              WhatsApp / Phone: <span className="font-medium text-emerald-300">+91-XXXXXXXXXX</span>
            </p>
            <p>Location: India · Working with factories PAN-India</p>
          </div>
        </div>
        <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-300">Name *</label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/50 placeholder:text-slate-500 focus:border-emerald-500 focus:ring"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-300">Company / Factory Name *</label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/50 placeholder:text-slate-500 focus:border-emerald-500 focus:ring"
              placeholder="Eg. Precision Components India"
              required
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">Email *</label>
              <input
                type="email"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/50 placeholder:text-slate-500 focus:border-emerald-500 focus:ring"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">Phone / WhatsApp *</label>
              <input
                type="tel"
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/50 placeholder:text-slate-500 focus:border-emerald-500 focus:ring"
                placeholder="+91-XXXXXXXXXX"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-300">What do you manufacture? *</label>
            <textarea
              className="min-h-[90px] w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/50 placeholder:text-slate-500 focus:border-emerald-500 focus:ring"
              placeholder="Eg. CNC machined auto components, sheet metal parts, castings, etc."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </section>
  );
}
