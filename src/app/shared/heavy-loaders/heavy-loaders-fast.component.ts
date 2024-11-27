import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [CommonModule],
  styles: ``,
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <!-- HIGHER ORDER COMPONENT PARA MANDAR EL CONTENIDO QUE VA A REDERIZAR -->
      <ng-content />
    </section>
  `,
})
export class HeavyLoaderFastComponent {
  @Input({
    required: true,
  })
  cssClass!: string;
}
