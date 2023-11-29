"use client";
import React from 'react'

import Link from "next/link";
import Image from 'next/image';

// Dexie utilities
import { useLiveQuery } from 'dexie-react-hooks';
import dexie from '../../../../libs/dexie';

import CartItem from './CartItem';

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
  console.log(cartItems)
  return (
  <>
      <div className="w-full flex flex-col gap-9 max-h-[400px] overflow-y-auto minimal-scrollbar">
        { !cartItems || cartItems.length==0 && <p className="opacity-60">You have no items in your cart.</p> }
        { (cartItems?.length ?? 0) > 0 && <p className="text-lg font-semibold tracking-tight mb-[-10px] opacity-60">{cartItems?.length} items added to cart</p> }
        {cartItems?.map(item => 
          <CartItem 
          item={item}
          key={item.id}
          />
        )}
      </div>
      <div className="w-full h-[1px] bg-neutral-200 mt-5"/>

      <p className="my-3 text-center text-sm font-medium opacity-60 w-full">Subtotal: ${cartItems?.reduce((total, item) => total + parseFloat(item.itemPrice), 0)}</p>
      <button onClick={deleteAllItems} className="flex items-center justify-center gap-4 hover:bg-neutral-100 w-full py-3 px-5 bg-neutral-200 rounded-md">
        <p className="text-neutral-600 text-sm font-semibold">Clear Cart</p>
      </button>

      <Link href="checkout" className="flex items-center justify-center gap-4 hover:bg-red-700 w-full py-3 px-5 bg-primary-red rounded-md ">
        <p className="text-white font-semibold text-sm">Checkout</p>
      </Link>
  </>
  )
}

export default CartContent;
