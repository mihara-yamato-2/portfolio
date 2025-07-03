import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { useLocale } from "../src/locale";

const Footer: React.FC = () => {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yoden-blue text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* 左半分：ナビゲーションリンク */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("footer_sitemap")}</h3>
            <nav className="space-y-3">
              <Link
                to="/about"
                className="block text-white hover:text-yoden-orange transition-colors duration-200"
              >
                {t("nav_about")}
              </Link>
              <Link
                to="/projects"
                className="block text-white hover:text-yoden-orange transition-colors duration-200"
              >
                {t("projects_title")}
              </Link>
              <Link
                to="/research"
                className="block text-white hover:text-yoden-orange transition-colors duration-200"
              >
                {t("nav_research")}
              </Link>
              <Link
                to="/blog"
                className="block text-white hover:text-yoden-orange transition-colors duration-200"
              >
                {t("nav_blog")}
              </Link>
            </nav>
          </div>

          {/* 縦線 */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-32 w-px bg-white opacity-30"></div>

          {/* 右半分：お問い合わせ */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("footer_contact")}</h3>
            <div className="space-y-4">
              <Link
                to="/contact?type=work"
                className="block border border-gray-400 text-white px-6 py-3 hover:bg-gray-800 hover:bg-opacity-20 hover:text-gray-200 transition-colors duration-200 text-center"
              >
                仕事・研究に関するお問い合わせはこちら
              </Link>
              <Link
                to="/contact?type=other"
                className="block border border-gray-400 text-white px-6 py-3 hover:bg-gray-800 hover:bg-opacity-20 hover:text-gray-200 transition-colors duration-200 text-center"
              >
                その他のお問い合わせはこちら
              </Link>
            </div>
          </div>
        </div>

        {/* 著作権表示 */}
        <div className="border-t border-white border-opacity-30 mt-8 pt-6 text-center">
          <p className="text-sm">
            &copy; {currentYear} {profile.name}. All Rights Reserved.
          </p>
          <p className="text-xs mt-2 opacity-80">
            洋々として煌々と輝く精神のもとに
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
