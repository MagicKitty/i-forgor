import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  template: `
    <a
      [routerLink]="[42, { outlets: { event: [] } }]"
      class="underline hover:cursor-pointer"
    >
      42</a
    >
    <a
      [routerLink]="[42, { outlets: { event: ['groot'] } }]"
      class="underline hover:cursor-pointer"
    >
      go to 404 alt page</a
    >
    <a
      [routerLink]="['../groot', 42, { outlets: { event: [] } }]"
      class="underline hover:cursor-pointer"
    >
      go to 404 page</a
    >
  `,
  imports: [RouterLink],
  host: {
    class: 'flex flex-col'
  }
})
export default class EventsTrackingPageComponent {}
