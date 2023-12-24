"use client";
import React from 'react'

import { close } from "../../redux/features/hamburgerMenuSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { X, Info as InfoIcon, Calendar as CalendarIcon, Code as BriefcaseIcon ,BookOpen as MenuOrderingIcon, Bookmark as EventsIcon, Inbox as RewardsIcon, Briefcase } from "react-feather";
import { parseCookies } from 'nookies';
import Link from 'next/link';
import deleteUserCookies from '../../../libs/actions/cookie/deleteUserCookies';
// Component imports 
import MenuLogo from './components/MenuLogo';

interface SlidingHamburgerMenuInterface {
  token: any;
}

const SlidingHamburgerMenu: React.FC<SlidingHamburgerMenuInterface> = ({ token }) => {
  const dispatch = useAppDispatch();
  const menuState = useAppSelector((state) => state.hamburgerMenuReducer.opened);
  const slideLinkStyles = "flex items-center justify-start gap-4 w-full py-2 px-2 bg-white rounded-md";

  const closeHamburger = () => {
    dispatch(close())
  }
  const logOut = async() => {
    await deleteUserCookies()
    window.location.reload();
  }

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
            <Link href="about" className={`${slideLinkStyles}`} onClick={closeHamburger}>
              <InfoIcon 
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className=" text-sm text-neutral-600">About</p>
            </Link>
                        <Link href="/menu" className={`${slideLinkStyles}`} onClick={closeHamburger}>
              <MenuOrderingIcon
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className="text-neutral-600 text-sm">Menu</p>
            </Link>
            <Link href="/events" className={`${slideLinkStyles}`} onClick={closeHamburger}>
              <EventsIcon
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className="text-sm text-neutral-600">Events</p>
            </Link>
            <Link href="/reservations" className={`${slideLinkStyles}`} onClick={closeHamburger}>
              <CalendarIcon
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className="text-neutral-600 text-sm">Reservations</p>
            </Link>

            <div className="w-full h-[1px] bg-neutral-300 my-5"/>
            <Link href="/teaminfo" className={`${slideLinkStyles}`} onClick={closeHamburger}>
              <BriefcaseIcon
              color='rgb(82, 82, 82)'
              size={20}
              />
              <p className="text-neutral-600 text-sm">Team Info</p>
            </Link>

            <Link href="/#contact" className={`${slideLinkStyles}`} onClick={closeHamburger}>
              <RewardsIcon
              color='rgb(82, 82, 82)'
                size={20}
              />
              <p className="text-neutral-600 text-sm">Contact</p>
            </Link>

            <div className="w-full h-[1px] bg-neutral-200 mt-5"/>
            { token == undefined 
            ?
            <Link href="signup" className="flex items-center justify-center gap-4 hover:bg-neutral-100 w-full py-3 px-5 bg-neutral-200 rounded-md mt-7" onClick={closeHamburger}>
              <p className="text-neutral-600 text-sm font-semibold">Sign Up</p>
            </Link>
            :
            <button className="flex items-center justify-center gap-4 hover:bg-neutral-100 w-full py-3 px-5 bg-neutral-200 rounded-md mt-7" onClick={logOut}>
              <p className="text-neutral-600 text-sm font-semibold">Log Out</p>
            </button>
            }
            
            <Link href="menu" className="flex items-center justify-center gap-4 hover:bg-red-700 w-full py-3 px-5 bg-primary-red rounded-md " onClick={closeHamburger}>
              <p className="text-white font-semibold text-sm">Order Now</p>
            </Link>
          </section>
        </nav>
      </section>
    </>
  )
}

export default SlidingHamburgerMenu
