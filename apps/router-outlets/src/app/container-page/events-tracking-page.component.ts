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
  `,
  imports: [RouterLink],
})
export default class EventsTrackingPageComponent {}
