"use client";

import SectionContainer from "@/components/layout/SectionContainer";
import Skills from "@/components/Skills";
import { profile } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
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

      {/* Intro Section */}
      <SectionContainer className="pt-32 pb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-12">
            ABOUT <span className="text-gray-300 dark:text-gray-800">ME</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <div>
              <p className="mb-6">{profile.introduction}</p>
              <p>
                As a student engineer, I am constantly exploring new technologies and methodologies to build better software. 
                My focus is not just on writing code, but on creating solutions that solve real-world problems with elegance and efficiency.
              </p>
            </div>
            <div className="space-y-8 font-mono text-sm">
               <div>
                  <h3 className="font-bold text-black dark:text-white mb-2">LOCATION</h3>
                  <p>{profile.location}</p>
               </div>
               <div>
                  <h3 className="font-bold text-black dark:text-white mb-2">EMAIL</h3>
                  <p>{profile.contact.email}</p>
               </div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
      
      {/* Reusing Skills Component */}
      <Skills />

    </div>
  );
}
