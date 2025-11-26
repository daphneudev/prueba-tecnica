"use client";
import Post from "@/components/ui/posts/post";
import { fetchPosts, fetchPostsByUser } from "@/lib/data";
import { PostInfo } from "@/lib/definitions";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/ui/header";
import { Skeleton } from "@/components/ui/skeleton";
import NewPost from "@/components/ui/posts/newpost";

export default function Posts() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const [posts, setPosts] = useState<PostInfo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = userId
        ? await fetchPostsByUser({ userId })
        : await fetchPosts();
      setPosts(data);

      setLoading(false);
    }
    load();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        <Skeleton className="h-[125px] w-full md:w-2/3 rounded-lg" />
        <Skeleton className="h-[125px] w-full md:w-2/3 rounded-lg" />
        <Skeleton className="h-[125px] w-full md:w-2/3 rounded-lg" />
        <Skeleton className="h-[125px] w-full md:w-2/3 rounded-lg" />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="flex flex-col p-4">
        <h1 className="text-xl semibold text-center">
          Publicaciones ({posts.length})
        </h1>
        <NewPost />
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
