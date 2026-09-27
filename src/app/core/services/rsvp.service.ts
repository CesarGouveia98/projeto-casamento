import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Guest } from '../../models/guest.model';

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  private guestsSubject = new BehaviorSubject<Guest[]>([]);
  public guests$: Observable<Guest[]> = this.guestsSubject.asObservable();

  // Guardar temporariamente o convidado que está a preencher o fluxo atual
  private currentGuestSubject = new BehaviorSubject<Guest | null>(null);
  public currentGuest$: Observable<Guest | null> = this.currentGuestSubject.asObservable();

  constructor() {}

  submitRsvp(formData: { fullName: string; birthDate: string; attending: boolean; message?: string }): void {
    const existingGuest = this.currentGuestSubject.getValue();
    
    const guestData: Guest = {
      id: existingGuest?.id || 'guest-' + Date.now(),
      fullName: formData.fullName,
      birthDate: formData.birthDate,
      qrCodeToken: existingGuest?.qrCodeToken || '',
      familyMembers: existingGuest?.familyMembers || [],
      isConfirmed: formData.attending,
      dietaryRestrictions: existingGuest?.dietaryRestrictions || {
        vegetarian: false,
        vegan: false,
        lactose: false,
        gluten: false,
        nuts: false
      }
    };

    this.currentGuestSubject.next(guestData);
    this.updateGuestConfirmation(guestData);
  }

  updateGuestConfirmation(updatedGuest: Guest): void {
    const currentGuests = this.guestsSubject.getValue();
    const index = currentGuests.findIndex(g => g.id === updatedGuest.id);
    
    let newGuests: Guest[];
    if (index !== -1) {
      newGuests = [...currentGuests];
      newGuests[index] = updatedGuest;
    } else {
      newGuests = [...currentGuests, updatedGuest];
    }
    
    this.guestsSubject.next(newGuests);
    this.currentGuestSubject.next(updatedGuest);
  }

  getCurrentGuest(): Guest | null {
    return this.currentGuestSubject.getValue();
  }

  getConfirmedCount(): number {
    return this.guestsSubject.getValue().filter(g => g.isConfirmed).length;
  }
}