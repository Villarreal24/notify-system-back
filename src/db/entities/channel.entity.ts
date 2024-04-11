import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Channel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  channel_name: string;

  @Column()
  created: Date;
}
