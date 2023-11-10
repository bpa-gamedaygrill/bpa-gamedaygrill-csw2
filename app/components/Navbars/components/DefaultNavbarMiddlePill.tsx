import Link from 'next/link'
import React from 'react'

export interface DefaultNavbarMiddlePillInterface {
  customStyles ?: string;
}

const DefaultNavbarMiddlePill: React.FC<DefaultNavbarMiddlePillInterface> = ({ customStyles }) => {
  return (
    <>
                <div className={`group w-fit px-3 transition-all duration-200 ease-in-out py-2 min-h-[50px] bg-white border-2 flex items-center justify-between gap-5 border-[#EDEDED] rounded-full ${customStyles}`}>

            <Link 
            href="/about"
            className="bg-white hover:bg-neutral-100 px-4 py-2 rounded-full transition-all duration-150 ease-in-out"
            >
              <p className="text-sm font-medium text-[#636363]">About</p>
            </Link>

            <Link 
            href="/menu"
            className="bg-white hover:bg-neutral-100 px-4 py-2 rounded-full transition-all duration-150 ease-in-out"
            >
              <p className="text-sm font-medium text-[#636363]">Menu</p>
            </Link>

            <Link 
            href="/events"
            className="bg-white hover:bg-neutral-100 px-4 py-2 rounded-full transition-all duration-150 ease-in-out"
            >
              <p className="text-sm font-medium text-[#636363]">Events</p>
            </Link>

            <Link 
            href="/rewards"
            className="bg-white hover:bg-neutral-100 px-4 py-2 rounded-full transition-all duration-150 ease-in-out"
            >
              <p className="text-sm font-medium text-[#636363]">Rewards</p>
            </Link>

            <Link 
            href="/reservation"
            className="bg-primary-red px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-150 ease-in-out"
            >
              <p className="text-[0.75rem] font-medium text-white">Reserve</p>
            </Link>
          </div>

    </>
  )
}

export default DefaultNavbarMiddlePill
