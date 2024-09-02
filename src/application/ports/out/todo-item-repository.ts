import { TodoItem } from "@/domain/entities/todo-item";

export interface TodoItemRepository {
  create(
    todo: Omit<TodoItem, "id" | "createdAt" | "updatedAt">
  ): Promise<TodoItem>;
  update(id: string, todo: Partial<Omit<TodoItem, "id">>): Promise<TodoItem>;
  delete(id: string): Promise<void>;
}
