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
import ProfileDropdown from "./components/ProfileDropdown";

import { User, ChevronDown, Layout, LogOut } from "react-feather";

interface DefaultNavbarInterface {
  hideMiddlePill?: boolean;
  bottomBorder?: boolean;
  customStyles?: string;
}

const DefaultNavbar: React.FC<DefaultNavbarInterface> = ({ hideMiddlePill, bottomBorder, customStyles }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  const name = cookieStore.get('__obj1')
  return (
    <>
      <SlidingHamburgerMenu token={token} />
      <SlidingCartMenu />
      <nav className={`${bottomBorder && "border-b-[1px] border-neutral-black"} flex justify-center items-center z-[99] fixed w-full top-0 left-0 px-7 bg-white backdrop-blur-[3px] py-6 min-h-[105px] ${customStyles}`}>
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
              <ProfileDropdown name={name?.value as string} />
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
