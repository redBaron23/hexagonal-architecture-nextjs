import { TodoListRepository } from "@/application/ports/out/todo-list-repository";
import { TodoList } from "@/domain/entities/todo-list";
import { prisma } from "@/infrastructure/db/prisma";

export const prismaToDoListRepository: TodoListRepository = {
  create: async (todoItem: Omit<TodoList, "id">): Promise<TodoList> => {
    return prisma.todoList.create({ data: todoItem });
  },
  update: async (
    id: string,
    todoItem: Partial<Omit<TodoList, "id">>
  ): Promise<TodoList> => {
    return prisma.todoList.update({
      where: { id },
      data: todoItem,
    });
  },
  delete: async (id: string): Promise<void> => {
    await prisma.todoList.delete({ where: { id } });
  },
};
