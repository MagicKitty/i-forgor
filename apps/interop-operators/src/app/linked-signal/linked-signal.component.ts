import { Component, linkedSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';
import { HlmSeparatorDirective } from '@spartan-ng/helm/separator';

@Component({
  selector: 'app-linked-signal.component',
  imports: [
    CommonModule,
    HlmButtonDirective,
    BrnSeparatorComponent,
    HlmSeparatorDirective,
  ],
  template: `
    <h1 class="text-center font-bold">Without linked signal</h1>
    <button hlmBtn class="w-fit" variant="outline" (click)="changeShipping(2)">Change shipping</button>
    <button
      hlmBtn
      class="w-fit"
      variant="outline"
      (click)="shippingOptions.set(['Email', 'Will Call', 'Postal service'])"
    >
      Change shippings
    </button>
    <div>
      {{ selectedOption() }}
      [{{ shippingOptions() }}]
    </div>

    <brn-separator hlmSeparator />

    <h1 class="text-center font-bold">With linked signal</h1>
    <button hlmBtn class="w-fit" variant="outline" (click)="changeShippingLS(2)">Change shipping</button>
    <button
      hlmBtn
      class="w-fit"
      variant="outline"
      (click)="shippingOptionsLS.set(['Email', 'Will Call', 'Postal service'])"
    >
      Change shippings
    </button>
    <div>
      {{ selectedOptionLS() }}
      [{{ shippingOptionsLS() }}]
    </div>`,
  styles: ``,
  host: {
    class: 'flex flex-col gap-4',
  },
})
export default class LinkedSignalComponent {
  shippingOptions = signal(['Ground', 'Air', 'Sea']);
  selectedOption = signal(this.shippingOptions()[0]);
  changeShipping(newOptionIndex: number) {
    this.selectedOption.set(this.shippingOptions()[newOptionIndex]);
  }

  shippingOptionsLS = signal(['Ground', 'Air', 'Sea']);
  selectedOptionLS = linkedSignal(() => this.shippingOptionsLS()[0]);
  changeShippingLS(newOptionIndex: number) {
    this.selectedOptionLS.set(this.shippingOptionsLS()[newOptionIndex]);
  }
}
