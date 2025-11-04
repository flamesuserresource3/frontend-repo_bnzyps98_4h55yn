import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'WordPress', 'Gutenberg', 'WooCommerce', 'PHP', 'JavaScript', 'React', 'Next.js', 'Headless WP',
  'REST API', 'GraphQL', 'ACF', 'Tailwind CSS', 'Framer Motion', 'Vite', 'MySQL', 'Docker', 'Git'
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Skills & Tools
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          A balanced stack to ship fast, maintainable WordPress products with modern UX.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((s) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-sm text-white/80"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
