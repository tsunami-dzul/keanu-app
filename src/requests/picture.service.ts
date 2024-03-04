import { request } from 'graphql-request';
import { IData } from '../interfaces/IData';

const endpoint: string = process.env.REACT_APP_URL as string;

export const getPicture = async (query: string): Promise<IData | null> => {
  try {
    return await request<IData>(endpoint, query);
  } catch (error) {
    throw error;
  }
};
