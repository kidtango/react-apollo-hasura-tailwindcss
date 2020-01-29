import React from 'react';
import GlassIcon from '../Icons/GlassIcon';

const Searchbar = () => {
  return (
    <div className='flex justify-between bg-gray-800 px-4 py-3'>
      <div className='relative max-w-xs w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <GlassIcon />
        </div>
        <input
          className='block w-full bg-gray-900 text-white rounded-lg pl-10 py-2'
          type='text'
          placeholder='Search by keywords'
        />
      </div>
      <button className='bg-white border-gray-300 focus:text-gray-400 rounded-lg'>
        Filters
      </button>
    </div>
  );
};

export default Searchbar;
