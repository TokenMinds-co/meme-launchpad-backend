import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

// import * as bcrypt from 'bcrypt';
// const SALT_ROUNDS = 10;

// interface ValidateUserResponse {
//   name: string;
//   email: string;
//   // role: $Enums.Role;
//   password: string;
// }

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  private readonly logger = new Logger(AuthService.name);
}
