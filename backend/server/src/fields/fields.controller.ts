import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { FieldsService } from './fields.service';
import { CreateFieldsDto } from './fields.Dto';


@Controller("fields")
export class FieldsController {
    public constructor( private readonly fieldsService:FieldsService){}
    @Get("All")
    async findAll(){
        return await this.fieldsService.findAll();
    }
    @Post()
    async save(@Body()data:CreateFieldsDto){
        return await this.fieldsService.save(data);
    }
}
  

