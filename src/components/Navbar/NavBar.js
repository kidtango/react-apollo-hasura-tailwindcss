// src/components/NavBar.js

import React from 'react';
import { useAuth0 } from '../Auth/Auth';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import WorkcationLogo from '../Icons/WorkcationLogo';
import HamburgerMenu from '../Icons/HamburgerMenu';
import AccountDropdown from '../AccountDropdown/AccountDropdown';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <div>
    //   {!isAuthenticated && (
    //     <button onClick={() => loginWithRedirect({})}>Log in</button>
    //   )}

    //   {isAuthenticated && <button onClick={() => logout()}>logout</button>}

    //   {isAuthenticated && (
    //     <span>
    //       <Link to='/'>Home</Link>
    //       <Link to='/profile'>Profile</Link>
    //     </span>
    //   )}
    // </div>
    <header className='bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center'>
      <div className='flex items-center justify-between px-4 py-3'>
        <div>
          <WorkcationLogo />
        </div>

        <div>
          <button
            type='button'
            className='px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white block sm:hidden'
            onClick={() => handleClick()}
          >
            <HamburgerMenu isOpen={isOpen} />
          </button>
        </div>
      </div>
      <div
        className={`px-2 pt-2 pb-4 sm:block sm:flex  ${isOpen ? '' : 'hidden'}`}
      >
        <NavLink
          to='/'
          className='block text-white font-semibold rounded hover:bg-gray-800 px-2'
        >
          List your property
        </NavLink>
        <NavLink
          to='/'
          className='block mt-1 text-white font-semibold rounded hover:bg-gray-800 px-2 sm:mt-0 sm:ml-2'
        >
          Trips
        </NavLink>
        <NavLink
          to='/'
          className='block mt-1 text-white font-semibold rounded hover:bg-gray-800 px-2 sm:mt-0 sm:ml-2'
        >
          Messages
        </NavLink>
      
      </div>
        <AccountDropdown />
    </header>
  );
};

export default NavBar;
