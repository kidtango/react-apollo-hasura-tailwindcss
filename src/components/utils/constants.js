const HASURA_GRAPHQL_ENGINE_HOSTNAME = 'dc-pipe.herokuapp.com';

const scheme = proto => {
  return window.location.protocol === 'https:' ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  'https'
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const REALTIME_GRAPHQL_URL = `${scheme(
  'ws'
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;
export const authClientId = '254gyEVZx1tBraLZZDJI4YwilQ5x0JI7';
export const authDomain = 'dev-ry212rp7.auth0.com';
// export const callbackUrl = `${scheme(
//   'https'
// )}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/callback`;
export const callbackUrl = `http://localhost:3000/callback`;
