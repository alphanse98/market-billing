import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './Cartslice';

const store = configureStore({
  reducer: {
    item: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
