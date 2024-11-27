import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

@Component({
  selector: 'app-control-flow',
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  showContent = signal<boolean>(false);
  grade = signal<Grade>('A');
  frameworks = signal<string[]>(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  frameworks2 = signal<string[]>([]);

  toggleContent() {
    this.showContent.update((state) => !state);
  }

  changeGrade(value: Grade) {
    this.grade.update(() => value);
  }
}
