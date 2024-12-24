import { Component, input, NO_ERRORS_SCHEMA } from '@angular/core';
import { IssuesResponse } from '../../interfaces';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'IssueComment',
  imports: [MarkdownModule],
  templateUrl: './issue-comment.component.html',
  styleUrl: './issue-comment.component.css',
  // schemas: [NO_ERRORS_SCHEMA],
})
export class IssueCommentComponent {
  issue = input.required<IssuesResponse>();
}
