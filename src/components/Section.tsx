import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 ${className}`.trim()}>
      <div className="mb-10">
        {eyebrow ? <p className="text-sm uppercase tracking-[0.35em] text-brand-300">{eyebrow}</p> : null}
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
