import { SkeletonPostCard } from "@/components/PostCard";
import { SkeletonList } from "@/components/Skeleton";

export default function LoadingPostsPage() {
  return (
    <>
      <h1 className="p-3 font-bold">Posts</h1>
      <div className="px-3 w-full">
        <SkeletonList amount={9}>
          <SkeletonPostCard />
        </SkeletonList>
      </div>
    </>
  );
}
