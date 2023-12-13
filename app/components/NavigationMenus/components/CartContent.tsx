"use client";
import React, { use, useEffect } from 'react'

import Link from "next/link";
import Image from 'next/image';

// Dexie utilities
import { useLiveQuery } from 'dexie-react-hooks';
import dexie from '../../../../libs/dexie';

import CartItem from './CartItem';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface CartContentInterface {
  usedInCheckout?: boolean;
}

const CartContent: React.FC<CartContentInterface> = ({ usedInCheckout }) => {
  const cartItems = useLiveQuery(
    () => dexie.cartItems.toArray()
  );
  const router = useRouter();
  useEffect(() => {
    if (cartItems?.length === 0) {
      if (usedInCheckout) {
        console.log("invalid.");
        router.push("/menu");
      }
    }
 }, [cartItems])
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
      <div className={`w-full flex flex-col gap-9 ${!usedInCheckout && "max-h-[400px]"} overflow-y-auto minimal-scrollbar`}>
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

      <p className="my-3 text-center text-sm font-medium opacity-60 w-full">Subtotal: ${(cartItems?.reduce((total, item) => total + parseFloat(item.itemPrice), 0))?.toFixed(2)}</p>
      <button onClick={deleteAllItems} className="flex items-center justify-center gap-4 hover:bg-neutral-100 w-full py-3 px-5 bg-neutral-200 rounded-md">
        <p className="text-neutral-600 text-sm font-semibold">Clear Cart</p>
      </button>

      {usedInCheckout ? (
        <Link href="menu" className="flex items-center justify-center gap-4 hover:bg-red-700 w-full py-3 px-5 bg-primary-red rounded-md ">
          <p className="text-white font-semibold text-sm">Back to Menu</p>
        </Link>
      ) : (
        cartItems && cartItems.length > 0 ? (
          <Link href="checkout" className="flex items-center justify-center gap-4 hover:bg-red-700 w-full py-3 px-5 bg-primary-red rounded-md ">
            <p className="text-white font-semibold text-sm">Checkout</p>
          </Link>
        ) : (
          <button disabled className="flex items-center justify-center gap-4 opacity-50 cursor-auto w-full py-3 px-5 bg-primary-red rounded-md ">
            <p className="text-white font-semibold text-sm">Checkout</p>
          </button>
        )
      )} 
    </>
  )
}

export default CartContent;
