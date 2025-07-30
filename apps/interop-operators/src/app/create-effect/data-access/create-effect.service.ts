import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable()
export class CreateEffectService {
  private readonly http = inject(HttpClient);

  searchUser$(searchQuery: string) {
    return this.http.get<User[]>(`http://localhost:3000/users?name=${searchQuery}`)
  }
}
