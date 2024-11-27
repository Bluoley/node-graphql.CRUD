import { Module } from '@nestjs/common';
import { databaseProviders } from './connection.provider';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
