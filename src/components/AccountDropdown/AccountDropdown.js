import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../Auth/Auth';
import UserIcon from '../Icons/UserIcon';

const AccountDropdown = () => {
  const { user } = useAuth0();

  return (
    <div className='text-white'>
      <button className="block h-8 w-8 rounded-full">
        {/* <UserIcon /> */}
        <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3744&q=80" alt="avatar"/>
      </button>
      <div>
        <Link to='/'>Account settings</Link>
        <Link to='/'>Support</Link>
        <Link to='/'>Sign out</Link>
      </div>
    </div>
  );
};

export default AccountDropdown;
