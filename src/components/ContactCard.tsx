export function ContactCard() {
  return (
    <div className="space-y-6 rounded-[2rem] border border-brand-400/20 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-brand-300">Contact</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Let’s build something amazing together.</h3>
        <p className="mt-4 text-slate-400">Ready to discuss your project? Send a message, share your budget, and tell me your timeline.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-sm text-slate-400">Email</p>
          <a href="mailto:hello@maxnow.tech" className="mt-2 block text-lg font-medium text-white hover:text-brand-300">hello@maxnow.tech</a>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
          <p className="text-sm text-slate-400">Phone</p>
          <a href="tel:+919999999999" className="mt-2 block text-lg font-medium text-white hover:text-brand-300">+91 99999 99999</a>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
        <p className="text-sm text-slate-400">Project details</p>
        <p className="mt-2 text-lg font-medium text-white">Describe your project, your budget range, and your ideal delivery timeline.</p>
      </div>
    </div>
  );
}
