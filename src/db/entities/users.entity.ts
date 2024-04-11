import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  user_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column('text', { array: true })
  categories: string[];

  @Column('text', { array: true })
  channels: string[];

  @Column()
  created: Date;
}
