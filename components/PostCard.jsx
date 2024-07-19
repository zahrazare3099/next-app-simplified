import Link from "next/link";
import { Skeleton, SkeletonButton } from "./Skeleton";

export function PostCard({ id, title, content }) {
  return (
    <div className="p-3 rounded-lg border-slate-400 bg-slate-600 text-slate-200 flex flex-col justify-between">
      <div className="font-bold p-1 font-serif">{title}</div>
      <div className="flex flex-col items-baseline justify-between">
        <div className="p-3 rounded-lg border-slate-400 bg-slate-600 text-slate-200 flex flex-col">
          <div className="font-xs text-gray-300">
            {content.slice(0, 250).concat("...")}
          </div>
        </div>
        <div className="w-full flex flex-row-reverse">
          <Link className="btn" href={`/posts/${id}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export function SkeletonPostCard() {
  return (
    <div className="p-3 rounded-lg border-slate-400 bg-slate-600 text-slate-200 flex flex-col justify-between">
      <div className="">
        <Skeleton short />
      </div>
      <div className="p-3 rounded-lg border-slate-400 bg-slate-600 text-slate-200 flex flex-col">
        <div className="font-xs text-gray-400 ">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <SkeletonButton />
      </div>
    </div>
  );
}

{
  /* <div className="card">
  <div className="card-header">
    <Skeleton short />
  </div>
  <div className="card-body">
    <div className="card-preview-text">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  </div>
  <div className="card-footer">
    <SkeletonButton />
  </div>
</div>; */
}
