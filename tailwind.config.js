/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{ts,tsx}",
    "./{components,hooks,pages,services}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003d82", // 洋電社風の深い青色（企業の信頼感を表現）
          dark: "#002a5c", // より深い青（ホバー用）
          light: "#e6f3ff", // 薄い青（背景用）
        },
        secondary: {
          DEFAULT: "#f39800", // 洋電社風の温かいオレンジ（「煌々と輝く」を表現）
          dark: "#d6820a", // 濃いオレンジ（ホバー用）
          light: "#fff4e6", // 薄いオレンジ（背景用）
        },
        accent: {
          DEFAULT: "#6b7280", // 落ち着いたグレー
          dark: "#4b5563", // より濃いグレー
          light: "#f3f4f6", // 薄いグレー
        },
        neutral: {
          light: "#fafbfc", // 非常に薄いグレー（全体背景）
          DEFAULT: "#f8f9fa", // 薄いグレー（カード背景）
          medium: "#6c757d", // 中間グレー（サブテキスト）
          dark: "#212529", // 濃いグレー（メインテキスト）
        },
        yoden: {
          // 洋電社専用カラー
          blue: "#003d82", // コーポレートブルー
          orange: "#f39800", // アクセントオレンジ
          gray: "#495057", // テキストグレー
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Kaku Gothic ProN"',
          '"メイリオ"',
          "Meiryo",
          "sans-serif",
        ],
        serif: [
          '"Noto Serif JP"',
          '"Hiragino Mincho ProN"',
          '"Yu Mincho"',
          '"YuMincho"',
          '"ヒラギノ明朝 ProN W3"',
          '"Noto Serif Japanese"', // 追加
          "serif",
        ],
        mono: ['"Fira Code"', "monospace"],
        hero: ['"Noto Sans JP"', '"Hiragino Kaku Gothic ProN"', "sans-serif"], // ヒーロー用フォント
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
