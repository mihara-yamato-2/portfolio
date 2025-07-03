import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { profile } from "../data/profile";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "私について", path: "/about" },
    { name: "プロジェクト", path: "/projects" },
    { name: "研究活動", path: "/research" },
    { name: "ブログ", path: "/blog" },
    { name: "お問い合わせ", path: "/contact" },
  ];

  const linkClasses =
    "text-yoden-gray font-medium hover:text-yoden-blue transition-colors duration-300 px-3 py-4 text-sm flex items-center h-full";
  const activeLinkClasses = "text-black font-semibold bg-gray-300";

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-[9999] border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl font-bold text-yoden-blue hover:text-primary-dark transition-colors"
            >
              TOP
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-stretch h-16">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeLinkClasses : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded text-neutral-medium hover:text-neutral-dark hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">メインメニューを開く</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-base font-medium ${linkClasses} ${
                    isActive ? activeLinkClasses : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
