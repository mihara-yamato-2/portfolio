import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../types";
import { GitHubIcon, LinkIcon, SparklesIcon } from "./icons";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    title,
    description,
    techStack,
    imageUrl,
    githubUrl,
    liveUrl,
    staticExplanation,
  } = project;
  const [showExplanation, setShowExplanation] = useState(false);

  const handleToggleExplanation = (e: React.MouseEvent) => {
    // リンクのクリックイベントの場合は説明の表示/非表示を切り替えない
    if ((e.target as HTMLElement).closest("a")) {
      return;
    }
    if (staticExplanation) {
      setShowExplanation(!showExplanation);
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-200 cursor-pointer"
      onClick={handleToggleExplanation}
    >
      <div className="overflow-hidden">
        <img
          className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-6">

          <h3 className="text-2xl font-bold text-blue-500 mb-3">{title}</h3>

        <p className="text-neutral-600 mb-4 h-12 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-end space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              aria-label="GitHub Repository"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
          )}
          {liveUrl && (
            <>
              {liveUrl.startsWith('/') ? (
                <Link
                  to={liveUrl}
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  aria-label="Live Demo"
                >
                  <LinkIcon className="w-6 h-6" />
                </Link>
              ) : (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  aria-label="Live Demo"
                >
                  <LinkIcon className="w-6 h-6" />
                </a>
              )}
            </>
          )}
        </div>
        {showExplanation && staticExplanation && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2 flex items-center">
              <SparklesIcon className="w-5 h-5 mr-2" />
              プロジェクトメモ
            </h4>
            <p className="text-sm text-neutral-700 prose max-w-none">
              {staticExplanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
