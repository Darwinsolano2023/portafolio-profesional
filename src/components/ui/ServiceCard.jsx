// src/components/ui/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;
  
  return (
    <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-primary-900/30 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-100">{service.title}</h3>
      <p className="text-gray-400">{service.description}</p>
    </div>
  );
};

export default ServiceCard;