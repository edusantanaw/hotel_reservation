import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { PrismaService } from 'src/config/prisma';

@Module({
  controllers: [HotelController],
  providers: [HotelService, PrismaService],
})
export class HotelModule {}
