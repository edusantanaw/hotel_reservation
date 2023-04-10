import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationDto } from './dto/Reservation';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  public async reservation(@Body() data: ReservationDto) {
    try {
      const reserve = await this.reservationService.reserver(data);
      return reserve;
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
