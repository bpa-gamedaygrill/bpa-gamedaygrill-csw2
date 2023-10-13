import Link from 'next/link';
import React from 'react';

const MediumHero = () => {
  return (
    <>
      <div className="hidden md:flex w-full px-8 h-full gap-10 items-center justify-start flex-col lg:hidden">
        <h1 className="text-4xl font-bold text-center">Fueling Your Culinary Cravings and Game Day Spirit.</h1>
        <p className="text-md opacity-70 text-center max-w-[80%] mr-auto ml-auto">Indulge in the ultimate culinary adventure where savory flavors meet adrenaline-pumping sports excitement. At Game Day Grill, each bite is a winning touchdown.</p>
        <div className="flex w-full items-center justify-center gap-2 h-full">
          <Link 
          href="order"
          className="bg-primary-red px-6 py-0 flex items-center justify-center min-h-[40px] rounded-full hover:bg-red-700 transition-all duration-150 ease-in-out"
          >
            <p className="text-[0.9rem] font-medium text-white">Order Now</p>
          </Link>
          <Link 
          href="reservations"
          className="bg-white px-6 py-0 flex items-center justify-center min-h-[40px] rounded-full hover:bg-neutral-100 transition-all duration-150 ease-in-out"
          >
            <p className="text-[0.9rem] font-medium text-neutral-400">Make a Reservation</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MediumHero;
