import React, { createContext, useState, ReactNode, useContext } from "react";

type Locale = "ja" | "en";

type TranslationRecord = Record<string, { ja: string; en: string }>;

const translations: TranslationRecord = {
  nav_about: { ja: "私について", en: "About" },
  nav_projects: { ja: "プロジェクト", en: "Projects" },
  nav_research: { ja: "研究活動", en: "Research" },
  nav_blog: { ja: "ブログ", en: "Blog" },
  nav_contact: { ja: "お問い合わせ", en: "Contact" },
  nav_top: { ja: "TOP", en: "TOP" },
  footer_sitemap: { ja: "サイトマップ", en: "Site Map" },
  footer_contact: { ja: "お問い合わせ", en: "Contact Me" },
  contact_title: { ja: "お問い合わせ", en: "Contact" },
  contact_description: {
    ja: "ご連絡をお待ちしております。以下のフォームからメッセージを送信してください。",
    en: "Feel free to send me a message using the form below.",
  },
  contact_name: { ja: "お名前", en: "Name" },
  contact_email: { ja: "メールアドレス", en: "Email" },
  contact_message: { ja: "メッセージ", en: "Message" },
  contact_send: { ja: "メッセージを送信", en: "Send Message" },
  contact_sending: { ja: "送信中...", en: "Sending..." },
  contact_success: {
    ja: "メッセージが正常に送信されました。ありがとうございます！",
    en: "Your message was sent successfully. Thank you!",
  },
  contact_fallback: {
    ja: "メールクライアントが開きました。送信を完了してください。",
    en: "Your mail client was opened. Please complete the send.",
  },
  contact_direct: { ja: "その他の連絡方法", en: "Other Contact Options" },
  contact_email_direct: { ja: "メールで直接連絡", en: "Contact via Email" },
  contact_github: { ja: "GitHubで確認", en: "View on GitHub" },
  home_blog: { ja: "身辺雑記", en: "Personal Blog" },
  view_more: { ja: "もっと見る", en: "View more" },
  projects_title: { ja: "プロジェクト内容", en: "Projects" },
  projects_desc: {
    ja: "私のソフトウェア開発における制作実績です。",
    en: "My software development projects.",
  },
  blog_title: { ja: "ブログ", en: "Blog" },
  blog_description: {
    ja: "技術、研究、学生生活についての考えを綴ります。",
    en: "Thoughts on technology, research and student life.",
  },
  read_more: { ja: "続きを読む →", en: "Read more →" },
  no_posts_title: { ja: "投稿がありません", en: "No posts" },
  no_posts_desc: { ja: "まだブログ投稿がありません。", en: "No blog posts yet." },
  post_not_found: { ja: "投稿が見つかりません", en: "Post not found" },
  back_to_blog: { ja: "← ブログ一覧へ戻る", en: "← Back to Blog" },
  back_to_all_posts: { ja: "← すべての投稿へ戻る", en: "← Back to all posts" },
};

interface LocaleContextProps {
  locale: Locale;
  toggleLocale: () => void;
  t: (key: keyof typeof translations) => string;
}

export const LocaleContext = createContext<LocaleContextProps>({
  locale: "ja",
  toggleLocale: () => {},
  t: () => "",
});

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("ja");
  const toggleLocale = () => setLocale((l) => (l === "ja" ? "en" : "ja"));
  const t = (key: keyof typeof translations) => translations[key][locale];

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);

