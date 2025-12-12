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
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "Rust"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Figma", "VS Code"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio v1",
    description: "Personal portfolio website built with Next.js and Tailwind CSS. Features rich animations and responsive design.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    repoUrl: "https://github.com",
    demoUrl: "https://vercel.com",
    thumbnail: "/projects/project1.jpg", // Placeholder
  },
  {
    id: "2",
    title: "E-Commerce App",
    description: "A full-featured e-commerce application with cart functionality and payment processing integration.",
    techStack: ["React", "Redux", "Stripe", "Node.js"],
    repoUrl: "https://github.com",
    demoUrl: "https://vercel.com",
    thumbnail: "/projects/project2.jpg", // Placeholder
  },
   {
    id: "3",
    title: "Task Manager",
    description: "Simple and intuitive task management tool helping you stay organized and focused.",
    techStack: ["Vue.js", "Firebase", "Vuetify"],
    repoUrl: "https://github.com",
    demoUrl: "https://vercel.com",
    thumbnail: "/projects/project3.jpg", // Placeholder
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
