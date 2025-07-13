import { Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { cssBorderStyleSolid } from '@ng-icons/css.gg';

@Component({
  selector: 'app-square',
  template: `@for (binarySquare of binarySquares(); track i; let i = $index) {
    <div class="grid grid-cols-3 grid-rows-3 size-15 border">
      @for (_ of binarySquare; track j; let j = $index) { @if (j === 1) {
      <div
        class="size-5 flex justify-center items-center font-mono leading-none"
      >
        @if (binarySquare[0] === '1') {
        <div class="h-0.5 bg-black/70 w-7.5 -mr-2.5"></div>
        }
      </div>
      <div
        class="size-5 flex justify-center items-center font-mono leading-none"
      ></div>
      <div
        class="size-5 flex justify-center items-center font-mono leading-none"
      >
        @if (binarySquare[2] === '1') {
        <div class="h-0.5 bg-black/70 w-7.5 -ml-2.5"></div>
        }
      </div>
      } @else if (j === 0 || j === 2) {
      <div
        class="size-5 flex justify-center items-center font-mono leading-none"
      ></div>
      <div
        class="size-5 flex justify-center items-center font-mono leading-none"
      >
        @if (j === 0 && binarySquare[3] === '1') {
        <div class="h-7.5 bg-black/70 w-0.5 -mb-2.5"></div>
        } @if (j === 2 && binarySquare[1] === '1') {
        <div class="h-7.5 bg-black/70 w-0.5 -mt-2.5"></div>
        }
      </div>
      <div
        class="size-5 flex justify-center items-center font-mono leading-none"
      ></div>
      }}
    </div>
    }`,
  host: {
    class: 'flex',
  },
  imports: [NgIcon],
  viewProviders: [provideIcons({ cssBorderStyleSolid })],
})
export class SquareComponent {
  binary = input.required<string>();
  binarySquares = computed(() => [
    [...this.binary().slice(0, 4).split('')],
    [...this.binary().slice(4, 8).split('')],
  ]);
  color = input<string>('black');
}
