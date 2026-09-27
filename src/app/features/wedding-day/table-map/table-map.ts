import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SeatingOptimizationService } from '../../../core/services/seating-optimization.service';
import { RsvpService } from '../../../core/services/rsvp.service';
import { Table } from '../../../models/seating.model';
import { Guest } from '../../../models/guest.model';

@Component({
  selector: 'app-table-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-map.html',
  styleUrl: './table-map.css'
})
export class TableMap implements OnInit {
  private seatingService = inject(SeatingOptimizationService);
  private rsvpService = inject(RsvpService);
  private router = inject(Router);

  assignedTable: Table | null = null;
  tableMates: Guest[] = [];

  // Dados de simulação para a árvore de lugares
  mockGuests: Guest[] = [
    { 
      id: '1', 
      fullName: 'Convidado Atual', 
      birthDate: '', 
      qrCodeToken: '', 
      familyMembers: [], 
      isConfirmed: true, 
      dietaryRestrictions: { vegetarian: false, lactose: false, gluten: false, nuts: false, vegan: false } 
    },
    { 
      id: '2', 
      fullName: 'Maria Silva', 
      birthDate: '', 
      qrCodeToken: '', 
      familyMembers: [], 
      isConfirmed: true, 
      dietaryRestrictions: { vegetarian: true, lactose: false, gluten: false, nuts: false, vegan: false } 
    },
    { 
      id: '3', 
      fullName: 'João Santos', 
      birthDate: '', 
      qrCodeToken: '', 
      familyMembers: [], 
      isConfirmed: true, 
      dietaryRestrictions: { vegetarian: false, lactose: true, gluten: false, nuts: false, vegan: false } 
    },
    { 
      id: '4', 
      fullName: 'Ana Pereira', 
      birthDate: '', 
      qrCodeToken: '', 
      familyMembers: [], 
      isConfirmed: true, 
      dietaryRestrictions: { vegetarian: false, lactose: false, gluten: false, nuts: false, vegan: false } 
    }
  ];

  mockTables: Table[] = [
    {
      id: 1, 
      tableName: 'Mesa Hortênsia',
      capacity: 8, 
      assignedGuestIds: ['1', '2']
    },
    {
      id: 2, 
      tableName: 'Mesa Lavanda',
      capacity: 8, 
      assignedGuestIds: ['3', '4']
    }
  ];

  ngOnInit(): void {
    // Executa a otimização de lugares do SeatingOptimizationService
    const optimizedTables = this.seatingService.optimizeSeatingPlan(this.mockGuests, this.mockTables, []);

    // Procura a mesa onde ficou atribuído o convidado atual (id '1')
    this.assignedTable = optimizedTables.find(t => t.assignedGuestIds.includes('1')) || optimizedTables[0];

    // Filtra os restantes elementos da mesma mesa
    this.tableMates = this.mockGuests.filter(g => this.assignedTable?.assignedGuestIds.includes(g.id));
  }

  goToJourneySelection(): void {
    this.router.navigate(['/journey-selection']);
  }
}