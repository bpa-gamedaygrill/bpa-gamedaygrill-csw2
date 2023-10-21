"use client";
import MenuSkeleton from '../../components/Skeleton/MenuSkeleton';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MenuItem from './MenuItem';

export interface MenuItemInterface {
  id: string;
  imageUrl: string;
  itemDescription: string;
  itemName: string;
  itemPrice: string;
}

const MenuResults = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [menuItems, setMenuItems] = useState<MenuItemInterface[] | null>(null);

  const fetchMenuItems = () => {
    setIsLoading(() => true);
    axios.post('/api/menu/getallitems')
    .then(response => {
      console.log(response);
      setMenuItems(() => response.data.data)
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(() => false);
    })
  }

  useEffect(() => {
    fetchMenuItems();
  }, [])

return (
    <>
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 mb-28 justify-center items-center">
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
      </section>
    </>
  );
}

export default MenuResults;
