"use client";
import React, { useEffect, useState } from 'react'
import MenuTopBar from './MenuTopBar'
import MenuFiltersBar from './MenuFiltersBar'
import MenuResults from './MenuResults'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { reset, setCategoryFilter, MenuCategoryFilterType } from '../../redux/features/menuCategoryFilterSlice';

import { useSearchParams } from 'next/navigation'

const MenuContent = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams()
  const defaultCategory = searchParams.get('category') as MenuCategoryFilterType;
  const [isFinished, setIsFinished] = useState<boolean>(true);

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

  
  useEffect(() => {
    dispatch(setCategoryFilter(initialTOM));
    console.log("TOP LEVEL USE EFFECT");
    setIsFinished(() => false);
  }, [])

  return (
    <>
      <main className="mt-36 lg:mt-40 px-7 relative">
        <div className="w-full mr-auto ml-auto h-full max-w-[1200px]">
          <MenuTopBar />
          <MenuFiltersBar />
          <MenuResults isFinished={isFinished} />
        </div>
      </main>
    </>
  )
}

export default MenuContent
