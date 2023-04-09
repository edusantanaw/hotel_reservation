import { Injectable } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  public async auth(data: SigninDto) {
    return;
  }
}
