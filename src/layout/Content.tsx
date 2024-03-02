import { Home } from '../pages/Home';
import { Header } from './Header';

export const Content: React.FC = () => {
  return (
    <div className='content'>
      <Header />
      <Home />
    </div>
  );
};
