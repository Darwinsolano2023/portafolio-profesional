// src/components/sections/Hero.jsx
import React from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { personalInfo } from '../../data/personalInfo';
import StatsCard from '../ui/StatsCard';

const Hero = () => {
  const typedText = useTypingEffect(personalInfo.title, 100);

  return (
    <section id="inicio" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-24">
      {/* Animated Background - Profesional */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-slate-50 to-accent-100 dark:from-primary-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500"></div>
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary-400/20 dark:bg-accent-400/20 rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        <div className="mb-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 dark:from-accent-400 dark:via-primary-500 dark:to-accent-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <div className="text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 mb-1 h-9 transition-colors duration-300 font-medium">
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-base sm:text-lg text-primary-600 dark:text-accent-400 font-semibold transition-colors duration-300">
            {personalInfo.subtitle}
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6 transition-colors duration-300 leading-relaxed">
          {personalInfo.description}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a
            href={`https://wa.me/${personalInfo.contact.phone.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, quiero una asesoría')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 dark:from-accent-500 dark:to-primary-600 dark:hover:from-accent-400 dark:hover:to-primary-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/30 dark:shadow-accent-500/30 text-sm sm:text-base"
          >
            Escríbeme por WhatsApp
          </a>
          <a
            href="#proyectos"
            className="px-6 py-2.5 border-2 border-primary-600 dark:border-accent-400 text-primary-600 dark:text-accent-400 hover:bg-primary-50 dark:hover:bg-accent-400/10 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base"
          >
            Ver Proyectos
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {personalInfo.stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;