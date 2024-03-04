import { Picture } from '../features/picture/Picture';
import { useFetchPicture } from '../hooks/useFetchQuery';
import { Filters } from '../features/filter/Filters';

export const Home: React.FC = () => {
  const { mutate: filterData, data, isLoading, error } = useFetchPicture();

  return (
    <div className='home'>
      <Filters onFilter={filterData} />

      <Picture picture={data?.keanu.image} loading={isLoading} error={error} />
    </div>
  );
};
