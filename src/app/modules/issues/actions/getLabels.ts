import { sleep } from '@helpers/sleep';
import { LabelResponse } from '../interfaces';
import { environment } from 'src/environments/environment.development';

const { baseUrl, github_token } = environment;

export const getLabels = async (): Promise<LabelResponse[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${baseUrl}/labels`, {
      headers: {
        Authorization: `Bearer ${github_token}`,
      },
    });
    if (!resp.ok) throw "Can't load labels";

    const data: LabelResponse[] = await resp.json();

    return data;
  } catch (error) {
    throw 'Cant load labels';
  }
};
