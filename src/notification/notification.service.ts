import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  getHello(): string {
    return 'Hello World from notification!';
  }

  sendNotification(): object {
    return { data: 'works' }
  }
}
