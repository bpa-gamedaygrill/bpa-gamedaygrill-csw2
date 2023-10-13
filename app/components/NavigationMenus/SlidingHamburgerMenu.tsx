"use client";
import React from 'react'

import { reset, close } from "../../redux/features/hamburgerMenuSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { X, Info as InfoIcon, BookOpen as MenuOrderingIcon, Bookmark as EventsIcon, Gift as RewardsIcon } from "react-feather";
import Link from 'next/link';

// Component imports 
import MenuLogo from './components/MenuLogo';

const SlidingHamburgerMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.hamburgerMenuReducer.opened);

  return (
    <>
      <section className={`lg:hidden top-0 left-0 fixed w-full h-full bg-black/40 backdrop-blur-[2px] z-[100] ${ menuState===false && "pointer-events-none opacity-0 delay-300 transition-all duration-100 ease-in-out" }`}>
        <nav className={`h-full flex flex-col items-start w-full bg-white max-w-[330px] px-5 py-6 ${menuState===false ? "left-[-100%]" : "left-[0%]"} absolute top-0 transition-all duration-300 ease-in-out overflow-y-auto`}>
          <div className={`flex w-full items-center justify-between`}>
            <MenuLogo />
            <button className="w-[45px] h-[45px] bg-white border-2 border-light-gray hover:bg-neutral-100 flex items-center justify-center rounded-full p-1" onClick={() => dispatch(close())}>
              <X 
              color="gray"
              size={25}
              />
            </button>
          </div>

          <section className="w-full py-5 mt-16 flex flex-col items-start gap-2">
            <Link href="about" className="flex items-center justify-start gap-4 hover:bg-neutral-100 w-full py-4 px-5 bg-white rounded-md">
              <InfoIcon 
              color='rgb(82, 82, 82)'
              />
              <p className="text-neutral-600">About</p>
            </Link>
                        <Link href="menu" className="flex items-center justify-start gap-4 hover:bg-neutral-100 w-full py-4 px-5 bg-white rounded-md">
              <MenuOrderingIcon
              color='rgb(82, 82, 82)'
              />
              <p className="text-neutral-600">Menu</p>
            </Link>
            <Link href="events" className="flex items-center justify-start gap-4 hover:bg-neutral-100 w-full py-4 px-5 bg-white rounded-md">
              <EventsIcon
              color='rgb(82, 82, 82)'
              />
              <p className="text-neutral-600">Events</p>
            </Link>
            <Link href="rewards" className="flex items-center justify-start gap-4 hover:bg-neutral-100 w-full py-4 px-5 bg-white rounded-md">
              <RewardsIcon
              color='rgb(82, 82, 82)'
              />
              <p className="text-neutral-600">Rewards</p>
            </Link>

            <Link href="signup" className="flex items-center justify-center gap-4 hover:bg-neutral-200 w-full py-3 px-5 bg-neutral-100 rounded-md mt-7">
              <p className="text-neutral-600 text-sm font-semibold">Sign Up</p>
            </Link>

            <Link href="order" className="flex items-center justify-center gap-4 hover:bg-red-700 w-full py-3 px-5 bg-primary-red rounded-md ">
              <p className="text-white font-semibold text-sm">Order Now</p>
            </Link>
          </section>
        </nav>
      </section>
    </>
  )
}

export default SlidingHamburgerMenu
