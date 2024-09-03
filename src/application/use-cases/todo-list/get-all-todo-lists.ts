import { GetAllTodoListsUseCase } from "@/application/ports/in/todo-list-use-cases";
import { TodoListRepository } from "@/application/ports/out/todo-list-repository";
import { TodoList } from "@/domain/entities/todo-list";

export class GetAllTodoLists implements GetAllTodoListsUseCase {
  constructor(private todoListRepository: TodoListRepository) {}

  async execute(): Promise<TodoList[]> {
    return await this.todoListRepository.getAll();
  }
}
