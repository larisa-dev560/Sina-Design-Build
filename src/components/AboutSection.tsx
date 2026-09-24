import React from 'react';
import { Check, Award, Compass, Shield } from 'lucide-react';
import heroKitchenImg from '../assets/images/hero_luxury_kitchen_1790276991555.jpg';
import luxuryTileImg from '../assets/images/luxury_tile_stone_1790277058463.jpg';
import { COMPANY_INFO } from '../data/content';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const features = [
    {
      title: 'Custom Design',
      desc: 'Bespoke layouts tailored to your lifestyle, incorporating 3D architectural modeling.',
    },
    {
      title: 'Premium Materials',
      desc: 'Direct sourcing of Italian marble, engineered European oak, and hand-finished cabinetry.',
    },
    {
      title: 'Expert Craftsmanship',
      desc: 'Master carpenters and stone setters with over 25 years of hands-on California experience.',
    },
    {
      title: 'Complete Project Management',
      desc: 'Permit handling, strict timeline milestones, dust barrier containment, and zero surprises.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#000000] relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FF914D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Project Imagery Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Architectural Image */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group transition-all duration-500 hover:border-[#FF914D]/50">
                <img
                  src={heroKitchenImg}
                  alt="Sina Design and Build luxury kitchen craftsmanship"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF914D] block mb-1">
                    Signature Residence
                  </span>
                  <p className="text-white text-sm sm:text-base font-medium">
                    Precision waterfall quartzite island &amp; custom rift oak millwork
                  </p>
                </div>
              </div>

              {/* Secondary Floating Detail Card */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-60 rounded-xl overflow-hidden border border-neutral-700/80 shadow-2xl bg-black/90 backdrop-blur-md group hover:border-[#FF914D] transition-all duration-300">
                <img
                  src={luxuryTileImg}
                  alt="Precision stone mitre craftsmanship"
                  referrerPolicy="no-referrer"
                  className="w-full h-32 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3.5">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-[#FF914D]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Master Setter
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Dimensional stone, book-matched veining &amp; zero-grout edges.
                  </p>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-gradient-to-r from-[#FF914D] to-[#FFB27D] text-black px-4 py-3 rounded-xl shadow-orange-glow flex items-center gap-3">
                <Compass className="w-6 h-6 text-black" />
                <div>
                  <span className="text-xl font-extrabold leading-none block">25+</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider leading-none">
                    Years in SoCal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Storytelling & Features */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-[#FF914D]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
                ABOUT SINA DESIGN &amp; BUILD
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Building Beautiful Spaces With Precision
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-light mb-8 leading-relaxed">
              "Sina Design &amp; Build combines innovative design with expert craftsmanship
              to transform homes into timeless living spaces."
            </p>

            <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
              Headquartered in Buena Park, California, we approach residential remodeling not
              as routine contracting, but as an architectural discipline. From private luxury
              villas in Newport Beach to custom estates in Anaheim Hills and Buena Park, our
              single-point accountability model unites architectural planning, bespoke wood
              millwork, and artisanal stone fabrication.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-4 rounded-xl bg-[#111111] border border-neutral-800/80 hover:border-[#FF914D]/70 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#FF914D]/20 text-[#FF914D] flex items-center justify-center shrink-0 group-hover:bg-[#FF914D] group-hover:text-black transition-colors">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FF914D] transition-colors">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400 pl-7">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA and Trust Seal */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] hover:shadow-orange-glow transition-all duration-300 transform hover:scale-[1.02]"
              >
                REQUEST CONSULTATION
              </button>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <Shield className="w-4 h-4 text-[#FF914D]" />
                <span>
                  Licensed California General Contractor (
                  <strong className="text-neutral-200">{COMPANY_INFO.licenseNumber}</strong>
                  )
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
