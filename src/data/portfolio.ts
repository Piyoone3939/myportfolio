export interface Profile {
  name: string;
  role: string;
  location: string;
  introduction: string;
  contact: {
    email: string;
    github: string;
    twitter: string;
  };
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  demoUrl: string;
  thumbnail: string;
  story?: string;  // English translation / detailed story
  period?: string; // Development period
  award?: string;  // Award achievement
}


export const profile: Profile = {
  name: "PIYOONE",
  role: "Student Engineer",
  location: "Aichi, JP",
  introduction: "情報工学を専攻する学生エンジニア。Web開発とUI/UXデザインに情熱を注いでいます。美しく、効率的で、保守性の高いコードを書くことを大切にしています。",
  contact: {
    email: "m.sota.engineer@gmail.com", // Keeping placeholder or ask user? keeping as is for now unless specified
    github: "https://github.com/Piyoone3939",
    twitter: "https://x.com/piyoone3939",
  },
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["TypeScript","Next.js","React","Three.js","Tailwind CSS","Vite"],
  },
  {
    category: "Backend",
    items: ["node.js","hono","Python","Java","C","C++","C#",],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "VS Code","Mediapipe"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Piyoone's Portfolio",
    description: "自分の開発実績やプロジェクトを整理し、継続的に更新できるポートフォリオサイトを制作中。UIの設計やコンポーネント指向開発を重視し、保守性の高いコードベースを目指しています。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    repoUrl: "https://github.com/Piyoone3939/myportfolio",
    demoUrl: "https://piyoone.com",
    thumbnail: "/projects/portfolio.png",
    period: "Nov 2025 - Present",
    story: "Developing a portfolio site to organize my development achievements and projects, allowing for continuous updates. I prioritize UI design and component-oriented development, aiming for a highly maintainable codebase.",
  },
  {
    id: "2",
    title: "Koconi",
    description: "思い出を地図上に記録するWeb＋Unityアプリを開発中。アプリ自体は未実装ですが、Dockerを用いたマルチコンテナ構成を設計し、自身のパソコンでサーバを立てて、製作したLPをCloudflareを用いてデプロイしました。API設計やDB設計などバックエンド寄りの技術にも踏み込み、モダンな開発環境を構築しています。",
    techStack: ["Docker", "Nginx", "Hono", "TypeScript", "PostgreSQL", "Vite", "Unity"],
    repoUrl: "https://github.com/Piyoone3939/koconi",
    demoUrl: "https://koconi.com",
    thumbnail: "/projects/koconi.png",
    period: "Sep 2025 - Present",
    story: "Developing a Web & Unity application to record memories on a map. While the app itself is still in development, I designed a multi-container architecture using Docker, set up a server on my own machine, and deployed the landing page using Cloudflare. I also delved into backend technologies such as API and DB design, building a modern development environment.",
  },
   {
    id: "3",
    title: "Virtual Driving School",
    description: "MediaPipeを使用したハンドトラッキングにより、Webカメラだけで運転操作ができる3Dドライビングシミュレーター。教習所のコースを模した環境で、直感的な運転練習が可能です。",
    techStack: ["Next.js", "Three.js", "TypeScript", "MediaPipe", "Vercel", "Firebase"],
    repoUrl: "https://github.com/Piyoone3939/driving",
    demoUrl: "https://drivingsupport.vercel.app",
    thumbnail: "/projects/VirtualDrivingSchool.png",
    period: "Dec 2025 - Present",
    story: "A 3D driving simulator that allows driving operations using only a webcam via hand tracking with MediaPipe. It provides an intuitive driving practice experience in an environment mimicking a driving school course.",
    award: "【技育CAMP2025】ハッカソン Vol.15 優秀賞",
  },
];

export interface PortfolioData {
  profile: Profile;
  skills: SkillCategory[];
  projects: Project[];
}

export const portfolioData: PortfolioData = {
  profile,
  skills,
  projects,
};
