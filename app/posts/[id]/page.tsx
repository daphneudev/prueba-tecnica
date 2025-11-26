import Header from "@/components/ui/header";
import Comment from "@/components/ui/posts/comment";
import Post from "@/components/ui/posts/post";
import { fetchComments, fetchPost } from "@/lib/data";

export default async function PostPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const post = await fetchPost({ postId: id });

  const comments = await fetchComments({ id });

  return (
    <>
      <Header />
      <div className="flex flex-col p-4 gap-4">
        <h1 className="text-xl font-semibold text-center">Publicación</h1>
        <div className="flex justify-center">
          <Post post={post} />
        </div>
        <h2 className="text-center mt-8">Comentarios ( {comments.length} ) </h2>
        <div className="flex flex-wrap gap-4 p-4 justify-center">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
}
