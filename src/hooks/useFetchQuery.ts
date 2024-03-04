import { UseQueryOptions, useMutation, useQuery } from 'react-query';
import { getPicture } from '../requests/picture.service';

interface IKeanu {
  image: string;
}

interface IData {
  data: IKeanu;
}

interface IError {
  error: string;
}

export const useFetchPicture = () => {
  return useMutation({
    mutationKey: ['keanu-picture'],
    mutationFn: async (query: string) => await getPicture(query),
  });
};
