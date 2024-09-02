import { User } from "../../../domain/entities/user";
import { CreateUserUseCase } from "../../ports/in/user-use-cases";
import { UserRepository } from "../../ports/out/user-repository";

export class CreateUser implements CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    return await this.userRepository.create({ name, email });
  }
}
