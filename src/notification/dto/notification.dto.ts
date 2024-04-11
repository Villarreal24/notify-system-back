// notification.dto.ts
import { Timestamp, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

@Entity()
export class NotificationDto {
  formData: {
    // @PrimaryGeneratedColumn('uuid')
    id: UUID
    user_name?: string
    email?: string
    phone_number?: string
    category: string
    channel: string
    message: string
    // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created?: Date
  };
}
