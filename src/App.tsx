import { Provider } from 'react-redux';
import './assets/style/main.css';
import { Content } from './layout/Content';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

export default App;
