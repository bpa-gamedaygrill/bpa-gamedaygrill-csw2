import Image from 'next/image';
import React from 'react'
import { ShoppingBag } from 'react-feather';

export interface ShoppingCartButtonInterface {
  buttonDimensions: number;
}

const ShoppingCartButton: React.FC<ShoppingCartButtonInterface> = ({ buttonDimensions }) => {
  return (
    <>
      <button className={`w-[${buttonDimensions}px] h-[${buttonDimensions}px] bg-white border-2 border-[#EDEDED] rounded-full hover:bg-neutral-50 flex items-center justify-center transition-all relative duration-150 ease-in-out`}>
        <ShoppingBag 
        color='#B5B5B5'
        size={buttonDimensions - 25}
        />
      </button>
    </>
  )
}

export default ShoppingCartButton
