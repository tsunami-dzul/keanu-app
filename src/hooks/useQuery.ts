import { useQuery } from 'react-query';
import { getPicture } from '../requests/picture.service';

export const usePicture = (query: string) => {
  const queryData = useQuery('keanu-image', async (): Promise<unknown | string> => {
    return await getPicture(query);
  });

  return queryData;
};
