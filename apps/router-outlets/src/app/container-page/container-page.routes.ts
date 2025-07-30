import { Route } from '@angular/router';

export const containerPageRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'first-step',
    pathMatch: 'full'
  },
  {
    path: 'first-step',
    loadComponent: () => import('./event-page.component'),
  },
  {
    path: '**',
    loadComponent: () => import('../404-alt.component'),
  }
];
