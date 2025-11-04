import React from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Menu } from 'lucide-react';

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-tight">WP Dev Portfolio</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 px-6 pb-4">
            <a href="#services" className="block py-3 text-white/80">Services</a>
            <a href="#projects" className="block py-3 text-white/80">Work</a>
            <a href="#contact" className="block py-3 text-white/80">Contact</a>
          </div>
        )}
      </header>

      <main>
        <Hero3D />
        <Services />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Your Name. WordPress Web Developer.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
