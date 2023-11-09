import React from 'react'
import Image from 'next/image';
import { MenuItemInterface } from './MenuResults';

interface MenuItemComponentInterface {
  itemData: MenuItemInterface;
}

const MenuItem: React.FC<MenuItemComponentInterface> = ({ itemData }) => {
  return (
  <>
    <div className="flex test flex-col items-center gap-5 relative w-full">
        <div className="w-full h-[150px] relative">
          <Image 
          src={itemData.imageUrl}
          alt={itemData.itemName}
          fill
          className='rounded-lg menuitemimage object-cover hover:!blur-[0.5px] hover:!scale-[0.995] hover:!opacity-90 transition-all duration-100 cursor-pointer'
          />
        </div>
        <h1 className="text-2xl text-center font-bold text-neutral-700 whitespace-nowrap">{ itemData.itemName }</h1>
        <p className="text-sm text-center trackng-tight text-neutral-500 mt-[-5px]">{ itemData.itemDescription }</p>
        <button className="w-full px-4 py-2 bg-primary-red hover:bg-red-700 text-white text-sm tracking-tight rounded-full">Add to Bag - ${ itemData.itemPrice }</button>
    </div>
  </>
  )
}

export default MenuItem;
