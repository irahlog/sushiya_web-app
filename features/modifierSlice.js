import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  required: [],
  optional: [],
};

const modifierSlice = createSlice({
  name: 'modifiers',
  initialState,
  reducers: {
    addRequiredMod: (state, { payload }) => {
      // state.required = [...state.required, payload];
      console.log('required mod!');
    },
    addOptionalMod: (state, action) => {
      // state.optional = [action.payload];
      console.log('optional mod!');
    },
  },
});

// const initialState = {
//   modifiers: {
//     required: [{ modifierName: 'proteins', selectedModifier: 'chicken' }],
//     optional: [{ modifierName: 'extras', selectedModifiers: ['egg, noodles'] }],
//   },
// };

export const { addRequiredMod, addOptionalMod } = modifierSlice.actions;

export default modifierSlice.reducer;
