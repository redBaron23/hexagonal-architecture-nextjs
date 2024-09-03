import { TodoListWithItems } from "@/domain/entities/todo-list";
import { TodoListCard } from "../molecules/TodoListCard";

interface TodoListGridProps {
  todoLists: TodoListWithItems[];
}

export function TodoListGrid({ todoLists }: TodoListGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {todoLists.map((list) => (
        <TodoListCard {...list} key={list.id} itemCount={list?.items?.length} />
      ))}
    </div>
  );
}
