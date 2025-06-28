import React from "react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectsSection: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Image Section */}
              <div
                className={`relative ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Text Content Section */}
              <div
                className={`${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                } px-4`}
              >
                <h4 className="text-3xl font-light text-gray-800 mb-6 leading-snug">
                  {project.title.split("。")[1] || project.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {project.description}
                </p>
                <Link
                  to={`/projects/${project.id}`}
                  className="group relative inline-block text-gray-600 font-medium border border-gray-400 px-10 py-3 overflow-hidden transition-colors duration-300"
                >
                  <span className="absolute inset-0 bg-sky-600 transform origin-bottom-left -translate-x-full w-full h-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                    View more
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
