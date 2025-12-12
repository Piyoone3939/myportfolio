import { portfolioData } from "@/data/portfolio";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  const { profile } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left order-2 md:order-1">
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>
        
        <div className="flex gap-6 order-1 md:order-2">
          <a 
            href={profile.contact.github} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a 
            href={profile.contact.twitter} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
