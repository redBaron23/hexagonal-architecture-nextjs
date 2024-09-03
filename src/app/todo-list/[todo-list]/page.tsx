import { TodoListRepository } from "@/application/ports/out/todo-list-repository";
import { GetTodoListById } from "@/application/use-cases/todo-list/get-todo-list-by-id";
import { prismaToDoListRepository } from "@/infrastructure/adapters/out/repositories/prisma-todo-list-repository";
import CreateTodoItemForm from "@/presentation/components/organisms/CreateTodoItemForm";
import { TodoItemList } from "@/presentation/components/organisms/TodoItemList";

interface Props {
  params: { todoListId: string };
}
const todoListRepository: TodoListRepository = prismaToDoListRepository;

export default async function Page({ params: { todoListId } }: Props) {
  const useCase = new GetTodoListById(todoListRepository);
  const todoList = await useCase.execute(todoListId);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Todo List
        </h1>
        <div className="flex justify-between w-full  flex-col gap-5">
          <TodoItemList items={todoList.items} />
          <CreateTodoItemForm todoListId={todoList.id} />
        </div>
      </div>
    </main>
  );
}
