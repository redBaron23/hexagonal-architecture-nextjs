import { TodoPriority } from "@/domain/value-objects/todo-priority";
import { TodoItem } from "../../../domain/entities/todo-item";
import { CreateTodoItemUseCase } from "../../ports/in/todo-item-use-cases";
import { TodoItemRepository } from "../../ports/out/todo-item-repository";

export class CreateTodoItem implements CreateTodoItemUseCase {
  constructor(private todoItemRepository: TodoItemRepository) {}

  async execute(
    content: string,
    priority: TodoPriority,
    todoListId: string,
    dueDate: Date | null = null
  ): Promise<TodoItem> {
    if (priority === TodoPriority.HIGH) {
      // await sendNotification(userId, "New high priority todo item")
    }

    return await this.todoItemRepository.create({
      content,
      priority,
      completed: false,
      todoListId,
      dueDate,
    });
  }
}
