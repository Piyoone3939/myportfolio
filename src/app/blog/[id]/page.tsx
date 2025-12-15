import { getPostData } from "@/lib/blog";
import BlogPostView from "@/components/blog/BlogPost";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  const post = getPostData(params.id);
  
  if (!post) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${post.title} | Piyoone's Portfolio`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = getPostData(params.id);

  if (!post) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
