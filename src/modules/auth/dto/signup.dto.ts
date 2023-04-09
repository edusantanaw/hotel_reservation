import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SigupDto {
  @IsNotEmpty()
  @IsString()
  @Length(4, 30)
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
