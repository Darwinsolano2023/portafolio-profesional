// src/components/ui/ExperienceCard.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const ExperienceCard = ({ job }) => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-accent-400 transition-all duration-300 shadow-sm hover:shadow-xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-primary-600 dark:text-accent-400 mb-2 transition-colors duration-300">
            {job.role}
          </h3>
          <p className="text-xl text-slate-800 dark:text-slate-200 font-semibold transition-colors duration-300">
            {job.company}
          </p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-primary-600 dark:text-accent-400 font-bold transition-colors duration-300">
            {job.period}
          </p>
          <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300 font-medium">
            {job.location}
          </p>
        </div>
      </div>
      <ul className="space-y-2">
        {job.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start text-slate-600 dark:text-slate-400 transition-colors duration-300">
            <ChevronRight className="w-5 h-5 text-primary-600 dark:text-accent-400 mr-2 flex-shrink-0 mt-0.5 transition-colors duration-300" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;