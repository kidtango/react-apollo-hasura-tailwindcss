// src/components/NavBar.js

import React from 'react';
import { useAuth0 } from '../Auth/Auth';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>logout</button>}

      {isAuthenticated && (
        <span>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
