// src/components/ui/SkillGroup.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const SkillGroup = ({ skillGroup }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-accent-400 transition-colors duration-300">
        {skillGroup.category}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroup.items.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-accent-400 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300 transition-colors duration-300 font-medium">
                {skill}
              </span>
              <ChevronRight className="w-4 h-4 text-primary-600 dark:text-accent-400 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;