import { IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';

export class SigninDto {
  @IsNotEmpty()
  cpf: string;
  @IsNotEmpty()
  password: string;
}
