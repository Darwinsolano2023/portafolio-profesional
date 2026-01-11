// src/components/ui/StatsCard.jsx
import React from 'react';

const StatsCard = ({ stat }) => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-accent-400 transition-all duration-300 shadow-sm hover:shadow-lg group">
      <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 dark:from-accent-400 dark:to-primary-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
        {stat.number}
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300 font-medium">
        {stat.label}
      </div>
    </div>
  );
};

export default StatsCard;