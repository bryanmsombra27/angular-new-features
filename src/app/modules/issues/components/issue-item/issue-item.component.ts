import { Component, inject, input, signal } from '@angular/core';
import { IssuesResponse, State } from '../../interfaces';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IssueNumberService } from '../../services/issue-number.service';

@Component({
  selector: 'IssueItem',
  imports: [RouterLink, CommonModule],
  templateUrl: './issue-item.component.html',
  styles: ``,
})
export class IssueItemComponent {
  issue = input.required<IssuesResponse>();
  issueService = inject(IssueNumberService);

  get isOpen() {
    return this.issue().state === State.Open;
  }

  prefetchData() {
    // this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.setIssueData(this.issue());
  }
}
