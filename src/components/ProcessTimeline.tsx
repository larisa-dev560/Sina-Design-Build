import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#000000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#FF914D]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
              OUR DESIGN-BUILD PROCESS
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Turnkey Architectural Execution
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            A seamless, single-point-of-accountability model guiding your project from
            concept to final reveal.
          </p>
        </div>

        {/* 5-Step Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-[#0e0e0e] border border-neutral-800 hover:border-[#FF914D] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Step Number with Orange Accent */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-[#FF914D]">
                    {step.step}
                  </span>
                  <span className="w-8 h-[2px] bg-neutral-800 group-hover:bg-[#FF914D] transition-colors" />
                </div>

                <h3
                  className="text-lg font-bold text-white mb-1.5 group-hover:text-[#FF914D] transition-colors tracking-tight"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {step.name}
                </h3>

                <span className="text-[10px] uppercase font-semibold tracking-wider text-neutral-400 block mb-3">
                  {step.tagline}
                </span>

                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-4 border-t border-neutral-800/80 text-[10px] uppercase font-bold tracking-wider text-neutral-400 group-hover:text-white transition-colors">
                Step {step.step} of 05
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
