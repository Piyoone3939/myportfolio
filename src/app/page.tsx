import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BlogPreview from "@/components/BlogPreview";
import { getSortedPostsData } from "@/lib/blog";

export default function Home() {
  const allPosts = getSortedPostsData();
  const latestPosts = allPosts.slice(0, 3); // Top 3 latest posts

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <Skills />
      <Projects />
      <BlogPreview posts={latestPosts} />
    </main>
  );
}
