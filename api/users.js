export async function getUsers() {
  await wait(2000);
  return fetch(`https://jsonplaceholder.org/users`)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getUser(userId) {
  await wait(2000);
  return fetch(`https://jsonplaceholder.org/users/${userId}`)
    .then((res) => res.json())
    .then((data) => data);
}
function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
