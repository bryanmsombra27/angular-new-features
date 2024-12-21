import { Component, inject, OnInit, signal } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon-response.interface';
import { PokemonsService } from '../../services/pokemons.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.component.html',
  styles: ``,
})
export default class PokemonComponent implements OnInit {
  pokemon = signal<Pokemon | null>(null);
  private pokemonService = inject(PokemonsService);
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    if (!id) return;

    this.pokemonService
      .loadPokemon(id)
      .pipe(
        tap((pokemon) => {
          const pageTitle = `#${pokemon.id} - ${pokemon.name}`;
          const pageDescription = `Pagina del pokemon ${pokemon.name}`;

          this.title.setTitle(pageTitle);
          this.meta.updateTag({
            name: 'description',
            content: pageDescription,
          });
          this.meta.updateTag({
            name: 'og:title',
            content: pageTitle,
          });
          this.meta.updateTag({
            name: 'og:description',
            content: pageDescription,
          });
          this.meta.updateTag({
            name: 'og:image',
            content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`,
          });
        })
      )
      .subscribe((pokemon) => {
        this.pokemon.set(pokemon);
      });
  }
}
