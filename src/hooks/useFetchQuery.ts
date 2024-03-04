import { useMutation } from 'react-query';
import { getPicture } from '../requests/picture.service';
import { IData } from '../interfaces/IData';

export const useFetchPicture = () => {
  return useMutation<IData | null, string | null, string>(async (query: string) => await getPicture(query));
};
