import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styles: ``,
})
export class TitleComponent {
  @Input({
    required: true,
  })
  title!: string;
  @Input({
    transform: booleanAttribute,
  })
  hasShadow!: boolean;
}
