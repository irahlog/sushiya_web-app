import { configureStore } from '@reduxjs/toolkit';
// import basketReducer from '../features/basketSlice';
// import restaurantReducer from '../features/restaurantSlice';
import modifierReducer from '../features/modifierSlice';

export const store = configureStore({
  reducer: {
    modifier: modifierReducer,
    // basket: basketReducer,
    // restaurant: restaurantReducer,
  },
});
