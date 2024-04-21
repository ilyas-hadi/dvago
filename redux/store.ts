// store.ts

import { configureStore, createSlice } from '@reduxjs/toolkit';
interface initialState {
  cartItem: Product[]
}
export interface Product {
  ID: string;
  name: string;
  Price: string;
  Title: string;
  ProductImage: string;
  Brand: string;
  ProductID:string;
  count: number; // Optional count property
}

const initialState: initialState = {
  cartItem: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItem.find(item => item.ID === action.payload.ID)
      if (item?.ID) {
        if(item) item.count && item.count++
      } else {
        state.cartItem.push({ ...action.payload, count: 1 });
        console.log('existingProduct not exist => ', item)
      }

    },
    remove: (state, action) => {
     state.cartItem.filter((item) => item.ID !== action.payload);
    },
  },
});

export const { addToCart, remove } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
