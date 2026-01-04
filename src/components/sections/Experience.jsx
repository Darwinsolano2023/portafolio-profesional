// src/components/sections/Experience.jsx
import React from 'react';
import { experience } from '../../data/experience';
import ExperienceCard from '../ui/ExperienceCard';

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            Experiencia Laboral
          </span>
        </h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <ExperienceCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;