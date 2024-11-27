import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/User.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties-page',
  imports: [CommonModule],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  userChangeEffect = effect(() => {
    `${this.user().first_name} ${this.user().last_name}`;
  });

  onFieldUpdated(field: keyof User, value: string) {
    this.user.update((state) => {
      return {
        ...state,
        [field]: value,
      };
    });
  }
}
