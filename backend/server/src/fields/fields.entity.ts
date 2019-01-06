import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fields {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  owner: string;

  @Column('int')
  price: number;

  @Column("text")
  location:string;

}