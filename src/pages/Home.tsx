import { Picture } from '../features/picture/Picture';
import { Filters } from '../features/filter/Filters';

export const Home: React.FC = () => {
  return (
    <div className='home'>
      <Filters />

      <Picture />
    </div>
  );
};
