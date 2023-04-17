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
  public async loadById(id: string) {
    const hotel = this.prismaService.hotel.findFirst({ where: { id } });
    return hotel;
  }

  public async loadAll() {
    const hotels = await this.prismaService.hotel.findMany();
    return hotels;
  }
}
