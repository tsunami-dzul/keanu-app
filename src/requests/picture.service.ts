import { request } from 'graphql-request';
import { IData } from '../interfaces/IData';

const endpoint: string = process.env.REACT_APP_URL as string;

export const getPicture = async (query: string): Promise<IData> => {
  try {
    return await request(endpoint, query);
  } catch (error) {
    throw error;
  }
};
