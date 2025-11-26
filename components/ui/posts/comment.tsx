import { PostComment } from "@/lib/definitions";
import { Card, CardDescription, CardHeader, CardTitle } from "../card";

export default function Comment({ comment }: { comment: PostComment }) {
  return (
    <Card className="w-full md:w-2/3 min-w-2/3">
      <CardHeader>
        <CardTitle>{comment.name}</CardTitle>
        <CardDescription className="text-bold">
          {comment.email} dijo:
        </CardDescription>
        <CardDescription>{comment.body}</CardDescription>
      </CardHeader>
    </Card>
  );
}
