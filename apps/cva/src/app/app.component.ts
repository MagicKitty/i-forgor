import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DogeComponent } from './doge/doge.component';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [RouterModule, DogeComponent, ReactiveFormsModule, JsonPipe],
  selector: 'app-root',
  template: ` <form [formGroup]="formGroup">
      <app-doge formControlName="intensity"></app-doge>
    </form>

    {{ formGroup.getRawValue() | json }}`,
})
export class AppComponent {
  private fb = inject(FormBuilder);

  formGroup = this.fb.nonNullable.group({
    intensity: 5,
  });
}
