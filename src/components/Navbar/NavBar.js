// src/components/NavBar.js

import React from 'react';
import { useAuth0 } from '../Auth/Auth';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import WorkcationLogo from '../Icons/WorkcationLogo';
import HamburgerMenu from '../Icons/HamburgerMenu';
import AccountDropdown from '../AccountDropdown/AccountDropdown';
import AccountMenu from './AccountMenu';

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
    <>
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
      <div className={`${isOpen ? 'block' : 'hidden'} sm:block`}>
        <div className='px-2 pt-2 pb-4 sm:p-0 sm:flex '>
          <NavLink
            to='/'
            className='block text-white font-semibold rounded hover:bg-gray-800 px-2 py-1'
          >
            List your property
          </NavLink>
          <NavLink
            to='/'
            className='block mt-1 text-white font-semibold rounded hover:bg-gray-800 px-2 py-1 sm:mt-0 sm:ml-2'
          >
            Trips
          </NavLink>
          <NavLink
            to='/'
            className='block mt-1 text-white font-semibold rounded mr-2 hover:bg-gray-800 px-2 py-1 sm:mt-0 sm:ml-2'
          >
            Messages
          </NavLink>

          {/* Only show dropdown menu on ipad and larger screens */}
          <div className='hidden sm:block ml-4'>
            <AccountDropdown />
          </div>
        </div>
        <div className='sm:hidden'>
          <AccountMenu />
        </div>
      </div>
    </>
  );
};

export default NavBar;
