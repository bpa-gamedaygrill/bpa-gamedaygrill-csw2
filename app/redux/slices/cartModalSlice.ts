import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  isActive: boolean;
}

const initialState = { isActive : false } as CounterState;

const cartModalSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
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
