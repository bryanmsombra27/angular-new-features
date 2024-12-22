import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SimplePokemon } from '../interfaces/Pokemon.interface';
import { map, Observable } from 'rxjs';
import {
  PokeAPIResponse,
  Pokemon,
} from '../interfaces/pokemon-response.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private http = inject(HttpClient);

  loadPage(page: number): Observable<SimplePokemon[]> {
    if (page !== 0) {
      --page;
    }
    page = Math.max(0, page);

    return this.http
      .get<PokeAPIResponse>(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`
      )
      .pipe(
        map((response) => {
          const simplePokemons: SimplePokemon[] = response.results.map(
            (pokemon) => ({
              id: pokemon.url.split('/').at(-2) ?? '',
              name: pokemon.name,
            })
          );

          return simplePokemons;
        })
      );
  }

  loadPokemon(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
