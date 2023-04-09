import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';

export class SigninDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
