import { createSlice } from '@reduxjs/toolkit';
import {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from '../../utils/change-localStorage';

// This const imports necessary functions for check auth from local storage
const logged = getFromLocalStorage('logged') || false;

// This file defines a Redux slice for managing user login state.
const initialState = { logged };
console.log(initialState);

const loginSlice = createSlice({
  initialState,
  name: 'login',
  reducers: {
    // This reducer sets the logged state to true when the user logs in
    login: (state) => {
      state.logged = true;
      addToLocalStorage('logged', true);
    },
    // This reducer sets the logged state to false when the user logs out
    logout: (state) => {
      state.logged = false;
      removeFromLocalStorage('logged');
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
