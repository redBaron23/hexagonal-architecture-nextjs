import { WithoutPrismaSpecificFields } from "@/lib/utils/type-utils";
import { TodoList as PrismaTodoList } from "@prisma/client";

export type TodoList = WithoutPrismaSpecificFields<PrismaTodoList>;
