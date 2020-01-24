import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../Auth/Auth';
import UserIcon from '../Icons/UserIcon';

const AccountDropdown = () => {
  const { user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button
        className='relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white'
        onClick={handleClick}
      >
        {/* <UserIcon /> */}
        <img
          className='h-full w-full object-cover'
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3744&q=80'
          alt='avatar'
        />
      </button>
      <button
        className={`fixed inset-0 h-full w-full bg-black opacity-50 cursor-default ${
          isOpen ? '' : 'hidden'
        }`}
        onClick={handleClick}
        tabIndex='-1'
      ></button>
      <div
        className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl ${
          isOpen ? '' : 'hidden'
        }`}
      >
        <Link
          className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'
          to='/'
        >
          Account settings
        </Link>
        <Link
          className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'
          to='/'
        >
          Support
        </Link>
        <Link
          className='block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white'
          to='/'
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default AccountDropdown;
