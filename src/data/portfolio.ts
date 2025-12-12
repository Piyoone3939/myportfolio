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
}

export const profile: Profile = {
  name: "PIYOONE",
  role: "Student Engineer",
  location: "TOKYO, JP",
  introduction: "Information Science Student passionate about Web Development and UI/UX Design. I love creating clean, efficient, and beautiful code.",
  contact: {
    email: "contact@example.com", // Keeping placeholder or ask user? keeping as is for now unless specified
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
    description: "Personal portfolio website built with Next.js and Tailwind CSS. Features rich animations and responsive design.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    repoUrl: "https://github.com/Piyoone3939/myportfolio",
    demoUrl: "https://piyoone.com",
    thumbnail: "/projects/portfolio.png",
  },
  {
    id: "2",
    title: "Koconi",
    description: "A full-featured e-commerce application with cart functionality and payment processing integration.",
    techStack: ["React", "Redux", "Stripe", "Node.js"],
    repoUrl: "https://github.com/Piyoone3939/koconi",
    demoUrl: "https://koconi.com",
    thumbnail: "/projects/koconi.png",
  },
   {
    id: "3",
    title: "Virtual Driving School",
    description: "Simple and intuitive task management tool helping you stay organized and focused.",
    techStack: ["Vue.js", "Firebase", "Vuetify"],
    repoUrl: "https://github.com/Piyoone3939/driving",
    demoUrl: "https://drivingsupport.vercel.app",
    thumbnail: "/projects/VirtualDrivingSchool.png",
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
