import React, { useState, useEffect } from 'react';

function RequiredModifier({ itemList, modId }) {
  const [itemSelected, setItemSelected] = useState();

  // Found the chosen item! later dispatch this to Redux!
  const [filteredMod, setFilteredMod] = useState([]);

  useEffect(() => {
    let filteredMod = itemList;

    const result = filteredMod.filter((item) => item._key == itemSelected);
    const newArr = result.map((v) => ({ ...v, modId: modId }));

    setFilteredMod(newArr);
  }, [itemList, itemSelected, modId]);

  // this function will be called when a radio button is checked
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
