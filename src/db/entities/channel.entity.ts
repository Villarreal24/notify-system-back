import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  channel_name: string;

  @Column()
  description: string;

  @Column()
  created: Date;
}
