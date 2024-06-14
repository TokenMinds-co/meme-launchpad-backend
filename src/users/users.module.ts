import { Global, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtService } from '@nestjs/jwt';

@Global()
@Module({
  providers: [UsersService, JwtService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
