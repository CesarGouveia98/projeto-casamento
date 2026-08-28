import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Guest } from '../../models/guest.model';

@Injectable({
  providedIn: 'root' // Singleton Pattern
})
export class RsvpService {
  // Observer Pattern: Subject privado que repara e emite alterações na lista de convidados
  private guestsSubject = new BehaviorSubject<Guest[]>([]);
  public guests$: Observable<Guest[]> = this.guestsSubject.asObservable();

  constructor() {}

  // Atualiza o estado e notifica automaticamente todos os observadores (ex: Dashboard dos Noivos)
  updateGuestConfirmation(updatedGuest: Guest): void {
    const currentGuests = this.guestsSubject.getValue();
    const index = currentGuests.findIndex(g => g.id === updatedGuest.id);
    
    if (index !== -1) {
      currentGuests[index] = updatedGuest;
    } else {
      currentGuests.push(updatedGuest);
    }
    
    this.guestsSubject.next([...currentGuests]); // Emite novos dados para os inscritos
  }

  getConfirmedCount(): number {
    return this.guestsSubject.getValue().filter(g => g.isConfirmed).length;
  }
}