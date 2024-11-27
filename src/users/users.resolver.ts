import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql';
import { CreateOrUpdateUserInputDTO, UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';

@Resolver(() => UserDTO)
export class UserResolver {
  constructor(private userService: UsersService) {}
  @Query(() => [UserDTO])
  getUsers(): Promise<UserDTO[]> {
    return this.userService.getAllUsers();
  }

  @Mutation(() => UserDTO)
  createUser(
    @Args('input', { type: () => CreateOrUpdateUserInputDTO })
    input: CreateOrUpdateUserInputDTO,
  ): Promise<UserDTO> {
    return this.userService.createUser(input);
  }

  @Mutation(() => Int)
  deleteUser(
    @Args('idUser', { type: () => Int })
    idUser: number,
  ): Promise<number> {
    return this.userService.deleteUser(idUser);
  }

  @Mutation(() => UserDTO)
  updateUser(
    @Args('input', { type: () => CreateOrUpdateUserInputDTO })
    input: CreateOrUpdateUserInputDTO,
  ): Promise<number[]> {
    return this.userService.updateUser(input);
  }
}
