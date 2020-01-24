import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useAuth0 } from './Auth/Auth';
import NavBar from './Navbar/NavBar';
import { Router, Switch, Route } from 'react-router-dom';
import Profile from './User/Profile';
import history from './utils/history';
import PrivateRoute from './PrivateRoute';
import makeApolloClient from '../Apollo/apolloClient';
import WorkcationHome from './home/WorkcationHome';
import { ScaleLoader } from 'react-spinners';
import WorkcationLogo from './Icons/WorkcationLogo';

const App = () => {
  const { authLoading, bearerToken } = useAuth0();

  if (authLoading) {
    return (
      <div class='bg-gray-900 flex justify-between sm:px-4 sm:py-3 sm:items-center'>
        <div>
          <WorkcationLogo />
        </div>
        <div>
          <ScaleLoader color={'#A3BFFA'} />
        </div>
      </div>
    );
  }

  // Get Apollo client
  const client = makeApolloClient(bearerToken);

  return (
    <div className='antialiased text-gray-900'>
      <ApolloProvider client={client}>
        <Router history={history}>
          <header>
            <NavBar />
          </header>
          <section className='bg-gray-800'>
            <input type='text' placeholder='Search by keywords' />
            <button className='bg-white border-gray-300 focus:text-gray-400 rounded-lg'>
              Filters
            </button>
          </section>
          <main>
            <div>
              <h3>Lost Angoles</h3>
              <p>
                Live like the stars in these luxurious Southern California
                estates
              </p>
            </div>
            <Switch>
              <Route exact path='/' component={WorkcationHome} />
              <PrivateRoute path='/profile' component={Profile} />
            </Switch>
          </main>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
