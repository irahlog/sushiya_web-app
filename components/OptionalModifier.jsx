import React, { useState, useEffect } from 'react';

function OptionalModifer({ itemList, modId }) {
  const [modifierState, setModifierState] = useState([]);

  useEffect(() => {
    let modifierState = itemList;

    setModifierState(
      modifierState.map((modifer) => {
        return {
          select: false,
          id: modifer._key,
          item_name: modifer.item_name,
          item_price: modifer.item_price,
          modifier_id: modId,
        };
      })
    );
  }, [itemList, modId]);

  return (
    <div>
      {/* Select All Logic */}
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

      {modifierState.map((d, i) => (
        <div key={d.id}>
          <label className='flex items-center mx-4 cursor-pointer'>
            <div className='flex items-center  space-x-3 flex-1'>
              <input
                onChange={(event) => {
                  let checked = event.target.checked;
                  setModifierState(
                    modifierState.map((data) => {
                      if (d.id === data.id) {
                        data.select = checked;
                      }
                      return data;
                    })
                  );
                }}
                type='checkbox'
                checked={d.select}
              />
              <div>{d.item_name}</div>
            </div>
            <div>+ ${d.item_price.toFixed(2)}</div>
          </label>
        </div>
      ))}
    </div>
  );
}

export default OptionalModifer;
