import { TodoListRepository } from "@/application/ports/out/todo-list-repository";
import { CreateTodoList } from "@/application/use-cases/todo-list/create-todo-list";
import { prismaToDoListRepository } from "@/infrastructure/adapters/out/repositories/prisma-todo-list-repository";
import { z } from "zod";
import { SupabaseImageStorageAdapter } from "../../out/external-services/supabase-image-storage-adapter";
import { authActionClient } from "../clients/auth-action-client";

const todoListRepository: TodoListRepository = prismaToDoListRepository;
const imageStorageAdapter = new SupabaseImageStorageAdapter();

const createTodoSchema = z.object({
  title: z.string().min(1),
});

export const createTodoAction = authActionClient
  .metadata({ actionName: "createTodo" })
  .schema(createTodoSchema)
  .action(async ({ parsedInput: { title }, ctx: { userId } }) => {
    const useCase = new CreateTodoList(todoListRepository, imageStorageAdapter);
    const todoList = await useCase.execute(title, userId);
    // yo lo volaria a la verga y haria
    // const todoList = await createTodoList(title, userId)

    return { todoList };
  });
