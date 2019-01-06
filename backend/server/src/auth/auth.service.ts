import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { Users } from 'src/user/user.entity';


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email:string,passwd:string): Promise<string> {
    const user: Users=await this.usersService.authenticate(email,passwd);
    if(!user)
    {
        throw new UnauthorizedException();
    }
    const {password,...rest}=user;
    return this.jwtService.sign(rest);
  }

  async validateUser(payload: any): Promise<Users> {
    return this.usersService.findByEmail(payload.email);
  }
}