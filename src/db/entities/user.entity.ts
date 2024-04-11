import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  user_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  created: Date;
}
