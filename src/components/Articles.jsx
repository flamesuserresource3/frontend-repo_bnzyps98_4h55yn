import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Designing Gutenberg Blocks That Editors Love',
    excerpt: 'Practical patterns to craft reusable, UX‑friendly blocks that speed up publishing.',
  },
  {
    title: 'Headless WordPress with Next.js: A Pragmatic Guide',
    excerpt: 'When to go headless, what to avoid, and how to ship without over‑engineering.',
  },
  {
    title: 'Winning Core Web Vitals for WordPress Stores',
    excerpt: 'From image pipelines to intelligent caching — the levers that actually move the needle.',
  },
];

export default function Articles() {
  return (
    <section id="articles" className="bg-[#0b0b0b] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Articles & Notes
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Writing on WordPress architecture, performance, and product design.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-sm text-cyan-300 hover:text-cyan-200">Read more →</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
