import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  category_name: string;

  @Column()
  description: string;

  @Column()
  created: Date;
}
