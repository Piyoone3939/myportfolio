"use client";

import SectionContainer from "@/components/layout/SectionContainer";
import { BlogPost } from "@/lib/blog";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPostView({ post }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation Back */}
      <nav className="fixed top-0 left-0 p-8 z-50">
        <Link 
          href="/blog" 
          className="flex items-center gap-2 text-sm font-bold tracking-widest hover:text-blue-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> ブログ一覧に戻る
        </Link>
      </nav>

      <article className="pt-32 pb-20">
        {/* Header */}
        <SectionContainer noBorderBottom>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
          <div className="mb-8">
             <div className="flex items-center gap-4 mb-6 text-sm font-mono text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
              <div className="flex gap-2">
                {post.tags?.map(tag => (
                   <span key={tag} className="flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {tag}
                   </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white leading-tight">
              {post.title}
            </h1>

            {post.coverImage && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-12 border border-gray-200 dark:border-gray-800">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          </motion.div>
        </SectionContainer>

        {/* Content */}
        <SectionContainer className="border-t border-gray-200 dark:border-gray-800">
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="max-w-3xl mx-auto py-12 prose dark:prose-invert prose-lg"
           >
             <ReactMarkdown>
               {post.content}
             </ReactMarkdown>
           </motion.div>
        </SectionContainer>
      </article>

    </div>
  );
}
