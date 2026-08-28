import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceHardwareService {

  constructor() {}

  // 1. Geolocalização Nativa (GPS)
  getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          (error) => reject(error),
          { enableHighAccuracy: true }
        );
      } else {
        reject('Geolocalização não suportada pelo dispositivo.');
      }
    });
  }

  // 2. Notificações Push Nativas (Web Push API)
  requestNotificationPermission(): Promise<NotificationPermission> {
    if ('Notification' in window) {
      return Notification.requestPermission();
    }
    return Promise.reject('Notificações não suportadas pelo navegador.');
  }

  sendNativePushNotification(title: string, options?: NotificationOptions): void {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, options);
    }
  }
}