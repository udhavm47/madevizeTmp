export default function TestimonialCard({ quote, name, role, location }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm">
      <p className="text-sm text-slate-200">"{quote}"</p>
      <div className="mt-4 border-t border-slate-800 pt-3 text-xs text-slate-400">
        <p className="font-semibold text-slate-100">{name}</p>
        <p>
          {role} • {location}
        </p>
      </div>
    </div>
  );
}
