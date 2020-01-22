import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { GRAPHQL_URL } from '../components/utils/constants';
import { getHeader } from './utils/getHeader';

const makeApolloClient = bearerToken => {
  const client = new ApolloClient({
    uri: GRAPHQL_URL,
    headers: getHeader(bearerToken),
    cache: new InMemoryCache({ addTypename: true })
  });

  return client;
};

export default makeApolloClient;
