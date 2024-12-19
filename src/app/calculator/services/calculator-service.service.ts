import { Injectable, signal } from '@angular/core';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/', '÷'];
const specialOperators = ['+/-', '%', '.', '=', 'C'];
@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  resultIndex = signal<string>('0');
  subResult = signal<string>('0');
  lastOperator = signal<string>('+');

  constructNumber(value: string) {
    if (![...numbers, ...operators, ...specialOperators].includes(value)) {
      console.error('caracter no valido', value);
      return;
    }

    if (value === '=') {
    }

    if (value === 'C') {
      this.resultIndex.set('0');
      this.subResult.set('0');
      this.lastOperator.set('+');

      return;
    }
    // backspace
    if (value === 'Backspace') {
      if (this.resultIndex() == '0') return;
      if (this.resultIndex().includes('-') && this.resultIndex().length === 2) {
        this.resultIndex.set('0');
        return;
      }
      if (this.resultIndex().length == 1) {
        this.resultIndex.set('0');
        return;
      }

      this.resultIndex.update((state) => state.slice(0, -1));
      return;
    }

    // operadores
    if (operators.includes(value)) {
      this.calculateResult();
      this.lastOperator.set(value);
      this.subResult.set(this.resultIndex());
      this.resultIndex.set('0');
      return;
    }
    // limitar caracteres
    if (this.resultIndex().length > 10) {
      console.error('ma length reached');
      return;
    }

    // VALIDAR . DECIMAIL
    if (value === '.' && !this.resultIndex().includes('.')) {
      if (this.resultIndex() === '0' || this.resultIndex() === '') {
        this.resultIndex.set('0.');
        return;
      }
      this.resultIndex.update((state) => state + '.');

      return;
    }

    // MANEJO DEL 0 INICIAL
    if (
      value === '0' &&
      (this.resultIndex() === '0' || this.resultIndex() === '-0')
    ) {
      return;
    }

    // CAMBIAR SIGNO
    if (value === '+/-') {
      if (this.resultIndex().includes('-')) {
        this.resultIndex.update((state) => state.slice(1));
        return;
      }
      this.resultIndex.update((state) => '-' + state);
      return;
    }

    if (numbers.includes(value)) {
      if (this.resultIndex() === '0') {
        this.resultIndex.set(value);
        return;
      }

      if (this.resultIndex() === '-0') {
        this.resultIndex.set(`-${value}`);
        return;
      }
    }

    this.resultIndex.update((state) => state + value);
  }

  calculateResult() {
    const num1 = +this.subResult();
    const num2 = +this.resultIndex();

    let result = 0;

    switch (this.lastOperator()) {
      case '+':
        result = num1 + num2;

        break;
      case '-':
        result = num2 + num1;

        break;
      case '*':
        result = num1 * num2;

        break;
      case '/':
        result = num2 / num1;

        break;
      case '÷':
        result = num2 / num1;

        break;

      default:
        break;
    }

    this.resultIndex.set(result.toString());
    this.subResult.set('0');
  }
}
