
const blogPosts = "http://localhost:8888/owmc/wp-json/wp/v2/posts?_fields=id,slug,title";

interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
}

export default async function Blog() {
  const req = await fetch(blogPosts);
  const posts: Post[] = await req.json();

  return (
    <main>
      <h1 className="mb-2 font-bold text-xl">Blog</h1>
      <p className="mb-2">WP posts from OWMC.</p>
      <p className="mb-2">Posts fetched and page SSR&apos;d at runtime. Default NextJS caching (30 seconds?).</p>
      <hr className="mb-2" />
      {posts.map(post => (
        <h2 key={post.slug}>• {post.title.rendered}</h2>
      ))}
    </main>
  );
}
