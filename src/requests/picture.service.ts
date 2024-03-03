import { request } from 'graphql-request';

const endpoint: string = process.env.REACT_APP_URL as string;

export const getPicture = async (query: string) => {
  return await request(endpoint, query);
};
