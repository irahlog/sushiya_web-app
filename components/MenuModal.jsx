import { useState } from 'react';
import MenuModifier from './MenuModifier';
import { Modal } from '@mui/material';

import {
  XCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';

const MenuModal = ({ isModalOpen, setIsModalOpen, menuItem }) => {
  const { name, price, description, image, associatedModifiers, _id } =
    menuItem;

  const [input, setInput] = useState('');

  return (
    <div>
      {isModalOpen ? (
        <>
          <Modal
            open={isModalOpen}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white w-full h-full max-w-2xl max-h-[65rem] overflow-auto scrollbar-hide'>
              <div className='mx-8'>
                <div className='flex items-center sticky top-0 bg-white font-bold text-2xl py-6'>
                  <div className='flex-1'>{name}</div>
                  <XCircleIcon
                    onClick={() => setIsModalOpen(false)}
                    className='h-8 w-8 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'
                  />
                </div>
                <div>
                  <p className='mt-3'>{description}</p>
                  {/*body modifiers*/}
                  <div className=''>
                    {associatedModifiers &&
                      associatedModifiers.map((item) => (
                        <MenuModifier
                          id={item._id}
                          key={item._id}
                          forceMaximum={item.Force_Maximum}
                          forceMinimum={item.Force_Minimum}
                          itemList={item.itemList}
                          modifierName={item.modifier_name}
                          required={item.required}
                        />
                      ))}
                  </div>
                  <div>
                    <form className=''>
                      <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type='text'
                        placeholder='No substitutes. Additions may be charged extra.'
                        className='h-24 w-full outline-none placeholder:text-xs lg:placeholder:text-base bg-slate-100 p-4 my-3'
                      />
                    </form>
                  </div>
                </div>
                <div className='sticky bottom-0 bg-white w-full py-5'>
                  <span className='flex items-center space-x-3'>
                    <div className='flex items-center space-x-3'>
                      <MinusCircleIcon className='h-8 w-8 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                      <div className='font-bold text-md'>1</div>
                      <PlusCircleIcon className='h-8 w-8 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                    </div>
                    <div className='flex items-center bg-sushiya rounded-md w-full font-bold px-4 py-5 text-lg cursor-pointer'>
                      <div className='flex-1'>Add to Order 8</div>
                      <div>$55.94</div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : null}
    </div>
  );
};

export default MenuModal;

// TODO: Find out sticky positioning
// 1. I want the bottom sticky to be at the bottom of the container (works fine for ramen but not for items with no modifiers)
// 2. The sticky top title has a background of white but then it becomes transparent.
