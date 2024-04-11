import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  user_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  message: string;

  @Column()
  channel_name: string;

  @Column()
  category_name: string;

  @Column()
  created: Date;
}
