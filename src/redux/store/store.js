import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from '../slice/slice';

const store = configureStore({
  reducer: {
    quotes: quoteReducer,
  },
});

export default store;
