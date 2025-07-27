import { createSlice } from '@reduxjs/toolkit';

// This file defines a Redux slice for managing user login state.
const initialState = { logged: false };
console.log(initialState);

const loginSlice = createSlice({
  initialState,
  name: 'login',
  reducers: {
    // This reducer sets the logged state to true when the user logs in
    login: (state) => {
      state.logged = true;
    },
    // This reducer sets the logged state to false when the user logs out
    logout: (state) => {
      state.logged = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
