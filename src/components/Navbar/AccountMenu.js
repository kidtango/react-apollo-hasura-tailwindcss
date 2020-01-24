import React from 'react';
import { Link } from 'react-router-dom';

const AccountMenu = () => {
  return (
    <div className='px-4 py-5 border-t border-gray-800'>
      <div className='block h-8 w-8 rounded-full border-2 border-gray-600'>
        {/* <UserIcon /> */}
        <img
          className='h-full w-full object-cover'
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3744&q=80'
          alt='avatar'
        />
      </div>

      <div className='mt-4'>
        <Link
          className='block text-gray-400 hover:bg-gray-800 rounded hover:bg-gray-800'
          to='/'
        >
          Account settings
        </Link>
        <Link
          className='block mt-2 text-gray-400 hover:bg-gray-800 rounded hover:bg-gray-800'
          to='/'
        >
          Support
        </Link>
        <Link
          className='block mt-2 text-gray-400 hover:bg-gray-800 rounded hover:bg-gray-800'
          to='/'
        >
          Sign out
        </Link>
      </div>
    </div>
  );
};

export default AccountMenu;
