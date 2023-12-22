import Image from "next/image";
import React, { use } from 'react'
import Link from "next/link";
import { useRouter } from "next13-progressbar";

const MenuLogo = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/")} className="flex items-center justify-center gap-4 cursor-pointer">
        <div className="w-[45px] h-[45px] relative">
          <Image 
            src="/images/logo-big.svg"
            alt="logo"
            layout="fill"
          />
        </div>
      </button>
    </>
  )
}

export default MenuLogo;
