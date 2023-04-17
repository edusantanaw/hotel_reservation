import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelDto } from './dto/hotel.dto';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  public async register(@Body() data: HotelDto) {
    try {
      const hotel = await this.hotelService.register(data);
      return hotel;
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  public async loadAll() {
    const hotels = await this.hotelService.loadAll();
    if (hotels.length === 0)
      throw new HttpException(null, HttpStatus.NO_CONTENT);
    return hotels;
  }

  @Get('/:id')
  public async loadById(@Param() id: string) {
    const hotel = await this.hotelService.loadById(id);
    if (!hotel) throw new HttpException(null, HttpStatus.NO_CONTENT);
    return hotel;
  }
}
