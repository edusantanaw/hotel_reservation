import { randomUUID } from 'crypto';

type data = {
  id?: string;
  hotelId: string;
  number: number;
};

export class Room {
  private id: string;
  private hotelId: string;
  private number: number;

  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.hotelId = data.hotelId;
    this.number = data.number;
  }

  public getRoom() {
    return {
      id: this.id,
      hotelId: this.hotelId,
      number: this.number,
    };
  }
}
