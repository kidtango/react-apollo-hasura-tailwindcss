function userSyncRule(user, context, callback) {
  const userId = user.user_id;
  const nickname = user.nickname;
  const picture = user.picture;
  const email = user.email;
  const name = user.name;

  const mutation = `mutation($userId: String!, $nickname: String, $email: String, $picture: String, $name: String) {
    insert_users(objects: [{
        auth0_id: $userId,
        nick_name: $nickname,
				picture: $picture,
				email: $email,
				name: $name
      }],
      on_conflict: {
        constraint: users_pkey,
        update_columns: [last_seen, name]
      }) {
        affected_rows
      }
    }`;

  request.post(
    {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': configuration.ACCESS_KEY
      },
      url: 'https://dc-pipe.herokuapp.com/v1/graphql',
      body: JSON.stringify({
        query: mutation,
        variables: { userId, nickname, email, picture, name }
      })
    },
    function(error, response, body) {
      console.log(body);
      callback(error, user, context);
    }
  );
}
