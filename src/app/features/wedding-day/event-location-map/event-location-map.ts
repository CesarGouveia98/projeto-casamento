import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DeviceHardwareService } from '../../../core/services/device-hardware.service';

@Component({
  selector: 'app-event-location-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-location-map.html',
  styleUrl: './event-location-map.css'
})
export class EventLocationMap implements OnInit {
  private hardwareService = inject(DeviceHardwareService);
  private router = inject(Router);

  // Coordenadas da Quinta/Igreja (Ajustáveis)
  readonly eventCoords = { lat: 32.6511, lng: -16.9083 }; // Exemplo: Madeira

  userCoords: { lat: number; lng: number } | null = null;
  distanceKm: string | null = null;
  loadingGps: boolean = false;
  gpsError: string | null = null;

  ngOnInit(): void {
    this.getUserLocation();
  }

  // Obtém a localização atual do dispositivo via DeviceHardwareService
  getUserLocation(): void {
    this.loadingGps = true;
    this.gpsError = null;

    this.hardwareService.getCurrentLocation()
      .then((position) => {
        this.userCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.calculateDistance();
        this.loadingGps = false;
      })
      .catch((err) => {
        this.gpsError = 'Não foi possível obter o GPS nativo.';
        this.loadingGps = false;
      });
  }

  // Cálculo da distância em linha reta (Fórmula de Haversine)
  private calculateDistance(): void {
    if (!this.userCoords) return;

    const R = 6371; // Raio da Terra em km
    const dLat = this.deg2rad(this.eventCoords.lat - this.userCoords.lat);
    const dLon = this.deg2rad(this.eventCoords.lng - this.userCoords.lng);
    
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(this.userCoords.lat)) * Math.cos(this.deg2rad(this.eventCoords.lat)) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distância em km

    this.distanceKm = d.toFixed(1);
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  // Abre a navegação nativa do telemóvel (Google Maps ou Apple Maps)
  openExternalMap(): void {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${this.eventCoords.lat},${this.eventCoords.lng}`;
    window.open(url, '_blank');
  }

  goToTableMap(): void {
    this.router.navigate(['/table-map']);
  }
}