import { Routes } from '@angular/router';

import { InstallQr } from './features/pre-wedding/install-qr/install-qr';
import { RsvpForm } from './features/pre-wedding/rsvp-form/rsvp-form';
import { DietaryRestrictions } from './features/pre-wedding/dietary-restrictions/dietary-restrictions';

import { Countdown } from './features/wedding-day/countdown/countdown';
import { EventLocationMap } from './features/wedding-day/event-location-map/event-location-map';
import { TableMap } from './features/wedding-day/table-map/table-map';

import { DashboardStats } from './features/admin-dashboard/dashboard-stats/dashboard-stats';

export const routes: Routes = [
  { path: '', redirectTo: 'install-qr', pathMatch: 'full' },
  { path: 'install-qr', component: InstallQr },
  { path: 'rsvp', component: RsvpForm },
  { path: 'dietary-restrictions', component: DietaryRestrictions },

  { path: 'countdown', component: Countdown },
  { path: 'location-map', component: EventLocationMap },
  { path: 'table-map', component: TableMap },

  { path: 'admin-dashboard', component: DashboardStats },

  { path: '**', redirectTo: 'install-qr' }
];