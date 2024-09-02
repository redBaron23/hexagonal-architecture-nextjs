import { WithoutPrismaSpecificFields } from "@/lib/utils/type-utils";
import { User as PrismaUser } from "@prisma/client";

export type User = WithoutPrismaSpecificFields<PrismaUser>;
