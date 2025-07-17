import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-doge',
  template: `
    <button hlmBtn [variant]="'outline'" (click)="onChange(0); onTouched()">0</button>
    <button hlmBtn [variant]="'outline'" (click)="onChange(10); onTouched()">10</button>
    <button hlmBtn [variant]="'outline'" (click)="onChange(20); onTouched()">20</button>
  `,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: DogeComponent, multi: true },
  ],
  imports: [HlmButtonDirective],
})
export class DogeComponent implements ControlValueAccessor {
  intensity = 0;

  onChange = (intensity: number) => {};
  onTouched = () => {};

  writeValue(intensity: number): void {
    this.intensity = intensity;
  }
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
