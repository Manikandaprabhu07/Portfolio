'use client';

'use client';

import { ArrowRight, CheckCircle2, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactCard } from '@/components/ContactCard';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Section } from '@/components/Section';
import { projects, services, stats, whyChoose } from '@/lib/content';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section className="relative isolate min-h-screen px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-sm text-brand-200">
                <Sparkles className="h-4 w-4" /> Trusted by ambitious founders and teams
              </div>
              <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
                Building digital products that drive <span className="text-brand-400">business growth</span>.
              </h1>
              <p className="mt-6 text-lg text-slate-300 sm:text-xl">
                Modern websites, web applications, AI solutions, and custom software for startups and businesses.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full bg-brand-500 px-6 py-3 font-medium text-white transition hover:bg-brand-400">
                  Start Your Project
                </a>
                <a href="#projects" className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-brand-400 hover:text-brand-300">
                  View Portfolio
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-400">
                <span className="rounded-full border border-slate-800 px-3 py-2">⚡ Fast Delivery</span>
                <span className="rounded-full border border-slate-800 px-3 py-2">💎 Premium Quality</span>
                <span className="rounded-full border border-slate-800 px-3 py-2">🚀 Modern Stack</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-xl">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-brand-400/20 bg-slate-950/70 p-8">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>MaXnow Technologies</span>
                    <span className="rounded-full bg-brand-500/15 px-3 py-1 text-brand-300">Available for work</span>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-center">
                        <p className="text-2xl font-semibold text-white">{stat.value}</p>
                        <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-2xl border border-slate-800 bg-gradient-to-br from-brand-500/20 to-slate-900 p-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Core Focus</p>
                    <p className="mt-3 text-xl font-semibold text-white">Fast, scalable, and modern web experiences.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title="Welcome to MaXnow Technologies.">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mt-6 text-lg text-slate-300">
                I am Manikandaprabhu, a Full Stack Web Developer and the founder of MaXnow Technologies. I help startups, entrepreneurs, and businesses build fast, scalable, and modern web applications using today’s best technologies.
              </p>
              <p className="mt-4 text-slate-300">
                Whether you need a business website, admin dashboard, HRMS, ERP, e-commerce platform, or custom software, I can turn your ideas into reality.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8">
              <div className="flex items-center gap-3 text-brand-300">
                <Zap className="h-5 w-5" />
                <span className="font-medium">Why Choose MaXnow</span>
              </div>
              <ul className="mt-6 space-y-4 text-slate-300">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="services" eyebrow="Services" title="Solutions designed for modern businesses.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-8">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <ArrowRight className="h-4 w-4 text-brand-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="technologies" eyebrow="Technologies" title="A modern stack for robust delivery.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['Frontend', 'React, Angular, Next.js, Tailwind CSS, TypeScript'],
              ['Backend', 'NestJS, Node.js, Express'],
              ['Database', 'PostgreSQL, MongoDB, MySQL'],
              ['Tools', 'Git, GitHub, Docker, Postman, VS Code'],
            ].map(([title, items]) => (
              <div key={title} className="rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-8">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-slate-300">{items}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Featured work and product experiences.">
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="rounded-[1.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something amazing together.">
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-brand-400/20 bg-gradient-to-br from-brand-500/10 to-slate-950 p-8 sm:p-12">
              <h3 className="text-xl font-semibold text-white">Start your project</h3>
              <p className="mt-4 text-slate-300">Share your brief, budget range, and timeline so I can propose the best technology and delivery plan.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:hello@maxnow.tech" className="text-brand-300 hover:text-brand-200">hello@maxnow.tech</a>
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href="tel:+919999999999" className="text-brand-300 hover:text-brand-200">+91 99999 99999</a>
                </div>
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <a href="https://wa.me/919999999999" className="text-brand-300 hover:text-brand-200">Chat on WhatsApp</a>
                </div>
              </div>
            </div>
            <div>
              <ContactCard />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
