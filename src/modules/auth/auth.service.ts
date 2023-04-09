import { Injectable } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';
import { PrismaService } from 'src/config/prisma';
import { Encrypter } from 'src/helpers/encrypter';
import { JwtService } from 'src/helpers/jwt.service';
import { SignupDto } from './dto/signup.dto';
import { Costumer } from './entities/costumer.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly encrypter: Encrypter,
    private readonly jwtService: JwtService,
  ) {}
  public async auth(data: SigninDto) {
    const userExists = await this.prismaService.costumer.findFirst({
      where: { cpf: data.cpf },
    });
    if (!userExists) throw new Error('Usuario não existe!');
    const isPasswordValid = await this.encrypter.compare(
      data.password,
      userExists.password,
    );
    if (!isPasswordValid) throw new Error('Senha invalida!');
    const accessToken = await this.jwtService.genToken(userExists);
    return accessToken;
  }

  public async create(data: SignupDto) {
    const cpfAlreadyUsed = await this.prismaService.costumer.findFirst({
      where: { cpf: data.cpf },
    });
    if (cpfAlreadyUsed) throw new Error('Cpf já está sendo usado!');
    const costumer = new Costumer(data);
    const hashedPass = await this.encrypter.genHash(data.password);
    costumer.setPassword(hashedPass);
    const newCostumer = await this.prismaService.costumer.create({
      data: costumer.getConsumer(),
    });
    const accessToken = await this.jwtService.genToken(newCostumer);
    return accessToken;
  }
}
