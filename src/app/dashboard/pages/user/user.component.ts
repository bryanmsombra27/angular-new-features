import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/User.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: ``,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);
  // solucion mia
  // fullName = computed(
  //   () => `${this.user()?.first_name} ${this.user()?.last_name}`
  // );
  // solucion de fernando

  // user = signal<User | undefined>(undefined);
  user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );

  fullName = computed(() => {
    if (this.user()) {
      return `informacion del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      }`;
    }
    return 'informacion del usuario: ';
  });

  constructor() {
    // this.route.params.subscribe((params) => {
    //   console.log(params);
    // });
  }
}
