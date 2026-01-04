// src/components/sections/Skills.jsx
import React from 'react';
import { skills } from '../../data/skills';
import SkillGroup from '../ui/SkillGroup';

const Skills = () => {
  return (
    <section id="habilidades" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
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