import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css'
})
export class Countdown implements OnInit, OnDestroy {
  // Data do Casamento (Ajustável conforme necessário)
  weddingDate: Date = new Date('2027-08-28T16:00:00');

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private timerInterval: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updateCountdown();
    this.timerInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.weddingDate.getTime() - now;

    if (distance > 0) {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }

  goToLocationMap(): void {
    this.router.navigate(['/location-map']);
  }
}