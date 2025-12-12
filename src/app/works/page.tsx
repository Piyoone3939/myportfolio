"use client";

import SectionContainer from "@/components/layout/SectionContainer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Back */}
      <nav className="fixed top-0 left-0 p-8 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm font-bold tracking-widest hover:text-blue-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> HOME
        </Link>
      </nav>

      <SectionContainer className="pt-32 pb-16" noBorderBottom>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-12">
            SELECTED <span className="text-blue-500">WORKS</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>
    </div>
  );
}
