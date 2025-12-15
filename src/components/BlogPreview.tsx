"use client";

import SectionContainer from "./layout/SectionContainer";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { motion } from "framer-motion";

interface BlogPreviewProps {
  posts: BlogPost[];
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  return (
    <SectionContainer id="blog" className="max-w-full">
      <div className="md:px-10 lg:px-20">
        <div className="flex flex-col items-start mb-16">
          <span className="text-blue-600 font-mono text-sm tracking-widest mb-4">THOUGHTS</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase relative">
            Latest Articles
            <span className="absolute -bottom-4 left-0 w-1/3 h-2 bg-blue-600"></span>
          </h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
            Web開発や日々の学習を通じて得た知見・技術的なトピックを共有しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              <div className="flex-1 flex flex-col p-8">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-4">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-blue-500 text-sm font-bold mt-auto group-hover:translate-x-2 transition-transform">
                    記事を読む <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>

              {/* Absolute Overlay Link */}
              <Link href={`/blog/${post.id}`} className="absolute inset-0 z-10" aria-label={`Read more about ${post.title}`} />
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-sm tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
                すべての記事を見る <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
