import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import Layout from '@/layouts/Layout';
import Loading from './components/Loading';

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>{useRoutes(routes)}</Suspense>
    </Layout>
  );
}

export default App;
