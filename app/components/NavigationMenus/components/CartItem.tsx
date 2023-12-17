"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import { DexieCartInterface } from '../../../../libs/dexie';

interface CartItemInterface {
  item: DexieCartInterface;
}

import { Minus, Plus, Trash2 } from "react-feather";

// Dexie utilities
import { useLiveQuery } from 'dexie-react-hooks';
import dexie from '../../../../libs/dexie';


const CartItem: React.FC<CartItemInterface> = ({ item }) => {
  const [itemQuantityInputValue, setItemQuantityInputValue] = useState<number>(item.itemQuantity)
  async function updateItemQuantity() {
    try {
      await dexie.cartItems.update(item.id as number, { itemQuantity: itemQuantityInputValue, itemPrice: (parseFloat(item.originalItemPrice)*itemQuantityInputValue).toFixed(2) })
    } catch(error) {
      console.log(`Error updating item quanitity: ${error}`)
    }
  }
  async function deleteMenuItem() {
    try {
      await dexie.cartItems.delete(item.id as number)
    } catch(error) {
      console.log(`Error deleting item: ${error}`)
    }
  }
  const handlePlusClick = async() => {
    if (itemQuantityInputValue < 99) {
      setItemQuantityInputValue(prev => prev+1) 
    }
  }
  const handleMinusClick = async() => {
    if (itemQuantityInputValue > 1) {
      setItemQuantityInputValue(prev => prev-1) 
    }
  }
  useEffect(() => {
    updateItemQuantity();
  }, [itemQuantityInputValue])
  return (
  <>
    <div className="w-full">
      <div className="relative w-full h-[100px] mb-5 max-h-[100px]">
        <Image
        src={item.imageUrl}
        alt={item.itemName}
        layout="fill"
        className="object-cover rounded-md z-10"
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

      </div>
      <h1 className="font-bold opacity-90 text-xl">{item.itemName}</h1>
      <p className="font-medium opacity-50 text-sm mt-1">{item.itemDesc}</p>
      <div className="flex mt-3 gap-0 w-full items-center justify-start relative h-[30px]">
        <Plus className="cursor-pointer bg-white border-[1px] border-neutral-200 w-fit px-3 py-1 hover:bg-neutral-50 h-full" style={{ borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px" }} size={20} opacity={0.6} onClick={handlePlusClick} />
        <input type='number' value={itemQuantityInputValue} disabled className="max-w-[55px] h-full flex items-center justify-center bg-white border-[1px] border-neutral-200 px-2 py-1 text-neutral-500/60" max={99} min={1} />
        <Minus className="cursor-pointer bg-white border-[1px] border-neutral-200 w-fit px-3 py-1 hover:bg-neutral-50 h-full" style={{ borderTopRightRadius: "50px", borderBottomRightRadius: "50px" }} size={20} opacity={0.6} onClick={handleMinusClick} />
          <button onClick={deleteMenuItem} className="p-2.5 cursor-pointer hover:bg-red-700 ml-5 bg-primary-red rounded-full">
            <Trash2
            size={17}
            color="white"
            />
          </button>
      </div>
      <p className="text-sm font-semibold text-primary-red mt-4">${parseFloat(item.itemPrice).toFixed(2)}</p>
    </div>
  </>
  )
}

export default CartItem
