import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    newQuote: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { newQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
