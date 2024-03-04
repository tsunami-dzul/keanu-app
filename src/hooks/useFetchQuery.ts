import { UseQueryOptions, useMutation, useQuery } from 'react-query';
import { getPicture } from '../requests/picture.service';

interface IData {
  keanu: {
    image: string;
  };
}

interface IError {
  error: string | null;
}

export const useFetchPicture = () => {
  /* return useMutation({
    mutationKey: ['keanu-picture'],
    mutationFn: async (query: string) => await getPicture(query),
  }); */

  return useMutation<IData | undefined, string | null, string>(async (query: string) => await getPicture(query));
};
