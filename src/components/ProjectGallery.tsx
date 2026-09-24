import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Kitchens', 'Bathrooms', 'Flooring', 'Interiors'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#070707] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Simple Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#FF914D]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
                OUR WORK
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Featured Projects
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-1.5 p-1 bg-[#141414] border border-neutral-800 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#FF914D] to-[#FFB27D] text-black font-bold shadow-orange-glow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setLightboxProject(project)}
              className="group relative rounded-xl overflow-hidden bg-black border border-neutral-800 hover:border-[#FF914D] transition-all duration-300 cursor-pointer shadow-lg"
            >
              {/* Image Frame */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-neutral-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5 text-white" />
                </div>

                {/* Project Title & Category */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF914D] block mb-1">
                    {project.category} · {project.location}
                  </span>
                  <h3
                    className="text-lg sm:text-xl font-bold text-white group-hover:text-[#FF914D] transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Full-Image Lightbox */}
      {lightboxProject && (
        <div
          onClick={() => setLightboxProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-md animate-fadeIn cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full flex flex-col items-center cursor-default"
          >
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute -top-12 right-0 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800/80 rounded-full transition-colors z-10"
              aria-label="Close preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full max-h-[80vh] rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-black flex items-center justify-center">
              <img
                src={lightboxProject.image}
                alt={lightboxProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
            </div>

            <div className="w-full mt-3 flex items-center justify-between px-1 text-left">
              <div>
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {lightboxProject.title}
                </h3>
                <span className="text-xs text-neutral-400">
                  {lightboxProject.location} · {lightboxProject.category}
                </span>
              </div>
              <button
                onClick={() => setLightboxProject(null)}
                className="text-xs text-neutral-400 hover:text-white"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
