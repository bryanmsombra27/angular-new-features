import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IssueService } from '../../services/issue.service';
import { LabelSelectorComponent } from '../label-selector/label-selector.component';
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';
import { State } from '../../interfaces';

@Component({
  selector: 'app-issues-list',
  imports: [LabelSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list.component.html',
  styles: ``,
})
export default class IssuesListComponent {
  private issueService = inject(IssueService);

  get selectedState() {
    return this.issueService.selectedState();
  }

  get labelQuery() {
    return this.issueService.labelsQuery;
  }
  get issueQuery() {
    return this.issueService.issuesQuery;
  }

  onChangeState(newState: string) {
    const state =
      {
        all: State.All,
        open: State.Open,
        closed: State.Closed,
      }[newState] ?? State.All;

    this.issueService.showIssuesByState(state);
  }
}
