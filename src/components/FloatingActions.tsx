import React from 'react';
import { Phone, MessageSquareQuote } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FloatingActionsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-end pointer-events-none">
      {/* Floating mobile call button */}
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="pointer-events-auto sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-black/90 border border-[#FF914D] text-[#FF914D] shadow-orange-glow active:scale-95 transition-all"
        title="Call Sina Design & Build"
        aria-label="Call Sina Design & Build"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating quote button */}
      <button
        onClick={onOpenQuoteModal}
        className="pointer-events-auto group flex items-center gap-2.5 px-4 py-3 rounded-full bg-black/85 backdrop-blur-md border border-[#FF914D]/80 text-white shadow-orange-glow hover:bg-gradient-to-r hover:from-[#FF914D] hover:to-[#FFB27D] hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Request Free Estimate"
      >
        <div className="w-6 h-6 rounded-full bg-[#FF914D] text-black flex items-center justify-center group-hover:bg-black group-hover:text-[#FF914D] transition-colors">
          <MessageSquareQuote className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
          Get A Free Quote
        </span>
      </button>
    </div>
  );
};
