import { Component, inject, input } from '@angular/core';
import { LabelResponse } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'IssueLabelSelector',
  imports: [CommonModule],
  templateUrl: './label-selector.component.html',
  styles: ``,
})
export class LabelSelectorComponent {
  labels = input.required<LabelResponse[]>();
  private issueService = inject(IssueService);

  isSelected(labelName: string) {
    this.issueService.selectedLabels().has(labelName);
  }

  toggleLabel(label: string) {
    this.issueService.toggleLabel(label);
  }
}
