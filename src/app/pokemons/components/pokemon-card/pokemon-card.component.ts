import { Component, computed, effect, input } from '@angular/core';
import { SimplePokemon } from '../../interfaces/Pokemon.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'PokemonCard',
  imports: [RouterModule],
  templateUrl: './pokemon-card.component.html',
  styles: ``,
})
export class PokemonCardComponent {
  pokemon = input.required<SimplePokemon>();

  pokemonImage = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
        this.pokemon().id
      }.png`
  );

  // logEffect = effect(()=>{

  // });
}
