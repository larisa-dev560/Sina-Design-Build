import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

const STATS: StatItem[] = [
  {
    value: 25,
    suffix: '+',
    label: 'Years Experience',
    sublabel: 'Master craftsmanship since 2001',
  },
  {
    value: 800,
    suffix: '+',
    label: 'Completed Projects',
    sublabel: 'Custom residences & remodels',
  },
  {
    value: 7,
    suffix: '+',
    label: 'Expert Team Members',
    sublabel: 'Specialized in-house artisans',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Customer Satisfaction',
    sublabel: 'Guaranteed build perfection',
  },
];

export const TrustStats: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const frameRate = 30;
          const totalFrames = Math.round(duration / (1000 / frameRate));

          let frame = 0;
          const timer = setInterval(() => {
            frame++;
            const progress = easeOutExpo(frame / totalFrames);

            setCounts(
              STATS.map((stat) => Math.min(stat.value, Math.round(stat.value * progress)))
            );

            if (frame >= totalFrames) {
              clearInterval(timer);
              setCounts(STATS.map((s) => s.value));
            }
          }, 1000 / frameRate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Exponential ease-out function
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#000000] border-y border-[#1f1f1f] py-14 sm:py-18 overflow-hidden"
    >
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-[#FF914D]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-neutral-800/80">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center px-4 ${
                idx > 0 && idx % 2 === 0 ? 'pt-8 md:pt-0' : ''
              } ${idx === 1 ? 'pt-0' : ''} ${idx >= 2 ? 'pt-6 md:pt-0' : ''}`}
            >
              <div className="flex items-baseline gap-0.5 mb-2">
                <span
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white tabular-nums"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {counts[idx]}
                </span>
                <span className="text-3xl sm:text-4xl font-bold text-[#FF914D]">
                  {stat.suffix}
                </span>
              </div>

              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 mb-1">
                {stat.label}
              </span>

              <span className="text-[11px] sm:text-xs text-neutral-400 font-normal">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
