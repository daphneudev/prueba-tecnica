import { PostComment, PostInfo } from "@/lib/definitions";

export async function fetchPosts() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts: PostInfo[] = await data.json();
    return posts;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error al traer los posts.");
  }
}

export async function fetchPost({ postId }: { postId: string }) {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    const post: PostInfo = await data.json();
    return post;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error al traer los posts.");
  }
}

export async function fetchPostsByUser({ userId }: { userId: string }) {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts: PostInfo[] = await data.json();

    return posts;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error al traer los posts.");
  }
}

export async function fetchComments({ id }: { id: string }) {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    const comments: PostComment[] = await data.json();

    return comments;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error al traer los comentarios.");
  }
}

export async function deletePost({ id }: { id: number }) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Error al eliminar el post.");
    }

    return true;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error al eliminar el post.");
  }
}
