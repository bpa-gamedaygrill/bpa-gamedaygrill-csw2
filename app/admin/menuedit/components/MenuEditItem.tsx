import React from 'react'

import Image from "next/image";
import MenuEditInteractionDiv from './MenuEditInteractionDiv';

interface MenuEditItemInterface {
  imageUrl: string;
  itemName: string;
  itemDesc: string;
  itemPrice: string;
  itemId: string;
}

const MenuEditItem: React.FC<MenuEditItemInterface> = async({ imageUrl, itemName, itemDesc, itemPrice, itemId }) => {
  return (
  <>
      <div className="w-full py-5 px-7 flex-col bg-white group rounded-lg border-[1px] gap-7 border-neutral-300 flex items-start justify-between">
        <MenuEditInteractionDiv itemId={itemId} />
        <div className="w-full flex-col lg:flex-row bg-white group rounded-lg  gap-7 flex items-center justify-between">
          <div className="relative w-full h-full min-h-[125px] lg:max-w-[175px] max-h-[125px]">
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
      </div>
  </>
  )
}

export default MenuEditItem;
