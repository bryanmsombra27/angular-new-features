import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'app-material',
  imports: [MatSlideToggleModule, MatIconModule, MatBadgeModule],
  templateUrl: './material.component.html',
  styles: `
    :host {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.demo-section + .demo-section {
  margin-top: 16px;
}

  `,
})
export default class MaterialComponent {}
