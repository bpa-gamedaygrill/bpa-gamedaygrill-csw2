import Image from 'next/image';
import React from 'react'
import { ShoppingBag, Menu } from 'react-feather';

export interface HamburgerMenuButtonInterface {
  buttonDimensions: number;
  customStyles ?: string;
}

const HamburgerMenuButton: React.FC<HamburgerMenuButtonInterface> = ({ customStyles, buttonDimensions }) => {
  return (
    <>
      <button className={`w-[${buttonDimensions}px] h-[${buttonDimensions}px] min-w-[40px] min-h-[40px] bg-white border-2 border-[#EDEDED] rounded-full hover:bg-neutral-50 flex items-center justify-center transition-all relative duration-150 ease-in-out ${customStyles}`}>
        <Menu 
        color='#B5B5B5'
        size={buttonDimensions - 30}
        />
      </button>
    </>
  )
}

export default HamburgerMenuButton; 
