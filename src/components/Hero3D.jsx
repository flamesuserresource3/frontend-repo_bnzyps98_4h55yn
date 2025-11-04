import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-[#0a0a0a]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glows (don't block the 3D) */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 md:h-96 md:w-96 rounded-full blur-3xl opacity-40 bg-fuchsia-500/30" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 md:h-96 md:w-96 rounded-full blur-3xl opacity-40 bg-cyan-500/30" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="text-white/90">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs md:text-sm tracking-wide">Indranil Mondal · Kolkata, India</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white"
          >
            WordPress Web Developer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-emerald-400">Crafting Modern, Lightning‑Fast Sites</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-2xl text-base md:text-lg text-white/70"
          >
            I build scalable WordPress experiences — custom themes, high‑performance page builders, WooCommerce setups, and headless architectures with modern animations. Trained in Full‑Stack Development at Scaler (2021–2023).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:shadow-[0_0_0_3px_rgba(255,255,255,0.2)] transition"
            >
              Start a Project
            </a>
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
