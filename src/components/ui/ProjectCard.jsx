// src/components/ui/ProjectCard.jsx
import React from 'react';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-accent-400 transition-all duration-300 group hover:transform hover:scale-105 shadow-sm hover:shadow-xl">      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 transition-colors duration-300 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-accent-400 rounded-full text-sm border border-primary-200 dark:border-accent-700/30 transition-colors duration-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400 mb-4 transition-colors duration-300">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <ChevronRight className="w-4 h-4 text-primary-600 dark:text-accent-400 mr-1 flex-shrink-0 mt-0.5 transition-colors duration-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Links */}
        {(project.demoUrl || project.githubUrl) && (
          <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-600 dark:text-accent-400 hover:text-primary-700 dark:hover:text-accent-300 transition-colors font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Url</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-600 dark:text-accent-400 hover:text-primary-700 dark:hover:text-accent-300 transition-colors font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>Código</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;