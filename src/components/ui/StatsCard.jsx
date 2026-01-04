// src/components/ui/StatsCard.jsx
import React from 'react';

const StatsCard = ({ stat }) => {
  return (
    <div className="bg-gradient-to-br from-primary-900/20 to-secondary-900/20 backdrop-blur-sm p-6 rounded-xl border border-primary-500/30 hover:border-primary-400/50 transition-all duration-300">
      <div className="text-4xl font-bold text-primary-400 mb-2">{stat.number}</div>
      <div className="text-sm text-gray-400">{stat.label}</div>
    </div>
  );
};

export default StatsCard;