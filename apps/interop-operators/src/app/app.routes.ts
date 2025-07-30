import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component') },
  {
    path: 'linked-signal',
    loadComponent: () => import('./linked-signal/linked-signal.component'),
  },
  {
    path: 'create-effect',
    loadComponent: () => import('./create-effect/create-effect.component'),
  },
];
