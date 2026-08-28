import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallQr } from './install-qr';

describe('InstallQr', () => {
  let component: InstallQr;
  let fixture: ComponentFixture<InstallQr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallQr],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallQr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
