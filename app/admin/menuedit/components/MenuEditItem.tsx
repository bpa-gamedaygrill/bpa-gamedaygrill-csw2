import React from 'react'

import Image from "next/image";

interface MenuEditItemInterface {
  imageUrl: string;
  itemName: string;
  itemDesc: string;
  itemPrice: string;
}

const MenuEditItem: React.FC<MenuEditItemInterface> = async({ imageUrl, itemName, itemDesc, itemPrice }) => {
  return (
  <>
      <div className="w-full py-5 px-7 bg-white group rounded-lg border-[1px] gap-7 border-neutral-300 flex items-center justify-between">
        <div className="relative w-full h-full min-h-[125px] max-w-[175px] max-h-[125px]">
          <Image 
          src={imageUrl}
          alt="Invalid Image URl"
          layout="fill"
          className="rounded-md object-cover"
          /> 
        </div>
        <div className="w-full h-full gap-3 flex flex-col items-start justify-between">
          <h1 className="text-xl opacity-70 group-hover:opacity-90 transition-all duration-300 font-semibold tracking-tight">{itemName}</h1>
          <p className="text-sm font-medium opacity-60 tracking-tight">{itemDesc}</p>
          <p className="text-md font-medium text-primary-red">${itemPrice}</p>
        </div>
      </div>
  </>
  )
}

export default MenuEditItem;
