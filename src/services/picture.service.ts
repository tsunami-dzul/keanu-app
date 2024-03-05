import { gql, request } from 'graphql-request';
import { IData } from '../interfaces/IData';

const endpoint: string = process.env.REACT_APP_URL as string;

export const getPictureService = async (query: string): Promise<IData | null> => {
  try {
    const queryData = gql`
        {
            keanu(${query}) 
            {
              image
            }
        }`;

    return await request<IData>(endpoint, queryData);
  } catch (error) {
    throw error;
  }
};
