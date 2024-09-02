"use server";

import { TodoItemRepository } from "@/application/ports/out/todo-item-repository";
import { CreateTodoItem } from "@/application/use-cases/todo-item/create-todo-item";
import { TodoPriority } from "@/domain/value-objects/todo-priority";
import { prismaToDoItemRepository } from "@/infrastructure/adapters/out/repositories/prisma-todo-item-repository";
import { z } from "zod";
import { baseActionClient } from "../clients/base-action-client";

const todoItemRepository: TodoItemRepository = prismaToDoItemRepository;

const createTodoSchema = z.object({
  content: z.string().min(1),
  priority: z.nativeEnum(TodoPriority),
  todoListId: z.string().min(1),
});

export const createTodoItemAction = baseActionClient
  .metadata({ actionName: "createTodo" })
  .schema(createTodoSchema)
  .action(
    async ({ parsedInput: { content, priority, todoListId }, ctx: {} }) => {
      const useCase = new CreateTodoItem(todoItemRepository);
      const todoItem = await useCase.execute(content, priority, todoListId);

      return { todoItem };
    }
  );
