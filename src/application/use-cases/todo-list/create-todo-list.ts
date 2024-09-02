import { ImageStoragePort } from "@/application/ports/out/image-storage-port";
import { TodoList } from "../../../domain/entities/todo-list";
import { CreateTodoListUseCase } from "../../ports/in/todo-list-use-cases";
import { TodoListRepository } from "../../ports/out/todo-list-repository";

export class CreateTodoList implements CreateTodoListUseCase {
  // ver inversion de dependencias / desacoplando / single responsability / ayuda a testear ?
  constructor(
    private todoListRepository: TodoListRepository,
    private imageStoragePort: ImageStoragePort
  ) {}

  async execute(
    title: string,
    userId: string,
    image?: File | Blob
  ): Promise<TodoList> {
    let imageUrl = null;

    if (image) {
      const path = `todo-lists/${userId}/${Date.now()}`;
      imageUrl = await this.imageStoragePort.uploadImage(image, path);
    }

    return await this.todoListRepository.create({
      title,
      userId,
      imageUrl,
    });
  }
}

/**
  * lo que yo haria
  const createTodoList = async ({title, userId, image}) => {
    let imageUrl = null;

    if (image) {
      const path = `todo-lists/${userId}/${Date.now()}`;
      imageUrl = await this.imageStoragePort.uploadImage(image, path);
    }

    return await this.todoListRepository.create({
      title,
      userId,
      imageUrl,
      });
    }
  }
 */
