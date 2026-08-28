import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLocationMap } from './event-location-map';

describe('EventLocationMap', () => {
  let component: EventLocationMap;
  let fixture: ComponentFixture<EventLocationMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventLocationMap],
    }).compileComponents();

    fixture = TestBed.createComponent(EventLocationMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
