import React from 'react';
import Star from '../Icons/Star';

const property = {
  imageUrl: 'http://edc.h-cdn.co/assets/16/26/1467044486-st-lucia.jpg',
  iamgeAlt: 'Rear view of modern home with pool',
  beds: 3,
  baths: 2,
  title: 'Modern home in city center ',
  priceInCents: 19000,
  formattedPrice: '$1,900.00',
  reviewCount: 34,
  rating: 3
};

const PropertyCards = () => {
  return (
    <div>
      <div className='relative pb-5/6'>
        <img
          className=' absolute top-0 w-full h-full object-cover rounded-lg shadow-md'
          src={property.imageUrl}
          alt={property.iamgeAlt}
        />
      </div>
      <div className='relative px-4 -mt-16'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <div className='flex items-baseline'>
            <span className='bg-teal-500 text-white text-xs px-2 uppercase font-semibold inline-block rounded-full tracking-wide'>
              New
            </span>
            <div className='ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide'>
              {property.beds} beds &bull; {property.baths} baths
            </div>
          </div>

          <h4 className='font-semibold text-lg leading-tight truncate mt-1'>
            {property.title}
          </h4>

          <div className='mt-1'>
            {property.formattedPrice}{' '}
            <span className='text-gray-600 text-sm'>/ wk</span>
          </div>
          <Star property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyCards;
