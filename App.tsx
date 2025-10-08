import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy load pages for better initial load performance
// ページを遅延読み込みして初期ロード性能を向上
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Research = lazy(() => import("./pages/Research"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const Tobikyu = lazy(() => import("./pages/Tobikyu"));
const NoiseHackPrivacyPolicy = lazy(() => import("./pages/NoiseHackPrivacyPolicy"));
const NoiseHackProject = lazy(() => import("./pages/NoiseHackProject"));

// Loading spinner component
// ローディングスピナーコンポーネント
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans relative">
        <Header />
        <main className="flex-grow relative">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/research" element={<Research />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tobikyu" element={<Tobikyu />} />
              <Route path="/noisehack" element={<NoiseHackProject />} />
              <Route path="/noisehack/privacy-policy" element={<NoiseHackPrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
