import { User } from "../../../domain/entities/user";

export interface CreateUserUseCase {
  execute(name: string, email: string): Promise<User>;
}

export interface UpdateUserUseCase {
  execute(id: string, name: string, email: string): Promise<User>;
}

export interface DeleteUserUseCase {
  execute(id: string): Promise<void>;
}
