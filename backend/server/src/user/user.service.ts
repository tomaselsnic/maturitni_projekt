import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { CreateUserDto } from './users.Dto';
import {hash,compare} from "bcrypt";


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ){}
  async findByEmail(email:string):Promise<Users>{
    return this.usersRepository.findOne({email});
  }
  async authenticate(email:string,password:string):Promise<Users|null>{
    const user= await this.usersRepository.findOne({email})
   const result= await compare(password,user.password)
   if(result)
   {
       return user;
   }
   
  }
  async register(data:CreateUserDto):Promise<Users>
  {
       const user=new Users();
        user.email=data.email;
        user.name=data.name;
        user.password=await hash(data.password,10);
        return this.usersRepository.save(user);
    }
}
      
  