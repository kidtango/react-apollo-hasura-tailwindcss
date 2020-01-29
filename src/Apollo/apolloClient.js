import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { GRAPHQL_URL } from '../components/utils/constants';
import { getHeader } from '../components/utils/getHeader';

const cache = new InMemoryCache();

const makeApolloClient = bearerToken => {
  const client = new ApolloClient({
    uri: GRAPHQL_URL,
    headers: getHeader(bearerToken),
    cache
  });

  return client;
};

export default makeApolloClient;
