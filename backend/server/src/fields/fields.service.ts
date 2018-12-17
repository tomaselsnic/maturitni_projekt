import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
  async save(data:CreateFieldsDto):Promise<Fields>{
    const field=new Fields();
    field.name=data.name;
    field.description=data.description;
    field.owner=data.owner;
    field.price=data.price;
    return await this.fieldsRepository.save(field);
  }
}