import { Module } from '@nestjs/common';
import { FieldsController } from './fields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldsService } from './fields.service';
import { Fields } from './fields.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fields])],
  providers: [FieldsService],
  controllers: [FieldsController],
})
export class FieldsModule {}