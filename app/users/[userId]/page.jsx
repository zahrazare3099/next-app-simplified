import { getUserPosts } from "@/api/posts";
import { getUserTodos } from "@/api/todos";
import { getUser } from "@/api/users";
import { PostCard, SkeletonPostCard } from "@/components/PostCard";
import { Skeleton, SkeletonList } from "@/components/Skeleton";
import TodoItem from "@/components/TodoItem";
import { Suspense } from "react";

export default function UserPage({ params: { userId } }) {
  return (
    <div className="p-5 grid grid-rows-6 grid-cols-2 gap-4">
      <div className="border rounded-xl row-start-1 row-end-2">
        <UserInformation userId={userId} />
      </div>
      <div className="border rounded-xl row-start-1 row-end-6">
        <ShowTodos userId={userId} />
      </div>
      <div className="row-start-2 row-end-6 ">
        <ShowPost userId={userId} />
      </div>
    </div>
  );
}

async function UserDetails({ userId }) {
  const user = await getUser(userId);
  return (
    <div className="p-2 flex flex-col gap-y-2">
      <h1 className="font-bold text-xl">
        {user.firstname}&nbsp;{user.lastname}
      </h1>
      <div className="text-base font-serif">{user.email}</div>
      <div className="text-sm space-y-1">
        <p>
          <b>Company:</b> {user.company.name}
        </p>
        <p>
          <b>Website:</b> {user.website}
        </p>
        <p>
          <b>Address:</b>
          {`${user.address.street} ${user.address.suite}
          ${user.address.city} ${user.address.zipcode}`}
        </p>
      </div>
    </div>
  );
}

async function UserPosts({ userId }) {
  const posts = await getUserPosts(userId);
  return [posts].map((post) => <PostCard key={post.id} {...post} />);
}

async function UserTodos({ userId }) {
  const todos = await getUserTodos(userId);
  return todos.todos.map((todo) => <TodoItem key={todo.id} {...todo} />);
}

function ShowPost({ userId }) {
  return (
    <div className="">
      <h3 className="p-3 font-bold">Posts</h3>
      <div className="px-3 grid gap-3 grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
        <Suspense
          fallback={
            <SkeletonList amount={3}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <UserPosts userId={userId} />
        </Suspense>
      </div>
    </div>
  );
}

function ShowTodos({ userId }) {
  return (
    <div className="flex flex-col">
      <h3 className="p-3 font-bold">Todos</h3>
      <ul className="list-disc px-5">
        <Suspense
          fallback={
            <SkeletonList amount={10}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          <UserTodos userId={userId} />
        </Suspense>
      </ul>
    </div>
  );
}

function UserInformation({ userId }) {
  return (
    <>
      <Suspense
        fallback={
          <div className="p-2 flex flex-col gap-y-2">
            <h1 className="font-bold text-xl">
              <Skeleton short inline />
            </h1>
            <div className="text-base font-serif">
              <Skeleton short inline />
            </div>
            <div className="text-sm space-y-1">
              <p>
                <b>Company:</b> <Skeleton short inline />
              </p>
              <p>
                <b>Website:</b> <Skeleton short inline />
              </p>
              <p>
                <b>Address:</b> <Skeleton short inline />
              </p>
            </div>
          </div>
        }
      >
        <UserDetails userId={userId} />
      </Suspense>
    </>
  );
}
