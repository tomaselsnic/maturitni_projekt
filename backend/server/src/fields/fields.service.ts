import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, ObjectID } from 'typeorm';
import { Fields } from './fields.entity';
import { CreateFieldsDto } from './fields.Dto';

@Injectable()
export class FieldsService {
  constructor(
    @InjectRepository(Fields)
    private readonly fieldsRepository: Repository<Fields>,
  ) {}

  async findAll(): Promise<Fields[]> {
    return await this.fieldsRepository.find();
  }
  async delete(id:string):Promise<DeleteResult>{
    return await this.fieldsRepository.delete(id);
  }
  
  async save(data:CreateFieldsDto):Promise<Fields>{
    const field=new Fields();
    field.name=data.name;
    field.description=data.description;
    field.owner=data.owner;
    field.price=data.price;
    field.location=data.location;
    return await this.fieldsRepository.save(field);
  }
  async detail(id:string):Promise<Fields>{
    return await this.fieldsRepository.findOne(id);
  }
  async edit(id:string,data:CreateFieldsDto):Promise<Fields>{
    const field= await this.fieldsRepository.findOne(id);
    field.name=data.name;
    field.description=data.description;
    field.owner=data.owner;
    field.price=data.price;
    field.location=data.location;
    return await this.fieldsRepository.save(field);
  }
}