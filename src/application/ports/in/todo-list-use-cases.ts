import { TodoList, TodoListWithItems } from "@/domain/entities/todo-list";

export interface CreateTodoListUseCase {
  execute(
    title: string,
    userId: string,
    image?: Buffer | Blob
  ): Promise<TodoList>;
}

export interface UpdateTodoListUseCase {
  execute(id: string, title: string, completed: boolean): Promise<TodoList>;
}

export interface DeleteTodoListUseCase {
  execute(id: string): Promise<void>;
}

export interface GetAllTodoListsUseCase {
  execute(): Promise<TodoList[]>;
}

export interface GetTodoListByIdUseCase {
  execute(id: string): Promise<TodoListWithItems>;
}
