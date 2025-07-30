import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { createEffect } from 'ngxtension/create-effect';
import { debounceTime, distinctUntilChanged, pipe, startWith, switchMap, tap } from 'rxjs';
import { CreateEffectService } from './data-access/create-effect.service';
import { debug } from 'ngxtension/debug';
import { User } from './interfaces/user';

@Component({
  selector: 'app-linked-signal.component',
  imports: [CommonModule, FormsModule],
  template: `
    <h1 class="text-center font-bold">createEffect</h1>
    <input
      [(ngModel)]="searchQuery"
      (ngModelChange)="searchUsers($event)"
      class="w-1/3 border"
    />
    <div>Search Query: {{ searchQuery }}</div>
    <div>Users: {{ users() | json }}</div>
  `,
  styles: ``,
  host: {
    class: 'flex flex-col gap-4',
  },
  providers: [CreateEffectService],
})
export default class CreateEffectComponent {
  private readonly createEffectService = inject(CreateEffectService);

  searchQuery = '';

  searchUsers = createEffect<string>(
    pipe(
      debounceTime(300),
      distinctUntilChanged(),
      startWith(this.searchQuery),
      switchMap((searchQuery) =>
        this.createEffectService.searchUser$(searchQuery)
      ),
      debug(''),
      tap((users) => this.users.set(users))
    )
  );

  users = signal<User[]>([]);
}
