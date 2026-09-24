import React, { useState, useRef, useCallback } from 'react';
import heroKitchenImg from '../assets/images/hero_luxury_kitchen_1790276991555.jpg';
import { ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#000000] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#FF914D]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
              BEFORE &amp; AFTER
            </span>
            <span className="h-[2px] w-6 bg-[#FF914D]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            See The Transformation
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Drag the slider to reveal the difference quality design and craftsmanship make.
          </p>
        </div>

        {/* Clean Interactive Slider */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[380px] sm:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl cursor-ew-resize select-none bg-black"
        >
          {/* AFTER IMAGE (Base layer) */}
          <div className="absolute inset-0">
            <img
              src={heroKitchenImg}
              alt="Luxury finished space after renovation"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* After Tag */}
            <div className="absolute top-5 right-5 z-20 pointer-events-none">
              <span className="bg-black/80 backdrop-blur-md border border-[#FF914D]/80 text-[#FF914D] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                AFTER
              </span>
            </div>
          </div>

          {/* BEFORE IMAGE (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full" style={{ width: '100vw', maxWidth: '1152px' }}>
              <img
                src={heroKitchenImg}
                alt="Dated room condition before renovation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter sepia-[0.45] saturate-[0.7] brightness-[0.75] contrast-[1.1] hue-rotate-[15deg]"
              />
              <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply pointer-events-none" />

              {/* Before Tag */}
              <div className="absolute top-5 left-5 z-20 pointer-events-none">
                <span className="bg-black/80 backdrop-blur-md border border-neutral-700 text-neutral-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  BEFORE
                </span>
              </div>
            </div>
          </div>

          {/* Slider Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-[2px] h-full bg-gradient-to-b from-[#FF914D] via-white to-[#FF914D] shadow-[0_0_10px_rgba(255,145,77,0.8)]" />
            <div className="absolute w-10 h-10 rounded-full bg-black/95 border-2 border-[#FF914D] shadow-orange-glow flex items-center justify-center cursor-ew-resize">
              <ArrowLeftRight className="w-4 h-4 text-[#FF914D]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
