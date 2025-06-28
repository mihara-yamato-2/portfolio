// English: Centralized data file for easy updates. Replace placeholder content with your own information.
// 日本語: 更新を容易にするための中央集権化されたデータファイル。プレースホルダーのコンテンツをあなた自身の情報に置き換えてください。

export const profile = {
  name: "三原 大和",
  title: "コンピュータサイエンス学生",
  bio: "千葉大学で情報工学を専攻。「正義ある情報技術の発展を継続的に促進する社会構造の確立に貢献する」ことが理念。",
  longBio:
    "千葉大学で情報工学を学ぶ3年生です。個人の理念として「正義ある情報技術の発展を継続的に促進する社会構造の確立に貢献する」ことを掲げています。また、一族の会社である株式会社洋電社の理念「洋々として煌々と輝く」を胸に、広い視野と明るい未来を目指しています。",
  philosophies: [
    {
      title: "個人理念",
      content:
        "正義ある情報技術の発展を継続的に促進する社会構造の確立に貢献する",
    },
    {
      title: "家業理念",
      content: "洋々として煌々と輝く",
      description:
        "株式会社洋電社の理念として受け継がれる、広く豊かな心で明るく輝き続けるという志",
    },
  ],
  imageUrl: "/portfolio/profile.jpg", // Place your profile picture in the `public` folder
  cvUrl: "/cv.pdf", // Place your CV in the `public` folder
  social: {
    github: "https://github.com/yamato-mihara", // dummy
    linkedin: "https://linkedin.com/in/yamato-mihara", // dummy
    scholar: "https://scholar.google.com/citations?user=your_scholar_id", // dummy
  },
  education: [
    {
      institution: "千葉大学",
      degree: "工学部先進科学プログラム",
      year: "2023 - 2027 (卒業見込み)",
    },
    {
      institution: "大阪教育大学附属高等学校平野校舎",
      degree: "普通科",
      year: "2021 - 2023（自主退学）",
    },
  ],
  experience: [
    {
      company: "株式会社フィルダクト",
      role: "事業開発部門 (インターン)",
      period: "2024年 7月 - 現在",
    },
    {
      company: "千葉大学 川本研究室",
      role: "非正規学部生研究員",
      period: "2024年 4月 - 2025年 3月",
    },
  ],
  skills: [
    "Go",
    "Rust",
    "Python",
    "TypeScript",
    "React",
    "Kubernetes",
    "GCP",
    "PyTorch",
    "Next.js",
    "Vite",
    "Docker",
    "Git & GitHub",
  ],
};
