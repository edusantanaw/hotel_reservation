import { Injectable } from '@nestjs/common';
import { Costumer } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import { promisify } from 'node:util';

@Injectable()
export class JwtService {
  private secret = 'secret';
  public async genToken(data: Costumer) {
    const token = await promisify(jwt.sign)(data, this.secret);
    return token;
  }

  public valid(token: string) {
    try {
      const isValid = jwt.verify(token, this.secret);
      return isValid;
    } catch (error) {
      return false;
    }
  }
}
