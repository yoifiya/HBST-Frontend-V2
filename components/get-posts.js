export async function getPosts() {
  const res = await fetch("http://localhost:3001/api/posts");
  let posts = (await res.json()).data.reverse();

  return posts;
}
