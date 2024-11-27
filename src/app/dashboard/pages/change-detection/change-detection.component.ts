import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Framework = {
  name: string;
  year: number;
  version: number;
};

@Component({
  selector: 'app-change-detection',
  imports: [TitleComponent, CommonModule],
  templateUrl: './change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``,
})
export default class ChangeDetectionComponent {
  frameworkSignal = signal<Framework>({
    name: 'Angular',
    version: 19,
    year: 2024,
  });
  frameworkProperty: Framework = {
    name: 'Angular',
    version: 19,
    year: 2024,
  };
  computedFramework = computed<string>(() => this.frameworkSignal().name);

  constructor() {
    setTimeout(() => {
      console.log('hecho');
      // this.frameworkProperty.name = 'React';
      this.frameworkSignal.update((state) => ({
        ...state,
        name: 'React',
      }));
    }, 3000);
  }
}
