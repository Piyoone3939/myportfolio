"use client";

import { Project } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 md:opacity-60 transition-opacity duration-300 md:group-hover:opacity-80"></div>
      </div>

      {project.award && (
        <div className="absolute top-4 right-4 z-20 max-w-[70%]">
          <span className="inline-block px-3 py-1 bg-yellow-400/90 backdrop-blur-sm text-black rounded-full shadow-lg border border-yellow-200">
             <span className="text-[10px] font-bold tracking-tight block truncate">
                {project.award}
             </span>
          </span>
        </div>
      )}

      {/* Content */}
      <Link href={`/works/${project.id}`} className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 cursor-pointer">
        <div className="transform transition-transform duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
            {project.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-4 opacity-100 md:opacity-0 translate-y-0 transform md:translate-y-4 transition-all duration-500 delay-75 md:group-hover:opacity-100 md:group-hover:translate-y-0">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-white/90 border border-white/20 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-gray-300 text-sm line-clamp-2 mb-6 opacity-100 md:opacity-0 translate-y-0 transform md:translate-y-4 transition-all duration-500 delay-100 md:group-hover:opacity-100 md:group-hover:translate-y-0">
            {project.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
