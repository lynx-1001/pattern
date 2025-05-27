import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://192.168.201.32:3000/graphql', // Your GraphQL server URL
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  // In a real app, you might get this from a more secure storage or state management
  let token = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('access_token');
  }

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