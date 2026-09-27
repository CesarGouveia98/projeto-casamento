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
    const currentGuest = this.rsvpService.getCurrentGuest();

    if (currentGuest) {
      this.rsvpService.updateGuestConfirmation({
        ...currentGuest,
        isConfirmed: true,
        dietaryRestrictions: this.dietaryRestrictions
      });
    }

    this.router.navigate(['/countdown']);
  }

  skipSection(): void {
    this.router.navigate(['/countdown']);
  }
}