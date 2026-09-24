import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenQuoteModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenQuoteModal }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#000000] relative overflow-hidden">
      {/* Decorative subtle ambient orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF914D]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#FF914D]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
              TURNKEY ARCHITECTURAL EXECUTION
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Our Design-Build Process
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            A disciplined, 5-phase methodology that eliminates stress, ensures city permit
            compliance, and delivers perfection on time and on budget.
          </p>
        </div>

        {/* Step Progression Bar (Desktop) */}
        <div className="relative mb-12 hidden lg:block">
          {/* Background connecting line */}
          <div className="absolute top-7 left-12 right-12 h-[2px] bg-neutral-800 -z-0" />
          {/* Active orange connecting line */}
          <div
            className="absolute top-7 left-12 h-[2px] bg-gradient-to-r from-[#FF914D] to-[#FFB27D] transition-all duration-500 -z-0"
            style={{
              width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 86}%`,
            }}
          />

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center group focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#FF914D] to-[#FFB27D] text-black shadow-orange-glow scale-110'
                        : isPast
                        ? 'bg-[#181818] border-2 border-[#FF914D] text-[#FF914D]'
                        : 'bg-[#141414] border border-neutral-700 text-neutral-400 group-hover:border-neutral-500'
                    }`}
                  >
                    {step.step}
                  </div>

                  <span
                    className={`mt-3 text-xs uppercase font-bold tracking-wider transition-colors ${
                      isSelected ? 'text-[#FF914D]' : 'text-neutral-300 group-hover:text-white'
                    }`}
                  >
                    {step.name}
                  </span>

                  <span className="text-[10px] text-neutral-500 tracking-wide mt-0.5">
                    {step.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Step Selector */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeStep === idx
                  ? 'bg-gradient-to-r from-[#FF914D] to-[#FFB27D] text-black'
                  : 'bg-[#141414] border border-neutral-800 text-neutral-400'
              }`}
            >
              {step.step}. {step.name}
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className="rounded-2xl p-6 sm:p-10 bg-[#111111] border border-neutral-800 shadow-2xl relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#FF914D] to-[#FFB27D]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-[#FF914D]">
                  {PROCESS_STEPS[activeStep].step}
                </span>
                <span className="text-neutral-600">/</span>
                <span className="text-xs uppercase font-bold tracking-widest text-neutral-400">
                  {PROCESS_STEPS[activeStep].tagline}
                </span>
              </div>

              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {PROCESS_STEPS[activeStep].name}
              </h3>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] hover:shadow-orange-glow transition-all"
                >
                  START AT STEP 01
                </button>

                {activeStep < PROCESS_STEPS.length - 1 && (
                  <button
                    onClick={() => setActiveStep((prev) => prev + 1)}
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    <span>Next: {PROCESS_STEPS[activeStep + 1].name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF914D]" />
                  </button>
                )}
              </div>
            </div>

            {/* Deliverables Checklist Column */}
            <div className="lg:col-span-5 bg-black/60 rounded-xl p-5 sm:p-6 border border-neutral-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF914D]" />
                Phase Deliverables &amp; Client Checkpoints
              </h4>

              <div className="space-y-3">
                {PROCESS_STEPS[activeStep].deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FF914D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
