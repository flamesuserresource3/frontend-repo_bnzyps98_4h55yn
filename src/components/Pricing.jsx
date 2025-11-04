import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter Site',
    price: '₹45k–₹80k',
    features: ['4–6 pages', 'Custom design', 'Gutenberg blocks', 'Basic SEO & analytics'],
    highlight: false,
  },
  {
    name: 'Business',
    price: '₹90k–₹1.8L',
    features: ['Up to 12 pages', 'Animations & interactions', 'Performance optimization', 'Blog & lead forms'],
    highlight: true,
  },
  {
    name: 'eCommerce',
    price: '₹1.8L–₹4L+',
    features: ['WooCommerce', 'Subscriptions/ memberships', 'Checkout optimization', '3rd‑party integrations'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Pricing
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Transparent ranges — tailored quotes based on scope, timeline, and integrations.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`rounded-2xl border border-white/10 p-6 backdrop-blur ${t.highlight ? 'bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10' : 'bg-white/5'}`}
            >
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-2xl font-bold">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block text-sm text-cyan-300 hover:text-cyan-200">Request a detailed quote →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
