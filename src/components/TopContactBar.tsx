import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const TopContactBar: React.FC = () => {
  return (
    <div className="bg-[#000000] border-b border-[#1c1c1c] text-neutral-300 text-xs py-2 px-4 sm:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-6 flex-wrap">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-2 hover:text-[#FF914D] transition-colors group"
            title="Call Sina Design & Build"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF914D] group-hover:scale-110 transition-transform" />
            <span className="font-medium tracking-wide">{COMPANY_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex items-center gap-2 hover:text-[#FF914D] transition-colors group"
            title="Email Sina Design & Build"
          >
            <Mail className="w-3.5 h-3.5 text-[#FF914D] group-hover:scale-110 transition-transform" />
            <span className="tracking-wide hidden sm:inline">{COMPANY_INFO.email}</span>
            <span className="tracking-wide sm:hidden">Email Us</span>
          </a>

          <div className="flex items-center gap-2 text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-[#FF914D]" />
            <span className="tracking-wide">{COMPANY_INFO.address}</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3 text-[11px] uppercase tracking-widest text-neutral-400">
          <span className="text-[#FF914D] font-semibold">CSLB Licensed</span>
          <span className="text-neutral-700">|</span>
          <span>Bonded & Insured</span>
          <span className="text-neutral-700">|</span>
          <span className="text-neutral-300">Serving Orange County & Beyond</span>
        </div>
      </div>
    </div>
  );
};
