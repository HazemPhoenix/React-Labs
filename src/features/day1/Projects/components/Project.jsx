import React from "react";
import Technology from "./Technology";

function Project({ project, index }) {
  return (
    <div
      className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
      key={index}
    >
      <div className="image relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
          <div className="text-center">
            <img src={project.imageSource} alt="Project Image" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-pink-100 mb-3 group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => {
            return <Technology tech={tech} index={index} />;
          })}
        </div>
        <div className="flex gap-3">
          <a
            href={project.demoLink}
            target="_blank"
            className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="px-4 py-2 border border-purple-500/50 text-purple-300 rounded-lg font-medium text-sm hover:bg-purple-500/10 transition-all duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
