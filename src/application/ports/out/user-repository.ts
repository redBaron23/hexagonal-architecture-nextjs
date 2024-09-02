import { User } from "../../../domain/entities/user";

export interface UserRepository {
  create(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User>;
  update(id: string, user: Partial<Omit<User, "id">>): Promise<User>;
  delete(id: string): Promise<void>;
}
