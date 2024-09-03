import { GetTodoListByIdUseCase } from "@/application/ports/in/todo-list-use-cases";
import { TodoListRepository } from "@/application/ports/out/todo-list-repository";
import { TodoListWithItems } from "@/domain/entities/todo-list";

export class GetTodoListById implements GetTodoListByIdUseCase {
  constructor(private todoListRepository: TodoListRepository) {}

  async execute(id: string): Promise<TodoListWithItems> {
    return await this.todoListRepository.getById(id);
  }
}
