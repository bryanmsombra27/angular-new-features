import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '@interfaces/User.interface';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users',
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``,
})
export default class UsersComponent implements OnInit {
  usersService = inject(UsersService);

  ngOnInit(): void {}
}
