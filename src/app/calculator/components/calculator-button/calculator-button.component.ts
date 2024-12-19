import {
  Component,
  ElementRef,
  HostBinding,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator.hostbinding.css',
  styles: ``,
  // de esta forma se puede aplicar las clases al wrapper que angular le pone al componente por defecto y asi adaptar los estilos para que el diseño no se vea afectado
  host: {
    class: 'border-r border-b border-indigo-400',
    // HOST BINDING FORMA RECOMENDADA
    '[class.w-2/4]': 'isDoubleSize()',
    '[class.w-1/4]': '!isDoubleSize()',
  },
  // encapsulation: ViewEncapsulation.None,
})
export class CalculatorButtonComponent {
  contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');
  isPressed = signal<boolean>(false);

  onClick = output<string>();

  isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value == '' : value,
  });
  isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value == '' : value,
  });

  // asi podemos condicionar si se requiere aplicar un estilo u otro dependiendo el binding de una señal
  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // }
  // @HostBinding('class.w-2/4') get commandStyle() {
  //   return this.isDoubleSize();
  // }
  handleClick() {
    if (!this.contentValue()?.nativeElement) return;

    const value = this.contentValue()!.nativeElement.innerText;

    this.onClick.emit(value.trim());
  }

  keyboardPresssedStyle(key: string) {
    if (!this.contentValue()) return;

    const value = this.contentValue()?.nativeElement.innerText;

    if (value !== key) return;

    this.isPressed.set(true);

    setTimeout(() => {
      this.isPressed.set(false);
    }, 100);
  }
}
