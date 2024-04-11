import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logs } from '../db/entities/logs.entity';
import { Users } from 'src/db/entities/users.entity';
import { Category } from 'src/db/entities/category.entity';
import { Channel } from 'src/db/entities/channel.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Logs)
    private readonly logsRepository: Repository<Logs>,
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getAllCategories(): Promise<Category[]> {
    try {
      return await this.categoryRepository.find();
    } catch (error) {
      // MANAGE ERRORS
      throw new Error('Error something failed, try again');
    }
  }

  async getAllLogs(): Promise<Logs[]> {
    try {
      const logs = await this.logsRepository.find();
      return logs;
    } catch (error) {
      // MANAGE ERRORS
      throw new Error('Error something failed, try again');
    }
  }

  async sendNotification(formData: any): Promise<any> {
    try {
      const { category, message } = formData
      // ==== GET USERS THAT MATCHE´S WITH THE CATEGORY =====
      const users = await this.userRepository.createQueryBuilder('user')
      .where(':category = ANY(user.categories)', { category: category })
      .getMany();
      
      // ==== SAVE DATA OF EACH USER ON "LOGS" TABLE ====
      for (const user of users) {
        const log = new Logs();
        log.user_name = user.user_name,
        log.email = user.email,
        log.phone_number = user.phone_number,
        log.category = category;
        log.message = message;
        log.channels = user.channels
        await this.logsRepository.save(log);
      }

      return { success: true, message: 'Notificacion sent successfully' };
    } catch (error) {
      console.error("Error to send notification:", error);
    }
  }
}
