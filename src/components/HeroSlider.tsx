import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/content';
import { ShieldCheck, Sparkles, Clock, ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  onOpenQuoteModal: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenQuoteModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically rotates background slides continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-black"
    >
      {/* Background Slider with Ken Burns slow zoom and smooth cross-fade */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-center transform transition-transform duration-[7000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Dark Luxury Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 50%, rgba(255,145,77,0.22) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80 pointer-events-none" />
          </div>
        );
      })}

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl flex flex-col justify-center text-left">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="h-[2px] w-8 bg-[#FF914D]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
              PREMIUM DESIGN &amp; BUILD
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.08]"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Transform Your Home Into A Space You Love
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mb-10 leading-relaxed">
            Sina Design &amp; Build creates beautiful residential spaces through
            thoughtful design, quality materials, and exceptional craftsmanship.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-12">
            {/* Primary Button */}
            <button
              onClick={onOpenQuoteModal}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] hover:shadow-orange-glow transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>START YOUR PROJECT</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary Button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-white/60 hover:border-[#FF914D] hover:text-[#FF914D] transition-all duration-300 bg-black/30 backdrop-blur-sm"
            >
              <span>VIEW OUR PROJECTS</span>
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-white/15 text-xs text-neutral-300 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF914D]" />
              <span>Licensed, Bonded &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF914D]" />
              <span>Artisan Stone &amp; Woodwork</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#FF914D]" />
              <span>On-Time Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
