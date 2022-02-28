import {
  ApolloClient, InMemoryCache, HttpLink, ApolloLink,
} from '@apollo/client';

const uri = String(process.env.REACT_APP_API_URL);

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri,
});

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache,
});

export default client;
