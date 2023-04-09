import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Encrypter {
  public async genHash(pass: string) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(pass, salt);
    return hashedPassword;
  }

  public async compare(pass: string, hashedPass: string) {
    const isEqual = await bcrypt.compare(pass, hashedPass);
    return isEqual;
  }
}
