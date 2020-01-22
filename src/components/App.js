import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useAuth0 } from './Auth/Auth';
import NavBar from './Navbar/NavBar';
import { Router, Switch, Route } from 'react-router-dom';
import Profile from './User/Profile';
import history from './utils/history';
import PrivateRoute from './PrivateRoute';
import makeApolloClient from './apollo';

const App = () => {
  const { authLoading, bearerToken } = useAuth0();

  if (authLoading) {
    return <div>Loading...</div>;
  }

  // Get Apollo client
  const client = makeApolloClient(bearerToken);

  return (
    <ApolloProvider client={client}>
      <div className='bg-gray-500'>
        <Router history={history}>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route path='/' exact />
            <PrivateRoute path='/profile' component={Profile} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;
