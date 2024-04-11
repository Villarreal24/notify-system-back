import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { Logs } from 'src/db/entities/logs.entity';
import { Users } from 'src/db/entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/db/entities/category.entity';
import { Channel } from 'src/db/entities/channel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Logs,
    Users,
    Category,
    Channel
  ])],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
