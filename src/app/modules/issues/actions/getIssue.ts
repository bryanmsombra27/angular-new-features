import { sleep } from '@helpers/sleep';
import { IssuesResponse } from '../interfaces';
import { environment } from 'src/environments/environment.development';

const { baseUrl, github_token } = environment;

export const getIssue = async (id: string): Promise<IssuesResponse> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${baseUrl}/issues/${id}`, {
      headers: {
        Authorization: `Bearer ${github_token}`,
      },
    });
    if (!resp.ok) throw "Can't load issues";

    const data: IssuesResponse = await resp.json();

    return data;
  } catch (error) {
    throw 'Cant load issues';
  }
};
