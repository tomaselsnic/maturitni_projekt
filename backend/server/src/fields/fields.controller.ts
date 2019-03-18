import { Controller, Get, Post, HttpCode, Body, UseGuards, Delete,Param,Put } from '@nestjs/common';
import { FieldsService } from './fields.service';
import { CreateFieldsDto } from './fields.Dto';
import { AuthGuard } from '@nestjs/passport';
import bodyParser = require('body-parser');


@Controller("fields")
export class FieldsController {
    public constructor( private readonly fieldsService:FieldsService){}
    
    @Get("All")
    @UseGuards(AuthGuard("jwt"))
    async findAll(){
        return await this.fieldsService.findAll();
    }

    @Post("save")
    @UseGuards(AuthGuard("jwt"))
    async save(@Body()data:CreateFieldsDto){
        return await this.fieldsService.save(data);
    }

    @Delete("delete/:id")
    @UseGuards(AuthGuard("jwt"))
    async remove(@Param("id")id:string) {
        console.log(id);
        return await this.fieldsService.delete(id);
    }

    @Get("detail/:id")
    @UseGuards(AuthGuard("jwt"))
    async detail(@Param("id")id:string){
        return await this.fieldsService.detail(id);
    }
    
    @Post("edit/:id")
    @UseGuards(AuthGuard("jwt"))
    async edit(@Param("id")id:string,@Body()data:CreateFieldsDto){
        return await this.fieldsService.edit(id,data);
    }
  }

  

