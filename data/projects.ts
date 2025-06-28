import type { Project } from "../types";

// English: Add your own projects here. Use relative paths for images in the `public` folder.
// 日本語: ここにあなたのプロジェクトを追加してください。`public`フォルダ内の画像には相対パスを使用します。

export const projects: Project[] = [
  {
    id: "about-me",
    title: "About Me",
    description: "これまでの経歴やスキル、開発に対する考えをまとめています。",
    longDescription:
      "このプロジェクトは、研究者がコードを書かずに複雑なデータセットを探索できるよう支援するために構築された、インタラクティブ性の高いクライアントサイドのダッシュボードです。動的なチャート、クロスフィルタリング、カスタマイズ可能なレイアウトを備えています。主な課題は大規模データセットに対するパフォーマンスの最適化で、データ集約と仮想化レンダリング技術によってこれを達成しました。",
    staticExplanation:
      "このプロジェクトは、React・TypeScript・D3.jsの統合スキルと、大規模データの処理能力を示しています。特に注目すべきは、パフォーマンス最適化への取り組みと、ユーザビリティを重視したインターフェース設計です。",
    techStack: ["React", "TypeScript", "D3.js", "Tailwind CSS", "Vite"],
    imageUrl: "/portfolio/profile.jpg", // プロフィール画像に変更
    githubUrl: "",
    liveUrl: "/about",
  },
  {
    id: "project-2",
    title: "Projects",
    description:
      "私が今まで取り組んできた開発プロジェクトについて掲載しています。",
    longDescription:
      "このアプリは、ファインチューニングされた生成AIモデルを活用して、ユーザーが提供した食材のリストからユニークなレシピを作成します。React Nativeで構築されたシンプルで直感的なインターフェースを特徴とし、モデルを提供するカスタムバックエンドAPIに接続します。このプロジェクトは、フロントエンドのモバイル開発とバックエンドのAI統合の両方におけるスキルを示しています。",
    staticExplanation:
      "モバイル開発とAI統合の両方のスキルを証明するプロジェクトです。React Nativeによるクロスプラットフォーム開発と、生成AIとの効果的な統合が評価ポイントです。実用的なアプリケーションとしての完成度も高いです。",
    techStack: ["React Native", "Node.js", "Express", "Gemini API", "Firebase"],
    imageUrl: "https://picsum.photos/seed/project2/800/600", // Replace with '/projects/recipe-app.png'
    githubUrl: "https://github.com/yamato-mihara/ai-recipe-generator",
  },
  {
    id: "project-3",
    title: "Researchs",
    description:
      "「研究者として生きる」とは何かを理解するために、研究活動にいそしんでおります。",
    longDescription:
      "パフォーマンスが高く、SEOに強いブログを作成するための個人プロジェクトです。記事はMarkdownファイルで記述され、ビルド時に解析されて静的なHTMLページを生成します。このアプローチにより、最高のパフォーマンスとセキュリティが保証されます。デザインはミニマリストで、コンテンツに焦点が当てられています。",
    staticExplanation:
      "Next.jsによる静的サイト生成への深い理解とSEOの知識を示すプロジェクトです。パフォーマンス重視の設計思想と、シンプルで効果的なアーキテクチャ選択が光ります。",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Markdown"],
    imageUrl: "https://picsum.photos/seed/project3/800/600", // Replace with '/projects/blog-platform.png'
    githubUrl: "https://github.com/yamato-mihara/nextjs-markdown-blog",
    liveUrl: "#",
  },
];
