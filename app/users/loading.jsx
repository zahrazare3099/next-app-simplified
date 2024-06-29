import { Skeleton, SkeletonButton, SkeletonList } from "@/components/Skeleton";

export default function LoadingUsersPage() {
  return (
    <>
      <h1 className="p-3 font-bold">Users</h1>
      <div className="px-3 grid gap-3  grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        <SkeletonList amount={6}>
          <div className="p-3 rounded-lg border-slate-400 bg-slate-600 text-slate-200 flex flex-col">
            <div className="font-bold pb-2">
              <Skeleton short />
            </div>
            <div className="flex flex-col">
              <Skeleton short />
              <Skeleton short />
              <Skeleton short />
            </div>
            <div className="flex flex-row-reverse">
              <SkeletonButton />
            </div>
          </div>
        </SkeletonList>
      </div>
    </>
  );
}
