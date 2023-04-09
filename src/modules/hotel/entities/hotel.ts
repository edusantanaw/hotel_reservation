import { randomUUID } from 'crypto';

type data = {
  id?: string;
  name: string;
  state: string;
  city: string;
};

export class Hotel {
  private id: string;
  private name: string;
  private city: string;
  private state: string;

  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.name = data.name;
    this.city = data.city;
    this.state = data.state;
  }

  public getId() {
    return this.id;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getCity() {
    return this.city;
  }

  public setCity(city: string) {
    this.city = city;
  }

  public getState() {
    return this.state;
  }

  public setState(state: string) {
    this.state = state;
  }

  public getHotel() {
    return {
      id: this.id,
      name: this.name,
      city: this.city,
      state: this.state,
    };
  }
}
