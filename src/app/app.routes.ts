import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about-page.component'),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component'),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing-page.component'),
  },
  // {
  //   path: 'pokemons',
  //   loadComponent: () => import('./pages/pokemons/pokemons.component'),
  // },
  {
    path: 'pokemons/page/:page',
    loadComponent: () => import('./pages/pokemons/pokemons.component'),
  },
  {
    path: 'pokemons/:id',
    loadComponent: () =>
      import('./pokemons/components/pokemon/pokemon.component'),
  },
  {
    path: '**',
    redirectTo: 'about',
  },
];
