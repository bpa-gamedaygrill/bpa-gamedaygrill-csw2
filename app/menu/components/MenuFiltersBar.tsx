"use client";
import React, { useState } from 'react'
import SelectDropdown from '../../components/Select/SelectDropdown';

const MenuFiltersBar = () => {
  const [typeOfMeal, setTypeOfMeal] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  
  const updateTypeOfMeal = ( value: string ) => {
    setTypeOfMeal(() => value);
  }

  const updatePriceRange = ( value: string ) => {
    setPriceRange(() => value);
  }

  const updateSearch = (e: any) => {
    setSearch(e.target.value);
  }


  return (
    <>
      <div className="w-full py-3 mt-6 flex flex-wrap md:flex-row flex-col relative items-center justify-start gap-5 md:gap-2.5 lg:gap-4">

      <SelectDropdown 
        selectPrompt='Select a category'
        includesResetButton
        valueUpdateFunction={updateTypeOfMeal}
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
      <SelectDropdown 
        selectPrompt='Select a price'
        includesResetButton
        valueUpdateFunction={updatePriceRange}
        customParentStyles='z-10 md:w-fit w-full'
        options={
            [
              {
                name: 'Low to High',
                value: 'lowtohigh'
              },
              {
                name: 'High to Low',
                value: 'hightolow'
              },
            ]
          }
      />
      <input type='text' onChange={updateSearch} value={search} placeholder='Search...' className="px-4 py-2 bg-white border-[1px] border-neutral-200 rounded-md focus:outline-none focus:border-neutral-300 w-full md:w-fit text-neutral-700 font-medium" />

        <button className="w-full md:w-fit px-4 py-2.5 bg-primary-red text-white text-sm rounded-md hover:bg-red-700">Search</button>
      </div>
    </>
  )
}

export default MenuFiltersBar;
