import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './auth/login-slice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});
