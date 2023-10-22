"use client";
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export type MenuCategoryFilterType = 'appetizer' | 'entree' | 'dessert' | 'beverage' | null;

interface MenuCategoryFilterSliceInterface {
  filter: MenuCategoryFilterType;
}


const initialState = { filter: null } as MenuCategoryFilterSliceInterface;

const menuCategoryFilterSlice = createSlice({
  name: 'cartModal',
  initialState,
  reducers: {
    reset(state) {
      state.filter = null;
    },
    setCategoryFilter(state, action: PayloadAction<MenuCategoryFilterType>) {
      state.filter = action.payload;
    }
  },
})

export const { reset, setCategoryFilter } = menuCategoryFilterSlice.actions;
export default menuCategoryFilterSlice.reducer;
