"use client";
import MenuSkeleton from '../../components/Skeleton/MenuSkeleton';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MenuItem from './MenuItem';

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { reset, setCategoryFilter } from '../../redux/features/menuCategoryFilterSlice';

export interface MenuItemInterface {
  id: string;
  imageUrl: string;
  itemDescription: string;
  itemName: string;
  itemPrice: string;
}

const MenuResults = () => {
  
  const dispatch = useAppDispatch();
  const menuCategoryFilter = useAppSelector((state) => state.menuCategoryFilterReducer.filter);
  const menuNameFilter = useAppSelector((state) => state.menuItemNameReducer.itemName)


  const [isLoading, setIsLoading] = useState<boolean>(true);
  // After filtering
  const [menuItems, setMenuItems] = useState<MenuItemInterface[] | null>(null);
  // Total set: no filtering
  const [baseMenuItems, setBaseMenuItems] = useState<MenuItemInterface[] | null>(null);

  
  useEffect(() => {
    fetchMenuItems();
  }, [])


  useEffect(() => {
    filterData();
  }, [menuCategoryFilter, menuNameFilter])

  useEffect(() => {
    filterData();
  }, [baseMenuItems])


  const filterData = () => {
    // Uses baseMenuItems as a reference
    let menuItemData = baseMenuItems;
    if (!menuItemData) {
      return
    }
    if (menuCategoryFilter) {
      menuItemData = menuItemData.filter((item: any) => item.type === menuCategoryFilter);
    } 

    if (menuNameFilter) {
      if(menuNameFilter.trim() != "") {
        menuItemData = menuItemData.filter((item: any) => item.itemName.toLowerCase().includes(menuNameFilter.trim().toLowerCase()));
      }
    }

    setMenuItems(menuItemData);
  }


  const fetchMenuItems = () => {
      axios.post('/api/menu/getallitems')
      .then(response => {
          let menuItemData = response.data.data;
          setBaseMenuItems(menuItemData);
          setMenuItems(menuItemData);
        })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(() => false);
      })

  }

return (
    <>
      <section className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 mb-7 justify-center items-center">
        {isLoading ? (
          <>
            <MenuSkeleton />
            <MenuSkeleton />
            <MenuSkeleton />
            <MenuSkeleton />
            <MenuSkeleton customStyles='hidden md:flex' />
            <MenuSkeleton customStyles='hidden md:flex' />
          </>
        ) : (
          menuItems && menuItems.map((item) => (
          <>
            <MenuItem key={item.id} itemData={item} />
          </>
          ))
        )}
        { !isLoading && menuItems?.length===0 && <p className="text-neutral-600 font-medium text-lg">No items match your search.</p> }
      </section>
    </>
  );
}

export default MenuResults;
