import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-neutral-dark">
          プロジェクト内容
        </h1>
        <p className="mt-2 text-lg text-neutral-medium">
          私のソフトウェア開発における制作実績です。
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
