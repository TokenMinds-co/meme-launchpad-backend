import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

// import * as bcrypt from 'bcrypt';
// const SALT_ROUNDS = 10;

interface ValidateUserResponse {
  name: string;
  email: string;
  password: string;
  // role: $Enums.Role;
}

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  private readonly logger = new Logger(AuthService.name);

  async validateUser(
    email: string,
    password: string,
  ): Promise<ValidateUserResponse> {
    // const user = await this.usersService.findByEmail(email);
    // if (user) {
    //   const isValidPassword = await bcrypt.compare(password, user.password);
    //   if (!isValidPassword) {
    //     throw new UnauthorizedException('Invalid credentials');
    //   }
    //   delete user.password;
    //   return user;
    // }                                                             ==> RE-ENABLE AND ADJUST THIS LATER
    // throw new UnauthorizedException('Invalid credentials');

    return {
      name: 'test',
      email,
      password,
    };
  }
}
