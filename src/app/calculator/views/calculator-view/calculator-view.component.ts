import { Component, ViewEncapsulation } from '@angular/core';
import { CalculatorComponent } from '../../components/calculator/calculator.component';

@Component({
  selector: 'calculator-view',
  imports: [CalculatorComponent],
  templateUrl: './calculator-view.component.html',
  styles: `
    .calculator-container {
      width:300px;
    }
  `,
  host: {
    class: 'calculator-container',
  },
  encapsulation: ViewEncapsulation.None,
})
export default class CalculatorViewComponent {}
