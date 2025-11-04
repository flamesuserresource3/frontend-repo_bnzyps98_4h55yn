import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';

export default function AboutBio() {
  return (
    <section id="about" className="bg-[#0b0b0b] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Hi, I'm Indranil Mondal</h2>
          <p className="mt-3 text-white/70">
            A WordPress-focused web developer crafting high-performance, accessible, and visually playful websites. I combine modern
            React-driven interfaces with robust WordPress backends to deliver experiences that convert and scale.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Kolkata, India</span>
            <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Full Stack Developer Course — Scaler (2021–2023)</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
        >
          <h3 className="font-semibold">Project fit</h3>
          <p className="mt-2 text-sm text-white/70">
            Best for brands and founders who value design, speed, and maintainability. I can join as a solo dev or collaborate with your team.
          </p>
          <a href="#contact" className="mt-4 inline-block text-sm text-cyan-300 hover:text-cyan-200">Get a free project outline →</a>
        </motion.div>
      </div>
    </section>
  );
}
