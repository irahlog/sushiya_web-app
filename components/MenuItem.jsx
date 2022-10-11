import { useState } from 'react';
import Image from 'next/image';
import Ramen from '../public/assets/doordashPics/ramen.webp';

const MenuItem = ({ name, description, price }) => {
  return (
    <div className='border-2 rounded-md border-gray-300 shadow p-5 m-3 cursor-pointer'>
      <div className='font-bold text-lg mb-1'>{name}</div>
      <div className='text-gray-400'>{description}</div>
      <div className='text-gray-600 mt-2 font-semibold'>{price}</div>
    </div>
  );
};

export default MenuItem;
