import { Injectable } from '@nestjs/common';
import { RoomDto } from './dto/room.entity';
import { PrismaService } from 'src/config/prisma';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {
  constructor(private readonly prismaService: PrismaService) {}

  public async add(data: RoomDto) {
    const verifyAlreadExists = await this.prismaService.room.findFirst({
      where: { number: data.number },
    });
    if (verifyAlreadExists)
      throw new Error('Numero do quarto já está cadastrado!');
    const room = new Room(data);
    const createRoom = await this.prismaService.room.create({
      data: room.getRoom(),
    });
    return createRoom;
  }
}
