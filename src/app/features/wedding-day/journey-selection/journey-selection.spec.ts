import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneySelection } from './journey-selection';

describe('JourneySelection', () => {
  let component: JourneySelection;
  let fixture: ComponentFixture<JourneySelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneySelection],
    }).compileComponents();

    fixture = TestBed.createComponent(JourneySelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
