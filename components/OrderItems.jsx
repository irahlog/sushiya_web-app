import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

const OrderItems = () => {
  return (
    <div className='flex items-center space-x-8 px-4 py-3'>
      <div className='bg-black text-white px-2 rounded-full hover:bg-gray-200 hover:text-black cursor-pointer'>
        2
      </div>
      <div>
        <div className='text-lg'>Ramen</div>
        <div className='text-description text-xs'>No egg extra noodles</div>
        <div className='py-1'>$21.95</div>
      </div>
      <PencilSquareIcon className='h-6 w-6 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
      <TrashIcon className='h-6 w-6 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
    </div>
  );
};

export default OrderItems;
