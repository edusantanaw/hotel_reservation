import { IsNotEmpty } from 'class-validator';

export class RoomDto {
  @IsNotEmpty()
  hotelId: string;
  @IsNotEmpty()
  number: number;
}
