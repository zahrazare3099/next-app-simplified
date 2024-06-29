export default async function getTodos() {
  wait(2000);
  return fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((data) => data);
}

export async function getUserTodos(userId) {
  await wait(2000);
  return fetch(`https://dummyjson.com/todos?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => data);
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
