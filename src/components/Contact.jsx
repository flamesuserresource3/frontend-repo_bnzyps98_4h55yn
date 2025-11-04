import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="max-w-2xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Let’s build something exceptional
        </motion.h2>
        <p className="mt-3 text-center text-white/70">
          Tell me about your goals. I’ll respond within one business day.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              required
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <input
            type="text"
            placeholder="Company / Website (optional)"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            required
            placeholder="Project details, timeline, and budget"
            rows={5}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-medium px-5 py-3 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.2)] transition"
          >
            <Send className="h-4 w-4" /> Send inquiry
          </button>
          {status && <p className="text-emerald-300 text-sm">{status}</p>}
        </form>

        <p className="mt-10 text-center text-white/50 text-sm">
          Prefer email? hello@yourdomain.com
        </p>
      </div>
    </section>
  );
}
