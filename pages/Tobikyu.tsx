import React from "react";
import { Link } from "react-router-dom";

const Tobikyu: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-sky-600 to-sky-800 overflow-hidden">
        <div className="absolute inset-0 bg-white bg-opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 text-center">
          <div className="text-sm text-sky-100 mb-2">
            TOP / 飛び級プログラム
          </div>
          <h1 className="text-4xl font-bold text-white mb-8">
            飛び級プログラム
          </h1>
          <p className="text-xl text-sky-100 max-w-2xl mx-auto">
            卓越した才能を、最短距離で開花させる。
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              プログラム概要
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              私たちの飛び級プログラムは、従来の学年の枠を超えて、個々の能力と情熱に応じた学習環境を提供します。
              優れた才能を持つ学生が、その能力を最大限に発揮し、早期に専門分野で活躍するためのプログラムです。
            </p>
          </div>

          {/* Program Features */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 border border-gray-200">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">加速学習</h3>
              <p className="text-gray-600">
                個々の学習スピードに合わせたカリキュラムで、通常の2-3倍の速度での習得が可能です。
                基礎から応用まで、段階的かつ効率的な学習プロセスを提供します。
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">個別指導</h3>
              <p className="text-gray-600">
                経験豊富な指導者による1対1の個別指導で、学生一人一人の特性や興味に合わせた
                最適な学習方法を見つけ出し、実践します。
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">実践研究</h3>
              <p className="text-gray-600">
                理論学習と並行して、実際の研究プロジェクトに参加。
                学んだ知識を実践で活用し、研究者としての基礎能力を身につけます。
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-sky-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6m8 0H8m0 0H6a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h8m0 0h2a2 2 0 002-2V8a2 2 0 00-2-2h-2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                キャリア支援
              </h3>
              <p className="text-gray-600">
                卒業後の進路も含めた長期的なキャリア設計をサポート。
                大学進学、研究職、起業など、多様な選択肢を提示し、最適な道筋を一緒に考えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              対象者・選考基準
            </h2>
            <p className="text-lg text-gray-600">
              以下の条件を満たし、高い学習意欲を持つ学生を対象としています。
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">基本要件</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">
                  特定の学問分野において、同学年を大幅に上回る理解度と応用力を有すること
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">
                  高い学習意欲と自己管理能力を持ち、主体的に学習に取り組めること
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">
                  知的好奇心が旺盛で、挑戦的な課題に積極的に取り組む姿勢があること
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mt-0.5 mr-4 flex-shrink-0">
                  <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">
                  プログラム期間中、継続的に参加できる時間的余裕があること
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              選考プロセス
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">書類審査</h4>
                <p className="text-sm text-gray-600">
                  成績証明書、推薦状、志望理由書の提出
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">面接・試験</h4>
                <p className="text-sm text-gray-600">
                  専門分野の理解度確認と面接による総合評価
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">最終判定</h4>
                <p className="text-sm text-gray-600">
                  総合的な評価による合否判定と学習プラン策定
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            お申し込み・お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            詳細な申請要件とプロセスについて、個別のカウンセリングを通じて
            最適な学習パスを一緒に設計いたします。
          </p>
          <Link
            to="/contact"
            className="group relative inline-block text-sky-600 font-medium border border-sky-600 px-12 py-4 overflow-hidden transition-colors duration-300"
          >
            <span className="absolute inset-0 bg-sky-600 transform origin-bottom-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
              お問い合わせ
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tobikyu;
