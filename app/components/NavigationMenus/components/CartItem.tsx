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
        className="object-cover rounded-md"
        />
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
