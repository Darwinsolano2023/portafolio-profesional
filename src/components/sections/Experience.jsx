// src/components/sections/Experience.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { experience } from '../../data/experience';
import ExperienceCard from '../ui/ExperienceCard';

const Experience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : experience.length - 1));
  };
  
  const handleNext = () => {
    setCurrentPage((prev) => (prev < experience.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="experiencia" className="py-20 bg-slate-100 dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-primary-700 dark:bg-gradient-to-r dark:from-accent-400 dark:to-primary-500 dark:bg-clip-text dark:text-transparent">
            Experiencia Laboral
          </span>
        </h2>

        {/* Desktop: Lista normal */}
        <div className="hidden md:block space-y-8">
          {experience.map((job, index) => (
            <ExperienceCard key={index} job={job} />
          ))}
        </div>

        {/* Mobile: Paginación */}
        <div className="md:hidden">
          <div className="mb-6">
            <ExperienceCard job={experience[currentPage]} />
          </div>
          
          {/* Controles de paginación */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-accent-400 transition-all duration-300"
              aria-label="Experiencia anterior"
            >
              <ChevronLeft className="w-6 h-6 text-primary-600 dark:text-accent-400" />
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-slate-700 dark:text-slate-300 font-semibold">
                {currentPage + 1} / {experience.length}
              </span>
            </div>
            
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-accent-400 transition-all duration-300"
              aria-label="Experiencia siguiente"
            >
              <ChevronRight className="w-6 h-6 text-primary-600 dark:text-accent-400" />
            </button>
          </div>
          
          {/* Indicadores de puntos */}
          <div className="flex justify-center gap-2 mt-4">
            {experience.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-primary-600 dark:bg-accent-400 w-8'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
                aria-label={`Ir a experiencia ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;