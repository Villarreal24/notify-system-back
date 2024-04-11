import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { BadRequestException } from '@nestjs/common';

@Controller('/notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get('/categories')
  async getCategories(): Promise<any[]> {
    return await this.notificationService.getAllCategories();
  }

  @Get('/logs')
  async getChannels(): Promise<any[]> {
    return await this.notificationService.getAllLogs();
  }

  @Post()
  async sendFormNotification(
    @Body() formData: any): Promise<any> {
    return this.notificationService.sendNotification(formData);
  }
}
