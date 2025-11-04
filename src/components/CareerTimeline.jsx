import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket, Code } from 'lucide-react';

const milestones = [
  {
    year: '2021 – 2023',
    title: 'Full‑Stack Developer Program',
    subtitle: 'Scaler Academy',
    icon: GraduationCap,
    points: [
      'Deep dive into JS, React, Node, databases, and system design',
      'Built capstone projects with CI/CD and performance focus',
    ],
  },
  {
    year: '2023',
    title: 'WordPress Product Engineering',
    subtitle: 'Gutenberg & FSE Focus',
    icon: Code,
    points: [
      'Custom blocks, theme.json theming, pattern libraries',
      'Headless experiments with WP REST + Next.js',
    ],
  },
  {
    year: '2023 – 2024',
    title: 'Freelance & Consulting',
    subtitle: 'Kolkata, India',
    icon: Briefcase,
    points: [
      'WooCommerce builds with subscriptions and complex product types',
      'Core Web Vitals optimizations and Lighthouse 95+ targets',
    ],
  },
  {
    year: 'Now',
    title: 'Modern WP Sites at Scale',
    subtitle: 'Performance • UX • Reliability',
    icon: Rocket,
    points: [
      'Design systems for marketing sites and stores',
      'Micro‑interactions and motion for delightful UX',
    ],
  },
];

export default function CareerTimeline() {
  return (
    <section id="timeline" className="relative bg-black text-white py-20">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Career Timeline
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          A quick walk through my journey—from foundations to modern WordPress craft.
        </p>

        <div className="relative mt-12">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute left-5 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/30 to-white/0"
          />

          <ul className="space-y-8">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const isLeft = idx % 2 === 0;
              return (
                <motion.li
                  key={m.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="relative grid grid-cols-[40px,1fr] md:grid-cols-2 gap-4 md:gap-10"
                >
                  {/* node */}
                  <div className="col-start-1 row-span-2 md:col-start-1 flex items-start justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative z-10 h-10 w-10 rounded-full bg-white/10 border border-white/15 backdrop-blur grid place-items-center"
                    >
                      <Icon className="h-5 w-5 text-white/90" />
                      <span className="pointer-events-none absolute -z-[1] inset-0 rounded-full bg-fuchsia-500/20 blur-xl" />
                    </motion.div>
                  </div>

                  {/* card */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`col-start-2 md:col-start-${isLeft ? '1' : '2'} md:[&>*]:text-left ${
                      isLeft ? 'md:pr-20' : 'md:pl-20'
                    } rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur group`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs tracking-wide text-white/60">{m.year}</span>
                      <span className="h-[1px] flex-1 bg-white/10" />
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{m.title}</h3>
                    <p className="text-white/70 text-sm">{m.subtitle}</p>
                    <ul className="mt-3 space-y-2 text-sm text-white/80">
                      {m.points.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
