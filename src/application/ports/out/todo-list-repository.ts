import { TodoList } from "@/domain/entities/todo-list";

export interface TodoListRepository {
  create(
    todo: Omit<TodoList, "id" | "createdAt" | "updatedAt">
  ): Promise<TodoList>;
  update(id: string, todo: Partial<Omit<TodoList, "id">>): Promise<TodoList>;
  delete(id: string): Promise<void>;
}
