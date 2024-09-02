import { WithoutPrismaSpecificFields } from "@/lib/utils/type-utils";
import { TodoItem as PrismaTodoItem } from "@prisma/client";

export type TodoItem = WithoutPrismaSpecificFields<PrismaTodoItem>;
