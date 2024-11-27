import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/User.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info-page',
  imports: [CommonModule],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
  // providers: [],
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UserServiceService);

  userId = signal<number>(1);
  currentUser = signal<User | undefined>(undefined);
  userWasFound = signal<boolean>(true);

  fullName = computed<string>(() => {
    if (!this.currentUser()) return 'usario no encontrado';

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;
    this.userId.set(id);

    // this.userService.getUserById(this.userId()).subscribe((user) => {
    //   this.currentUser.set(user);
    // });
    this.userService.getUserById(this.userId()).subscribe({
      next: (value) => {
        this.currentUser.set(value);
        this.userWasFound.set(true);
      },
      error: () => {
        this.currentUser.set(undefined);
        this.userWasFound.set(false);
      },
    });
  }
}
