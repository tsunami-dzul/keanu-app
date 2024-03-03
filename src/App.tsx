import './assets/style/main.css';
import { Content } from './layout/Content';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <Content />
    </QueryClientProvider>
  );
}

export default App;
