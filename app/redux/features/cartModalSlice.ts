"use client";
import { createSlice } from '@reduxjs/toolkit';

interface CartModalState {
  isActive: boolean;
}

const initialState = { isActive : false } as CartModalState;

const cartModalSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    reset: () => initialState,
    toggle(state) {
      state.isActive = !state.isActive;
    },
    open(state) {
      state.isActive = true;
    },
    close(state) {
      state.isActive = false;
    }
  },
})

export const { toggle, open, close } = cartModalSlice.actions;
export default cartModalSlice.reducer;
