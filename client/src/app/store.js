import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer, { coffeeSlice } from '../features/coffee/coffeeSlice';

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
});
