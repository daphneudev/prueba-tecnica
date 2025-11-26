"use client";
import { PostInfo } from "@/lib/definitions";
import { Card, CardDescription, CardHeader, CardTitle } from "../card";
import { Button } from "../button";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { getCookie } from "@/app/helpers/cookies";

export default function Post({ post }: { post: PostInfo }) {
  const role = getCookie("role");
  const admin = role === "admin";

  return (
    <Card className="w-full md:w-2/3">
      {admin && (
        <Button
          size="sm"
          className="bg-gray-400 ml-auto mr-4 "
          onClick={() => console.log("Editar post")}
        >
          <Pencil />
        </Button>
      )}
      <Link href={`/posts/${post.id}`}>
        <CardHeader>
          <CardTitle> {post.title} </CardTitle>

          <CardDescription>{post.body}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
}
