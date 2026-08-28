import { Injectable } from '@angular/core';
import { AppNotification, NotificationType } from '../../models/notification.model';

export interface INotifier {
  send(notification: AppNotification): void;
}

class PushNotifier implements INotifier {
  send(notification: AppNotification): void {
    console.log(`[Push Notification]: ${notification.title} - ${notification.message}`);
  }
}

class EmailNotifier implements INotifier {
  send(notification: AppNotification): void {
    console.log(`[Email Enviado]: ${notification.title} - ${notification.message}`);
  }
}

class SmsNotifier implements INotifier {
  send(notification: AppNotification): void {
    console.log(`[SMS Enviado]: ${notification.title} - ${notification.message}`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class NotificationFactoryService {

  // Factory Pattern: Métodos de fabricação para instanciar notificadores concretos
  createNotifier(type: NotificationType): INotifier {
    switch (type) {
      case 'PUSH':
        return new PushNotifier();
      case 'EMAIL':
        return new EmailNotifier();
      case 'SMS':
        return new SmsNotifier();
      default:
        throw new Error(`Tipo de notificador não suportado: ${type}`);
    }
  }
}