import { Component, input } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { SimplePokemon } from '../../interfaces/Pokemon.interface';

@Component({
  selector: 'PokemonList',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styles: ``,
})
export class PokemonListComponent {
  pokemons = input.required<SimplePokemon[]>();
}
