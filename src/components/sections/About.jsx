// src/components/sections/About.jsx
import React from 'react';
import { personalInfo } from '../../data/personalInfo';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            Sobre Mí
          </span>
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {personalInfo.about.paragraph1}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            {personalInfo.about.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;