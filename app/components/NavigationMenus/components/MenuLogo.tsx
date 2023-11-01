import Image from "next/image";
import React from 'react'
import { useRouter } from "next/navigation";

const MenuLogo = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-center gap-4 cursor-pointer" onClick={() => router.push('/')}>
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
