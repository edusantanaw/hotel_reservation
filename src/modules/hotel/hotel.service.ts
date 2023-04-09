import { Injectable } from '@nestjs/common';
import { HotelDto } from './dto/hotel.dto';
import { Hotel } from './entities/hotel';
import { PrismaService } from 'src/config/prisma';

@Injectable()
export class HotelService {
  constructor(private readonly prismaService: PrismaService) {}

  public async register(data: HotelDto) {
    const hotel = new Hotel(data);
    const createdHotel = await this.prismaService.hotel.create({
      data: hotel.getHotel(),
    });
    return createdHotel;
  }
}
