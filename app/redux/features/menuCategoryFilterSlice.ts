"use client";
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { useSearchParams } from 'next/navigation'

export type MenuCategoryFilterType = 'appetizer' | 'entree' | 'dessert' | 'beverage' | null;

interface MenuCategoryFilterSliceInterface {
  filter: MenuCategoryFilterType;
}

const getSearchParams = () => {
  // if (typeof window !== "undefined") {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const defaultCategory = urlParams.get('category');
  //   console.log("FROM REDUX:", defaultCategory)
  //
  //   if (defaultCategory=='beverage' || defaultCategory=='appetizer' || defaultCategory=='entree' || defaultCategory=='dessert' || defaultCategory==null) {
  //     return defaultCategory as MenuCategoryFilterType;
  //   } else {
  //     return null;
  //   }
  //
  // }
  return null;
}

getSearchParams();


const initialState = { filter: getSearchParams() } as MenuCategoryFilterSliceInterface;

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
