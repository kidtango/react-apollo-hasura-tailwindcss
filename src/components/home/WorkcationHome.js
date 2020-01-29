import React from 'react';
import PropertyCard from '../Card/PropertyCards';

import Searchbar from './Searchbar';

const WorkcationHome = () => {
  return (
    <>
      <Searchbar />
      <div className='bg-gray-200 min-h-screen p-2'>
        <div>
          <h3>Lost Angoles</h3>
          <p>
            Live like the stars in these luxurious Southern California estates
          </p>
        </div>
        {/* <div className=' flex-column'>
          <PropertyCard />
        </div> */}
      </div>
    </>
  );
};

export default WorkcationHome;
