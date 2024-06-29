import getTodos from "@/api/todos";
import { Skeleton, SkeletonList } from "@/components/Skeleton";
import TodoItem from "@/components/TodoItem";
import { Suspense } from "react";

export default async function Todos() {
  return (
    <div className="p-5 flex flex-col">
      <h1 className="font-bold pb-3">Todos</h1>
      <ul className="list-disc p-5">
        <Suspense
          fallback={
            <SkeletonList amount={10}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          <TodosList />
        </Suspense>
      </ul>
    </div>
  );
}

async function TodosList() {
  const todos = await getTodos();
  return todos.todos?.map((todo) => {
    return <TodoItem key={todo.id} {...todo} />;
  });
}
