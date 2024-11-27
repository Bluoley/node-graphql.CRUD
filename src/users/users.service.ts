import { Inject, Injectable } from '@nestjs/common';
import { CreateOrUpdateUserInputDTO, UserDTO } from './dto/user.dto';
import { User as UserModel } from '../../database/models/user';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof UserModel,
  ) {}
  async getAllUsers(): Promise<UserDTO[]> {
    return await this.userRepository.findAll({
      order: [['idUser', 'ASC']],
    });
  }

  async createUser(input: CreateOrUpdateUserInputDTO): Promise<UserDTO> {
    const createUser = await this.userRepository.create(input);
    return createUser;
  }

  async updateUser(input: CreateOrUpdateUserInputDTO) {
    return await this.userRepository.update(input, {
      where: { idUser: input?.idUser },
    });
  }

  async deleteUser(id: number) {
    return await this.userRepository.destroy({
      where: {
        idUser: id,
      },
    });
  }
}
