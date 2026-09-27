import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journey-selection.html',
  styleUrl: './journey-selection.css'
})
export class JourneySelection {
  private router = inject(Router);

  goToChurchMap(): void {
    this.router.navigate(['/location-map']);
  }

  goToTableMap(): void {
    this.router.navigate(['/table-map']);
  }
}