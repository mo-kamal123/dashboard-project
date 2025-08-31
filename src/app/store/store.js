import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../../features/profile/store/user-slice';
import productsSlice from '../../features/tables/store/products-slice';
import loginSlice from '../../features/auth/store/login-slice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    user: userSlice,
    products: productsSlice,
  },
});
