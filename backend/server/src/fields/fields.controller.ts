import { Controller, Get, Post, HttpCode } from '@nestjs/common';

@Controller("fields")
export class FieldsController {
    @Post()
    async create(@Body() createFieldsDto) 
    {
        return 'This action adds a new field';
    }
    
}
  

