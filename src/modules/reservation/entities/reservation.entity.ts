import { randomUUID } from 'node:crypto';

type data = {
  id?: string;
  guestId: string;
  roomId: string;
  arrivalDate: string;
  departureDate: string;
  totalCost: number;
  status: string;
};

export class Reservation {
  private id: string;
  private guestId: string;
  private arrivalDate: string;
  private departureDate: string;
  private roomId: string;
  private totalCost: number;
  private status: string;

  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.guestId = data.guestId;
    this.arrivalDate = data.arrivalDate;
    this.departureDate = data.departureDate;
    this.roomId = data.roomId;
    this.totalCost = data.totalCost;
    this.status = data.status;
  }

  public getReservation() {
    return {
      id: this.id,
      guestId: this.guestId,
      roomId: this.roomId,
      arrivalDate: this.arrivalDate,
      departureDate: this.departureDate,
      totalCost: this.totalCost,
      status: this.status,
    };
  }
}
