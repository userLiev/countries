import { ApolloProvider } from '@apollo/client';
import { FC } from 'react';
import client from './infra/client/client';
import Router from './presentation/Router';
import './index.scss';

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
