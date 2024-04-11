import { Entity, Column, PrimaryGeneratedColumn, Timestamp, CreateDateColumn } from 'typeorm';

@Entity()
export class Logs {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  user_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  message: string;

  @Column()
  category: string;

  @Column('text', { array: true })
  channels: string[];

  @CreateDateColumn({ type: 'timestamp' })
  created: Date;
}
