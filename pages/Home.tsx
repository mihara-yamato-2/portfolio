import React from "react";
import { Link } from "react-router-dom";
// import { profile } from "../data/profile";
import { blogPosts } from "../data/blog";
// import { GitHubIcon } from "../components/icons/GitHubIcon";
import HeroSection from "../components/HeroSection";

import ProjectsSection from "../components/ProjectsSection";
import RecruitSection from "../components/RecruitSection";

const Home: React.FC = () => {
  return (
    <div>
      {/* ヒーローセクション */}
      <HeroSection />

      <ProjectsSection />

      <RecruitSection />

      {/* ブログセクション */}
      <section className="max-w-2xl mx-auto py-20 px-4 text-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
            身辺雑記
          </h2>
          <p className="text-sm text-gray-400 mb-10">Personal Blog</p>
        </div>

        <ul className="list-none p-0 m-0">
          {blogPosts.slice(0, 3).map((post, index) => (
            <li
              key={post.id}
              className={`py-6 ${
                index === 0 ? "" : "border-t border-gray-200"
              }`}
            >
              <div className="flex justify-center items-center gap-2 flex-wrap mb-2">
                <span className="text-xs text-gray-600">{post.date}</span>
                <span className="inline-block text-xs text-gray-800 no-underline py-1 px-2 border border-gray-800 rounded-sm">
                  身辺雑記
                </span>
              </div>
              <p className="text-sm m-0 text-gray-800">{post.title}</p>
            </li>
          ))}
        </ul>

        <Link
          to="/blog"
          className="group relative inline-block mt-10 px-8 py-3 text-base text-blue-600 no-underline border border-blue-600 overflow-hidden transition-colors duration-200"
        >
          <span className="absolute inset-0 bg-sky-600 transform origin-bottom-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
            View more
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Home;
