import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CypherService } from './data-access/cypher.service';
import { filter, of, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SquareComponent } from './ui/square.component';

declare var particlesJS: any;

@Component({
  imports: [RouterModule, ReactiveFormsModule, SquareComponent],
  selector: 'app-root',
  template: ` <form
      [formGroup]="fg"
      class="h-[200px] flex items-center w-full justify-center"
    >
      <input
        formControlName="userMessage"
        class="h-1/2 outline-none bg-white w-1/2 leading-5 text-6xl px-4 rounded border-4 border-black placeholder:text-black/30"
        placeholder="Type your message"
        #userMessageRef
      />
    </form>
    @if (keyStroke().length) {
    <div class="flex flex-wrap bg-white p-4 rounded">
      @for (key of keyStroke(); track $index) {
      <app-square [binary]="key.binary" />
      }
    </div>
    }`,
  providers: [CypherService],
  host: { class: 'absolute size-full bg-white/0 p-4' },
})
export class App implements AfterViewInit {
  cypherService = inject(CypherService);
  private fb = inject(FormBuilder);

  fg = this.fb.nonNullable.group<{ userMessage: string }>({
    userMessage: '',
  });
  userMessageRef = viewChild<ElementRef<HTMLInputElement>>('userMessageRef');

  keyStroke$ = this.fg.controls.userMessage.valueChanges.pipe(
    filter((e) =>
      e
        .split('')
        .every((c) => Object.keys(this.cypherService.asciiTable()).includes(c))
    ),
    switchMap((e) =>
      of(e.split('').map((c) => this.cypherService.asciiTable()[c]))
    )
  );
  keyStroke = toSignal(this.keyStroke$, { initialValue: [] });

  constructor() {
    effect(() => {
      const userMessageRef = this.userMessageRef();

      if (userMessageRef) {
        userMessageRef.nativeElement.focus();
      }
    });
  }

  ngAfterViewInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', () => {
      console.log('particles.js config loaded');
    });
  }
}
