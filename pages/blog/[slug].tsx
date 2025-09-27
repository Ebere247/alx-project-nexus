import { useRouter } from "next/router";

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // For now, just mock different stories
  const blogPosts: Record<string, { title: string; content: string }> = {
    "tech-fashion": {
      title: "Tech Meets Fashion",
      content:
        "Exploring how AI and innovation are reshaping the global fashion scene...",
    },
    "lagos-style": {
      title: "Lagos Street Style",
      content:
        "The streets of Lagos are bursting with creativity, culture, and unique fashion identity...",
    },
    "future-wear": {
      title: "The Future of Clothing",
      content:
        "From smart fabrics to personalized fashion powered by AI, the future is exciting...",
    },
  };

  const post = slug ? blogPosts[slug as string] : null;

  if (!post) {
    return <h1 className="text-center mt-20">Post not found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-lg leading-relaxed">{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
