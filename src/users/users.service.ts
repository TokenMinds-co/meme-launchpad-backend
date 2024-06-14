import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

// import * as bcrypt from 'bcrypt';
// const SALT_ROUNDS = 10;

interface ValidateUserResponse {
  name: string;
  email: string;
  // role: $Enums.Role;
  role: 'ADMIN' | 'USER';
  password: string;
}

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<ValidateUserResponse> {
    try {
      // const user = await this.prisma.user.findFirst({
      //   where: { email },
      // });
      // if (!user) {
      //   throw new BadRequestException('User not found');   ==> RE-ENABLE AND ADJUST THIS LATER
      // }
      // const result = {
      //   id: user.id,
      //   name: user.name,
      //   email: user.email
      //   role: user.role,
      //   password: user.password,
      // };
      // return result;

      const result = {
        id: 'test',
        name: 'test',
        email,
        role: 'ADMIN' as any,
        password: 'test',
      };
      return result;
    } catch (e) {
      this.logger.error(e);
      return undefined;
    }
  }
}
