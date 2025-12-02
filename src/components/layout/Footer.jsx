export default function Footer() {
  return (
    <footer className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-slate-900 py-6 text-xs text-slate-500 md:flex-row">
      <p>© {new Date().getFullYear()} Madevize. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a href="#top" className="hover:text-emerald-300">Back to top</a>
        <span className="h-1 w-1 rounded-full bg-slate-600" />
        <span>Built for India&apos;s manufacturing ecosystem.</span>
      </div>
    </footer>
  );
}
