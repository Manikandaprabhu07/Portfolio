const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#technologies', label: 'Technologies' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a href="#" className="flex items-center gap-3 text-white">
          <img src="/logo.svg" alt="MaXnow logo" className="h-10 w-10 rounded-2xl border border-brand-400/20 bg-slate-950/60 p-1" />
          <span className="text-lg font-semibold tracking-wide">MaXnow</span>
        </a>
        <div className="flex items-center gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-brand-300">
              {link.label}
            </a>
          ))}
          <a href="mailto:hello@maxnow.tech" className="rounded-full border border-brand-400/20 bg-brand-500/10 px-4 py-2 text-sm text-brand-200 transition hover:bg-brand-500/20">
            hello@maxnow.tech
          </a>
        </div>
      </nav>
    </header>
  );
}
