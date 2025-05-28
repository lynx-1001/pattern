import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getToken } from './auth/useAuthToken';

const httpLink = createHttpLink({
  uri: 'http://192.168.201.32:3000/graphql', // Your GraphQL server URL
});

const authLink = setContext((_, { headers }) => {

const token = getToken();
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;