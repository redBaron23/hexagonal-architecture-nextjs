"use server";

import { TodoItemRepository } from "@/application/ports/out/todo-item-repository";
import { CreateTodoItem } from "@/application/use-cases/todo-item/create-todo-item";
import { prismaToDoItemRepository } from "@/infrastructure/adapters/out/repositories/prisma-todo-item-repository";
import { pages } from "@/lib/utils/pages";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { baseActionClient } from "../clients/base-action-client";
import { createTodoItemSchema } from "./schema";

const todoItemRepository: TodoItemRepository = prismaToDoItemRepository;

export const createTodoItemAction = baseActionClient
  .metadata({ actionName: "createTodo" })
  .schema(createTodoItemSchema)
  .bindArgsSchemas<[todoListId: z.ZodString]>([z.string()])
  .action(
    async ({
      parsedInput: { content, priority },
      bindArgsParsedInputs: [todoListId],

      ctx: {},
    }) => {
      const useCase = new CreateTodoItem(todoItemRepository);
      const todoItem = await useCase.execute(content, priority, todoListId);
      revalidatePath(pages.todoList);

      return { todoItem };
    }
  );
