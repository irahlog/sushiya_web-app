import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToRequiredMod } from '../features/modifierSlice';

function RequiredModifier({ itemList, modId }) {
  const [filteredMod, setFilteredMod] = useState({});
  const [itemSelected, setItemSelected] = useState('');

  console.log('$$$$$$$$$ itemSelected', itemSelected);
  console.log('$$$$$$$$$ filteredMod', filteredMod);

  useEffect(() => {
    setFilteredMod(itemList.find((elem) => elem._key === itemSelected));
  }, [itemList, itemSelected, modId]);

  const newObj = new Object();
  newObj[modId] = filteredMod;

  const dispatch = useDispatch();
  dispatch(addToRequiredMod(newObj));

  // this function will be called when a radio button is checked
  // this is where itemSelected variable gets stored "modId"
  const handleChange = (e) => {
    setItemSelected(e.target.value);
  };

  return (
    <div>
      <form>
        <fieldset>
          <label>
            {itemList.map((item) => {
              return (
                <div
                  key={item._key}
                  className='flex items-center mx-4 cursor-pointer'
                >
                  <div className='flex items-center  space-x-3 flex-1'>
                    <input
                      type='radio'
                      name={item.item_name}
                      id={item._key}
                      value={item._key}
                      onChange={handleChange}
                      checked={itemSelected === item._key}
                      className='cursor-pointer'
                    />
                    <label htmlFor={item._key} className='cursor-pointer'>
                      <div>{item.item_name}</div>
                    </label>
                  </div>
                  <div>+ ${item.item_price.toFixed(2)}</div>
                </div>
              );
            })}
          </label>
        </fieldset>
      </form>
    </div>
  );
}

export default RequiredModifier;

// FIXME:
// TL;DR: Required mods are getting fired twice.... why?
