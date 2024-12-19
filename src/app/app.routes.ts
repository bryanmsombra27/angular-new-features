import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import CalculatorViewComponent from './calculator/views/calculator-view/calculator-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calculator',
    loadComponent: () =>
      import('@/calculator/views/calculator-view/calculator-view.component'),
  },
];
