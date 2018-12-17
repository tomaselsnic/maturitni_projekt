import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {  FieldsModule} from './fields/fields.Module'; 
import {TypeOrmModule} from "@nestjs/typeorm";
import {Connection} from "typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(),FieldsModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {
constructor(private readonly connection:Connection){}
}
