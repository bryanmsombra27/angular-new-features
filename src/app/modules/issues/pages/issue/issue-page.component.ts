import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueNumberService } from '../../services/issue-number.service';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-issue-page',
  imports: [RouterLink, IssueCommentComponent, MarkdownModule],
  templateUrl: './issue-page.component.html',
  styles: ``,
})
export default class IssuePageComponent {
  private route = inject(ActivatedRoute);
  private issueService = inject(IssueNumberService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((issueNumber) => this.issueService.setIssueNumber(issueNumber))
    )
  );

  issueQuery = this.issueService.issuesQuery;
  issueComments = this.issueService.issueCommentQuery;
}
