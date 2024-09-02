import { TodoItemRepository } from "@/application/ports/out/todo-item-repository";
import { CreateTodoItem } from "@/application/use-cases/todo-item/create-todo-item";
import { TodoPriority } from "@/domain/value-objects/todo-priority";
import { prismaToDoItemRepository } from "@/infrastructure/adapters/out/repositories/prisma-todo-item-repository";
import { z } from "zod";
import { authActionClient } from "../clients/auth-action-client";

const todoItemRepository: TodoItemRepository = prismaToDoItemRepository;

const createTodoSchema = z.object({
  content: z.string().min(1),
  priority: z.nativeEnum(TodoPriority),
});

export const createTodoAction = authActionClient
  .metadata({ actionName: "createTodo" })
  .schema(createTodoSchema)
  .action(async ({ parsedInput: { content, priority }, ctx: { userId } }) => {
    const useCase = new CreateTodoItem(todoItemRepository);
    const todoItem = await useCase.execute(content, priority, userId);

    return { todoItem };
  });
