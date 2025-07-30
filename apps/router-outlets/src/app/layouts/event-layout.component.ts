import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  template: ` <router-outlet name="event" />`,
  imports: [RouterOutlet],
})
export default class EventLayoutComponent {}
