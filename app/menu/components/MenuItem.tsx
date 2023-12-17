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
        originalItemPrice: itemData.itemPrice,
        imageUrl: itemData.imageUrl,
        itemQuantity: 1,
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
          loading="lazy"
          fill
          quality={55}
          className='rounded-lg menuitemimage object-cover z-10 hover:!blur-[0.5px] hover:!scale-[0.995] hover:!opacity-90 transition-all duration-100'
          />

          <div className="rounded-lg menuitemimage object-cover hover:!blur-[0.5px] hover:!scale-[0.995] hover:!opacity-90 transition-all duration-100 h-full flex items-center justify-center bg-neutral-50 flex-col gap-3">
            
          <div role="status">
              <svg aria-hidden="true" className="w-6 h-6 text-neutral-200 animate-spin  fill-primary-red" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>

          </div>
          { (itemData.isVegetarian && itemData.isVegetarian==true) && <h1 className="absolute rounded-md z-10 top-2 left-2.5 px-2 py-1.5 bg-red-500 text-white text-sm opacity-70 pointer-events-none">Vegetarian</h1>
 }
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
