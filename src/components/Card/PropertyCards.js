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
    <div className='bg-white border rounded-lg overflow-hidden max-w-sm shadow-lg'>
      <img src={property.imageUrl} alt={property.iamgeAlt} className='w-full' />
      <div className='p-6'>
        <div className='text-gray-600 text-xs uppercase font-semibold tracking-wide'>
          {property.beds} beds &bull; {property.baths} baths
        </div>
        <h4 className='font-semibold text-lg leading-tight truncate'>
          {property.title}
        </h4>

        <div className='mt-1'>
          {property.formattedPrice}{' '}
          <span className='text-gray-600 text-sm'>/ wk</span>
        </div>
        <Star property={property} />
      </div>
    </div>
  );
};

export default PropertyCards;
