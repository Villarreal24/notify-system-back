import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Logs {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  message: string;

  @Column('json')
  channels: string[];

  @Column()
  category: string;

  @Column()
  created: Date;
}
