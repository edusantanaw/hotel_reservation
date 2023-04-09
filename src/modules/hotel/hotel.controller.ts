import { Controller, HttpException, HttpStatus } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelDto } from './dto/hotel.dto';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}
  public async register(data: HotelDto) {
    try {
      const hotel = await this.hotelService.register(data);
      return hotel;
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}