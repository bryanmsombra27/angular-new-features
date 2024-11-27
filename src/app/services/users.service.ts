import { Injectable } from '@angular/core';

interface State {
  users: any[];
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
}
