import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@interfaces/User.interface';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // numeral hace que una propíedad sea privada
  #state = signal<State>({
    loading: true,
    users: [],
  });

  // señal de solo lectura
  users = computed(() => this.#state().users);
  loading = computed(() => this.#state().loading);

  // injeccion de dependencias
  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api';

  constructor() {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get<UsersResponse>(`${this.baseUrl}/users`)
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }
  getUserById(id: string) {
    return this.http.get<UserResponse>(`${this.baseUrl}/users/${id}`).pipe(
      delay(1500),
      map((res) => res.data)
    );
  }
}
