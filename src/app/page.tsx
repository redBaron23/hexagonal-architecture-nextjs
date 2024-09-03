import { TodoListRepository } from "@/application/ports/out/todo-list-repository";
import { GetAllTodoLists } from "@/application/use-cases/todo-list/get-all-todo-lists";
import { prismaToDoListRepository } from "@/infrastructure/adapters/out/repositories/prisma-todo-list-repository";
import { TodoListTemplate } from "@/presentation/components/templates/TodoListTemplate";

const todoListRepository: TodoListRepository = prismaToDoListRepository;

export default async function Home() {
  const useCase = new GetAllTodoLists(todoListRepository);
  const todoLists = await useCase.execute();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <TodoListTemplate todoLists={todoLists} />
    </main>
  );
}
