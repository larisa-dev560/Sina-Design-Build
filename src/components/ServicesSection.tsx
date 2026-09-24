import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ArrowUpRight, Check, X, Clock, DollarSign } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#070707] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#FF914D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#FF914D]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
              CORE DISCIPLINES
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Architectural Remodeling &amp; Craftsmanship
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Each discipline is led by specialized master tradesmen with decades of field
            mastery across Southern California luxury homes.
          </p>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-2xl overflow-hidden bg-[#111111] border border-neutral-800/80 hover:border-[#FF914D] transition-all duration-500 cursor-pointer flex flex-col h-full shadow-lg hover:shadow-orange-glow-sm transform hover:-translate-y-1"
            >
              {/* Image Frame with Zoom Effect */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Black Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent group-hover:via-black/20 transition-all duration-300" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm border border-neutral-700 px-2.5 py-1 rounded text-[11px] font-mono font-bold text-neutral-300">
                  0{idx + 1}
                </div>

                {/* Arrow Icon with Movement */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-neutral-700 group-hover:border-[#FF914D] group-hover:bg-[#FF914D] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#FF914D] transition-colors mb-2.5 tracking-tight"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key feature bullets */}
                <div className="pt-4 border-t border-neutral-800/80">
                  <div className="space-y-1.5 mb-4">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[11px] text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="group-hover:text-white transition-colors">
                      Learn details &amp; scope →
                    </span>
                    <span className="text-[#FF914D] font-mono font-medium">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#111111] border border-[#FF914D]/60 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full h-52 sm:h-64 rounded-xl overflow-hidden mb-6 relative">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            </div>

            <div className="mb-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF914D]">
                Specialized Service
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {selectedService.title}
              </h3>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
              {selectedService.description}
            </p>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-black/60 border border-neutral-800 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF914D]" />
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">
                    Typical Duration
                  </span>
                  <span className="text-neutral-200 font-semibold">
                    {selectedService.duration}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#FF914D]" />
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase">
                    Investment Scope
                  </span>
                  <span className="text-neutral-200 font-semibold">
                    {selectedService.typicalBudget}
                  </span>
                </div>
              </div>
            </div>

            {/* Included in this service */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-3">
                Craftsmanship Scope &amp; Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-neutral-300 p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/80"
                  >
                    <Check className="w-4 h-4 text-[#FF914D] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800">
              <span className="text-xs text-neutral-400">
                Interested in {selectedService.title.toLowerCase()} for your home?
              </span>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenQuoteModal(title);
                }}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] hover:shadow-orange-glow transition-all"
              >
                REQUEST {selectedService.title.toUpperCase()} QUOTE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
