import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  // SEÑAL DE ESCRITURA
  counter = signal<number>(10);

  // SEÑAL DE SOLO LECTURA, ideal para realizar calculos que dependan de otras propiedades o señales estas se actualizaran automaticamente si el valor de la señal llegara a cambiar, para usar un signal computed es necesario creer una funcion que retorne el valor que tendra la señal
  squareCounter = computed(() => this.counter() * this.counter());

  resetCounter() {
    this.counter.set(0);
  }

  addCounter() {
    this.counter.update((curstate) => curstate + 1);
  }
  lessCounter() {
    this.counter.update((curstate) => curstate - 1);
  }
}
