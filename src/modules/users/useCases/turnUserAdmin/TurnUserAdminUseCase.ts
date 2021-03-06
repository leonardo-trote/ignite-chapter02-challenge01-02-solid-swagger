import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new Error("User does not exists!");
    }

    const updatedUser = this.usersRepository.turnAdmin(userAlreadyExists);
    return updatedUser;
  }
}

export { TurnUserAdminUseCase };
