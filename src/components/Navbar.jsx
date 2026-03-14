import { useState, useEffect } from 'react';
import Button from './ui/Button';

const navLinks = [
  { label: 'Institución', href: '#institucional' },
  { label: 'Misión', href: '#mision-vision' },
  { label: 'Área FAN', href: '#fan' },
  { label: 'Ligas', href: '#ligas' },
  { label: 'Alianzas', href: '#alianzas' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20'
          : 'bg-dark/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-primary-600 flex items-center justify-center text-white font-black text-sm glow-blue group-hover:bg-primary-500 transition-colors">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none tracking-wide">
                ADEEMA
              </span>
              <span className="text-slate-400 text-xs leading-none hidden sm:block">
                Deportes Electrónicos
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-medium px-3 lg:px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="fan" size="sm" href="#fan">
              Área FAN
            </Button>
            <Button variant="primary" size="sm" href="#sumate" className="shadow-primary-900/30">
              Sumate
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-200/98 backdrop-blur-md border-b border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-slate-300 hover:text-white text-sm font-medium px-3 py-3 rounded-lg hover:bg-white/5 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-white/10 mt-2">
              <Button
                variant="fan"
                size="sm"
                href="#fan"
                className="flex-1 justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Área FAN
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="#sumate"
                className="flex-1 justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Sumate
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
