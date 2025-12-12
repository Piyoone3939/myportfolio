"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowRight, MousePointer2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Time & Scroll & Mouse Effect
  useEffect(() => {
    // Clock
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }));

    // Scroll
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    // Mouse Move
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 3D Parallax Calculation
  const calculateParallax = (factor: number) => {
    if (typeof window === 'undefined') return {};
    // Disable on mobile to prevent performance issues and weird behavior
    if (window.innerWidth < 768) return {};
    
    const x = (mousePos.x - window.innerWidth / 2) / 50 * factor;
    const y = (mousePos.y - window.innerHeight / 2) / 50 * factor;
    return {
      transform: `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`,
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-50 overflow-hidden font-sans selection:bg-blue-500 selection:text-white"
    >
      {/* 5. Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* 2. Mouse Follow Gradient */}
      <div 
        className="fixed w-[500px] h-[500px] pointer-events-none z-0 opacity-10 dark:opacity-[0.05] blur-[100px] rounded-full"
        style={{ 
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          transition: "transform 0.1s ease-out"
        }} 
      />

      {/* 3. Binary Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none overflow-hidden select-none">
        <div className="flex flex-wrap break-all text-[10px] font-mono leading-none text-black dark:text-white">
          {Array.from({ length: 4000 }).map((_, i) => (
             <span key={i}>{Math.random() > 0.5 ? '1' : '0'}</span>
          ))}
        </div>
      </div>

      {/* 1. 12x12 Grid Layout Overlay (Visual Guide - subtle) */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0 opacity-[0.03] border-gray-500">
         {Array.from({ length: 12 }).map((_, i) => (
           <div key={i} className="border-r border-gray-500 h-full"></div>
         ))}
      </div>


      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col h-screen p-4 md:p-8">
        
        {/* Top Bar */}
        <header className="flex justify-between items-start mb-8 text-xs font-mono tracking-widest text-gray-500 dark:text-gray-400">
          <div className="flex flex-col gap-1">
             <span className="text-xl font-bold text-black dark:text-white">{currentTime}</span>
             <span>TOKYO, JP</span>
          </div>
          <nav className="hidden md:flex gap-8">
            {['WORK', 'ABOUT', 'CONTACT'].map((item) => (
              <Link 
                key={item} 
                href={item === "CONTACT" ? "mailto:your-email@example.com" : `/${item === "WORK" ? "works" : item.toLowerCase()}`} 
                className="hover:text-blue-500 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>AVAILABLE FOR WORK</span>
          </div>
        </header>

        {/* Sidebar (Left & Right) */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-8 text-xs font-mono text-gray-400">
           <div className="[writing-mode:vertical-rl] tracking-[0.2em]">
              X: {Math.round(mousePos.x)}
           </div>
           <div className="[writing-mode:vertical-rl] tracking-[0.2em]">
              Y: {Math.round(mousePos.y)}
           </div>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6">
           {[
             { icon: Github, href: profile.contact.github },
             { icon: Linkedin, href: "https://linkedin.com" }, // Linkedin is not in data yet
             { icon: Twitter, href: profile.contact.twitter }
           ].map((Social, index) => (
             <a 
               key={index}
               href={Social.href} 
               target="_blank" 
               rel="noreferrer"
               className="p-3 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:scale-110 hover:rotate-6 group relative"
             >
               <Social.icon className="w-5 h-5" />
               <span className="absolute right-12 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                 Visit Profile
               </span>
             </a>
           ))}
        </div>

        {/* Center Content */}
        <main className="flex-1 flex flex-col justify-center items-center text-center">
          
          {/* Name Display */}
          <div className="mb-4 flex items-center gap-4 w-full max-w-4xl">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
            <span className="font-mono text-sm tracking-[0.5em] text-gray-500">PIYOONE</span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
          </div>

          {/* 3D Typography */}
          <div 
            className="perspective-container transition-transform duration-100 ease-out"
            style={calculateParallax(0.5)}
          >
            <h1 className="flex flex-col font-black leading-[0.85] tracking-tighter select-none">
              <span 
                className="text-[clamp(3rem,12vw,10rem)] text-gray-900 dark:text-white transition-colors duration-300"
              >
                STUDENT
              </span>
              <span 
                className="text-[clamp(3rem,12vw,10rem)] text-blue-500 relative"
              >
                ENGINEER
                {/* Decorative Cursor */}
                <MousePointer2 className="absolute -bottom-4 right-0 w-8 h-8 md:w-16 md:h-16 text-black dark:text-white fill-current animate-bounce" />
              </span>
            </h1>
          </div>

          <p className="mt-8 max-w-lg text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed font-medium">
            Crafting digital experiences through innovative design and clean code architecture.
            <br />
            Focusing on performance, accessibility and pixel-perfect UIs.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <Link 
               href="/works"
               className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-sm tracking-wider overflow-hidden"
            >
               <span className="relative z-10 flex items-center gap-2">
                 VIEW WORK <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
            </Link>
            <Link 
               href="#contact"
               className="px-8 py-4 border border-gray-900 dark:border-gray-100 font-bold text-sm tracking-wider hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
               GET IN TOUCH
            </Link>
          </div>

        </main>

        {/* Bottom Stats */}
        <footer className="grid grid-cols-3 gap-4 md:gap-12 border-t border-gray-200 dark:border-gray-800 pt-8 mt-auto">
          {[
            { label: "PROJECTS", value: "12+", color: "bg-blue-500" },
            { label: "YEARS EXP", value: "03", color: "bg-green-500" },
            { label: "PASSION", value: "∞", color: "bg-purple-500" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
               <div className="flex justify-between items-end">
                  <span className="text-2xl md:text-4xl font-bold">{stat.value}</span>
                  <span className="text-[10px] md:text-xs font-mono text-gray-500 tracking-wider mb-1">{stat.label}</span>
               </div>
               <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className={`h-full ${stat.color} w-3/4 rounded-full`}></div>
               </div>
            </div>
          ))}
        </footer>

      </div>
    </div>
  );
}
