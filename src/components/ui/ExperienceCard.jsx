// src/components/ui/ExperienceCard.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const ExperienceCard = ({ job }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-primary-900/30 hover:border-primary-500/50 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-primary-400 mb-2">{job.role}</h3>
          <p className="text-xl text-gray-300">{job.company}</p>
        </div>
        <div className="mt-2 md:mt-0 text-right">
          <p className="text-primary-400 font-semibold">{job.period}</p>
          <p className="text-gray-400">{job.location}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {job.highlights.map((highlight, i) => (
          <li key={i} className="flex items-start text-gray-400">
            <ChevronRight className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;