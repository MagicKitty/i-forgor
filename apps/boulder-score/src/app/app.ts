import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../shared/ui/modal.component';
import { FormBuilder } from '@angular/forms';
import { Checklist } from '../shared/interfaces/checklist';
import { HlmButtonDirective } from '@spartan-ng/helm/button';
import { FormModalComponent } from '../shared/ui/form-modal.component';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [
    RouterModule,
    ModalComponent,
    HlmButtonDirective,
    FormModalComponent,
  ],
  selector: 'app-root',
  template: `
    <button hlmBtn (click)="checklistBeingEdited.set({})">hi</button>
    <app-modal [isOpen]="!!checklistBeingEdited()">
      <ng-template>
        <app-form-modal
          [formGroup]="checklistForm"
          [title]="'hello'"
          (close)="checklistBeingEdited.set(null)"
        >
        </app-form-modal>
      </ng-template>
    </app-modal>
  `,
})
export class App {
  formBuilder = inject(FormBuilder);

  protected checklistBeingEdited = signal<Partial<Checklist> | null>(null);

  protected checklistForm = this.formBuilder.nonNullable.group({
    title: [''],
  });

  private http = inject(HttpClient);

  constructor() {
    this.http.get('http://localhost:3000/').subscribe((res) => {
      console.log(res);
    });

    const guess = { guess: 14 };

    this.http.post('http://localhost:3000/', guess).subscribe((res) => {
      console.log(res);
    });
  }
}
