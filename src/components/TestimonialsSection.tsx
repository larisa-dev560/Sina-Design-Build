import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [platformFilter, setPlatformFilter] = useState<'All' | 'Yelp' | 'Thumbtack' | 'MapQuest'>('All');

  const filteredTestimonials =
    platformFilter === 'All'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.platform === platformFilter);

  return (
    <section className="py-20 sm:py-28 bg-[#000000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header with Platform Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-[#FF914D]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
                VERIFIED HOMEOWNER REVIEWS
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Excellence Echoed By Our Clients
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              Read authentic 5-star testimonials recorded across independent platforms in
              Buena Park and throughout Southern California.
            </p>
          </div>

          {/* Platform Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#141414] border border-neutral-800 rounded-xl">
            {(['All', 'Yelp', 'Thumbtack', 'MapQuest'] as const).map((plat) => (
              <button
                key={plat}
                onClick={() => setPlatformFilter(plat)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  platformFilter === plat
                    ? 'bg-gradient-to-r from-[#FF914D] to-[#FFB27D] text-black shadow-orange-glow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {plat}
              </button>
            ))}
          </div>
        </div>

        {/* Aggregate Ratings Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-[#111111] border border-neutral-800 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-400 block">
                Yelp Rating
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-lg font-bold text-white">5.0</span>
                <div className="flex text-[#FF914D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF914D]" />
                  ))}
                </div>
              </div>
            </div>
            <span className="text-[11px] font-bold text-neutral-300 bg-red-600/20 text-red-400 border border-red-500/30 px-2.5 py-1 rounded-md">
              Yelp
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-neutral-800 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-400 block">
                Thumbtack Pro
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-lg font-bold text-white">Top Pro</span>
                <div className="flex text-[#FF914D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF914D]" />
                  ))}
                </div>
              </div>
            </div>
            <span className="text-[11px] font-bold text-neutral-300 bg-sky-500/20 text-sky-400 border border-sky-500/30 px-2.5 py-1 rounded-md">
              Thumbtack
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-neutral-800 flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-neutral-400 block">
                MapQuest Local
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-lg font-bold text-white">5-Star</span>
                <div className="flex text-[#FF914D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF914D]" />
                  ))}
                </div>
              </div>
            </div>
            <span className="text-[11px] font-bold text-neutral-300 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded-md">
              MapQuest
            </span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-[#111111] border border-neutral-800 hover:border-[#FF914D] transition-all duration-300 hover:shadow-orange-glow-sm transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-[#FF914D]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF914D]" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 bg-black/60 px-2.5 py-1 rounded border border-neutral-800">
                    Verified on {t.platform}
                  </span>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-[#FF914D]/20 absolute -top-3 -left-2 -z-0" />
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light relative z-10 italic">
                    "{t.quote}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF914D]" />
                  </h4>
                  <span className="text-[11px] text-neutral-400 block">
                    {t.location} · {t.projectType}
                  </span>
                </div>

                <span className="text-[10px] text-neutral-500 font-mono">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
