import { Routes } from '@angular/router';
import { SignalsLayoutComponent } from './signals/layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './signals/pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './signals/pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './signals/pages/properties-page/properties-page.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    // SI SE DESEA IMPORTAR COMPONENTES CON LA FUNCION DE "LOADCOMPONENT" ES NECESARIO QUE LA CLASE DEL COMPONENTE SEA DECLARADA POR DEFECTO "DEFAULT"
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },

      {
        path: 'change-detection',
        title: 'Change detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detection/change-detection.component'
          ),
      },
      {
        path: 'control-flow',
        title: 'Control flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer options',
        loadComponent: () =>
          import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'user',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'user-list',
        title: 'users',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition',
        title: 'View transition',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transitions/view-transitions.component'
          ),
      },
      {
        path: 'view-transition-2',
        title: 'View transition 2',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition-2/view-transition-2.component'
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },

  {
    path: 'signals',
    component: SignalsLayoutComponent,
    children: [
      { path: 'counter', component: CounterPageComponent },
      { path: 'user-info', component: UserInfoPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'counter' },
    ],
  },
];
