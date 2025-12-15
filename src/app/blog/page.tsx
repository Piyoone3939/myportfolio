import { getSortedPostsData } from "@/lib/blog";
import BlogList from "@/components/blog/BlogList";

export const metadata = {
  title: "Blog | Piyoone's Portfolio",
  description: "Technical articles and development updates.",
};

export default function BlogPage() {
  const blogPosts = getSortedPostsData();

  return <BlogList blogPosts={blogPosts} />;
}
