// src/components/ui/SkillGroup.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';

const SkillGroup = ({ skillGroup }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-primary-400">{skillGroup.category}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroup.items.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-primary-900/30 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-300">{skill}</span>
              <ChevronRight className="w-4 h-4 text-primary-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;