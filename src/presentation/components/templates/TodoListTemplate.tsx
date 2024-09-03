"use client";

import { TodoListWithItems } from "@/domain/entities/todo-list";
import { PlusCircle } from "lucide-react";
import { TodoListGrid } from "../organisms/TodoListGrid";
import { Button } from "../ui/button";

interface TodoListTemplateProps {
  todoLists: TodoListWithItems[];
  onCreateNewList?: () => void;
}

export function TodoListTemplate({
  todoLists,
  onCreateNewList,
}: TodoListTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Todo Lists</h1>
        <Button
          onClick={onCreateNewList}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
        >
          <PlusCircle className="mr-2 h-4 w-4" /> New List
        </Button>
      </div>
      <TodoListGrid todoLists={todoLists} />
    </div>
  );
}
