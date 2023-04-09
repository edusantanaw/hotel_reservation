import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post()
  public async signin(@Body() signinDto: SigninDto) {
    try {
      const response = await this.authService.auth(signinDto);
      return response;
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
