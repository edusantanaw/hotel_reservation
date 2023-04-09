import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ReservationModule } from './modules/reservation/reservation.module';

@Module({
  imports: [AuthModule, ReservationModule],
})
export class AppModule {}
