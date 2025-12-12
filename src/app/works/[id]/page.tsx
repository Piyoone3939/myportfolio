"use client";

import SectionContainer from "@/components/layout/SectionContainer";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold">Project Not Found</h1>
            <Link href="/works" className="ml-4 text-blue-500 hover:underline">Back to Works</Link>
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Back */}
      <nav className="fixed top-0 left-0 p-8 z-50">
        <Link 
          href="/works" 
          className="flex items-center gap-2 text-sm font-bold tracking-widest hover:text-blue-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO WORKS
        </Link>
      </nav>

      <SectionContainer className="pt-32 pb-16" noBorderBottom>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
             <span className="text-blue-500 text-sm font-mono tracking-widest">PROJECT 0{project.id}</span>
             <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-2 mb-6 text-black dark:text-white">
                {project.title}
             </h1>
             <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium">
                        {tech}
                    </span>
                ))}
             </div>
          </div>

          <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-800 mb-12 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
             {/* Replace with actual image in production */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-sm font-mono">Project Image Placeholder</span>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
             <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4">Overview</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.description}
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    Here you can add more detailed description about the project challenge, solution, and impact. 
                    This section is great for storytelling about your development process.
                </p>
             </div>
             
             <div className="space-y-6">
                <div>
                   <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Links</h3>
                   <div className="flex flex-col gap-3">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-blue-500 transition-colors">
                         <Github className="w-4 h-4" /> Source Code
                      </a>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-blue-500 transition-colors">
                         <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                   </div>
                </div>
                
                <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Date</h3>
                    <p>2024</p>
                </div>
             </div>
          </div>

        </motion.div>
      </SectionContainer>
       
       {/* Next Project Link (Mock) */}
       <div className="border-t border-gray-200 dark:border-gray-800 py-12 text-center">
            <p className="text-xs text-gray-400 mb-2 font-mono">NEXT PROJECT</p>
            <Link href="/works" className="text-3xl font-bold hover:text-blue-500 transition-colors">
                View All Works
            </Link>
       </div>
    </div>
  );
}
