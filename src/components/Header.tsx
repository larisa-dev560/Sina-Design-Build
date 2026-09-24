import React, { useState, useEffect } from 'react';
import { SinaLogo } from './SinaLogo';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-[#222222] shadow-xl py-3'
          : 'bg-gradient-to-b from-[#000000]/90 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Left: Logo + Text */}
        <a
          href="#home"
          className="flex items-center gap-3.5 group select-none focus:outline-none"
        >
          <div
            className={`transition-all duration-300 transform group-hover:scale-105 p-1 rounded-md ${
              isScrolled ? 'w-10 h-10' : 'w-11 h-11 sm:w-12 sm:h-12'
            }`}
          >
            <SinaLogo
              className="w-full h-full drop-shadow-md text-[#FF914D]"
              variant="white"
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#FF914D] transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Sina Design &amp; Build
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
              Buena Park, CA
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-widest text-neutral-300 hover:text-[#FF914D] transition-colors font-medium relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF914D] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="hidden xl:flex items-center gap-2 text-xs font-semibold tracking-wider text-neutral-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF914D]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] hover:shadow-orange-glow transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-[#FF914D] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0A0A] border-b border-[#222222] px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-neutral-200 hover:text-[#FF914D] transition-colors py-1 border-b border-neutral-800/60"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 rounded-lg border border-neutral-800 text-neutral-200 text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#FF914D]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] shadow-orange-glow"
              >
                GET A FREE QUOTE
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
