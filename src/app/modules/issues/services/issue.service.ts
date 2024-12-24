import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getLabels } from '../actions';
import { getIssues } from '../actions/getIssues';
import { State } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  selectedState = signal<State>(State.All);
  selectedLabels = signal(new Set<string>());

  // DE ESTA FORMA EN CUANTO SE INJECTE EL SERVICIO SE REALIZARA LA PETICION+
  labelsQuery = injectQuery(() => ({
    queryKey: ['labels'],
    queryFn: getLabels,
    refetchOnWindowFocus: false,
  }));

  issuesQuery = injectQuery(() => ({
    queryKey: [
      'issues',
      {
        state: this.selectedState(),
        selectedLabels: [...this.selectedLabels()],
      },
    ],
    queryFn: () => getIssues(this.selectedState(), [...this.selectedLabels()]),
    refetchOnWindowFocus: false,
  }));

  showIssuesByState(state: State) {
    this.selectedState.set(state);
  }

  toggleLabel(label: string) {
    const labels = this.selectedLabels();
    if (labels.has(label)) {
      labels.delete(label);
    } else labels.add(label);

    this.selectedLabels.set(new Set(labels));
  }
}
