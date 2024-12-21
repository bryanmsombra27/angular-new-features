import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonsService } from '../../pokemons/services/pokemons.service';
import { SimplePokemon } from '../../pokemons/interfaces/Pokemon.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';
// import { PokemonListSkeletonComponent } from '../../pokemons/components/pokemon-list-skeleton/pokemon-list-skeleton.component';

@Component({
  selector: 'app-pokemons',
  imports: [PokemonListComponent],
  templateUrl: './pokemons.component.html',
  styles: ``,
})
export default class PokemonsComponent implements OnInit {
  // isLoading = signal(true);

  // servicios
  private pokemonService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);

  // señales
  pokemons = signal<SimplePokemon[]>([]);
  currentPage = toSignal<number>(
    this.route.queryParamMap.pipe(
      map((params) => params.get('page') ?? '1'),
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page))
    )
  );

  ngOnInit(): void {
    this.loadPokemons();
    this.title.setTitle('Pokemons list');

    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 1500);
  }

  loadPokemons(page = 0) {
    const pageToLoad = this.currentPage()! + page;

    this.pokemonService
      .loadPage(pageToLoad)
      .pipe(
        // disparar efectos secundarios para actualizar los query params
        tap(() =>
          this.router.navigate([], {
            queryParams: {
              page: pageToLoad,
            },
          })
        ),
        tap(() =>
          this.title.setTitle(`Pokemons list page ${this.currentPage()}`)
        )
      )

      .subscribe((pokemons) => {
        this.pokemons.set(pokemons);
      });
  }
}
