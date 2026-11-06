import { blogs } from "../data";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </main>
  );
}