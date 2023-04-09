import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 30)
  name: string;
  @IsNotEmpty()
  cpf: string;
  @IsNotEmpty()
  password: string;
}
