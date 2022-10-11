import MenuItems from './MenuItems';
import Image from 'next/image';
import { useState } from 'react';

import { InformationCircleIcon } from '@heroicons/react/24/outline';

const MainSection = ({
  abouUs,
  address,
  menuItemCategories,
  name,
  openingHours,
  image,
  shortDescription,
}) => {
  const [moreInfoIsOpen, setMoreInfoIsOpen] = useState(false);
  return (
    <div className='col-span-12 lg:col-span-9 lg:max-w-6xl mx-auto'>
      <Image
        src={image}
        alt=''
        className='h-10 w-10 m-5 ml-0 mb-1 rounded-lg object-cover shadow-sm bg-red-500'
      />
      <div>{name}</div>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <div className=''>Open Now · </div>
          <div>Closes at 8pm</div>
        </div>
        <div
          onClick={() => setMoreInfoIsOpen(!moreInfoIsOpen)}
          className='flex items-center space-x-2 py-1 px-3 bg-gray-200 rounded-full font-bold hover:bg-gray-300 cursor-pointer'
        >
          <InformationCircleIcon className='h-6 w-6' />
          <div>More Info</div>
        </div>
      </div>

      {/* Navigation Scroll Indicator */}
      <div></div>
      {/* TODO: I want one row for each item; cant this be solved using flexbox? */}
      {/* <div className='bg-red-300'> */}
      <div className=''>
        {menuItemCategories?.map((section) => (
          <MenuItems
            key={section._id}
            id={section._id}
            name={section.name}
            description={section.description}
            image={section.image}
            availability={section.availability}
            associatedMenuItems={section.associatedMenuItems}
          />
        ))}
      </div>
      <div>
        2,000 calories a day is used for general nutrition advice, but calorie
        needs vary.
      </div>
    </div>
  );
};

export default MainSection;
