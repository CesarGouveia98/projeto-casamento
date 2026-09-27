import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RsvpService } from '../../../core/services/rsvp.service';
import { SeatingOptimizationService } from '../../../core/services/seating-optimization.service';
import { NotificationFactoryService, NotificationType } from '../../../core/services/notification-factory.service';
import { Guest } from '../../../models/guest.model';

@Component({
  selector: 'app-dashboard-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-stats.html',
  styleUrl: './dashboard-stats.css'
})
export class DashboardStats implements OnInit {
  private rsvpService = inject(RsvpService);
  private seatingService = inject(SeatingOptimizationService);
  private notificationFactory = inject(NotificationFactoryService);
  private router = inject(Router);

  // Mocks de dados globais
  guestsList: Guest[] = [
    { 
      id: '1', 
      fullName: 'Célia Rodrigues', 
      birthDate: '1995-05-12', 
      qrCodeToken: 'qr-101', 
      familyMembers: [], 
      isConfirmed: true, 
      dietaryRestrictions: { vegetarian: false, lactose: false, gluten: false, nuts: false, vegan: false } 
    },
    { 
      id: '2', 
      fullName: 'César Silva', 
      birthDate: '1992-08-20', 
      qrCodeToken: 'qr-102', 
      familyMembers: [], 
      isConfirmed: true, 
      dietaryRestrictions: { vegetarian: false, lactose: false, gluten: false, nuts: false, vegan: false } 
    },
    { 
      id: '3', 
      fullName: 'Maria Santos', 
      birthDate: '1988-11-03', 
      qrCodeToken: 'qr-103', 
      familyMembers: [], 
      isConfirmed: true, 
      dietaryRestrictions: { vegetarian: true, lactose: false, gluten: false, nuts: false, vegan: false } 
    },
    { 
      id: '4', 
      fullName: 'António Pereira', 
      birthDate: '1980-01-15', 
      qrCodeToken: 'qr-104', 
      familyMembers: [], 
      isConfirmed: false, 
      dietaryRestrictions: { vegetarian: false, lactose: true, gluten: false, nuts: false, vegan: false } 
    }
  ];

  totalGuests: number = 0;
  confirmedGuests: number = 0;
  pendingGuests: number = 0;
  confirmationRate: number = 0;
  dietarySummary: { vegetarianCount: number; lactoseCount: number; glutenCount: number; totalSpecialDiets: number } = {
    vegetarianCount: 0,
    lactoseCount: 0,
    glutenCount: 0,
    totalSpecialDiets: 0
  };

  notificationSentMessage: string | null = null;

  ngOnInit(): void {
    this.calculateMetrics();
  }

  private calculateMetrics(): void {
    this.totalGuests = this.guestsList.length;
    this.confirmedGuests = this.guestsList.filter(g => g.isConfirmed).length;
    this.pendingGuests = this.totalGuests - this.confirmedGuests;
    
    this.confirmationRate = this.totalGuests > 0 
      ? Math.round((this.confirmedGuests / this.totalGuests) * 100) 
      : 0;

    // Métricas de dietas através do SeatingOptimizationService
    this.dietarySummary = this.seatingService.getDietaryRestrictionsSummary(this.guestsList);
  }

  // Disparo de notificação via NotificationFactoryService
  triggerBroadcastNotification(): void {
    const notifier = this.notificationFactory.createNotifier('PUSH');
    notifier.sendNotification('Casamento Célia & César', 'Lembrete: Por favor confirmem a vossa presença até ao final do mês!');
    
    this.notificationSentMessage = 'Notificação Push enviada com sucesso para todos os convidados!';
    setTimeout(() => this.notificationSentMessage = null, 4000);
  }

  goToHome(): void {
    this.router.navigate(['/install-qr']);
  }
}