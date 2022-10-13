import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  required: [],
  optional: [
    // FIXME: the console comes out differently when the initial value is added
    // {
    //   '2fa8ba69-aaca-4948-a5ac-b5d55faeb753': [
    //     {
    //       select: true,
    //       id: '26e881764cdf',
    //       item_name: 'Chicken',
    //       item_price: 1,
    //       modifier_id: '2fa8ba69-aaca-4948-a5ac-b5d55faeb753',
    //     },
    //     {
    //       select: true,
    //       id: '0e95c2254df1',
    //       item_name: 'Beef',
    //       item_price: 2,
    //       modifier_id: '2fa8ba69-aaca-4948-a5ac-b5d55faeb753',
    //     },
    //     {
    //       select: false,
    //       id: 'bc08d1b49163',
    //       item_name: 'Shrimp',
    //       item_price: 3,
    //       modifier_id: '2fa8ba69-aaca-4948-a5ac-b5d55faeb753',
    //     },
    //     {
    //       select: false,
    //       id: 'f8f74465989e',
    //       item_name: 'Chashu Pork',
    //       item_price: 3,
    //       modifier_id: '2fa8ba69-aaca-4948-a5ac-b5d55faeb753',
    //     },
    //     {
    //       select: false,
    //       id: 'caab6b3bb7bf',
    //       item_name: 'Hard-Boiled Egg',
    //       item_price: 1,
    //       modifier_id: '2fa8ba69-aaca-4948-a5ac-b5d55faeb753',
    //     },
    //     {
    //       select: false,
    //       id: 'e71e7b7c914a',
    //       item_name: 'Noodle',
    //       item_price: 5,
    //       modifier_id: '2fa8ba69-aaca-4948-a5ac-b5d55fae',
    //     },
    //   ],
    // },
  ],
};

const modifierSlice = createSlice({
  name: 'modifers',
  initialState,
  reducers: {
    addToRequiredMod(state, action) {
      console.log('payload in required mod ==>', action.payload);

      // state.items = [...state.items, action.payload];
    },
    addToOptionalMod(state, action) {
      // NOTE: Create a new deep cloned array
      // iterate throught the newArrowCheck
      // find the position index of the elem
      // if the key of the elem is equal to the key of the payload
      // replace delete 1 elem in that position and add action.payload
      // else, add the payload to the newArr
      const newArr = JSON.parse(JSON.stringify(state.optional));
      newArr.map((elem) => {
        const pos = newArr.indexOf(elem);
        if (Object.keys(elem) === Object.keys(action.payload)) {
          newArr.splice(pos, 1, action.payload);
        }
        newArr.push(action.payload);
      });
      console.log('newArr', newArr);
      // state.optional = newArr;
    },
    removeFromRequiredMod(state, action) {
      // const index = state.items.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // let newBasket = [...state.items];
      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn(
      //     `Can't remove product (id ${actiona.payload.id}) as it's not in basket!`
      //   );
      // }
      // state.items = newBasket;
    },
  },
});

export const { addToRequiredMod, addToOptionalMod, removeFromRequiredMod } =
  modifierSlice.actions;

// Selectors: Selectors will allow me to get access to global, pull the items from the basket out
// export const selectBasketItems = (state) => state.basket.items;

// export const selectBasketItemsWithId = (state, id) =>
//   state.basket.items.filter((item) => item.id === id);

// export const selectBasketTotal = (state) =>
//   state.basket.items.reduce((total, item) => (total += item.price), 0);

export default modifierSlice.reducer;
