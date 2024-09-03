import { WithoutPrismaSpecificFields } from "@/lib/utils/type-utils";
import { TodoList as PrismaTodoList } from "@prisma/client";
import { TodoItem } from "./todo-item";

export type TodoList = WithoutPrismaSpecificFields<PrismaTodoList>;
export type TodoListWithItems = TodoList & {
  items?: TodoItem[];
};
