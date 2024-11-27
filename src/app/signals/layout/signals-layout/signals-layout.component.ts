import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signals-layout',
  imports: [SideMenuComponent, RouterOutlet],
  templateUrl: './signals-layout.component.html',
  styleUrl: './signals-layout.component.css',
})
export class SignalsLayoutComponent {}
