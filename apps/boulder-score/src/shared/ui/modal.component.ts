import {
  Component,
  contentChild,
  effect,
  inject,
  input,
  TemplateRef,
} from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `<div></div>`
})
export class ModalComponent {
  dialog = inject(Dialog)
  template = contentChild.required(TemplateRef);
  isOpen = input.required<boolean>();

  constructor() {
    effect(() => {
      const isOpen = this.isOpen();

      if (isOpen) {
        this.dialog.open(this.template(), { panelClass: 'dialog-container' });
      } else {
        this.dialog.closeAll();
      }
    });
  }
}
