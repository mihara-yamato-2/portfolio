import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog";

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-neutral-dark">ブログ</h1>
          <p className="mt-2 text-lg text-neutral-medium">
            技術、研究、学生生活についての考えを綴ります。
          </p>
        </div>
        <div className="space-y-8">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 hover:bg-gray-50 transition-colors duration-300"
              >
                <h2 className="text-2xl font-bold text-neutral-dark mb-2 select-none">
                  <span className="cursor-default">{post.title}</span>
                </h2>
                <p className="text-sm text-neutral-medium mb-4">{post.date}</p>
                <p className="text-neutral-medium mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  続きを読む &rarr;
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-neutral-dark mb-2">
                投稿がありません
              </h3>
              <p className="text-neutral-medium">
                まだブログ投稿がありません。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
