import { TodoItemRepository } from "@/application/ports/out/todo-item-repository";
import { TodoItem } from "@/domain/entities/todo-item";
import { prisma } from "@/infrastructure/db/prisma";

export const prismaToDoItemRepository: TodoItemRepository = {
  create: async (todoItem: Omit<TodoItem, "id">): Promise<TodoItem> => {
    return prisma.todoItem.create({ data: todoItem });
  },
  update: async (
    id: string,
    todoItem: Partial<Omit<TodoItem, "id">>
  ): Promise<TodoItem> => {
    return prisma.todoItem.update({
      where: { id },
      data: todoItem,
    });
  },
  delete: async (id: string): Promise<void> => {
    await prisma.todoItem.delete({ where: { id } });
  },
};
