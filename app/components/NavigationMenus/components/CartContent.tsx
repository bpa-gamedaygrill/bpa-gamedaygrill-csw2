"use client";
import React from 'react'

import Link from "next/link";
import Image from 'next/image';

// Dexie utilities
import { useLiveQuery } from 'dexie-react-hooks';
import dexie from '../../../../libs/dexie';

const CartContent = () => {
  const cartItems = useLiveQuery(
    () => dexie.cartItems.toArray()
  );
  async function deleteAllItems() {
    try {
      await dexie.cartItems.clear();
    } catch(error) {
      console.log(`Error clearing dexie table. Info: ${error}`)
    }
  }
  return (
  <>
      <div className="w-full flex flex-col gap-9 max-h-[80%] overflow-y-auto minimal-scrollbar">
        { !cartItems || cartItems.length==0 && <p className="opacity-60">You have no items in your cart.</p> }
        { (cartItems?.length ?? 0) > 0 && <p className="text-lg font-semibold tracking-tight mb-[-10px] opacity-60">{cartItems?.length} items added to cart</p> }
        {cartItems?.map(item => 
          <div key={item.id} className="w-full">
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
            <p className="text-sm font-semibold text-primary-red mt-1">${item.itemPrice}</p>
          </div>
        )}
      </div>
      <div className="w-full h-[1px] bg-neutral-200 mt-5"/>

      <button onClick={deleteAllItems} className="flex items-center justify-center gap-4 hover:bg-neutral-100 w-full py-3 px-5 bg-neutral-200 rounded-md mt-7">
        <p className="text-neutral-600 text-sm font-semibold">Clear Cart</p>
      </button>

      <Link href="checkout" className="flex items-center justify-center gap-4 hover:bg-red-700 w-full py-3 px-5 bg-primary-red rounded-md ">
        <p className="text-white font-semibold text-sm">Checkout</p>
      </Link>
  </>
  )
}

export default CartContent;
