"use client";
import React from 'react'

import { reset, close } from "../../redux/features/hamburgerMenuSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { X, Info as InfoIcon, Calendar as CalendarIcon, Briefcase as BriefcaseIcon ,BookOpen as MenuOrderingIcon, Bookmark as EventsIcon, Gift as RewardsIcon, Briefcase } from "react-feather";
import Link from 'next/link';

// Component imports 
import MenuLogo from './components/MenuLogo';

const SlidingHamburgerMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.hamburgerMenuReducer.opened);

  const slideLinkStyles: string = "flex items-center justify-start gap-4 w-full py-2 px-2 bg-white rounded-md";

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

          <section className="w-full py-5 mt-7 flex flex-col items-start gap-2">
            <Link href="about" className={`${slideLinkStyles}`}>
              <InfoIcon 
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className=" text-sm text-neutral-600">About</p>
            </Link>
                        <Link href="menu" className={`${slideLinkStyles}`}>
              <MenuOrderingIcon
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className="text-neutral-600 text-sm">Menu</p>
            </Link>
            <Link href="events" className={`${slideLinkStyles}`}>
              <EventsIcon
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className="text-sm text-neutral-600">Events</p>
            </Link>
            <Link href="reservations" className={`${slideLinkStyles}`}>
              <CalendarIcon
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className="text-neutral-600 text-sm">Reservations</p>
            </Link>

            <div className="w-full h-[1px] bg-neutral-300 my-5"/>
            <Link href="careers" className={`${slideLinkStyles}`}>
              <BriefcaseIcon
              color='rgb(82, 82, 82)'
              size={20}
              />
              <p className="text-neutral-600 text-sm">Careers</p>
            </Link>

            <Link href="rewards" className={`${slideLinkStyles}`}>
              <RewardsIcon
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className="text-neutral-600 text-sm">Rewards</p>
            </Link>

            <div className="w-full h-[1px] bg-neutral-200 mt-5"/>

            <Link href="signup" className="flex items-center justify-center gap-4 hover:bg-neutral-100 w-full py-3 px-5 bg-neutral-200 rounded-md mt-7">
              <p className="text-neutral-600 text-sm font-semibold">Sign Up</p>
            </Link>

            <Link href="menu" className="flex items-center justify-center gap-4 hover:bg-red-700 w-full py-3 px-5 bg-primary-red rounded-md ">
              <p className="text-white font-semibold text-sm">Order Now</p>
            </Link>
          </section>
        </nav>
      </section>
    </>
  )
}

export default SlidingHamburgerMenu
