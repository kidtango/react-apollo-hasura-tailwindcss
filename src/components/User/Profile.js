import React from 'react';
import { useAuth0 } from '../Auth/Auth';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_USERS = gql`
  {
    users {
      auth0_id
      nick_name
    }
  }
`;

const Profile = () => {
  const { authLoading, user } = useAuth0();
  const { loading, error, data } = useQuery(GET_USERS);

  if (authLoading || !user) {
    return <div>Loading...</div>;
  }

  console.log('TCL: Profile -> data', data);
  console.log('TCL: Profile -> error', error);

  return (
    <>
      <img src={user.picture} alt='Profile' />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
};

export default Profile;
