# 学生向け静的 React ポートフォリオ

技術系・研究系の大学生向けに特別に設計された、React、Vite、Tailwind CSS で構築されたポートフォリオ Web サイトテンプレートです。このバージョンは、動的なバックエンド依存関係なしで、GitHub Pages での静的ホスティング用に最適化されています。

## 特徴

- **モダンな技術スタック**: React 18、Vite、TypeScript、Tailwind CSS
- **レスポンシブデザイン**: デスクトップからモバイルまで、あらゆるデバイスで美しく表示
- **静的コンテンツ**: 最適なパフォーマンスのために、すべてのコンテンツが TypeScript ファイルで事前定義
- **構造化されたセクション**:
  - **ホーム**: 歓迎の挨拶と紹介
  - **アバウト**: 詳細な経歴、スキル、CV ダウンロード
  - **プロジェクト**: 静的説明付きのソフトウェア開発プロジェクトの紹介
  - **研究**: 簡潔な説明付きの学術論文リスト
  - **ブログ**: 思考や更新を共有するためのシンプルできれいなブログ
  - **コンタクト**: 連絡先情報の表示
- **GitHub Pages 対応**: GitHub Pages へのシームレスなデプロイ用に事前設定済み
- **カスタマイズ可能**: コンテンツとテーマを簡単に更新可能。すべてのデータは `/data` ディレクトリで管理

---

## 🚀 はじめに

### 必要な環境

- [Node.js](https://nodejs.org/) (v18.x 以降を推奨)
- [npm](https://www.npmjs.com/) または [yarn](https://yarnpkg.com/)

### 1. リポジトリのクローン

```bash
git clone https://github.com/yamato-mihara/portfolio.git
cd portfolio
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. コンテンツのカスタマイズ

すべての個人データは `data/` ディレクトリにあります。以下のファイルを編集して、あなた自身の情報でポートフォリオを更新してください:

- `data/profile.ts`: 個人情報、経歴、ソーシャルリンクなど
- `data/projects.ts`: 静的説明付きの開発プロジェクト
- `data/research.ts`: 簡単な説明付きの学術論文
- `data/blog.ts`: Markdown 形式のブログ投稿

また、プレースホルダーのアセットも置き換えてください:

- `public/profile.jpg`: プロフィール写真
- `public/cv.pdf`: CV ファイル
- `public/projects/` 内のプロジェクトスクリーンショットを更新

### 4. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:5173](http://localhost:5173)（またはターミナルに表示されるアドレス）を開いて結果を確認してください。

---

## 📦 ビルドとデプロイ

このテンプレートは、自動化された GitHub Actions を使用して GitHub Pages へのデプロイ用に事前設定されています。

### 自動デプロイ（推奨）

1. 変更を GitHub リポジトリの `main` ブランチにプッシュしてください。
2. GitHub Actions ワークフロー（`.github/workflows/deploy.yml`）が自動的にサイトをビルドしてデプロイします。
3. ポートフォリオは `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>` で利用可能になります。

### 手動デプロイ

手動デプロイを希望する場合:

```bash
npm run deploy
```

数分後、`homepage` フィールドで指定した URL でサイトが公開されます。

---

## 🎨 カスタマイズ

### カラースキーム

主要なカラースキームは、`index.html` ファイル内の Tailwind CSS 用の `<script>` タグで直接カスタマイズできます。

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: "#2563eb", // プライマリカラー
          secondary: "#4f46e5", // セカンダリカラー
          accent: "#f59e0b", // アクセントカラー
        },
      },
    },
  };
</script>
```

### コンポーネント構造

- `components/` - 再利用可能な UI コンポーネント
- `pages/` - ページコンポーネント
- `data/` - 静的データファイル
- `public/` - 静的アセット（画像、PDF など）

---

## 📝 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細については、[LICENSE](LICENSE)ファイルをご覧ください。

---

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します！改善提案や機能追加のアイデアがあれば、お気軽にお知らせください。

---

## 📞 サポート

質問や問題が発生した場合は、GitHub の Issues ページで報告してください。可能な限りサポートいたします。

**楽しいポートフォリオ作成を！** 🚀✨
