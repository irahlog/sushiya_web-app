import { useState } from 'react';

import MenuModifier from './MenuModifier';

const MenuCard = ({ isModalOpen, setIsModalOpen, menuItem }) => {
  const [input, setInput] = useState('');
  const { name, price, description, image, associatedModifiers } = menuItem;

  return (
    <div>
      {isModalOpen ? (
        <>
          {/* <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none scrollbar-hide'> */}
          <div className='justify-center items-center flex overflow-scroll overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none scrollbar-hide overscroll-contain my-14'>
            <div className='relative w-2/4 my-6 mx-auto lg:max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"> */}
                <div className='flex items-start justify-between px-5 pt-5'>
                  <h3 className='text-3xl font-semibold'>{name}</h3>
                </div>
                <div className='relative px-6 flex-auto'>
                  <p className='my-4 text-slate-500 text-md leading-relaxed'>
                    {description}
                  </p>
                </div>
                {/*body modifiers*/}
                <div className='relative p-6 flex-auto'>
                  {associatedModifiers &&
                    associatedModifiers.map((item) => (
                      <MenuModifier
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
                  <form className='border-2 px-6 m-10'>
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      type='text'
                      placeholder='No substitutes. Additions may be charged extra.'
                      className='h-24 w-full text-xl outline-none placeholder:text-lg'
                    />
                  </form>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    // TODO: disable the button if all the required fields are not checked
                    // disabled={!input}
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setIsModalOpen(false)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </div>
  );
};

export default MenuCard;
