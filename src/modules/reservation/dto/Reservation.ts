import { IsNotEmpty } from 'class-validator';

export class ReservationDto {
  @IsNotEmpty()
  roomId: string;
  @IsNotEmpty()
  guesId: string;
  @IsNotEmpty()
  totalCost: number;
  @IsNotEmpty()
  status: string;
  @IsNotEmpty()
  arrivalDate: string;
  @IsNotEmpty()
  departureDAte: string;
}
