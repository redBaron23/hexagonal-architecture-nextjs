import { TodoItem } from "@/domain/entities/todo-item";
import { TodoPriority } from "@/domain/value-objects/todo-priority";

export interface CreateTodoItemUseCase {
  execute(
    content: string,
    priority: TodoPriority,
    userId: string,
    dueDate: Date | null
  ): Promise<TodoItem>;
}

export interface UpdateTodoItemUseCase {
  execute(
    id: string,
    content: string,
    priority: TodoPriority,
    completed: boolean
  ): Promise<TodoItem>;
}

export interface DeleteTodoItemUseCase {
  execute(id: string): Promise<void>;
}
