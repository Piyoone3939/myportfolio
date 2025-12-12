import { portfolioData } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionContainer from "./layout/SectionContainer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <SectionContainer id="projects">
      <div className="py-20 md:px-10 lg:px-20">
        <div className="flex flex-col items-start mb-16">
          <span className="text-blue-600 font-mono text-sm tracking-widest mb-4">SELECTED WORKS</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase relative">
            Projects
            <span className="absolute -bottom-4 left-0 w-1/3 h-2 bg-blue-600"></span>
          </h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
            A collection of projects showcasing my journey in software engineering and interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link 
              href="/works" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-sm tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
                VIEW ALL WORKS <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
