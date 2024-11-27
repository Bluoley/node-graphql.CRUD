import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResolver } from './users.resolver';
import { UsersProviders } from './users.provider';

@Module({
  providers: [UsersService, UserResolver, ...UsersProviders],
})
export class UsersModule {}
