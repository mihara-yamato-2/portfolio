import React, { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import {
  DownloadIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CodeIcon,
} from "../components/icons";
import PdfViewerModal from "../components/PdfViewerModal";

const About: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-72 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-white bg-opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 text-center">
          <div className="text-sm text-blue-100 mb-2">TOP / About Me</div>
          <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
          {/* <div className="flex justify-center gap-10">
            <a href="#background" className="text-white hover:underline">
              経歴・背景 ▾
            </a>
            <a href="#philosophy" className="text-white hover:underline">
              理念・信条 ▾
            </a>
            <a href="#skills" className="text-white hover:underline">
              スキル・専門性 ▾
            </a>
          </div> */}
        </div>
      </section>

      {/* Background Section */}
      <section className="flex items-center justify-center gap-10 py-20 px-4">
        <div className="bg-white p-10 max-w-lg relative">
          <div className="absolute top-1/2 -left-10 w-px h-24 bg-gray-300 transform -translate-y-1/2"></div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            千葉大学で情報工学を専攻
          </h2>
          <p className="text-gray-600 leading-relaxed">{profile.longBio}</p>
          <div className="mt-6">
            <button
              onClick={() => setShowResumeModal(true)}
              className="group relative inline-flex items-center text-blue-600 border border-blue-600 px-6 py-2 overflow-hidden transition-colors duration-300 ease-in-out"
            >
              <span className="absolute inset-0 bg-blue-600 transform origin-bottom-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              <DownloadIcon className="w-4 h-4 mr-2 relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
                履歴書を見る
              </span>
            </button>
          </div>
        </div>
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="w-64 h-64 object-cover rounded"
        />
      </section>

      {/* Career Timeline Section */}
      <section className="flex items-center justify-center gap-10 py-20 px-4">
        <div className="bg-white p-10 max-w-2xl relative order-2">
          <div className="absolute top-1/2 -right-10 w-px h-24 bg-gray-300 transform -translate-y-1/2"></div>
          <h2 className="text-2xl font-bold text-blue-600 mb-8 flex items-center justify-center">
            <AcademicCapIcon className="w-6 h-6 mr-3" />
            My Career
          </h2>

          {/* Timeline Container */}
          <div className="relative ml-5 pl-5">
            {/* Timeline Vertical Line */}
            <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-blue-200 border-l-2 border-dashed border-blue-300"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2024年7月 - 現在 フィルダクトインターン */}
              <div className="relative">
                <div className="absolute -left-2 top-1 w-3.5 h-3.5 bg-white border-3 border-blue-500 rounded-full"></div>
                <div className="pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    2024年7月 株式会社フィルダクト 事業開発部門インターン 開始
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    実際の事業開発に携わりながら、
                    <span className="text-red-400 font-medium">
                      ビジネスとテクノロジーの融合
                    </span>
                    を学んでいます。
                    スタートアップ環境での実践的な経験を積んでいます。
                  </p>
                </div>
              </div>

              {/* 2024年4月 川本研究室 */}
              <div className="relative">
                <div className="absolute -left-2 top-1 w-3.5 h-3.5 bg-white border-3 border-blue-500 rounded-full"></div>
                <div className="pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    2024年4月 千葉大学 川本研究室 非正規学部生研究員
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    学部生でありながら研究活動に参加し、
                    <span className="text-red-400 font-medium">
                      学術研究への興味と探究心
                    </span>
                    を深めています。
                    最先端の技術研究に触れる貴重な機会を得ています。
                  </p>
                </div>
              </div>

              {/* 2023年 千葉大学入学 */}
              <div className="relative">
                <div className="absolute -left-2 top-1 w-3.5 h-3.5 bg-white border-3 border-blue-500 rounded-full"></div>
                <div className="pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    2023年 千葉大学 工学部先進科学プログラム 入学
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    情報工学を専攻し、
                    <span className="text-red-400 font-medium">
                      「正義ある情報技術の発展を継続的に促進する社会構造の確立に貢献する」
                    </span>
                    という理念のもと、コンピュータサイエンスの学習に取り組んでいます。
                  </p>
                </div>
              </div>

              {/* 2021-2023年 高校 */}
              <div className="relative">
                <div className="absolute -left-2 top-1 w-3.5 h-3.5 bg-white border-3 border-gray-400 rounded-full"></div>
                <div className="pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    2021年 大阪教育大学附属高等学校平野校舎 普通科 入学
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    高校在学中に将来への明確なビジョンを持ち、
                    <span className="text-red-400 font-medium">
                      より挑戦的な環境を求めて自主退学を決断
                    </span>
                    。 早期に大学進学への道を選択しました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-orange-100 rounded flex items-center justify-center order-1">
          <BriefcaseIcon className="w-24 h-24 text-blue-600" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        id="philosophy"
        className="flex items-center justify-center py-20 px-4"
      >
        <div className="bg-white p-10 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-black mb-6">理念・信条</h2>
          <div className="space-y-6">
            {profile.philosophies.map((philosophy, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded">
                <h3 className="text-lg font-semibold text-black mb-2">
                  {philosophy.title}
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  「{philosophy.content}」
                </p>
                {philosophy.description && (
                  <p className="text-sm text-gray-600">
                    {philosophy.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Timeline */}
      <section id="skills" className="text-center py-20 px-4">
        <h2 className="text-3xl font-bold mb-2">テクニカルスキル</h2>
        <div className="text-sm text-gray-400 mb-10">Technical Skills</div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded">
            <div className="flex items-center justify-center mb-6">
              <CodeIcon className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                開発・技術スタック
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <Link
            to="/projects"
            className="group relative inline-block mt-10 px-8 py-3 text-blue-600 border border-blue-600 overflow-hidden transition-colors duration-300 ease-in-out"
          >
            <span className="absolute inset-0 bg-blue-600 transform origin-bottom-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
              プロジェクト一覧を見る
            </span>
          </Link>
        </div>
      </section>

      {/* Resume PDF Viewer Modal */}
      <PdfViewerModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        pdfUrl="/portfolio/resume/resume_mihara.pdf"
        title="履歴書 - 三原大和"
      />
    </div>
  );
};

export default About;
