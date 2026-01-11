// src/components/sections/Projects.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  };
  
  const handleNext = () => {
    setCurrentPage((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="proyectos" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-primary-700 dark:bg-gradient-to-r dark:from-accent-400 dark:to-primary-500 dark:bg-clip-text dark:text-transparent">
            Proyectos Destacados
          </span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 transition-colors duration-300 text-lg">
          Soluciones innovadoras con impacto real
        </p>

        {/* Desktop: Grid normal */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Mobile: Paginación */}
        <div className="md:hidden">
          <div className="mb-6">
            <ProjectCard project={projects[currentPage]} />
          </div>
          
          {/* Controles de paginación */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-accent-400 transition-all duration-300"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600 dark:text-accent-400" />
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-slate-700 dark:text-slate-300 font-semibold">
                {currentPage + 1} / {projects.length}
              </span>
            </div>
            
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-accent-400 transition-all duration-300"
              aria-label="Proyecto siguiente"
            >
              <ChevronRight className="w-6 h-6 text-primary-600 dark:text-accent-400" />
            </button>
          </div>
          
          {/* Indicadores de puntos */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-primary-600 dark:bg-accent-400 w-8'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
                aria-label={`Ir a proyecto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;