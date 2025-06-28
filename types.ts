// English: Defines the structure for a project item.
// 日本語: プロジェクトアイテムの構造を定義します。
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  staticExplanation?: string; // AI explanation alternative for static sites
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

// English: Defines the structure for a research paper.
// 日本語: 学術論文の構造を定義します。
export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  conference: string;
  year: number;
  abstract: string;
  staticExplanation?: string; // AI explanation alternative for static sites
  pdfUrl?: string;
  doiUrl?: string;
  category: "Journal" | "Conference" | "Workshop";
}

// Research type alias for consistency
export type Research = ResearchPaper;

// English: Defines the structure for a blog post.
// 日本語: ブログ投稿の構造を定義します。
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Markdown content
}

// English: Defines the structure for user profile.
// 日本語: ユーザープロフィールの構造を定義します。
export interface Philosophy {
  title: string;
  content: string;
  description?: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  longBio?: string;
  philosophies?: Philosophy[];
  email: string;
  phone: string;
  location: string;
  avatar: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    website: string;
  };
  skills: string[];
  education: {
    degree: string;
    school: string;
    year: string;
    description: string;
  }[];
  experience: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
}
