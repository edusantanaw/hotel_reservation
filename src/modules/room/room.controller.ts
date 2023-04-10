import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDto } from './dto/room.entity';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  public async addRoom(@Body() data: RoomDto) {
    try {
      const createdRoom = await this.roomService.add(data);
      return createdRoom;
    } catch (error) {
      return new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
