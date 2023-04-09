import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/config/prisma';
import { HelperModule } from 'src/helpers/herlpers.module';

@Module({
  imports: [HelperModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, HelperModule],
})
export class AuthModule {}
