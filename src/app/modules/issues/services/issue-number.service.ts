import { Injectable, signal } from '@angular/core';
import {
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental';
import { getIssue, getIssueByComments } from '../actions';
import { IssuesResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class IssueNumberService {
  private issueNumber = signal<string | null>(null);
  private queryClient = injectQueryClient();

  issuesQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssue(this.issueNumber()!),
    enabled: this.issueNumber !== null,
    refetchOnWindowFocus: false,
  }));

  issueCommentQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), 'comments'],
    queryFn: () => getIssueByComments(this.issueNumber()!),
    enabled: this.issueNumber !== null,
    refetchOnWindowFocus: false,
  }));

  setIssueNumber(issueNumber: string) {
    this.issueNumber.set(issueNumber);
  }

  prefetchIssue(id: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['issue', id],
      queryFn: () => getIssue(id),
      staleTime: 1000 * 60 * 5, //minutos
    });
  }

  setIssueData(issue: IssuesResponse) {
    this.queryClient.setQueryData(['issue', issue.id.toString()], issue, {
      updatedAt: Date.now() * 1000 * 60,
    });
  }
}
