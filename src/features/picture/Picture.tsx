import { request, gql } from 'graphql-request';
import { usePicture } from '../../hooks/useQuery';

const KEANU_QUERY = gql`
  {
    keanu(width: "800", height: "500") {
      image
    }
  }
`;

export const Picture = () => {
  const { data, isLoading, error }: any = usePicture(KEANU_QUERY);

  if (isLoading) return <div>Is loading...</div>;

  return <div className='picture' dangerouslySetInnerHTML={{ __html: data?.keanu.image }}></div>;
};
