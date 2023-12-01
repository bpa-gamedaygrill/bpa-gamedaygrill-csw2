import Image from "next/image";
import Link from 'next/link';
import { cookies } from 'next/headers'
import React from 'react'

// Component Imports 
import DefaultNavbarMiddlePill from './components/DefaultNavbarMiddlePill';
import ShoppingCartButton from '../Buttons/ShoppingCartButton';
import HamburgerMenuButton from "../Buttons/HamburgerMenuButton";
import SlidingHamburgerMenu from "../NavigationMenus/SlidingHamburgerMenu";
import SlidingCartMenu from "../NavigationMenus/SlidingCartMenu";

import { User, ChevronDown, Layout, LogOut } from "react-feather";

interface DefaultNavbarInterface {
  hideMiddlePill?: boolean;
  bottomBorder?: boolean;
}

const DefaultNavbar: React.FC<DefaultNavbarInterface> = ({ hideMiddlePill, bottomBorder }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const name = cookieStore.get('__obj1')
  // console.log("hi")
  return (
    <>
      <SlidingHamburgerMenu />
      <SlidingCartMenu />
      <nav className={`${bottomBorder && "border-b-[1px] border-neutral-black"} flex justify-center items-center z-[99] fixed w-full top-0 left-0 px-7 bg-white backdrop-blur-[3px] py-6 min-h-[105px]`}>
        <section className="w-full ml-auto mr-auto h-full max-w-[1200px]  flex justify-between items-center">
                    <HamburgerMenuButton 
            buttonDimensions={50}
            customStyles="hidden md:flex lg:hidden"
          />

          <Link href="/" className="flex items-center justify-center gap-4 cursor-pointer">
            <div className="w-[40px] h-[40px] relative">
              <Image 
              src="/images/logo-big.svg"
                alt="logo"
              layout="fill"
              />
            </div>
            <h1 className="text-2xl hidden sm:block tracking-tight font-bold ">Game Day <span className="text-primary-red">Grill</span></h1> 
          </Link>

          { hideMiddlePill ? "" : 
          <DefaultNavbarMiddlePill 
          customStyles="hidden lg:flex"
          /> }

          <div className="w-fit h-[20px] hidden md:flex items-center justify-center gap-7">
            
            <ShoppingCartButton 
            buttonDimensions={40}
            />

            { token ? <>
            <div  className="flex items-center justify-center gap-2 hover:bg-neutral-100 rounded-full px-4 py-2 min-h-[40px] cursor-pointer group relative">
                <User 
                size={19}
                opacity={0.5}
                />
                <p className="opacity-50 font-medium text-sm custom-truncate">{name?.value}</p>
                <ChevronDown
                size={19}
                opacity={0.5}
                className="group-hover:rotate-[-180deg] transition-all duration-150"
                />
                <div className="w-full absolute top-[110%] group-hover:top-[100%] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto flex flex-col transition-all duration-150">
                  <Link href="/dashboard" className="mt-1.5 text-center !w-full py-2 relative flex items-center justify-center gap-1 rounded-full px-1 transition-all duration-100 hover:bg-neutral-200">
                    <p className="text-sm font-medium text-black/50">Dashboard</p>
                  </Link>
                  <button className="text-center !w-full py-2 mt-0.5 relative flex items-center justify-center gap-2 rounded-full text-sm font-medium text-black/50 px-1 bg-neutral-100 hover:bg-primary-red/90 hover:text-white transition-all duration-100">
                    Log out
                  </button>
                </div>
            </div>
            </> : <>
            <Link 
            href="/signup"
            className="bg-primary-red px-6 py-2 flex items-center justify-center min-h-[40px] rounded-full hover:bg-red-700 transition-all duration-150 ease-in-out"
            >
              <p className="text-[0.9rem] font-medium text-white">Sign Up</p>
            </Link>
              </> }

          </div>
            
          <div className="flex md:hidden items-center justify-center gap-3">
            <ShoppingCartButton 
            buttonDimensions={50}
            />

            <HamburgerMenuButton 
              buttonDimensions={50}
              customStyles="md:hidden"
            />
          </div>

        </section>
      </nav>
    </>
  )
}

export default DefaultNavbar;

//             <Link 
            // href="/dashboard"
            // className="bg-primary-red px-6 py-2 flex items-center justify-center min-h-[40px] rounded-full hover:bg-red-700 transition-all duration-150 ease-in-out"
            // >
            //   <p className="text-[0.9rem] font-medium text-white">Dashboard</p>
            // </Link>
            //
