import { Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CalculatorService } from '@/calculator/services/calculator-service.service';

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  // MANERA RECOMENDADA DE USAR EL HOSTLISTENER
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  },
  //   styles: `
  //     .is-command {
  //   @apply bg-indigo-700 bg-opacity-20;
  // }
  //   `,
})
export class CalculatorComponent {
  // FORMA ANTERIOR DE MANEJAR EL HOSTLISTENER
  // @HostListener('document:keyup', ['$event'])
  // handleKeyboardEvent(event: KeyboardEvent) {
  //   this.handleClick(event.key);
  // }
  private _calculatorService = inject(CalculatorService);

  // COMPUTED SIGNALS (SOLO LECTURA)
  resultText = computed(() => this._calculatorService.subResult());
  lastOperator = computed(() => this._calculatorService.lastOperator());
  subResult = computed(() => this._calculatorService.subResult());

  calculatorButtons = viewChildren(CalculatorButtonComponent);

  handleKeyboardEvent(event: KeyboardEvent) {
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      X: '*',
      '/': '÷',
      Enter: '=',
    };

    const key = event.key;
    const value = keyEquivalents[key] ?? key;

    this.handleClick(value);
    this.calculatorButtons().forEach((item) => {
      item.keyboardPresssedStyle(value);
    });
  }

  handleClick(key: string) {
    this._calculatorService.constructNumber(key);
  }
}
