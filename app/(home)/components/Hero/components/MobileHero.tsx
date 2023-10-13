import Link from 'next/link';
import React from 'react'

const MobileHero = () => {
  return (
    <>
      <div className="md:hidden w-full flex flex-col gap-3 items-center">
        <h1 className="text-center font-bold text-[1.55rem]">Fueling Your Culinary Cravings and Game Day Spirit.</h1>
        <p className="text-sm text-center mt-8 opacity-70">Indulge in the ultimate culinary adventure where savory flavors meet adrenaline-pumping sports excitement. At Game Day Grill, each bite is a winning touchdown.</p>
        <div className="w-full flex flex-col items-center gap-3">
            <Link href="reservations" className="flex items-center justify-center gap-4 hover:bg-neutral-100 w-full py-3 px-5 bg-neutral-200 rounded-md mt-8">
              <p className="text-neutral-600 text-sm font-semibold">Make a Reservation</p>
            </Link>

            <Link href="order" className="flex items-center justify-center gap-4 hover:bg-red-700 w-full py-3 px-5 bg-primary-red rounded-md ">
              <p className="text-white font-semibold text-sm">Order Now</p>
            </Link>
        </div>
      </div>
    </>
  )
}

export default MobileHero;
