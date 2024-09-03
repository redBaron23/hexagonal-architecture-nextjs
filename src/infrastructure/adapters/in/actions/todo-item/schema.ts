import { TodoPriority } from "@/domain/value-objects/todo-priority";
import { z } from "zod";

export const createTodoItemSchema = z.object({
  content: z.string().min(1),
  priority: z.nativeEnum(TodoPriority),
});
