// src/components/ui/ProjectCard.jsx
import React from 'react';
import { ChevronRight, Code, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-primary-900/30 hover:border-primary-500/50 transition-all duration-300 group hover:transform hover:scale-105">      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary-900/30 text-primary-400 rounded-full text-sm border border-primary-700/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-1 text-sm text-gray-400 mb-4">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <ChevronRight className="w-4 h-4 text-primary-400 mr-1 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Links */}
        {(project.demoUrl || project.githubUrl) && (
          <div className="flex gap-4 pt-4 border-t border-primary-900/30">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
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
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
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