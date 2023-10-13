import Image from "next/image";
import React from 'react'

const MenuLogo = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 cursor-pointer">
        <div className="w-[45px] h-[45px] relative">
          <Image 
            src="images/logo-big.svg"
            alt="logo"
            layout="fill"
          />
        </div>
      </div>
    </>
  )
}

export default MenuLogo;
