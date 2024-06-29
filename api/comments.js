// https://jsonplaceholder.org/comments
// https://jsonplaceholder.org/posts/${postId}
// `${process.env.API_URL}/posts/${postId}/comments
export async function getPostComments(postId) {
  await wait(2000);
  return fetch(`https://jsonplaceholder.org/comments/${postId}`)
    .then((res) => res.json())
    .then((data) => data);
}

function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
