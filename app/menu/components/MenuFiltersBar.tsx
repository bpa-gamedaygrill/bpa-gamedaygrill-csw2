"use client";
import React, { useState } from 'react'
import SelectDropdown from '../../components/Select/SelectDropdown';

const MenuFiltersBar = () => {
  const [typeOfMeal, setTypeOfMeal] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  
  const updateTypeOfMeal = ( value: string ) => {
    setTypeOfMeal(() => value);
  }

  const updatePriceRange = ( value: string ) => {
    setPriceRange(() => value);
  }


  return (
    <>
      <div className="w-full py-3 mt-6 flex flex-wrap xsm:bg-red-500 items-center justify-start gap-5">

      <SelectDropdown 
        selectPrompt='Select a category'
        includesResetButton
        valueUpdateFunction={updateTypeOfMeal}
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
      </div>
    </>
  )
}

export default MenuFiltersBar;
