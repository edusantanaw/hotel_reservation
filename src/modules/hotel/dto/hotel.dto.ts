import { IsNotEmpty } from 'class-validator';

export class HotelDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  state: string;
}
