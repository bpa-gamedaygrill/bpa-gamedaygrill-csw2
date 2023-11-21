"use client";
import React from 'react'
import Image from 'next/image';
import { MenuItemInterface } from './MenuResults';

// Dexie utilities
import dexie from '../../../libs/dexie';
import { useLiveQuery } from 'dexie-react-hooks';

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggle } from 'app/redux/features/cartModalSlice';

interface MenuItemComponentInterface {
  itemData: MenuItemInterface;
  usedForPreview?: boolean;
}

const MenuItem: React.FC<MenuItemComponentInterface> = ({ itemData, usedForPreview }) => {
  const dispatch = useAppDispatch();
  const cartItems = useLiveQuery(
    () => dexie.cartItems.toArray()
  )
  const isItemAdded = cartItems?.some((cartItem) => cartItem.itemId === itemData.id);
  async function addToCart() {
    try {
      const menuItems = await dexie.cartItems.add({
        itemId: itemData.id,
        itemName: itemData.itemName,
        itemDesc: itemData.itemDescription,
        itemPrice: itemData.itemPrice,
        imageUrl: itemData.imageUrl
      })
      console.log("Successfully added item to cart")
    } catch(error) {
      console.log(`An error occured. ${error}`)
      alert("Could not add item to cart :(")
    }
    dispatch(toggle())

  }
  return (
  <>
    <div className="flex test flex-col items-center gap-5 relative w-full h-full justify-between">
        <div className="w-full h-[150px] relative">
          <Image 
          src={itemData.imageUrl}
          alt={usedForPreview ? "Invalid Image URL" : itemData.itemName}
          fill
          className='rounded-lg menuitemimage object-cover hover:!blur-[0.5px] hover:!scale-[0.995] hover:!opacity-90 transition-all duration-100 cursor-pointer'
          />
        </div>
        <h1 className="text-2xl text-center font-bold text-neutral-700">{ itemData.itemName }</h1>
        <p className="text-sm text-center trackng-tight text-neutral-500 mt-[-5px]">{ itemData.itemDescription }</p>
        { isItemAdded && <button disabled className="w-full px-4 py-2 bg-red-700 opacity-90 hover:bg-red-700 text-white text-sm tracking-tight rounded-full">Already Added</button>
 }
        { !isItemAdded &&  <button onClick={addToCart}  className="w-full px-4 py-2 bg-primary-red hover:bg-red-700 text-white text-sm tracking-tight rounded-full">Add to Bag - ${ itemData.itemPrice }</button>
}  
        </div>
  </>
  )
}

export default MenuItem;
