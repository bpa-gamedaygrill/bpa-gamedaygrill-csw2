import { createSlice } from "@reduxjs/toolkit";

interface HamburgerMenuState {
  opened: boolean | 'right' | 'left'; 
}

const initialState = { opened: false } as HamburgerMenuState;


const hamburgerMenuSlice = createSlice({
  name: 'hamburgerMenu',
  initialState,
  reducers: {
    reset: () => initialState,
    close(state) {
      state.opened = false; 
    },
    openToRight(state) {
      state.opened = 'right';
    },
    openToLeft(state) {
      state.opened = 'left';
    }
  }
})

export const { close, openToRight, openToLeft, reset } = hamburgerMenuSlice.actions;
export default hamburgerMenuSlice.reducer; 
