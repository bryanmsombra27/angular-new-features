import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// import { MovieDetails, User } from '../interfaces/User.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  // injeccion de dependencias
  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api';

  getUserById(id: number): Observable<any> {
    return this.http
      .get<any>(`${this.baseUrl}/users/${id}`)
      .pipe(map((response) => response.data));
  }
}
