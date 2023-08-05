export async function getPosts() {
  const res = await fetch(process.env.NEXT_PUBLIC_apiUrl + "/api/posts");
  let posts = (await res.json()).data.reverse();

  return posts;
}
