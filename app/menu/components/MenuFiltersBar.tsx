"use client";
import React, { useState, useEffect } from 'react'
import SelectDropdown from '../../components/Select/SelectDropdown';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MenuCategoryFilterType } from '../../redux/features/menuCategoryFilterSlice';
import { reset, setCategoryFilter } from '../../redux/features/menuCategoryFilterSlice';
import { reset as resetMenuItemName, setNameFilter } from '../../redux/features/menuItemNameSlice';

import { useSearchParams } from 'next/navigation'

const MenuFiltersBar = () => {
  const dispatch = useAppDispatch();
  const menuCategoryFilter = useAppSelector((state) => state.menuCategoryFilterReducer.filter);

  const searchParams = useSearchParams()
 
  const categoryParam = searchParams.get('category') as MenuCategoryFilterType;

  const [typeOfMeal, setTypeOfMeal] = useState<MenuCategoryFilterType>(null);
  const [search, setSearch] = useState<string>("");
  
  const updateTypeOfMeal = ( value: MenuCategoryFilterType ) => {
    dispatch(setCategoryFilter(value as MenuCategoryFilterType));
    setTypeOfMeal(() => value as MenuCategoryFilterType);
  }


  const updateSearch = (e: any) => {
    dispatch(setNameFilter(e.target.value as string | null))
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (categoryParam==="beverage") {
      dispatch(setCategoryFilter("beverage"));
    } else if (categoryParam==="entree") {
      dispatch(setCategoryFilter("entree"));
    } else if (categoryParam==="dessert") {
      dispatch(setCategoryFilter("dessert"));
    } else if (categoryParam==="appetizer") {
      dispatch(setCategoryFilter("appetizer"));
    } else {
      dispatch(setCategoryFilter(null));
    }
  }, [])


  return (
    <>
      <div className="w-full py-3 mt-6 flex flex-wrap md:flex-row flex-col relative items-center justify-start gap-5 md:gap-2.5 lg:gap-4">

      <SelectDropdown 
        selectPrompt='Select a category'
        includesResetButton
        valueUpdateFunction={updateTypeOfMeal}
        customParentStyles='z-20 md:w-fit w-full'
        customReduxSlice={menuCategoryFilter}
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

        <button className="w-full md:w-fit px-4 py-2.5 bg-primary-red text-white text-sm rounded-md hover:bg-red-700" onClick={() => {
          setSearch(() => "");
          dispatch(setNameFilter(null))
          setTypeOfMeal(() => null)
          dispatch(setCategoryFilter(null));
        }}>Clear</button>

      </div>
    </>
  )
}

export default MenuFiltersBar;
