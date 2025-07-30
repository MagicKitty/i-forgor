import { Component, effect, inject } from '@angular/core';
import { injectParams } from 'ngxtension/inject-params';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container-page',
  template: ` <router-outlet />`,
  imports: [RouterOutlet],
})
export default class ContainerPageComponent {
  private router = inject(Router);
  private idEvent = injectParams('idEvent');

  constructor() {
    effect(() => {
      const idEvent = this.idEvent();
      if (idEvent) {
        this.router
          .navigate(
            [idEvent, { outlets: { event: ['event', idEvent, 'event'] } }],
            {
              replaceUrl: true,
              preserveFragment: true,
              queryParamsHandling: 'preserve',
            }
          )
          .then();
      }
    });
  }
}
