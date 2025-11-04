import React from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    title: 'SaaS Marketing Site',
    tags: ['Headless WP', 'Next.js', 'Gutenberg'],
    color: 'from-fuchsia-400/20 to-cyan-400/20',
  },
  {
    title: 'Lifestyle Blog Redesign',
    tags: ['FSE Theme', 'SEO 100/100', 'Animations'],
    color: 'from-emerald-400/20 to-cyan-400/20',
  },
  {
    title: 'WooCommerce Store',
    tags: ['Subscriptions', 'Fast Checkout', 'A11y'],
    color: 'from-amber-400/20 to-fuchsia-400/20',
  },
];

function ProjectCard({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: i * 0.05, duration: 0.6 }}
      className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
    >
      <div className={`h-48 bg-gradient-to-br ${item.color}`} />
      <div className="p-5">
        <h3 className="text-white text-lg font-semibold">{item.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
              {t}
            </span>
          ))}
        </div>
        <a href="#contact" className="mt-4 inline-block text-sm text-cyan-300 hover:text-cyan-200">
          Work like this →
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0b0b0b] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Selected Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-white/70 max-w-2xl"
        >
          A few recent builds focused on speed, storytelling, and conversions.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <ProjectCard key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
