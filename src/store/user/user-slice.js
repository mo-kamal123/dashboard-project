import { createSlice } from '@reduxjs/toolkit';

// initialState defines the initial state of the user slice.
const initialState = {
  user: {
    name: 'momo',
    email: 'moo@example.com',
    role: 'Owner',
    phone: '+20 123 456 789',
    location: 'Cairo, Egypt',
    joined: 'March 2025',
    avatar:
      'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=756&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Placeholder Avatar
  },
};

// This file defines a Redux slice for managing user data in the application.
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // This reducer sets the user data in the state
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // This reducer clears the user data in the state
    clearUser: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
