import React from 'react';
import { SinaLogo } from './SinaLogo';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, MapPin, ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { label: 'Kitchen Remodeling', href: '#services' },
    { label: 'Bathroom Remodeling', href: '#services' },
    { label: 'Flooring', href: '#services' },
    { label: 'Tile & Stone', href: '#services' },
    { label: 'Renovations', href: '#services' },
  ];

  const socialLinks = [
    {
      name: 'Thumbtack',
      url: 'https://www.thumbtack.com',
      badge: 'Top Pro 2025',
    },
    {
      name: 'Yelp',
      url: 'https://www.yelp.com',
      badge: '5.0 Stars',
    },
    {
      name: 'MapQuest',
      url: 'https://www.mapquest.com',
      badge: 'Verified Builder',
    },
  ];

  return (
    <footer className="bg-[#000000] border-t border-[#1f1f1f] text-neutral-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-10 h-10 p-1 rounded-md">
                <SinaLogo className="w-full h-full text-[#FF914D]" variant="white" />
              </div>
              <div className="flex flex-col">
                <span
                  className="text-lg font-bold tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Sina Design &amp; Build
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF914D]">
                  Residential Construction
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs font-light leading-relaxed mb-6 max-w-sm">
              A premier California residential design-build studio specializing in custom
              kitchens, spa master baths, artisan stone &amp; tile installation, and whole-home
              transformations in Buena Park and Orange County.
            </p>

            <div className="text-[11px] text-neutral-400">
              <span>Legal Entity: </span>
              <strong className="text-neutral-300 font-normal">
                {COMPANY_INFO.legalName}
              </strong>
              <div className="text-neutral-400 mt-0.5">
                License: {COMPANY_INFO.licenseNumber} · Bonded &amp; Insured
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-[#FF914D] transition-colors inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-[#FF914D] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FF914D] shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-2.5 text-neutral-300 hover:text-[#FF914D] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FF914D] shrink-0 mt-0.5" />
                  <span className="break-all">{COMPANY_INFO.email}</span>
                </a>
              </li>

              <li className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#FF914D] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Platforms & Social Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white mb-5">
              Verified Profiles
            </h4>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#111111] border border-neutral-800 text-neutral-300 hover:text-black hover:bg-gradient-to-r hover:from-[#FF914D] hover:to-[#FFB27D] hover:border-[#FF914D] transition-all duration-300 group"
                >
                  <span className="font-semibold text-xs">{item.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar with Back to Top */}
        <div className="pt-8 border-t border-[#1c1c1c] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Master
            residential builders in Buena Park, CA 90621.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Consultation
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#141414] border border-neutral-800 hover:border-[#FF914D] hover:text-[#FF914D] transition-colors ml-2"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
