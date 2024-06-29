import { getPostComments } from "@/api/comments";
import { getPost } from "@/api/posts";
import { getUser } from "@/api/users";
import { Skeleton, SkeletonList } from "@/components/Skeleton";
import Link from "next/link";
import { Suspense } from "react";

export default function PostPage({ params: { postId } }) {
  return (
    <div className="p-5">
      <Suspense
        fallback={
          <>
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-lg">
                <Skeleton inline short />
              </h1>
              <p>
                <Skeleton inline short />
              </p>
            </div>

            <span className="text-emerald-500">
              By: <Skeleton short inline />
            </span>
            <div className="px-3 grid gap-3  grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
              <Skeleton />
            </div>
          </>
        }
      >
        <PostDetails postId={postId} />
      </Suspense>

      <div className="mx-5 pb-5">
        <h3 className="font-bold text-lg text-emerald-500 p-3">Comments</h3>
        <Suspense
          fallback={
            <div className="px-6">
              <SkeletonList amount={3}>
                <div className="text-slate-200 p-5 border border-dashed border-emerald-600 rounded-lg">
                  <div className="text-sm mb-1 text-emerald-600 font-mono flex items-center justify-between">
                    <p>
                      Answer By&nbsp;:&nbsp;
                      <Skeleton short />
                    </p>
                    <p>
                      <Skeleton short />
                    </p>
                  </div>
                  <Skeleton />

                  <p className="flex justify-end text-emerald-600 font-mono mt-4">
                    <Skeleton short />
                  </p>
                </div>
              </SkeletonList>
            </div>
          }
        >
          <Comments postId={postId} />
        </Suspense>
      </div>
    </div>
  );
}

async function PostDetails({ postId }) {
  const post = await getPost(postId);

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">{post.title}</h1>
        <img
          src={post.image}
          width="250px"
          height="260px"
          className="rounded-full"
          alt="profilePicture"
        />
      </div>

      <span className="text-emerald-500">
        By&nbsp;: &nbsp;
        <Suspense fallback={<Skeleton short inline />}>
          <UserDetails userId={post.userId} />
        </Suspense>
      </span>
      <div className="text-sm p-3">{post.content}</div>
    </div>
  );
}

async function UserDetails({ userId }) {
  const user = await getUser(userId);
  return (
    <Link href={`/users/${user.id}`}>
      {user.firstname}&nbsp;{user.lastname}
    </Link>
  );
}

async function Comments({ postId }) {
  const comments = await getPostComments(postId);
  const user = await getUser(postId);

  return [comments].map((comm) => (
    <div key={comm.id} className="px-6">
      <div className="text-slate-200 p-5 border border-dashed border-emerald-600 rounded-lg">
        <div className="text-sm mb-1 text-emerald-600 font-mono flex items-center justify-between">
          <p>Answer By&nbsp;:&nbsp;{user.email}</p>
          <p>
            {new Intl.DateTimeFormat("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }).format(comm.publishedAt)}
          </p>
        </div>
        {comm.comment}
        <p className="flex justify-end text-emerald-600 font-mono">
          {new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(comm.publishedAt)}
        </p>
      </div>
    </div>
  ));
}
