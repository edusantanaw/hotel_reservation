import { Injectable } from '@nestjs/common';
import { ReservationDto } from './dto/Reservation';
import { PrismaService } from 'src/config/prisma';

@Injectable()
export class ReservationService {
  constructor(private readonly prismaService: PrismaService) {}

  public async reserver(data: ReservationDto) {
    const verifyRoomAlreadyReserver =
      await this.prismaService.reservation.findFirst({
        where: { roomId: data.roomId },
      });
    if (verifyRoomAlreadyReserver) throw new Error('Quarto já esta reservado!');
    const reserve = await this.prismaService.reservation.create({
      data: {
        id: '222323',
        ...data,
      },
    });
    return reserve;
  }
}
