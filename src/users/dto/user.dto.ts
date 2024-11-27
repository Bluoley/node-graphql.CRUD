import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';

@ObjectType('Users')
export class UserDTO {
  @Field(() => Int)
  idUser: number;
  @Field()
  nameUser: string;
  @Field()
  firstLastNameUser: string;
  @Field()
  secondLastNameUser: string;
  @Field()
  addressUser: string;
  @Field()
  phoneUser: string;
}

@InputType('CreateOrUdpateUser')
export class CreateOrUpdateUserInputDTO {
  @Field(() => Int, { nullable: true })
  idUser: number;
  @Field()
  nameUser: string;
  @Field()
  firstLastNameUser: string;
  @Field()
  secondLastNameUser: string;
  @Field()
  addressUser: string;
  @Field()
  phoneUser: string;
}
