import React from 'react';
import createBrowserHistory from './utils/history';
import { useAuth0 } from './Auth/Auth';
import NavBar from './Navbar/NavBar';
import { Router, Switch, Route } from 'react-router-dom';
import Profile from './User/Profile';
import history from './utils/history';

const App = () => {
  const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log('TCL: App -> user', user);

  return (
    <div className='App'>
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path='/' exact />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
