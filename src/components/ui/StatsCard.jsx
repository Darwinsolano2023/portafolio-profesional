// src/components/ui/StatsCard.jsx
import React from 'react';

const StatsCard = ({ stat }) => {
  const Icon = stat.icon;

  return (
    <div className="bg-white dark:bg-slate-900/50 backdrop-blur-sm px-5 py-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-accent-400 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        {Icon && <Icon className="w-7 h-7 text-primary-600 dark:text-accent-400" />}
        {stat.number && (
          <span className="text-4xl font-bold text-primary-700 dark:text-accent-400">
            {stat.number}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
        {stat.title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {stat.description}
      </p>
    </div>
  );
};

export default StatsCard;