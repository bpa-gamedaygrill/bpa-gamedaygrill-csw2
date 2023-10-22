"use client";
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface MenuItemNameSliceInterface {
  itemName: string | null;
}

const initialState = { itemName: null } as MenuItemNameSliceInterface;

const menuItemNameSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    reset(state) {
      state.itemName = null;
    },
    setNameFilter(state, action: PayloadAction<string | null>) {
      state.itemName = action.payload;
    }
  },
})

export const { reset, setNameFilter } = menuItemNameSlice.actions;
export default menuItemNameSlice.reducer;
