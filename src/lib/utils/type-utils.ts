export type WithoutPrismaSpecificFields<T> = Omit<T, "createdAt" | "updatedAt">;
