import React from 'react';
import { Code, Cog, Rocket, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Custom Themes & Blocks',
    desc: 'Pixel‑perfect Gutenberg blocks, FSE themes, and bespoke components tailored to your brand.',
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: 'WooCommerce & Memberships',
    desc: 'Conversion‑focused stores with subscriptions, memberships, and secure checkout flows.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Performance & SEO',
    desc: 'Core Web Vitals optimization, caching, image pipelines, and clean technical SEO foundations.',
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: 'Headless & Integrations',
    desc: 'Next.js/React frontends, WP REST/GraphQL, and third‑party integrations that scale.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-white/70 max-w-2xl"
        >
          Everything you need to launch a modern, high‑performing WordPress presence.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 text-white mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
