import { randomUUID } from 'crypto';

type data = {
  id?: string;
  cpf: string;
  email?: string;
  name: string;
  password: string;
};

export class Costumer {
  private id: string;
  private name: string;
  private cpf: string;
  private password: string;
  private email: string;

  constructor(data: data) {
    this.id = data.id ?? randomUUID();
    this.name = data.name;
    this.cpf = data.cpf;
    this.password = data.password;
    this.email = data.email;
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

  public getPassword() {
    return this.password;
  }

  public setPassword(pass: string) {
    this.password = pass;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getConsumer() {
    return {
      id: this.id,
      cpf: this.cpf,
      name: this.name,
      password: this.password,
      email: this.email,
    };
  }
}
