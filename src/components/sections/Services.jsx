// src/components/sections/Services.jsx
import React from 'react';
import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-slate-100 dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary-600 to-accent-500 dark:from-accent-400 dark:to-primary-500 bg-clip-text text-transparent">
            Servicios
          </span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 transition-colors duration-300 text-lg">
          Soluciones tecnológicas end-to-end
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;