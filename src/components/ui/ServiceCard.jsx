// src/components/ui/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="group bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-accent-400 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-xl">
      <div className="text-primary-600 dark:text-accent-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;