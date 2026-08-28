export interface DietaryRestriction {
  lactose: boolean;
  gluten: boolean;
  nuts: boolean;
  vegetarian: boolean;
  vegan: boolean;
  otherDetails?: string;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string; // Ex: 'Filho', 'Cônjuge'
}

export interface Guest {
  id: string;
  fullName: string;
  birthDate: string;
  qrCodeToken: string;
  isConfirmed: boolean;
  dietaryRestrictions: DietaryRestriction;
  mobilityNeeds?: string;
  familyMembers: FamilyMember[];
}