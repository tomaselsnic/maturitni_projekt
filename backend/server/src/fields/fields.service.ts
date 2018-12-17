import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fields } from './fields.entity';

@Injectable()
export class FieldsService {
  constructor(
    @InjectRepository(Fields)
    private readonly fieldsRepository: Repository<Fields>,
  ) {}

  async findAll(): Promise<Fields[]> {
    return await this.fieldsRepository.find();
  }
}