import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    quote:
      'Indranil transformed our slow blog into a performant, engaging site. Core Web Vitals jumped to green across the board.',
    name: 'Priya Sharma',
    role: 'Content Lead, Northstar Media',
  },
  {
    quote:
      'Our WooCommerce store finally feels fast. Checkout drop-off decreased by 22% after his optimization sprint.',
    name: 'Arjun Patel',
    role: 'Founder, CraftyGoods',
  },
  {
    quote:
      'He shipped custom Gutenberg blocks that our team actually loves using. Design consistency improved overnight.',
    name: 'Mira Rao',
    role: 'Design Manager, Studio Bloom',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0b0b0b] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Client Words
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Partners love the blend of performance, usability, and craft.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <p className="text-white/90">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-white/60">— {t.name}, {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
