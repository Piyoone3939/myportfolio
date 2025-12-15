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
          <ArrowLeft className="w-4 h-4" /> 作品一覧に戻る
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
             <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-blue-500 text-sm font-mono tracking-widest">PROJECT 0{project.id}</span>
                {project.award && (
                   <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-xs font-bold border border-yellow-200 dark:border-yellow-700">
                      {project.award}
                   </span>
                )}
             </div>
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
                <h3 className="text-xl font-bold mb-4">プロジェクト概要</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.description}
                </p>
                {project.story && (
                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 leading-relaxed italic border-l-2 border-gray-200 dark:border-gray-800 pl-4">
                        {project.story}
                    </p>
                )}
             </div>
             
             <div className="space-y-6">
                <div>
                   <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">関連リンク</h3>
                   <div className="flex flex-col gap-3">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-blue-500 transition-colors">
                         <Github className="w-4 h-4" /> ソースコード
                      </a>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-blue-500 transition-colors">
                         <ExternalLink className="w-4 h-4" /> デモサイトを見る
                      </a>
                   </div>
                </div>
                
                <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">開発時期</h3>
                    <p>{project.period || "2024"}</p>
                </div>
             </div>
          </div>

        </motion.div>
      </SectionContainer>
    </div>
  );
}
