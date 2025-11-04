import React from 'react';
import { Menu } from 'lucide-react';
import Hero3D from './components/Hero3D';
import CareerTimeline from './components/CareerTimeline';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Sticky nav with anchors */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-tight">Indranil Mondal</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#timeline" className="hover:text-white">Timeline</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 px-6 pb-4">
            <a href="#timeline" className="block py-3 text-white/80">Timeline</a>
            <a href="#skills" className="block py-3 text-white/80">Skills</a>
            <a href="#contact" className="block py-3 text-white/80">Contact</a>
          </div>
        )}
      </header>

      <main>
        <Hero3D />
        <CareerTimeline />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Indranil Mondal · WordPress Web Developer · Kolkata, India</p>
          <div className="flex items-center gap-4">
            <a href="#timeline" className="hover:text-white">Timeline</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
