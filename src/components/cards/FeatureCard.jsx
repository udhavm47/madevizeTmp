export default function FeatureCard({ title, body }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm shadow-sm shadow-slate-950/40">
      <h4 className="text-sm font-semibold text-slate-50">{title}</h4>
      <p className="mt-2 text-xs leading-relaxed text-slate-300 md:text-sm">{body}</p>
    </div>
  );
}
