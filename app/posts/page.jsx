import { getPosts } from "@/api/posts";
import { PostCard } from "@/components/PostCard";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="p-3 font-bold">Posts</h1>
      <div className="px-3 grid gap-3  grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}
