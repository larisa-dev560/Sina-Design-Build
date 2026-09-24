import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/content';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { ConsultationFormData } from '../types';

interface HeroSliderProps {
  onOpenQuoteModal: () => void;
  onSubmitLead: (data: ConsultationFormData) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenQuoteModal,
  onSubmitLead,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Kitchen Remodeling',
    budget: '$25k-$50k',
    message: '',
  });

  // Automatic slide rotation every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitLead(formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        projectType: 'Kitchen Remodeling',
        budget: '$25k-$50k',
        message: '',
      });
    }, 5000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slider with Ken Burns slow zoom and smooth transitions */}
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
              className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Dark Luxury Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 50%, rgba(255,145,77,0.25) 100%)',
              }}
            />
            {/* Subtle radial vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80 pointer-events-none" />
          </div>
        );
      })}

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[2px] w-8 bg-[#FF914D]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
                PREMIUM DESIGN &amp; BUILD
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.12]"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Transform Your Home Into A Space You Love
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 font-light max-w-2xl mb-8 leading-relaxed">
              Sina Design &amp; Build creates beautiful residential spaces through
              thoughtful design, quality materials, and exceptional craftsmanship.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10">
              {/* Primary Button */}
              <button
                onClick={onOpenQuoteModal}
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] hover:shadow-orange-glow transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>START YOUR PROJECT</span>
                <span className="w-2 h-2 rounded-full bg-black group-hover:scale-125 transition-transform" />
              </button>

              {/* Secondary Button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-white/60 hover:border-[#FF914D] hover:text-[#FF914D] transition-all duration-300 bg-black/20 backdrop-blur-sm"
              >
                <span>VIEW OUR PROJECTS</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs text-neutral-300 font-medium">
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

          {/* Right Column: Hero Consultation Floating Glass Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl p-6 sm:p-8 backdrop-blur-xl bg-black/65 border border-neutral-700/60 shadow-2xl hover:border-[#FF914D]/50 transition-all duration-300 group">
              {/* Glowing accent border light */}
              <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#FF914D] to-transparent" />

              <div className="mb-6">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#FF914D] block mb-1">
                  Complimentary Consultation
                </span>
                <h3
                  className="text-xl sm:text-2xl font-semibold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Request An Estimate
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Connect directly with our Buena Park design team within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#FF914D]/15 border border-[#FF914D] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#FF914D]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Estimate Requested!</h4>
                  <p className="text-xs text-neutral-300 max-w-xs leading-relaxed">
                    Thank you, {formData.fullName || 'Neighbor'}. Our master design team will
                    review your project details and reach out shortly.
                  </p>
                  <div className="mt-4 text-[11px] text-neutral-400">
                    Need immediate assistance? Call{' '}
                    <a
                      href="tel:+19499734069"
                      className="text-[#FF914D] font-bold underline ml-1"
                    >
                      (949) 973-4069
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Sterling"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors"
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(714) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-lg bg-[#141414] border border-neutral-700 text-white text-xs focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors"
                      >
                        <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                        <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                        <option value="Flooring">Flooring</option>
                        <option value="Tile & Stone">Tile &amp; Stone</option>
                        <option value="Full Renovation">Full Renovation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-lg bg-[#141414] border border-neutral-700 text-white text-xs focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors"
                      >
                        <option value="Under $10k">Under $10k</option>
                        <option value="$10k-$25k">$10k – $25k</option>
                        <option value="$25k-$50k">$25k – $50k</option>
                        <option value="$50k+">$50k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                      Message / Project Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your home and goals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors resize-none"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] hover:shadow-orange-glow transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span>REQUEST FREE ESTIMATE</span>
                    <Send className="w-3.5 h-3.5 text-black" />
                  </button>

                  <p className="text-[10px] text-center text-neutral-400">
                    No obligation. Direct consultation with our master builders.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls Bottom Navigation */}
      <div className="absolute bottom-6 left-0 right-0 z-30 max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between pointer-events-none">
        {/* Slide Location Indicator */}
        <div className="pointer-events-auto flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-800 text-xs text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-[#FF914D] animate-pulse" />
          <span className="font-medium">{HERO_SLIDES[currentSlide].location}</span>
          <span className="text-neutral-600">·</span>
          <span className="text-neutral-400 text-[11px]">
            {HERO_SLIDES[currentSlide].tag}
          </span>
        </div>

        {/* Slide Indicator Dots & Arrows */}
        <div className="pointer-events-auto flex items-center gap-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-800">
          <button
            onClick={handlePrev}
            className="text-neutral-400 hover:text-[#FF914D] transition-colors p-1"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? 'w-6 bg-[#FF914D]'
                    : 'w-1.5 bg-neutral-600 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-neutral-400 hover:text-[#FF914D] transition-colors p-1"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
