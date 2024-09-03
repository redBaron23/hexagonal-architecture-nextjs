import { pages } from "@/lib/utils/pages";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface TodoListCardProps {
  id: string;
  title: string;
  imageUrl?: string | null;
  itemCount?: number;
}

export function TodoListCard({
  id,
  title,
  imageUrl,
  itemCount = 0,
}: TodoListCardProps) {
  return (
    <Link href={`${pages.todoList}/${id}`}>
      <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="relative h-48">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              width={40}
              height={40}
              className="rounded-t-lg"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-t-lg" />
          )}
          <CardTitle className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <Badge variant="secondary" className="text-sm">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
}
