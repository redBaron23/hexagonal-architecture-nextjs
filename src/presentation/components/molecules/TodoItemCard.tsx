"use client";

import { TodoPriority } from "@/domain/value-objects/todo-priority";
import { cn } from "@/lib/utils";
import { AlertCircle, CalendarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

interface TodoItemCardProps {
  content: string;
  priority: TodoPriority;
  completed: boolean;
  dueDate?: Date | null;
  onToggleComplete: () => void;
}

export function TodoItemCard({
  content,
  priority,
  completed,
  dueDate,
  onToggleComplete,
}: TodoItemCardProps) {
  const priorityColors = {
    LOW: "bg-blue-100 text-blue-800",
    MEDIUM: "bg-yellow-100 text-yellow-800",
    HIGH: "bg-red-100 text-red-800",
  };

  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:shadow-lg",
        completed ? "opacity-50" : ""
      )}
    >
      <CardContent className="p-4 flex items-start space-x-4">
        <Checkbox
          checked={completed}
          onCheckedChange={onToggleComplete}
          className="mt-1"
        />
        <div className="flex-1 space-y-2">
          <p
            className={cn(
              "text-lg font-medium",
              completed ? "line-through text-gray-500" : ""
            )}
          >
            {content}
          </p>
          <div className="flex items-center space-x-2">
            <Badge className={priorityColors[priority]}>{priority}</Badge>
            {dueDate && (
              <div className="flex items-center text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4 mr-1" />
                {dueDate.toLocaleDateString()}
              </div>
            )}
          </div>
        </div>
        {priority === "HIGH" && !completed && (
          <AlertCircle className="w-5 h-5 text-red-500 animate-pulse" />
        )}
      </CardContent>
    </Card>
  );
}
