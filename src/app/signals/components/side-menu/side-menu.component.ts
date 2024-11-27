import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  // public menuItems: MenuItem[] = [
  //   { route: 'counter', title: 'Contador' },
  //   { route: 'user-info', title: 'Perfil' },
  //   { route: 'properties', title: 'Mutaciones' },
  // ];

  // MANEJO DE SIGNALS
  menuItems = signal<MenuItem[]>([
    { route: 'counter', title: 'Contador' },
    { route: 'user-info', title: 'Perfil' },
    { route: 'properties', title: 'Mutaciones' },
  ]);
}
