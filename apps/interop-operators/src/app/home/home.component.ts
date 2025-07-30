import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-home.component',
  imports: [CommonModule, RouterLink, HlmButtonDirective],
  template: `
    <a hlmBtn variant="outline" [routerLink]="'/linked-signal'">linkedSignal</a
    ><a hlmBtn variant="outline" [routerLink]="'/create-effect'"
      >createEffect</a
    >
  `,
  styles: ``,
})
export default class HomeComponent {}
