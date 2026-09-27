import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RsvpService } from '../../../core/services/rsvp.service';

@Component({
  selector: 'app-dietary-restrictions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dietary-restrictions.html',
  styleUrl: './dietary-restrictions.css'
})
export class DietaryRestrictions {
  private rsvpService = inject(RsvpService);
  private router = inject(Router);

  // Estado das restrições alimentares do convidado
  dietaryRestrictions = {
    vegetarian: false,
    vegan: false,
    lactose: false,
    gluten: false,
    seafood: false,
    nuts: false,
    other: ''
  };

  saveRestrictions(): void {
    // Exemplo de integração com o serviço Observer
    this.rsvpService.updateGuestConfirmation({
      id: 'guest-' + Date.now(),
      isConfirmed: true,
      dietaryRestrictions: this.dietaryRestrictions
    } as any);

    // Avança para o Countdown (Dia do Casamento)
    this.router.navigate(['/countdown']);
  }

  skipSection(): void {
    this.router.navigate(['/countdown']);
  }
}