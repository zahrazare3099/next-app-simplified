import { SkeletonPostCard } from "@/components/PostCard";
import { SkeletonList } from "@/components/Skeleton";

export default function LoadingPostsPage() {
  return (
    <>
      <h1 className="p-3 font-bold">Posts</h1>
      <div className="px-3 grid gap-3  grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        <SkeletonList amount={6}>
          <SkeletonPostCard />
        </SkeletonList>
      </div>
    </>
  );
}
