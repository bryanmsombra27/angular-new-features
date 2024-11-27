import { Routes } from '@angular/router';
import { SignalsLayoutComponent } from './signals/layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './signals/pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './signals/pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './signals/pages/properties-page/properties-page.component';

export const routes: Routes = [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      { path: 'counter', component: CounterPageComponent },
      { path: 'user-info', component: UserInfoPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'counter' },
    ],
  },
];
