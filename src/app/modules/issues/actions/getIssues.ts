import { sleep } from '@helpers/sleep';
import { IssuesResponse, State } from '../interfaces';
import { environment } from 'src/environments/environment.development';

const { baseUrl, github_token } = environment;

export const getIssues = async (
  state: State = State.All,
  selectedLabels: string[]
): Promise<IssuesResponse[]> => {
  await sleep(1500);

  const params = new URLSearchParams();

  params.append('state', state);

  if (selectedLabels.length > 0) {
    params.append('labels', selectedLabels.join(','));
  }

  try {
    const resp = await fetch(`${baseUrl}/issues?${params}`, {
      headers: {
        Authorization: `Bearer ${github_token}`,
      },
    });
    if (!resp.ok) throw "Can't load issues";

    const data: IssuesResponse[] = await resp.json();

    return data;
  } catch (error) {
    throw 'Cant load issues';
  }
};
