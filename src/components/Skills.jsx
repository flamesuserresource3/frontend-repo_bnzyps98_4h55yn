import React from 'react';
import { motion } from 'framer-motion';

const core = [
  { name: 'WordPress', level: 95 },
  { name: 'Gutenberg / FSE', level: 90 },
  { name: 'WooCommerce', level: 88 },
  { name: 'PHP', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'React / Next.js', level: 88 },
];

const tools = [
  'Headless WP', 'REST API', 'GraphQL', 'ACF', 'Tailwind CSS', 'Framer Motion', 'Vite', 'MySQL', 'Docker', 'Git'
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Skills & Micro‑interactions
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          A balanced stack to ship fast, maintainable WordPress products with modern UX.
        </p>

        {/* Proficiency bars */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {core.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{s.name}</span>
                <span className="text-white/60 text-sm">{s.level}%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-emerald-400"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges with hover effects */}
        <div className="mt-10 flex flex-wrap gap-3">
          {tools.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -2 }}
              className="relative px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white/80 hover:border-white/20"
            >
              {t}
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-500/0 via-white/5 to-cyan-500/0 opacity-0 hover:opacity-100 transition" />
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
