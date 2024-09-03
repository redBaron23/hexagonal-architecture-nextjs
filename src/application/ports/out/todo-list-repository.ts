import { TodoList, TodoListWithItems } from "@/domain/entities/todo-list";

export interface TodoListRepository {
  create(
    todo: Omit<TodoList, "id" | "createdAt" | "updatedAt">
  ): Promise<TodoList>;
  update(id: string, todo: Partial<Omit<TodoList, "id">>): Promise<TodoList>;
  delete(id: string): Promise<void>;
  getAll(): Promise<TodoList[]>;
  getById(id: string): Promise<TodoListWithItems | null>;
}
