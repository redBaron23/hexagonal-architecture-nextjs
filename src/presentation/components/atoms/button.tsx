"use client";

import { createTodoItemAction } from "@/infrastructure/adapters/in/actions/todo-item-actions";
import { TodoPriority } from "@prisma/client";
import { useAction } from "next-safe-action/hooks";

const Button = () => {
  const { execute } = useAction(createTodoItemAction);

  const handleCreateTodoItem = () => {
    execute({
      content: "titi se la come",
      priority: TodoPriority.HIGH,
      todoListId: "cm0kn5ivb0001dujuq7phbpgl",
    });
  };

  return <button onClick={handleCreateTodoItem}>Click me</button>;
};

export default Button;
