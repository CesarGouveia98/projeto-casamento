import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryRestrictions } from './dietary-restrictions';

describe('DietaryRestrictions', () => {
  let component: DietaryRestrictions;
  let fixture: ComponentFixture<DietaryRestrictions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietaryRestrictions],
    }).compileComponents();

    fixture = TestBed.createComponent(DietaryRestrictions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
