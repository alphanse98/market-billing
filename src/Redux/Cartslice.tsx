import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  item: any[];
}

const initialState: CartState = {
  item: [],
};

const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<number>) => {
      state.item.push(action.payload);
    },
    deleteCart: (state, action: PayloadAction<number>) => {
      state.item = state.item.filter((item, index) =>
        index !== action.payload ? item : '',
      );
    },
  },
});

export const { addTocart, deleteCart } = CartSlice.actions;

export default CartSlice.reducer;
