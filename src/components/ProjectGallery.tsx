import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';
import { Eye, MapPin, Calendar, Sparkles, X, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  onOpenQuoteModal: (projectContext?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Kitchens', 'Bathrooms', 'Flooring', 'Interiors'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#070707] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-[#FF914D]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
                PORTFOLIO OF DISTINCTION
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Our Featured Transformations
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              Explore bespoke residential renovations executed across Buena Park, Newport Beach,
              Anaheim Hills, and Fullerton.
            </p>
          </div>

          {/* Filter Tabs (Interactive buttons with active state) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#141414] border border-neutral-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#FF914D] to-[#FFB27D] text-black shadow-orange-glow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#111111] border border-neutral-800 hover:border-[#FF914D] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-orange-glow-sm flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-neutral-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#FF914D]">
                  {project.category}
                </div>

                {/* View Details Eye Icon Button */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm border border-neutral-700 group-hover:border-[#FF914D] group-hover:bg-[#FF914D] flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                  <Eye className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                </div>

                {/* Details Overlay at Bottom of Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF914D]" />
                      <span>{project.location}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FF914D]" />
                      <span>{project.year}</span>
                    </span>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FF914D] transition-colors tracking-tight mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-3 mt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="group-hover:text-white transition-colors">
                      View architectural details
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#FF914D] transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Lightbox / Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#111111] border border-[#FF914D]/60 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                <span className="bg-black/80 px-3 py-1 rounded-full border border-neutral-700">
                  {selectedProject.location}
                </span>
                <span className="bg-black/80 px-3 py-1 rounded-full border border-[#FF914D] text-[#FF914D] font-bold">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
              {selectedProject.description}
            </p>

            {/* Key Architectural Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF914D]" />
                <span>Architectural Highlights</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-black/60 border border-neutral-800 text-xs text-neutral-300 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials Used */}
            <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 mb-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF914D] block mb-1">
                Specified Materials &amp; Finishes
              </span>
              <p className="text-xs text-neutral-300 font-mono">
                {selectedProject.materials}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800">
              <span className="text-xs text-neutral-400">
                Ready to achieve similar results for your residence?
              </span>
              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onOpenQuoteModal(`Inspired by ${title}`);
                }}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] hover:shadow-orange-glow transition-all"
              >
                START A SIMILAR PROJECT
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
