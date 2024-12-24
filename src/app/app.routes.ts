import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'issues',
    loadComponent: () =>
      import('./modules/issues/pages/issues-list/issues-list.component'),
  },
  {
    path: 'issue/:number',
    loadComponent: () =>
      import('./modules/issues/pages/issue/issue-page.component'),
  },
  {
    path: '**',
    redirectTo: 'issues',
  },
];
