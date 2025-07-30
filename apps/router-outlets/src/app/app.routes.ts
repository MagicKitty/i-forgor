import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'events-tracking',
    loadComponent: () =>
      import('./container-page/events-tracking-page.component'),
  },
  {
    path: 'events-tracking/:idEvent',
    loadComponent: () => import('./layouts/event-layout.component'),
    children: [
      {
        path: '',
        outlet: 'event',
        loadChildren: () =>
          import('./container-page/container-page.routes').then(
            (m) => m.containerPageRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./404.component'),
  }
];
