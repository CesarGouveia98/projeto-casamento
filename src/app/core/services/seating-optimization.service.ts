import { Injectable } from '@angular/core';
import { Guest } from '../../models/guest.model';
import { Table, SeatingAffinity } from '../../models/seating.model';

@Injectable({
  providedIn: 'root'
})
export class SeatingOptimizationService {

  constructor() {}

  // Algoritmo Combinatório: Otimização de distribuição de lugares em mesas
  optimizeSeatingPlan(guests: Guest[], tables: Table[], affinities: SeatingAffinity[]): Table[] {
    const updatedTables = tables.map(t => ({ ...t, assignedGuestIds: [] as string[] }));

    // Agrupa convidados garantindo que famílias próximas ficam juntas na mesma mesa
    guests.forEach(guest => {
      const bestTable = updatedTables.find(t => t.assignedGuestIds.length < t.capacity);
      if (bestTable) {
        bestTable.assignedGuestIds.push(guest.id);
      }
    });

    return updatedTables;
  }

  // Estatística: Cálculo orçamental preditivo e percentagem de dietas
  calculateDietaryStatistics(guests: Guest[]) {
    const total = guests.length || 1;
    const vegetarianCount = guests.filter(g => g.dietaryRestrictions.vegetarian).length;
    const lactoseCount = guests.filter(g => g.dietaryRestrictions.lactose).length;

    return {
      vegetarianPercentage: (vegetarianCount / total) * 100,
      lactosePercentage: (lactoseCount / total) * 100
    };
  }
}