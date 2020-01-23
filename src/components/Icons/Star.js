import React from 'react';

const Star = ({ property }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className='mt-2 flex items-center'>
      {stars.map(star => (
        <svg
          className={
            star <= property.rating
              ? `text-teal-500 h-4 w-4 fill-current`
              : `text-gray-500 h-4 w-4 fill-current`
          }
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          key={star}
        >
          <path d='M8.133 20.333c-1.147.628-2.488-.387-2.269-1.718l.739-4.488-3.13-3.178c-.927-.943-.415-2.585.867-2.78l4.324-.654 1.934-4.083a1.536 1.536 0 0 1 2.804 0l1.934 4.083 4.324.655c1.282.194 1.794 1.836.866 2.78l-3.129 3.177.739 4.488c.219 1.331-1.122 2.346-2.269 1.718L12 18.214l-3.867 2.119z' />
        </svg>
      ))}
      <span className='ml-2 text-gray-600 text-sm'>
        (base on {property.reviewCount} reviews)
      </span>
    </div>
  );
};

export default Star;
