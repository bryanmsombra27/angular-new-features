import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [],
  styles: ``,
  template: ` <h1>Hola mundo</h1> `,
})
export class HeavyLoaderSlowComponent {
  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
      console.log('Heavy loader component');
    }
  }
}
