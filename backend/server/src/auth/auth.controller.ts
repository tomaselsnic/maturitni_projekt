import { Controller, Get, Body, Post } from "@nestjs/common";
import { UsersService } from "src/user/user.service";
import { CreateUserDto } from "src/user/users.Dto";
import { AuthService } from "./auth.service";


@Controller()
export class AuthController {
    public constructor( private readonly usersService:UsersService,private readonly authService:AuthService){}
    @Post("register")
    async register(@Body()data:CreateUserDto){
        console.log(data);
        return await this.usersService.register(data);
    }
    @Post("login")
    async login(@Body()data:{email:string,password:string}){
        return await this.authService.signIn(data.email,data.password);
    }
}