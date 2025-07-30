import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-page',
  imports: [],
  template: `finally there!`,
})
export default class EventPageComponent {
  private route = inject(ActivatedRoute);

  constructor() {
    // console.log(this.route.parent?.snapshot.paramMap.get('idEvent'));
  }
}
