export default function StepCard({ step, title, body }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm">
      <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-[11px] font-semibold text-emerald-300">
        {step}
      </div>
      <h4 className="mt-3 text-sm font-semibold text-slate-50">{title}</h4>
      <p className="mt-2 text-xs leading-relaxed text-slate-300 md:text-sm">{body}</p>
    </div>
  );
}
