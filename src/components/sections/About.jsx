// src/components/sections/About.jsx
import React from 'react';
import { personalInfo } from '../../data/personalInfo';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-primary-700 dark:bg-gradient-to-r dark:from-accent-400 dark:to-primary-500 dark:bg-clip-text dark:text-transparent">
            Sobre Mí
          </span>
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 transition-colors duration-300">
            {personalInfo.about.paragraph1}
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
            {personalInfo.about.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;