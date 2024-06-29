import Link from "next/link";
import { Skeleton, SkeletonButton } from "./Skeleton";

export function PostCard({ id, title, content }) {
  return (
    <div className="p-3 rounded-lg border-slate-400 bg-slate-600 text-slate-200 flex flex-col">
      <div className="font-bold">{title}</div>
      <div className="p-3 rounded-lg border-slate-400 bg-slate-600 text-slate-200 flex flex-col">
        <div className="font-xs text-gray-400">{content}</div>
      </div>
      <div className="flex flex-row-reverse">
        <Link className="btn" href={`/posts/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}

export function SkeletonPostCard() {
  return (
    <div className="p-3 rounded-lg border-slate-400 bg-slate-600 text-slate-200 flex flex-col">
      <div className="font-bold">
        <Skeleton short />
      </div>
      <div className="p-3 rounded-lg border-slate-400 bg-slate-600 text-slate-200 flex flex-col">
        <div className="font-xs text-gray-400">
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
