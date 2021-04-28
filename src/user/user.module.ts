import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';
import { Connection } from 'typeorm';
import { User } from './user.entity';

@Module({
  imports: [DatabaseModule],
  providers: [
    UserService,
    {
      provide: 'USER_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(User),
      inject: ['DATABASE_CONNECTION'],
    },
  ],
})
export class UserModule {}
