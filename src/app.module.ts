import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { HotelModule } from './modules/hotel/hotel.module';
import { RoomModule } from './modules/room/room.module';

@Module({
  imports: [AuthModule, ReservationModule, HotelModule, RoomModule],
})
export class AppModule {}
