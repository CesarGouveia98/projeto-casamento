export type NotificationType = 'PUSH' | 'EMAIL' | 'SMS';

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  timestamp: Date;
}