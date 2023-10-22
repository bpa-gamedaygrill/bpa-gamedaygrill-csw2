"use client";
import React, { useState } from 'react'
import SelectDropdown from '../../components/Select/SelectDropdown';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MenuCategoryFilterType } from '../../redux/features/menuCategoryFilterSlice';
import { reset, setCategoryFilter } from '../../redux/features/menuCategoryFilterSlice';
import { reset as resetMenuItemName, setNameFilter } from '../../redux/features/menuItemNameSlice';

import { useSearchParams } from 'next/navigation'

const MenuFiltersBar = () => {
  const searchParams = useSearchParams()
  const defaultCategory = searchParams.get('category') as MenuCategoryFilterType;
  const dispatch = useAppDispatch();
  const menuCategoryFilter = useAppSelector((state) => state.menuCategoryFilterReducer.filter);

  let initialTOM: MenuCategoryFilterType = null;
  if (defaultCategory == 'entree') {
    initialTOM = 'entree'
  }
  if (defaultCategory == 'beverage') {
    initialTOM = 'beverage'
  }
  if (defaultCategory == 'dessert') {
    initialTOM = 'dessert'
  }
  if (defaultCategory == 'appetizer') {
    initialTOM = 'appetizer'
  }

  const [typeOfMeal, setTypeOfMeal] = useState<MenuCategoryFilterType>(initialTOM);
  const [search, setSearch] = useState<string>("");
  
  const updateTypeOfMeal = ( value: MenuCategoryFilterType ) => {
    dispatch(setCategoryFilter(value as MenuCategoryFilterType));
    setTypeOfMeal(() => value as MenuCategoryFilterType);
  }


  const updateSearch = (e: any) => {
    dispatch(setNameFilter(e.target.value as string | null))
    setSearch(e.target.value);
  }


  return (
    <>
      <div className="w-full py-3 mt-6 flex flex-wrap md:flex-row flex-col relative items-center justify-start gap-5 md:gap-2.5 lg:gap-4">

      <SelectDropdown 
        selectPrompt='Select a category'
        includesResetButton
        valueUpdateFunction={updateTypeOfMeal}
        valueState={typeOfMeal}
        customParentStyles='z-20 md:w-fit w-full'
        options={
            [
              {
                name: 'Appetizers',
                value: 'appetizer'
              },
              {
                name: 'Entrees',
                value: 'entree'
              },
              {
                name: 'Desserts',
                value: 'dessert'
              },
              {
                name: 'Beverages',
                value: 'beverage'
              },
            ]
          }
      />
      <input type='text' onChange={updateSearch} value={search} placeholder='Search...' className="px-4 py-2 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full md:w-fit text-neutral-700 font-medium" />

      </div>
    </>
  )
}

export default MenuFiltersBar;
