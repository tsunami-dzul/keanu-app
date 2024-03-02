import { Filter } from '../features/filter/Filter';
import { Picture } from '../features/picture/Picture';

export const Home: React.FC = () => {
  return (
    <div className='home'>
      <Filter />
      <Picture />
    </div>
  );
};
