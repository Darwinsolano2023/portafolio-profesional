// src/components/sections/Skills.jsx
import React from 'react';
import { skills } from '../../data/skills';
import SkillGroup from '../ui/SkillGroup';

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-primary-700 dark:text-accent-400">
            Habilidades Técnicas
          </span>
        </h2>

        <div className="space-y-8">
          {skills.map((skillGroup, index) => (
            <SkillGroup key={index} skillGroup={skillGroup} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;