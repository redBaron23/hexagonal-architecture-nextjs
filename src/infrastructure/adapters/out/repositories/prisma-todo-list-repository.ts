import { TodoListRepository } from "@/application/ports/out/todo-list-repository";
import { TodoList, TodoListWithItems } from "@/domain/entities/todo-list";
import { prisma } from "@/infrastructure/db/prisma";

export const prismaToDoListRepository: TodoListRepository = {
  create: async (todoList: Omit<TodoList, "id">): Promise<TodoList> => {
    return prisma.todoList.create({ data: todoList });
  },
  update: async (
    id: string,
    todoList: Partial<Omit<TodoList, "id">>
  ): Promise<TodoList> => {
    return prisma.todoList.update({
      where: { id },
      data: todoList,
    });
  },
  delete: async (id: string): Promise<void> => {
    await prisma.todoList.delete({ where: { id } });
  },
  getById: async (id: string): Promise<TodoListWithItems | null> => {
    return await prisma.todoList.findFirst({
      where: { id },
      include: {
        items: true,
      },
    });
  },
  getAll: async (): Promise<TodoListWithItems[]> => {
    return await prisma.todoList.findMany({
      include: {
        items: true,
      },
    });
  },
};
