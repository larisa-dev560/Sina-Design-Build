import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../data/content';
import { ShieldCheck, Gem, Sparkles, Clock, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#FF914D]" />;
      case 'Gem':
        return <Gem className="w-6 h-6 text-[#FF914D]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#FF914D]" />;
      case 'ClockCheck':
      default:
        return <Clock className="w-6 h-6 text-[#FF914D]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#070707] relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF914D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="max-w-2xl mb-14 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#FF914D]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
              THE SINA STANDARD
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Why Discerning Homeowners Choose Us
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            We operate with the creative rigor of a boutique architectural atelier and the
            structural discipline of master builders.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((item, idx) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl bg-[#111111] border border-neutral-800 hover:border-[#FF914D] transition-all duration-500 group flex flex-col justify-between hover:shadow-orange-glow-sm transform hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-black border border-neutral-700/80 group-hover:border-[#FF914D]/60 flex items-center justify-center transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="font-mono text-xs text-neutral-600 group-hover:text-[#FF914D] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3
                  className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF914D] transition-colors tracking-tight mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.title}
                </h3>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FF914D]/90 block mb-3">
                  {item.subtitle}
                </span>

                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] text-neutral-400 group-hover:text-white transition-colors">
                <CheckCircle className="w-3.5 h-3.5 text-[#FF914D]" />
                <span>Verified Client Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
