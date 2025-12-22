"use client";

import SectionContainer from "@/components/layout/SectionContainer";
import { BlogPost } from "@/lib/blog"; // Type import is fine in client component
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface BlogListProps {
  blogPosts: BlogPost[];
}

export default function BlogList({ blogPosts }: BlogListProps) {
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

      {/* Header Section */}
      <SectionContainer className="pt-32 pb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <span className="text-blue-600 font-mono text-sm tracking-widest mb-4 block">THOUGHTS & NOTES</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
            BLOG
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed">
            Technical articles, development updates, and random thoughts about software engineering.
          </p>
        </motion.div>
      </SectionContainer>
      
      {/* Blog Grid */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              {/* Thumbnail Image */}
              <div className="relative w-full aspect-video bg-gray-200 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800">
                {post.coverImage ? (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-gray-400">
                    <span className="text-xs font-mono">No Image</span>
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col p-8">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-4">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                   {post.tags?.map(tag => (
                     <span key={tag} className="flex items-center gap-1 text-[10px] font-mono px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-300">
                        <Tag className="w-3 h-3" /> {tag}
                     </span>
                   ))}
                </div>
              </div>

              {/* Absolute Overlay Link */}
              <Link href={`/blog/${post.id}`} className="absolute inset-0 z-10" aria-label={`Read more about ${post.title}`} />
            </motion.article>
          ))}
        </div>
      </SectionContainer>

    </div>
  );
}
