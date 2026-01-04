// src/components/sections/Hero.jsx - Actualizado
import React from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { personalInfo } from '../../data/personalInfo';
import StatsCard from '../ui/StatsCard';

const Hero = () => {
  const typedText = useTypingEffect(personalInfo.title, 100);

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background - Azul profundo elegante */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-black to-secondary-900/40"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary-500/20 rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <div className="text-2xl sm:text-3xl text-gray-300 mb-2 h-12">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-xl text-primary-400 font-semibold">
            {personalInfo.subtitle}
          </p>
        </div>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          {personalInfo.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contacto"
            className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/50"
          >
            Contáctame
          </a>
          <a
            href="#proyectos"
            className="px-8 py-3 border-2 border-primary-500 hover:bg-primary-500/10 rounded-lg font-semibold transition-all duration-300"
          >
            Ver Proyectos
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {personalInfo.stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;