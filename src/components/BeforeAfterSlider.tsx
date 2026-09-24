import React, { useState, useRef, useCallback } from 'react';
import heroKitchenImg from '../assets/images/hero_luxury_kitchen_1790276991555.jpg';
import heroBathroomImg from '../assets/images/hero_luxury_bathroom_1790277004861.jpg';
import { ArrowLeftRight, Check, Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [activeRoom, setActiveRoom] = useState<'kitchen' | 'bath'>('kitchen');
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

  const currentAfterImg = activeRoom === 'kitchen' ? heroKitchenImg : heroBathroomImg;

  return (
    <section className="py-20 sm:py-28 bg-[#000000] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-[#FF914D]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
                BEFORE &amp; AFTER SHOWCASE
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              See The Transformation
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              Drag the interactive slider horizontally to reveal how our architectural team
              re-imagines dated, boxed-in rooms into breath-taking luxury spaces.
            </p>
          </div>

          {/* Room Selector Filter Controls */}
          <div className="flex items-center p-1 bg-[#141414] border border-neutral-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => {
                setActiveRoom('kitchen');
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeRoom === 'kitchen'
                  ? 'bg-gradient-to-r from-[#FF914D] to-[#FFB27D] text-black shadow-orange-glow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Kitchen Remodel
            </button>
            <button
              onClick={() => {
                setActiveRoom('bath');
                setSliderPosition(50);
              }}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeRoom === 'bath'
                  ? 'bg-gradient-to-r from-[#FF914D] to-[#FFB27D] text-black shadow-orange-glow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Master Bath Suite
            </button>
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[400px] sm:h-[550px] lg:h-[620px] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl cursor-ew-resize select-none bg-black"
        >
          {/* 1. AFTER IMAGE (Base layer, fully revealed on right) */}
          <div className="absolute inset-0">
            <img
              src={currentAfterImg}
              alt="Sina Design and Build luxury finished space after renovation"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle luxury ambient grading */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* After Tag */}
            <div className="absolute top-6 right-6 z-20 pointer-events-none">
              <span className="bg-black/75 backdrop-blur-md border border-[#FF914D]/80 text-[#FF914D] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                AFTER · SINA LUXURY BUILD
              </span>
            </div>
          </div>

          {/* 2. BEFORE IMAGE (Clipped overlay on the left) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full" style={{ width: '100vw', maxWidth: '1280px' }}>
              {/* Before image with styled vintage/dated architectural grading */}
              <img
                src={currentAfterImg}
                alt="Dated room condition before renovation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter sepia-[0.45] saturate-[0.7] brightness-[0.75] contrast-[1.1] hue-rotate-[15deg]"
              />
              {/* Overlay denoting dated, compartmentalized state */}
              <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Before Tag */}
              <div className="absolute top-6 left-6 z-20 pointer-events-none">
                <span className="bg-black/80 backdrop-blur-md border border-neutral-700 text-neutral-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  BEFORE · ORIGINAL DATED SPACE
                </span>
              </div>
            </div>
          </div>

          {/* 3. SLIDER DIVIDER LINE & HANDLE */}
          <div
            className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* Vertical Line */}
            <div className="w-[3px] h-full bg-gradient-to-b from-[#FF914D] via-white to-[#FF914D] shadow-[0_0_12px_rgba(255,145,77,0.8)]" />

            {/* Circular Handle */}
            <div className="absolute w-12 h-12 rounded-full bg-black/90 border-2 border-[#FF914D] shadow-orange-glow flex items-center justify-center cursor-ew-resize transform transition-transform hover:scale-110 active:scale-95">
              <ArrowLeftRight className="w-5 h-5 text-[#FF914D]" />
            </div>
          </div>

          {/* Bottom helper prompt */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <span className="bg-black/80 backdrop-blur-md text-white/80 px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wider border border-white/10 hidden sm:inline-block">
              ← Drag to compare transformation →
            </span>
          </div>
        </div>

        {/* Transformation Specifications Callout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-[#111111] border border-neutral-800">
            <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
              <Check className="w-4 h-4 text-[#FF914D]" />
              <span>Structural Wall Removal</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              Replaced claustrophobic partition walls with structural engineered steel.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-neutral-800">
            <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
              <Check className="w-4 h-4 text-[#FF914D]" />
              <span>Calacatta &amp; Rift Oak</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              Upgraded laminate counters to continuous bookmatched Italian stone slabs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#111111] border border-neutral-800">
            <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
              <Check className="w-4 h-4 text-[#FF914D]" />
              <span>Full Code Compliance</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              All plumbing, electrical, and title 24 energy standards verified by city inspectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
