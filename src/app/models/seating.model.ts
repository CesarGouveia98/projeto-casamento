export interface Table {
  id: number;
  tableName: string;
  capacity: number;
  assignedGuestIds: string[];
}

export interface SeatingAffinity {
  guestId1: string;
  guestId2: string;
  affinityScore: number; // Ex: 1 a 10 para afinidade familiar/amizade
}