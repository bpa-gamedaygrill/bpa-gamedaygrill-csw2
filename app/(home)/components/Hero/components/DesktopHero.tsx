import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const DesktopHero = () => {
  return (
    <>
      <div className="hidden lg:flex justify-between items-center gap-3 relative">
        {/* Left Side of the Hero Section */}
        <section className="flex flex-col items-start justify-start gap-10 max-w-[50%]">
          <h1 className="font-bold text-4xl">Fueling Your Culinary Cravings and Game Day Spirit.</h1>
          <p className="text-md opacity-70">Indulge in the ultimate culinary adventure where savory flavors meet adrenaline-pumping sports excitement. At Game Day Grill, each bite is a winning touchdown.</p>
          <div className="flex w-full items-center justify-start gap-2 h-full">
            <Link 
            href="menu"
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
        </section>

        {/* Right Side of the Hero Section (Where the IMG will go) */}
        <section className="w-full flex items-center justify-end h-full max-w-[50%] relative">
          <Image 
          src="/images/hero_img_2.png"
          alt="Hero Image"
          width={500}
          height={500}
          />
        </section>

      </div>
    </>
  )
}

export default DesktopHero;
