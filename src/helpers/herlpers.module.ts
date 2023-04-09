import { Module } from '@nestjs/common';
import { Encrypter } from './encrypter';
import { JwtService } from './jwt.service';

@Module({
  providers: [Encrypter, JwtService],
  exports: [Encrypter, JwtService],
})
export class HelperModule {}
