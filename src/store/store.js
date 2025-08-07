import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './auth/login-slice';
import userSlice from './user/user-slice';
import productsSlice from './products/products-slice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    user: userSlice,
    products: productsSlice,
  },
});
