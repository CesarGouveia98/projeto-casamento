import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RsvpService } from '../../../core/services/rsvp.service';

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rsvp-form.html',
  styleUrl: './rsvp-form.css',
})
export class RsvpForm {
  private router = inject(Router);
  private rsvpService = inject(RsvpService);

  fullName: string = '';
  birthDate: string = '';
  attendance: 'attending' | 'declined' | null = null;
  message: string = '';

  selectAttendance(status: 'attending' | 'declined'): void {
    this.attendance = status;
  }

  openQrScanner(): void {
    // Lógica para abrir leitor de QR Code ou modal
    console.log('A abrir leitor de QR Code...');
  }

  onSubmit(): void {
    if (!this.fullName || !this.attendance) {
      alert('Por favor, preencha o seu nome e confirme a sua presença.');
      return;
    }

    const formData = {
      fullName: this.fullName,
      birthDate: this.birthDate,
      attending: this.attendance === 'attending',
      message: this.message
    };

    // Salva ou envia dados através do serviço
    if (this.rsvpService && typeof this.rsvpService.submitRsvp === 'function') {
      this.rsvpService.submitRsvp(formData);
    }

    // Se confirmar presença, avança para as restrições alimentares
    if (this.attendance === 'attending') {
      this.router.navigate(['/dietary-restrictions']);
    } else {
      // Se recusar, vai direto para a contagem/agradecimento
      this.router.navigate(['/countdown']);
    }
  }
}