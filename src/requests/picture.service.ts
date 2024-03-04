import { request } from 'graphql-request';

const endpoint: string = process.env.REACT_APP_URL as string;

interface IData {
  keanu: {
    image: string;
  };
}

export const getPicture = async (query: string): Promise<IData> => {
  try {
    return await request(endpoint, query);
  } catch (error) {
    throw error;
  }
};
