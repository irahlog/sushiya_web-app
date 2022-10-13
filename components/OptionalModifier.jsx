import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToOptionalMod } from '../features/modifierSlice';

function OptionalModifier({ itemList, modId }) {
  const [modifierState, setModifierState] = useState([]);
  const [finalizedOutput, setfinalizedOutput] = useState();

  // Initially, create a copy of the itemList array and for each elem, add key:value pair fo select and default is false
  // This logic will be in useEffect hook because we want to perform this when the component mounts.
  useEffect(() => {
    let modifierState = itemList;

    setModifierState(
      modifierState.map((modifier) => {
        // Instead of returning a new obj, I am making a deep clone of the obj.
        return {
          select: false,
          id: modifier._key,
          item_name: modifier.item_name,
          item_price: modifier.item_price,
          modifier_id: modId,
        };
      })
    );
  }, [itemList, modId]);

  // QUESTION: Do I need to wrap this put this in useEffect hook?
  // QUESTION: Do I create a state for newObj? Is it necessary?
  const newObj = new Object();
  newObj[modId] = modifierState;
  console.log('hello');

  const dispatch = useDispatch();
  dispatch(addToOptionalMod(newObj));

  return (
    <div>
      {/* NOTE: Select All CheckBoxs logic */}
      {/* <input
        type='checkbox'
        onChange={(e) => {
          let checked = e.target.checked;
          setModifierState(
            modifierState.map((d) => {
              d.select = checked;
              return d;
            })
          );
        }}
      ></input> */}

      {modifierState.map((modifier) => (
        <div key={modifier.id}>
          <label className='flex items-center mx-4 cursor-pointer'>
            <div className='flex items-center  space-x-3 flex-1'>
              <input
                onChange={(event) => {
                  let checked = event.target.checked;
                  setModifierState(
                    modifierState.map((data) => {
                      const newA = JSON.parse(JSON.stringify(data));
                      if (modifier.id === newA.id) {
                        newA.select = checked;
                      }
                      return newA;
                    })
                  );
                }}
                type='checkbox'
                checked={modifier.select}
              />
              <div>{modifier.item_name}</div>
            </div>
            <div>+ ${modifier.item_price.toFixed(2)}</div>
          </label>
        </div>
      ))}
    </div>
  );
}

export default OptionalModifier;

// TL;DR: The mods in optional gets fired twice initially 1) when it first mounts, 2) when the dependent variable changes.
// when I click on the checkbox choices, it fires off once
