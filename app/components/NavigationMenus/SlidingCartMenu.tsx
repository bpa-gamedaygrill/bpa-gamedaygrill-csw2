"use client";
import React from 'react'

import { close } from "../../redux/features/cartModalSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { X, Info as InfoIcon, Calendar as CalendarIcon, Briefcase as BriefcaseIcon ,BookOpen as MenuOrderingIcon, Bookmark as EventsIcon, Gift as RewardsIcon, Briefcase } from "react-feather";
import Link from 'next/link';

// Component imports 
import MenuLogo from './components/MenuLogo';
import CartContent from './components/CartContent';

const SlidingCartMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartState = useAppSelector((state) => state.cartModalReducer.isActive);

  const slideLinkStyles = "flex items-center justify-start gap-4 w-full py-2 px-2 bg-white rounded-md";

  return (
    <>
      <section className={`block md:block top-0 left-0 minimal-scrollbar fixed w-full h-full bg-black/40 backdrop-blur-[2px] z-[150] ${ cartState===false && "pointer-events-none opacity-0 delay-300 transition-all duration-100 ease-in-out" }`}>
        <nav className={`h-full flex flex-col items-start w-full bg-white max-w-[350px] px-5 py-6 ${cartState===false ? "right-[-100%]" : "right-[0%]"} absolute top-0 transition-all duration-300 ease-in-out overflow-y-auto`}>
          <div className={`flex w-full flex-row-reverse items-center justify-between`}>
            <MenuLogo />
            <button className="w-[45px] h-[45px] bg-white border-2 border-light-gray hover:bg-neutral-100 flex items-center justify-center rounded-full p-1" onClick={() => dispatch(close())}>
              <X 
              color="gray"
              size={25}
              />
            </button>
          </div>

          <section className="w-full h-full relative py-5 mt-7 flex flex-col minimal-scrollbar items-start gap-2">
            <CartContent/>
          </section>
        </nav>
      </section>
    </>
  )
}

export default SlidingCartMenu
