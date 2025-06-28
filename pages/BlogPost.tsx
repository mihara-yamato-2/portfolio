import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts } from "../data/blog";

const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold">投稿が見つかりません</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block">
            &larr; ブログ一覧へ戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
      <article className="max-w-3xl mx-auto bg-white p-6 sm:p-8 lg:p-10 rounded-md shadow-lg">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-neutral-dark mb-2">
            {post.title}
          </h1>
          <p className="text-neutral-medium">{post.date}</p>
        </header>
        <div className="prose prose-lg max-w-none prose-a:text-primary hover:prose-a:text-primary-dark">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
        <div className="mt-12 border-t pt-6">
          <Link
            to="/blog"
            className="font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            &larr; すべての投稿へ戻る
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
