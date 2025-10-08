import React from "react";
import { Link } from "react-router-dom";

const NoiseHackProject: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            NoiseHack - Focus Sounds
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            生産性向上と集中力強化を目的とした高品質な環境音アプリケーション
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Project Image */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/noisehack/800/600"
              alt="NoiseHack - Focus Sounds App Screenshot"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                プロジェクト概要
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                NoiseHack - Focus Soundsは、Apple Music風の洗練されたデザインと厳選された13種類のプレミアム音声コンテンツを提供する環境音アプリです。
                React Native + Expo + TypeScriptで構築され、科学的に選別された自然音により生産性向上と集中力強化をサポートします。
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Deep Focus（集中特化）とCreative Flow（創造性向上）の2カテゴリで、海・雨・森・焚き火などの高品質録音を配信。
                プライバシーファースト設計で個人情報収集は一切行わず、Google Drive CDNによる高速ストリーミング再生を実現しています。
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                主要機能・技術特徴
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>13種類のプレミアム音声:</strong> Deep Focus（10曲）・Creative Flow（3曲）</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>デュアル音声システム:</strong> カスタム音声マネージャーによる高性能再生制御</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>Google Drive CDN:</strong> 5秒以内の高速音声読み込み・ストリーミング再生</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>60fps アニメーション:</strong> React Native Reanimatedによる滑らかなUI</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>バックグラウンド再生:</strong> 他アプリ使用中も継続再生対応</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700"><strong>プライバシー保護:</strong> データ収集ゼロ・広告なしの安心設計</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            使用技術
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["React Native", "Expo", "TypeScript", "Zustand", "Reanimated", "Google Drive API"].map((tech) => (
              <div
                key={tech}
                className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-4 text-center"
              >
                <span className="text-gray-800 font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Highlights */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            開発のポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📱</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                クロスプラットフォーム開発
              </h4>
              <p className="text-gray-600">
                React Native + Expoによる効率的なモバイルアプリ開発
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🔒</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                プライバシーファースト
              </h4>
              <p className="text-gray-600">
                個人情報を一切収集しないプライバシー重視の設計
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🎵</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                高品質音声配信
              </h4>
              <p className="text-gray-600">
                Google Drive CDNによる高速ストリーミング再生
              </p>
            </div>
          </div>
        </div>

        {/* Audio Categories */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            音声コンテンツカテゴリ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Deep Focus（集中特化 - 10曲）
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-700">• Ocean Waves - 深い集中状態への誘導</li>
                <li className="text-gray-700">• Forest Rain - 自然の中での静寂な集中</li>
                <li className="text-gray-700">• Mountain Stream - 流れる水音による心の安定</li>
                <li className="text-gray-700">• Cozy Fireplace - 温かみのある安心感</li>
                <li className="text-gray-700">• その他6曲の厳選された集中音</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Creative Flow（創造性向上 - 3曲）
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-700">• Coffee Shop - 創作活動に適したカフェ環境</li>
                <li className="text-gray-700">• Train Journey - リズミカルな移動音による発想促進</li>
                <li className="text-gray-700">• Station Platform - 都市的環境での創造性刺激</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            技術アーキテクチャ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                フロントエンド技術
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-700">• React Native 0.81.4 - クロスプラットフォーム</li>
                <li className="text-gray-700">• TypeScript 5.8.3 - 型安全性とコード品質</li>
                <li className="text-gray-700">• Zustand 5.0.7 - 軽量状態管理</li>
                <li className="text-gray-700">• React Native Reanimated 4.1.2 - 高性能アニメーション</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                音声・インフラ技術
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-700">• Expo Audio 1.0.13 - 最新音声API</li>
                <li className="text-gray-700">• Google Drive CDN - 音声ファイル配信</li>
                <li className="text-gray-700">• カスタム音声マネージャー - デュアル音声システム</li>
                <li className="text-gray-700">• EAS Build - クラウドベースビルドシステム</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Target Users */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            対象ユーザー
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                プライマリーターゲット
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-700">• 知識労働者（デスクワーク・リモートワーカー）</li>
                <li className="text-gray-700">• 学生（受験生・大学生・資格取得者）</li>
                <li className="text-gray-700">• クリエイター（デザイナー・エンジニア・ライター）</li>
                <li className="text-gray-700">• 瞑想実践者（マインドフルネス・ヨガ愛好者）</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                期待される効果
              </h4>
              <ul className="space-y-2">
                <li className="text-gray-700">• 集中力強化・作業効率化</li>
                <li className="text-gray-700">• ストレス軽減・リラクゼーション</li>
                <li className="text-gray-700">• 創造性支援・発想力向上</li>
                <li className="text-gray-700">• 睡眠支援・疲労回復</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="text-center space-x-4">
          <a
            href="https://github.com/yamato-mihara/noisehack-focus-sounds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-200"
          >
            GitHub で見る
          </a>
          <Link
            to="/noisehack/privacy-policy"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            プライバシーポリシー
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors duration-200"
          >
            ← プロジェクト一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoiseHackProject;