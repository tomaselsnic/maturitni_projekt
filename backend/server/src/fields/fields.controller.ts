import { Controller, Get, Post, HttpCode, Body, UseGuards } from '@nestjs/common';
import { FieldsService } from './fields.service';
import { CreateFieldsDto } from './fields.Dto';
import { AuthGuard } from '@nestjs/passport';


@Controller("fields")
export class FieldsController {
    public constructor( private readonly fieldsService:FieldsService){}
    @Get("All")
    @UseGuards(AuthGuard("jwt"))
    async findAll(){
        return await this.fieldsService.findAll();
    }
    @Post()
    async save(@Body()data:CreateFieldsDto){
        return await this.fieldsService.save(data);
    }
}
  

