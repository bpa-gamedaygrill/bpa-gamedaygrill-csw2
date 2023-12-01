"use client";

import Image from 'next/image';
import React from 'react'
import { ShoppingBag } from 'react-feather';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { close, open } from "../../redux/features/cartModalSlice";

// Dexie utilities
import { useLiveQuery } from 'dexie-react-hooks';
import dexie from '../../../libs/dexie';

export interface HamburgerMenuButtonInterface {
  buttonDimensions: number;
  customStyles ?: string;
}

const ShoppingCartButton: React.FC<HamburgerMenuButtonInterface> = ({ customStyles, buttonDimensions }) => {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.hamburgerMenuReducer.opened);

  const cartItems = useLiveQuery(
    () => dexie.cartItems.toArray()
  );
  return (
    <>
      <button style={{ width: `${buttonDimensions}px`, height: `${buttonDimensions}px` }} className={`w-[${buttonDimensions}px] h-[${buttonDimensions}px] min-w-[40px] min-h-[40px] bg-white border-2 border-[#EDEDED] rounded-full hover:bg-neutral-50 flex items-center justify-center transition-all relative duration-150 ease-in-out ${customStyles}`} onClick={() => dispatch(open())}>
        <ShoppingBag
        color='#B5B5B5'
        size={(buttonDimensions==50) ? buttonDimensions-30 : buttonDimensions - 23}
        />
      <div className={`transition-all duration-200 ${ (cartItems?.length==0) ? "opacity-0" : "cart-btn-animate" } absolute top-[30%] translate-y-[-50%] right-[6px] w-[10px] h-[10px] bg-primary-red rounded-full`} />
      </button>
    </>
  )
}

export default ShoppingCartButton; 
