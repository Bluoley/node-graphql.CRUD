import { User } from 'database/models/user';

export const UsersProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
