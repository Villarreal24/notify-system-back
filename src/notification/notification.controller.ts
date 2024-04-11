import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationDto } from './dto/notification.dto';
import { BadRequestException } from '@nestjs/common';

@Controller('/notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getHello(): string {
    return this.notificationService.getHello();
  }

  @Get('/categories')
  async getCategories(): Promise<any[]> {
    return await this.notificationService.getAllCategories();
  }

  @Get('/channels')
  async getChannels(): Promise<any[]> {
    return await this.notificationService.getAllChannels();
  }

  @Post()
  async sendFormNotification(
    @Body() formData: any): Promise<any> {
      // try {
      //   console.log("FORM DATA: ", formData);
      //   return this.notificationService.sendNotification(formData);
      // } catch (error) {
      //   console.error("Error in sendFormNotification:", error);
      //   throw new BadRequestException('Validation failed');
      // }
    // return this.notificationService.sendNotification(formData);
    return this.notificationService.sendNotification(formData);

  }
}
