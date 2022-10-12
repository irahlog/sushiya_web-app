import { createSlice } from '@reduxjs/toolkit';

const initialState = { required: [], optional: [] };

const modifierSlice = createSlice({
  name: 'modifers',
  initialState,
  reducers: {
    addToRequiredMod(state, action) {
      console.log('payload in required mod ==>', action.payload);

      // state.items = [...state.items, action.payload];
    },
    addToOptionalMod(state, action) {
      // state.items = [...state.items, action.payload];
      console.log('payload in optional mod ==>', action.payload);
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
