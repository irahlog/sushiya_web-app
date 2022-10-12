import React from 'react';
import RequiredModifier from './RequiredModifier';
import OptionalModifier from './OptionalModifier';
import QuestionMarkCircleIcon from '@heroicons/react/24/solid';

const MenuModifier = ({
  id,
  key,
  forceMaximum,
  forceMinimum,
  itemList,
  modifierName,
  required,
}) => {
  return (
    <div key={id}>
      {/* Modifier Name */}
      <div className='flex my-3'>
        <div className='flex-1 px-4 pt-6 mb-3 font-bold text-xl'>
          {modifierName}
        </div>
        <div>
          {required ? (
            <div className='flex-row items-center bg-amber-200 mx-4 mt-6 mb-3 px-1 rounded-md'>
              {/* <QuestionMarkCircleIcon className='h-6 w-6 text-gray-300' /> */}
              <div>Required</div>
            </div>
          ) : (
            <div className='bg-gray-200 mx-4 mt-6 mb-3 px-1 rounded-md'>
              Optional
            </div>
          )}
        </div>
      </div>
      {/* Modifier Choices */}
      {required ? (
        // <RequiredModifier itemList={itemList} modifierName={modifierName} />
        <RequiredModifier itemList={itemList} modId={id} />
      ) : (
        <OptionalModifier itemList={itemList} modId={id} />
      )}
    </div>
  );
};

export default MenuModifier;
