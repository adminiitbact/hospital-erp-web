import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';


// TODO: remove ip addess and use domain name
const url = 'http://3.7.137.169:8080/v1/graphql';
const httpLink = createHttpLink({ uri: url });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('authToken');

  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});


const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
