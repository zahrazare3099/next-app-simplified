export async function getPosts() {
  await wait(2000);
  return fetch(`https://jsonplaceholder.org/posts`)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getPost(postId) {
  await wait(2000);
  return fetch(`https://jsonplaceholder.org/posts/${postId}`)
    .then((res) => res.json())
    .then((data) => data);
}

export async function getUserPosts(userId) {
  await wait(2000);
  return fetch(`https://jsonplaceholder.org/posts?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => data);
}

function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
