// src/components/sections/Projects.jsx
import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            Proyectos Destacados
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Soluciones innovadoras con impacto real</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;