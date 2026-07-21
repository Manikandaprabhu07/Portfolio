export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">MaXnow Technologies</p>
          <p className="mt-1">Building tomorrow’s digital experiences.</p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com" className="hover:text-brand-300">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-brand-300">LinkedIn</a>
          <a href="https://instagram.com" className="hover:text-brand-300">Instagram</a>
          <a href="https://wa.me/919999999999" className="hover:text-brand-300">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
