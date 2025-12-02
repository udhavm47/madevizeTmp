export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold tracking-tight">
            M
          </div>
          <span className="text-lg font-semibold tracking-tight">Madevize</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          <a href="#how" className="hover:text-emerald-400">How it works</a>
          <a href="#why" className="hover:text-emerald-400">Why now</a>
          <a href="#pricing" className="hover:text-emerald-400">Pricing</a>
          <a href="#contact" className="hover:text-emerald-400">Contact</a>
          <a
            href="#cta"
            className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
          >
            Create My Factory Profile
          </a>
        </nav>
        <button className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-200 md:hidden">
          Menu
        </button>
      </div>
    </header>
  );
}
